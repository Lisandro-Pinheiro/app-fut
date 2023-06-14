import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamTable from './src/components/team-table';
import { Image } from 'expo-image';


interface Team {
  id: number;
  position: number;
  team_shield_url: string;
  team_name: string;
  team_points: number;
  team_goals_for: number;
  team_goals_against: number;
  team_goal_difference: number;
}

interface Props { }

interface State {
  teams: Team[];
}

const Stack = createStackNavigator();

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer test_6d5fc2c478e24996bad8a5d9e08ac9');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    let teamsPosition: Team[] = [];

    fetch('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((dataJson) => {
        dataJson.map((team: any) => {
          const dataTeam: Team = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos'],
            team_goals_for: team['gols_pro'],
            team_goals_against: team['gols_contra'],
            team_goal_difference: team['saldo_gols'],
          };

          teamsPosition.push(dataTeam);
        });

        this.setState({ teams: teamsPosition });
      });
  }

  render() {
    const { teams } = this.state;

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} teams={teams} />}
          </Stack.Screen>
          <Stack.Screen name="TeamDetail" component={TeamDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

interface HomeScreenProps {
  navigation: any;
  teams: Team[];
}

class HomeScreen extends Component<HomeScreenProps> {
  handleTeamPress = (team: Team) => {
    this.props.navigation.navigate('TeamDetail', { team });
  };

  render() {
    const { teams } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tabela Brasileirão Série A</Text>
        <TeamTable teams={teams} onTeamPress={this.handleTeamPress} />
      </View>
    );
  }
}

interface TeamDetailScreenProps {
  route: any;
}

class TeamDetailScreen extends Component<TeamDetailScreenProps> {
  render() {
    const { team } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{team.team_name}</Text>
        <Image style={styles.team_shield} source={team.team_shield_url} />
          <Text style={styles.details}>Posição: {team.position}</Text>
          <Text style={styles.details}>Pontos: {team.team_points}</Text>
          <Text style={styles.details}>Gols a favor: {team.team_goals_for}</Text>
          <Text style={styles.details}>Gols sofridos: {team.team_goals_against}</Text>
          <Text style={styles.details}>Saldo de gols: {team.team_goal_difference}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 30,
  },
  team_shield: {
    width: 200,
    height: 200,
    marginBottom: 30,
    marginTop: 30,
  },
  details: {
    fontSize: 15,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    marginVertical: 10,
  },
});
