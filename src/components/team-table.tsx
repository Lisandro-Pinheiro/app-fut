import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TeamItem from './team-item';

interface Props {
  teams: any[];
  onTeamPress: (team: any) => void;
}

export default class TeamTable extends Component<Props> {
  render() {
    const { teams, onTeamPress } = this.props;

    return (
      <View style={styles.table}>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TeamItem team={item} onPress={() => onTeamPress(item)} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    width: '100%',
  },
});
