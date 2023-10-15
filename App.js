import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splass from './src/screen/splass/Splass'
import Login from './src/screen/login/Login'
import Signup from './src/screen/signup/Signup'
import Forgot from './src/screen/forgot/Forgot'
import Home from './src/screen/Home/Home'
import CodeVarifiction from './src/screen/varificaton/CodeVarifiction'


const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen name='Splass' component={Splass} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='Forgot' component={Forgot} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='CodeVarifiction' component={CodeVarifiction} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
