import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import AddNewUser from './components/AddNewUser'
//import Main from './components/Main';
import AjouterPret from './pages/AjouterPret';
import ListePret from './pages/ListePret';
import ModifierPret from './pages/ModifierPret';

const Stack = createStackNavigator()

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListePret">
        <Stack.Screen
         name="ListePret" 
         component={ListePret} 
         options={{
            title: 'Prêt bancaire',
            headerStyle: {
              backgroundColor:'black'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',},}}
        />
        
        <Stack.Screen
          name="AjouterPret"
          component={AjouterPret}
          options={{
            title: 'Enregistrement',
            headerStyle: {
              backgroundColor:'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="ModifierPret"
          component={ModifierPret}
          options={{
            title: 'Modification',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
  /*return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name="Main" component={Main} options={{
                    title: 'Liste', //Set Header Title
                    headerStyle: {
                      backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                      fontWeight: 'bold', //Set Header text style
                    },
                  }}/>

                <Stack.Screen name="AddNewUser" component={AddNewUser}/>

            </Stack.Navigator>

            <StatusBar style="auto" />

        </NavigationContainer>

  );*/
}


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
