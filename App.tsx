import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TeamTable from './src/components/team-table';

interface Props{

}

interface State {
  teams: any[];
}
export default class App extends Component <Props,State> {

  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_6d5fc2c478e24996bad8a5d9e08ac9");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    let teamsPosition = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((team) => {
          const dataTeam = {
            id: team['time']['time_id'],
            position: team['posicao'],
            team_shield_url: team['time']['escudo'],
            team_name: team['time']['nome_popular'],
            team_points: team['pontos']
          };

          teamsPosition.push(dataTeam);
        });

        this.setState({ teams: teamsPosition });
      })
  }

  render() {
    const { teams } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tabela Brasileirão Série A</Text>
        <TeamTable teams={teams} />
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
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 30
  },
});


