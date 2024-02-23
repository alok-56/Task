import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {CATEGORY, SUBCATEGORY} from '../Api/Api';
import Product from '../Components/Product';
import HomeLoader from '../Loader/HomeLoader';

const Home = () => {
  const [data, setData] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingStart, setLoadingStart] = useState(true);

  useEffect(() => {
    CATEGORY().then(res => {
      if (res) {
        setData(res.Result.Category);
        if (res.Result.Category.length > 0) {
          setSelectedItem(res.Result.Category[1].Id);
          fetchSubcategories(res.Result.Category[1]);
          setLoading(true);
          setLoadingStart(false);
        }
      }
    });
  }, []);

  const fetchSubcategories = async item => {
    SUBCATEGORY(item.Id, 1)
      .then(subcategoryResponse => {
        const subcategoryData =
          subcategoryResponse.Result.Category?.[0]?.SubCategories;
        setSubcategories(subcategoryData);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
      });
  };

  const renderCategoryItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedItem(item.Id);
        fetchSubcategories(item);
        setLoading(true);
      }}
      style={{
        backgroundColor: selectedItem === item.Id ? '#ccc' : 'transparent',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
      }}>
      <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
        {item.Name}
      </Text>
    </TouchableOpacity>
  );

  const filteredData = data.slice(1);

  return (
    <View style={{flex: 1}}>
      <>
        {loadingStart ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <View style={{width: '100%', backgroundColor: '#000', height: 100}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Text></Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: '600',
                    textAlign: 'center',
                    marginLeft: 25,
                  }}>
                  Esptiles
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 30, width: 30, tintColor: '#fff'}}
                    source={require('../Img/pro.png')}></Image>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: '#fff',
                      marginLeft: 5,
                      marginTop: 2,
                    }}
                    source={require('../Img/search.png')}></Image>
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <ScrollView>
                  <FlatList
                    horizontal
                    style={{marginLeft: 8}}
                    data={filteredData}
                    keyExtractor={item => item.Id.toString()}
                    renderItem={renderCategoryItem}
                  />
                </ScrollView>
              </View>
            </View>

            <>
              {loading ? (
               <HomeLoader></HomeLoader>
              ) : (
                <ScrollView>
                  <FlatList
                    style={{marginLeft: 8}}
                    data={subcategories}
                    keyExtractor={item => item.Id.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={{
                          backgroundColor:
                            selectedItem === item.Id ? '#ccc' : 'transparent',
                          borderRadius: 5,
                          padding: 10,
                          marginRight: 10,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '800',
                          }}>
                          {item.Name}
                        </Text>
                        <Product data={item}></Product>
                      </TouchableOpacity>
                    )}
                  />
                </ScrollView>
              )}
            </>
          </>
        )}
      </>
    </View>
  );
};

export default Home;
