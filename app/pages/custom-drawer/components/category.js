import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RightIcon from '../../../assets/icons/right.png';

class Category extends Component {
  state = {
    items: [
      {
        title: 'WINE',
      },
      {
        title: 'LIQUOR',
      },
      {
        title: 'BEER',
      },
    ],
  };
  render() {
    const {items} = this.state;
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>ENTER ADDRESS</Text>
        </TouchableOpacity>
        <View>
          {items.map(item => {
            return (
              <TouchableOpacity>
                <View style={style.item}>
                  <Text style={style.itemText}>{item.title}</Text>
                  <Image style={style.rightIcon} source={RightIcon} />
                </View>
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
  button: {
    marginTop: 24,
    marginBottom: 4,
    backgroundColor: '#4e4e4e',
    paddingLeft: 16,
    paddingRight: 16,
    width: 140,
    height: 40,
    borderRadius: 3,
  },
  buttonText: {
    lineHeight: 40,
    color: '#fff',
    fontSize: 12,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
  },
  rightIcon: {
    width: 18,
    height: 18,
    marginRight: 28,
  },
  itemText: {
    fontSize: 15,
    color: '#202020',
  },
});
export default Category;
