 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNav from "./navigation/DrawerNav";
import StackNav from "./navigation/stackNav";


const App = () => {
  return (
      <NavigationContainer>
          <StackNav/>
      </NavigationContainer>
  )
}

export default App;
