import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import style from '../assets/styles/style';
import data from '../utils/data';
import {
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    FlatList,
    ImageBackground
  } from 'react-native';


export default class Home extends Component {

    renderItem(item) {
        return (
          <TouchableOpacity 
                style={style.listItemContainer}
                onPress={() => {console.log('hello')}}  >
            <ImageBackground 
                source={item.img}
                resizeMode='cover'
                style={style.listItemImage}
                imageStyle={{borderRadius: 10}} >
                <Icon 
                    name='heart-o'
                    type='font-awesome'
                    color='#9A9A9A'
                    iconStyle={{alignSelf: 'center'}}
                    raised={true}
                    onPress={() => {console.log('world')}}
                />
            </ImageBackground>

            <View style={style.listItemTextContainer}>
                <Text style={style.listItemCategory}>{item.category}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Icon 
                        name='star'
                        type='font-awesome'
                        color='#FFCC00'
                        size={15}
                        iconStyle={{alignSelf: "center", textAlignVertical: "center", marginTop: 0, paddingTop: 0}}
                    />
                    <Text style={style.listItemRating}>{item.rating}</Text>
                    <Text style={style.listItemReview}>({item.review})</Text>
                </View>
            </View>
            
            <Text style={style.listItemName}>{item.name}</Text>
            <Text style={style.listItemAddress}>{item.address}</Text>
            <View style={style.listItemDivider}></View>
          </TouchableOpacity>
        );
      }      

    render() {

        const getHeader = () => {
            return <View>
                    <View style={style.filterContainer}>
                        <TouchableOpacity style={style.filterButton}>
                            <Text style={style.filterButtonText}>Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.filterButton}>
                            <Text style={style.filterButtonText}>Guests</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.filterButton}>
                            <Text style={style.filterButtonText}>Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={style.searchResultText}>Search Result</Text>
                </View>;
        };

        return (
            <View style={style.homeContainer}>
                <StatusBar backgroundColor="#cccccc" barStyle="dark-content"/>
                
                <View style={style.searchBar}>
                    <Icon
                        name='search'
                        type='material'
                        color='#C1C1C1'
                        iconStyle={{alignSelf: 'center'}}
                        onPress={() => console.log('hello')}
                    />
                    <TextInput 
                        style={style.searchInputText}
                        placeholder='Search'
                        placeholderTextColor='#C1C1C1'
                    />
                </View>                

                <FlatList 
                    data={data}
                    renderItem={({item}) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                    ListHeaderComponent={getHeader}
                />
            </View>
        )
    }
}
