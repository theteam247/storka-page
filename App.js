import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import CustomDrawerContent from './app/pages/custom-drawer/index';
import ProductListScreen from './app/pages/product/index';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        drawerType="slide"
        initialRouteName="ProductList">
        <Drawer.Screen name="ProductList" component={ProductListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
