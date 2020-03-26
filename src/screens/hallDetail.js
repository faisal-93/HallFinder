import React, { Component } from 'react';
import { Icon, Rating } from 'react-native-elements';
import data from '../utils/data';
import facility from '../utils/facility';
import style from '../assets/styles/style';
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
                    style={{width: Dimensions.get('window').width/3 - 20, height: 100, borderRadius: 8}} 
                    source={item.img}
                    resizeMode='cover'
                />
            </View>
        );
    }

    renderFacility(item) {
        return (
            <View style={{width: Dimensions.get('window').width/3, marginRight: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Icon 
                    name={item.icon}
                    type={item.type}
                    color='#9A9A9A'
                    style={{alignSelf: 'center'}}
                />
                <Text style={{fontSize: 16, fontFamily: 'Poppins-Light', color: 'black', marginLeft: 10}}>{item.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <StatusBar backgroundColor="#cccccc" barStyle="dark-content"/>
                <Image 
                    source={require('../assets/images/hall2.jpg')}
                    resizeMode="cover"
                    style={{flex: .5, width: '100%', height: Dimensions.get('window').height/2}}
                />
                <View style={{flexDirection: "column", backgroundColor: 'white', flex: .5, marginTop: -30, marginBottom: 20, paddingHorizontal: 20,  borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 25}}>
                        <View style={{flex: 0.8, flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"}}>
                            <Icon 
                                name='room'
                                type='material'
                                color='#BEC2CE'
                                style={{alignSelf: "center"}}
                            />
                            <Text style={{color: '#BEC2CE', marginLeft: 10, fontFamily: 'Poppins-Bold', fontSize: 14}}>House#2, Road#12, Dhanmondi 2, Dhaka, Bangladesh</Text>
                        </View>
                        <Icon 
                            name='heart-o'
                            type='font-awesome'
                            color='#BEC2CE'
                            style={{flex: 0.2, alignSelf: "center"}}
                        />
                    </View>

                    <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 25, color: 'black', marginTop: 10}}>Factory Event Hall</Text>

                    <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={4.5}
                            style={{alignSelf: 'center'}}
                        />
                        <Text style={{marginLeft: 10, fontFamily: 'Poppins-Regular', fontSize: 14, color: '#BEC2CE', textAlignVertical: "center"}}>235 Reviews</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 20}}>
                        <View style={{flexDirection: 'row', justifyContent: "flex-start", alignItems: "center"}}>
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

                        <View style={{flexDirection: 'row', justifyContent: "flex-start", alignItems: "center"}}>
                            <Icon 
                                name='picture'
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

                        <View style={{flexDirection: 'row', justifyContent: "flex-start", alignItems: "center"}}>
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

                    <Text style={{marginTop: 20, fontSize: 16, fontFamily: 'Poppins-Light', color: 'black'}}>
                        Factory Event Hall is the largest single floor banquet hall in Dhaka. It can serve from 250-3000 customers. 
                        It has five star banquet facilities with variety of cuisine to offer.
                    </Text>

                    <Text style={{marginTop: 20, fontFamily: 'Poppins-SemiBold', fontSize: 16, color: 'black'}}>Gallery</Text>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => this.renderGallery(item)}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        style={{marginLeft: -5, marginTop: 5}}
                    />

                    <Text style={{marginTop: 20, fontFamily: 'Poppins-SemiBold', fontSize: 16, color: 'black'}}>Facilities</Text>
                    <FlatList 
                        data={facility}
                        renderItem={({item}) => this.renderFacility(item)}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        style={{ marginTop: 10}}
                    />

                    <TouchableOpacity style={style.buttonSM}>
                        <Text style={[style.text, {fontFamily: 'Poppins-SemiBold', fontSize: 18}]}>BOOK NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
