import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

interface Props {
  team: any;
  onPress: () => void;
}

export default class TeamItem extends Component<Props> {
  render() {
    const { team, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
          <Image style={styles.team_shield} source={{ uri: team.shieldUrl }} />
          <Text style={styles.team_position}>{team.position}</Text>
          <Text style={styles.team_name}>{team.name}</Text>
          <Text style={styles.team_position}>{team.points}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
    height: 50,
  },
  team_shield: {
    width: 30,
    height: 30,
  },
  team_name: {
    fontSize: 20,
    width: 150,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  team_position: {
    width: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
