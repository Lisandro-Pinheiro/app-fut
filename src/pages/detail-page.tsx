import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image';

export default function DetailPage({ route, Navigation }) {
    const { name, points, position, shieldUrl} = route.params;
    console.log(route.params);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image style={styles.teamShield} source={{ uri: shieldUrl }} />
            <Text style={styles.title2}>Posição: {position}</Text>
            <Text style={styles.title2}>Pontos: {points}</Text>
            
        </View>

    )
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
        marginTop: 30,
      },
      teamShield: {
        width: 200,
        height: 200,
        marginVertical: 10,
      },
      title2: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 16,
        marginTop: 30,
      },
});