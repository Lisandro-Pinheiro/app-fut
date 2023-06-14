import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Image } from 'expo-image';



interface TeamDetailScreenProps {
  route: {
    params: {
      team: {
        team_name: string;
        position: number;
        team_points: number;
        team_goals_for: number;
        team_goals_against: number;
        team_goal_difference: number;
        team_shield_url: string;
      };
    };
  };
}

const TeamDetailScreen: React.FC<TeamDetailScreenProps> = ({ route }) => {
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{team.team_name}</Text>
      <Text>Posição: {team.position}</Text>
      <Text>Pontos: {team.team_points}</Text>
      <Text>Gols a favor: {team.team_goals_for}</Text>
      <Text>Gols sofridos: {team.team_goals_against}</Text>
      <Text>Saldo de gols: {team.team_goal_difference}</Text>
      <Image style={styles.teamShield} source={{ uri: team.team_shield_url }} />
    </View>
  );
};

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
    marginTop: 30,
  },
  teamShield: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});

export default TeamDetailScreen;
