import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomePage from "./src/pages/home-page"
import DetailPage from "./src/pages/detail-page"
import MatchScreen from "./src/pages/match-screen"

const Stack = createNativeStackNavigator ()

export default function App(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage}/>
                <Stack.Screen name="detail" component={DetailPage}/>
                <Stack.Screen name="Match" component={MatchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}