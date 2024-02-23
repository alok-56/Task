import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Product = ({data}) => {
  return (
    <View style={{width: '100%'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal
          data={data.Product}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: 150,
                  height: 250,
                  borderRadius: 5,
                  height: 180,
                  marginLeft: 10,
                  marginTop: 1,
                }}>
                <Image
                  style={{height: '85%', width: '100%', borderRadius: 5}}
                  source={{uri: `${item.ImageName}`}}></Image>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 12,
                    marginTop: 5,
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  {item.Name}
                </Text>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    backgroundColor: 'aqua',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    {item.PriceCode}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </ScrollView>
    </View>
  );
};

export default Product;
