import React, {Component} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import RightIcon from '../../../assets/icons/right.png';
class TopButton extends Component {
  render() {
    return (
      <View style={topStyle.container}>
        <View style={topStyle.box}>
          <TouchableOpacity>
            <View style={topStyle.button}>
              <Text style={topStyle.buttonText}>Enter address</Text>
            </View>
          </TouchableOpacity>
          <Text style={topStyle.text}> to unlock pricing.</Text>
        </View>
      </View>
    );
  }
}
const topStyle = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: 49,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    paddingLeft: 60,
    paddingRight: 60,
    flex: 1,
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 136,
    height: 30,
    backgroundColor: '#E43679',
    borderRadius: 3,
  },
  buttonText: {
    lineHeight: 30,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    paddingLeft: 16,
    fontSize: 16,
  },
});
class BreadCrumb extends Component {
  render() {
    return (
      <View style={style.container}>
        <TopButton />
        <View style={style.menuContainer}>
          <Text style={style.textLevelOne}>Storka</Text>
          <Image style={style.rightIcon} source={RightIcon} />
          <Text style={style.textLevelTwo}>All Products</Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
  },
  menuContainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 18,
    alignItems: 'center',
  },
  textLevelOne: {
    color: '#C42663',
    fontSize: 15,
  },
  textLevelTwo: {
    color: '#a4a4a4',
    fontSize: 15,
  },
  rightIcon: {
    width: 15,
    height: 15,
    marginLeft: 4.5,
    marginRight: 4.5,
  },
});

export default BreadCrumb;
