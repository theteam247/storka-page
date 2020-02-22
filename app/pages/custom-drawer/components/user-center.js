import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
/**
 * drawer user center item
 */
class UserItem extends Component {
  state = {
    user: {
      name: 'LIANG HUANG',
    },
    items: [
      {
        title: 'Profile',
      },
      {
        title: 'Orders',
      },
      {
        title: 'Billing',
      },
    ],
  };
  render() {
    const {user, items} = this.state;
    return (
      <View style={style.container}>
        <View>
          <Text style={style.userName}>{user.name}</Text>
          <View style={style.block} />
        </View>
        <View>
          {items.map(item => {
            return (
              <TouchableOpacity
                onPress={() => console.debug('click' + item.title)}>
                <Text style={style.itemText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    paddingLeft: 20,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  infoBox: {
    height: 48 - 18 * 0.83,
    marginBottom: 18 * 0.83,
  },
  userName: {
    fontSize: 18,
    lineHeight: 24,
    color: '#000',
    fontWeight: '700',
  },
  block: {
    width: 30,
    height: 4,
    backgroundColor: '#4e4e4e',
  },
  itemText: {
    fontSize: 16,
    lineHeight: 36,
    color: '#C42663',
  },
});

export default UserItem;
