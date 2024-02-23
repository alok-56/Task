import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';

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
                  marginTop: 10,
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
              </View>
            );
          }}></FlatList>
      </ScrollView>
    </View>
  );
};

export default Product;
