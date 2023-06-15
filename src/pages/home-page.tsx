import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import TeamEntity from '../components/entities/team-entity';

const mockData: TeamEntity[] = []


export default function App({ navigation }) {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    //Acessar a api
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_6d5fc2c478e24996bad8a5d9e08ac9");
    myHeaders.append("Cookie", "PHPSESSID=0719g0tmuceo5e1gaunt8onhev");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then(result => result.json())
      .then(result => {

        let teamsList: TeamEntity[] = [];

        console.log(result);

        result.map((team) => {
          teamsList.push({
            id: team.time.time_id,
            name: team.time.nome_popular,
            points: team.pontos,
            position: team.posicao,
            shieldUrl: team.time.escudo,
          });
        });

        console.log(teamsList);

        setTeams(teamsList);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>Brasileirão 2023</Text>
      <StatusBar style='auto' />
      <FlatList style={{ width: '100%', paddingHorizontal: 16, marginTop: 32 }}
        data={teams}
        renderItem={(team) =>
          <TouchableOpacity onPress={() => {
            navigation.navigate('detail', team.item);
          }} >
            <View style={styles.team_item}>
              <Image source={team.item.shieldUrl} style={styles.shield} />
              <Text style={styles.team_name}>{team.item.name}</Text>
              <Text style={styles.number}>{team.item.points}</Text>
            </View>
          </TouchableOpacity>
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5b5b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    fontSize: 50,
    fontWeight: '700',
    marginTop: 50,
    color: '#000',
    textAlign: 'left',
    marginLeft: 32,
    borderRadius: 17
  },
  shield: {
    width: 40,
    height: 50,
    flex: 2,
    marginRight: 16
  },
  team_name: {
    fontWeight: '500',
    flex: 12,
    textAlign: 'left',
    fontSize: 30
  },
  team_item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  number: {
    flex: 2,
    fontSize: 26,
    color: '#000',
    fontWeight: '700',
  }
});