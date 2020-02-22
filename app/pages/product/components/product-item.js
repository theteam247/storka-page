import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import StarIcon from '../../../assets/icons/star.png';
import HalfStarIcon from '../../../assets/icons/half-star.png';
class Star extends Component {
  static defaultProps = {
    value: 7,
  };
  render() {
    const {value} = this.props;
    const step = Math.ceil(value / 2);
    const items = [];
    for (let index = 1; index <= step; index++) {
      let cate = 'star';
      if (index === step && value % 2 !== 0) {
        cate = 'half-star';
      }
      items.push(cate);
    }
    return (
      <View style={starStyle.container}>
        {items.map(item => {
          const icon = item === 'star' ? StarIcon : HalfStarIcon;
          return <Image source={icon} style={starStyle.icon} />;
        })}
      </View>
    );
  }
}
const starStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 18,
  },
  icon: {
    width: 14,
    height: 14,
  },
});
class ProductItem extends Component {
  static defaultProps = {
    item: {
      title: "Tito's Handmade Vodka",
      capacity: '750ml',
      cover:
        'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
    },
  };
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity>
        <View style={style.container}>
          <View style={style.coverBox}>
            <Image style={style.cover} source={{uri: item.cover}} />
          </View>
          <View style={style.infoBox}>
            <View>
              <Text style={style.infoTitle}>{item.title}</Text>
            </View>
            <View style={style.infoBottomBox}>
              <View>
                <Text style={style.infoCapacity}>{item.capacity}</Text>
              </View>
              <View>
                <Star />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  coverBox: {
    width: 100,
    height: 140,
  },
  cover: {
    width: 40,
    height: 100,
    marginLeft: 30,
    marginTop: 20,
  },
  infoBox: {
    flex: 1,
    flexDirection: 'column',
    height: 140,
    justifyContent: 'flex-start',
  },
  infoTitle: {
    height: 20,
    marginTop: 35,
    lineHeight: 20,
    fontSize: 15,
  },
  infoBottomBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoCapacity: {
    lineHeight: 24,
    fontSize: 14,
    color: '#808080',
  },
});

export default ProductItem;
