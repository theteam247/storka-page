import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RightIcon from '../../../assets/icons/right.png';

class Other extends Component {
  render() {
    return (
      <View style={style.container}>
        <View>
          <TouchableOpacity>
            <View style={style.item}>
              <Text style={style.itemText}>HELP & SUPPORT</Text>
              <Image style={style.rightIcon} source={RightIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.item}>
              <Text style={style.itemText}>LOG OUT</Text>
              <Image style={style.rightIcon} source={RightIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  rightIcon: {
    width: 18,
    height: 18,
    marginLeft: 18,
  },
  itemText: {
    fontSize: 15,
    color: '#202020',
  },
});
export default Other;
