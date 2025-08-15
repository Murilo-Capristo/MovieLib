import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import MainTabs from './src/components/MainTabs';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import MovieFormScreen from './src/screens/MovieFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
    theme={{
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: '#fff',
        primary: '#EB4435',
        
      },
    }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MovieDetailsScreen"
          component={MovieDetailsScreen}
          options={({ navigation }) => ({
              headerBackButtonDisplayMode: "minimal",
              headerRight: () => (
                <Button 
                title='Editar'
                onPress={() => navigation.navigate('MovieFormScreen')}></Button>
              )
          })  }
        />
        <Stack.Screen
          name="MovieFormScreen"
          component={MovieFormScreen}
          options={({ navigation }) => ({
              headerBackButtonDisplayMode: "minimal",
              headerRight: () => (
                <Button 
                title='Voltar ao Início'
                onPress={() => navigation.popToTop()}></Button>
              )
          })  }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
