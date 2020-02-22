import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import Navabar from './components/navabar';
import Filter from './components/filter';
import BreadCrumb from './components/breadcrumb';
import ProductItem from './components/product-item';

class Index extends Component {
  state = {
    products: [
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
      {
        title: "Tito's Handmade Vodka",
        capacity: '750ml',
        cover:
          'https://cdn.storka.com/images/products/small/titos-handmade-vodka--36682.jpg',
      },
    ],
  };
  render() {
    const {navigation} = this.props;
    const {products} = this.state;
    return (
      <SafeAreaView style={style.container}>
        <View style={style.top}>
          <Navabar clickDrawer={() => navigation.toggleDrawer()} />
          <Filter />
        </View>
        <ScrollView>
          <BreadCrumb />
          {products.map(product => {
            return <ProductItem item={product} />;
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  top: {
    height: 97,
  },
});
export default Index;
