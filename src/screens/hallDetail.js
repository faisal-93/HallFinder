import React, { Component } from 'react';
import { Icon, Rating } from 'react-native-elements';
import data from '../utils/data';
import facility from '../utils/facility';
import styles from '../assets/styles/hallDetail';
import { 
    Text, 
    View, 
    StatusBar,
    Image,
    Dimensions,
    FlatList,
    ScrollView,
    YellowBox,
    TouchableOpacity
} from 'react-native';

export default class HallDetail extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'VirtualizedLists should never be nested', // TODO: Remove when fixed
        ]);
    }    

    renderGallery(item) {
        return (
            <View style={{margin: 5}}>
                <Image
                    style={styles.galleryImage} 
                    source={item.img}
                    resizeMode='cover'
                />
            </View>
        );
    }

    renderFacility(item) {
        return (
            <View style={styles.facilityItemContainer}>
                <Icon 
                    name={item.icon}
                    type={item.type}
                    color='#9A9A9A'
                    style={{alignSelf: 'center'}}
                />
                <Text style={styles.facilityItemText}>{item.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="#cccccc" barStyle="dark-content"/>
                <Image 
                    source={require('../assets/images/hall2.jpg')}
                    resizeMode="cover"
                    style={styles.imageContainer}
                />
                <View style={styles.detailContainer}>
                    <View style={styles.headerSection}>
                        <View style={styles.addressContainer}>
                            <Icon 
                                name='room'
                                type='material'
                                color='#BEC2CE'
                                style={{alignSelf: "center"}}
                            />
                            <Text style={styles.address}>House#2, Road#12, Dhanmondi 2, Dhaka, Bangladesh</Text>
                        </View>
                        <Icon 
                            name='heart-o'
                            type='font-awesome'
                            color='#BEC2CE'
                            style={styles.favIcon}
                        />
                    </View>

                    <Text style={styles.title}>Factory Event Hall</Text>

                    <View style={styles.ratingSection}>
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={4.5}
                            style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.reviewText}>235 Reviews</Text>
                    </View>

                    <View style={styles.midSection}>
                        <View style={styles.midSectionItemContainer}>
                            <Icon 
                                name='compass'
                                type='simple-line-icon'
                                color='#D1D1D6'
                                size={32}
                                style={{ alignSelf: "center"}}
                            />
                            <View style={{marginLeft: 12}}>
                                <Text style={{fontFamily: 'Poppins-Light', fontSize: 14}}>Distance</Text>
                                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>5.5 km</Text>
                            </View>
                        </View>

                        <View style={styles.midSectionItemContainer}>
                            <Icon 
                                name='cursor-move'
                                type='simple-line-icon'
                                color='#D1D1D6'
                                size={32}
                                style={{ alignSelf: "center"}}
                            />
                            <View style={{marginLeft: 12}}>
                                <Text style={{fontFamily: 'Poppins-Light', fontSize: 14}}>Size</Text>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>1445 m</Text>
                                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 10, lineHeight: 15}}>2</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.midSectionItemContainer}>
                            <Icon 
                                name='hourglass'
                                type='simple-line-icon'
                                color='#D1D1D6'
                                size={32}
                                style={{ alignSelf: "center"}}
                            />
                            <View style={{marginLeft: 12}}>
                                <Text style={{fontFamily: 'Poppins-Light', fontSize: 14}}>Time</Text>
                                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12}}>12 pm - 1 am</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.description}>
                        Factory Event Hall is the largest single floor banquet hall in Dhaka. It can serve from 250-3000 customers. 
                        It has five star banquet facilities with variety of cuisine to offer.
                    </Text>

                    <Text style={styles.heading}>Gallery</Text>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => this.renderGallery(item)}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        style={{marginLeft: -5, marginTop: 5}}
                    />

                    <Text style={styles.heading}>Facilities</Text>
                    <FlatList 
                        data={facility}
                        renderItem={({item}) => this.renderFacility(item)}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        style={{ marginTop: 10}}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>BOOK NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
