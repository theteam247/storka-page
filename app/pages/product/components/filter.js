import React, {Component} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Dash from 'react-native-dash';
import TriangleIcon from '../../../assets/icons/triangle.png'
class Filter extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.filterButtonBox}>
          <TouchableOpacity>
            <View style={style.filterButton}>
              <Text style={style.filterButtonText}>FILTER PRODUCTS</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={style.sortBox}>
          <Text style={style.sortText}>sort</Text>
          <TouchableOpacity>
            <View style={style.sortButton}>
              <View style={style.sortButtonItem}>
                <Text style={style.sortButtonText}>Best Selling</Text>
                <Image
                  style={style.sortButtonTriangleIcon}
                  source={TriangleIcon}
                />
              </View>
              <Dash dashColor="#808080" style={style.sortDash} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: 49,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  filterButtonBox: {
    flex: 1,
  },
  filterButton: {
    marginLeft: 18,
    width: 140,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 3,
  },
  filterButtonText: {
    lineHeight: 24,
    fontSize: 12,
    color: '#4e4e4e',
    textAlign: 'center',
  },
  sortBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sortText: {
    paddingRight: 12,
    color: '#808080',
  },
  sortButton: {
    width: 97,
    height: 28,
    paddingRight: 12,
  },
  sortButtonText: {
    fontSize: 14,
    color: '#000',
  },
  sortButtonItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortButtonTriangleIcon: {
    width: 10,
    height: 10,
  },
  sortDash: {
    width: 85,
    height: 0.5,
  },
});

export default Filter;
