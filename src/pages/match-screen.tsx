import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MatchScreen = ({ route, Navigation }) => {
  const { partida_id, placar } = route.params;
  console.log(route.params);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados das Partidas</Text>
        <View>
          <Text style={styles.matchText}>{partida_id}</Text>
          <Text style={styles.matchText}>{placar}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5b5b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  matchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  matchText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MatchScreen;
