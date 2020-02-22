import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import UserCenter from './components/user-center';
import Category from './components/category';
import Other from './components/other';

class CustomDrawerContent extends Component {
  render() {
    return (
      <SafeAreaView style={style.container}>
        <UserCenter />
        <Category />
        <Other />
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default function(props) {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerContent />
    </DrawerContentScrollView>
  );
}
