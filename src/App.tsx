// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './config/routes/AuthStack.routes';
import BottomTab from './config/routes/BottomTab.routes';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <NavigationContainer>
      {!isLogged ? <AuthStack /> : <BottomTab />}
    </NavigationContainer>
  );
}

export default App;
