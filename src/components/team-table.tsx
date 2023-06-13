import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TeamItem from './team-item';

interface Props {
  teams: any;
}
export default class TeamTable extends Component  <Props>{

  render() {
    const { teams } = this.props;

    return (
      <View style={styles.table}>
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TeamItem team={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    width: '100%'
  },
});


