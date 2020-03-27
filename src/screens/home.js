import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import styles from '../assets/styles/home';
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
                style={styles.listItemContainer}
                onPress={() => {console.log('hello')}}  >
            <ImageBackground 
                source={item.img}
                resizeMode='cover'
                style={styles.listItemImage}
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

            <View style={styles.listItemTextContainer}>
                <Text style={styles.listItemCategory}>{item.category}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Icon 
                        name='star'
                        type='font-awesome'
                        color='#FFCC00'
                        size={15}
                        iconStyle={{alignSelf: "center", textAlignVertical: "center", marginTop: 0, paddingTop: 0}}
                    />
                    <Text style={styles.listItemRating}>{item.rating}</Text>
                    <Text style={styles.listItemReview}>({item.review})</Text>
                </View>
            </View>
            
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemAddress}>{item.address}</Text>
            <View style={styles.listItemDivider}></View>
          </TouchableOpacity>
        );
      }      

    render() {

        const getHeader = () => {
            return <View>
                    <View style={styles.filterContainer}>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Guests</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton}>
                            <Text style={styles.filterButtonText}>Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.searchResultText}>Search Result</Text>
                </View>;
        };

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#cccccc" barStyle="dark-content"/>
                
                <View style={styles.searchBar}>
                    <Icon
                        name='search'
                        type='material'
                        color='#C1C1C1'
                        iconStyle={{alignSelf: 'center'}}
                        onPress={() => console.log('hello')}
                    />
                    <TextInput 
                        style={styles.searchInputText}
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
