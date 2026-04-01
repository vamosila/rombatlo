/*
* File: App.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './RouteStack';

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
};
