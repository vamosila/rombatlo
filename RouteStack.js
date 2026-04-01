/*
* File: RouteStack.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RhombusScreen from './screens/RhombusScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

const RouteStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: "Főoldal" }}  />
        <Stack.Screen name="Rhombus" component={RhombusScreen} options={{ headerTitle: "Rombusz" }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerTitle: "Névjegy" }} />
    </Stack.Navigator>
  );
};

export default RouteStack;
