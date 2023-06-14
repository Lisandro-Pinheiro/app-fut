import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const TeamDetail = ({ route }) => {
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.team_shield} source={team.team_shield_url} />
      <Text style={styles.team_name}>{team.team_name}</Text>
      <Text style={styles.team_position}>Posição: {team.position}</Text>
      <Text style={styles.team_points}>Pontos: {team.team_points}</Text>
      {/* Mostrar os demais detalhes do time */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  team_shield: {
    width: 100,
    height: 100
  },
  team_name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16
  },
  team_position: {
    fontSize: 16,
    marginTop: 8
  },
  team_points: {
    fontSize: 16,
    marginTop: 8
  }
});

export default TeamDetail;
