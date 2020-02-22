import React, {Component} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import NavabarIcon from '../../../assets/icons/navbar.png';
import ShoppingCarIcon from '../../../assets/icons/shopping-car.png';
import LogoIcon from '../../../assets/icons/logo.png';

class Navabar extends Component {
  static defaultProps = {
    clickDrawer: () => {
      Alert.alert('点击');
    },
  };
  render() {
    const {clickDrawer} = this.props;
    return (
      <View style={style.container}>
        <View style={style.navabarBox}>
          <TouchableOpacity onPress={() => clickDrawer()}>
            <Image style={style.navbarIcon} source={NavabarIcon} />
          </TouchableOpacity>
        </View>
        <View style={style.logoBox}>
          <Image style={style.logoIcon} source={LogoIcon} />
        </View>
        <View style={style.shoppingCarBox}>
          <TouchableOpacity>
            <Image style={style.shoppingCarIcon} source={ShoppingCarIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: 48,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navabarBox: {
    width: 60,
    height: 48,
    backgroundColor: '#fff',
  },
  navbarIcon: {
    width: 24,
    height: 24,
    marginLeft: 18,
    marginTop: 12,
  },
  shoppingCarBox: {
    width: 60,
    height: 48,
    backgroundColor: '#fff',
  },
  shoppingCarIcon: {
    width: 24,
    height: 24,
    marginLeft: 18,
    marginTop: 12,
  },
  logoBox: {
    width: Dimensions.get('screen').width - 120,
    height: 48,
    backgroundColor: '#fff',
  },
  logoIcon: {
    width: 95.2,
    height: 30,
    marginTop: 9,
    marginLeft: (Dimensions.get('screen').width - 215.2) / 2,
  },
});

export default Navabar;
