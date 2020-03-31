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
    TouchableOpacity,
    Platform,
    Animated
} from 'react-native';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 55;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class HallDetail extends Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'VirtualizedLists should never be nested', // TODO: Remove when fixed
        ]);

        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
              ),
        }
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

    renderScrollViewContent() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="#cccccc" barStyle="dark-content"/>
                {/* <Image 
                    source={require('../assets/images/hall2.jpg')}
                    resizeMode="cover"
                    style={styles.imageContainer}
                /> */}
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

    render() {
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
          );
          const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
          });
      
          const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
          });
          const titleOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 1, 1],
            extrapolate: 'clamp',
          });
          const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
          });
      
          const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0.8, 1],
            extrapolate: 'clamp',
          });
          const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
          });

        return (
            <View style={{flex: 1}}>
                <StatusBar
                    translucent={false}
                    barStyle="light-content"
                    backgroundColor='#2a7102'
                    />
                <Animated.ScrollView
                    style={{flex: 1, backgroundColor: 'grey'}}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    // iOS offset for RefreshControl
                    contentInset={{ top: HEADER_MAX_HEIGHT }}
                    contentOffset={{ y: -HEADER_MAX_HEIGHT }} >
                    {this.renderScrollViewContent()}
                </Animated.ScrollView>

                <Animated.View
                    pointerEvents="none"
                    style={{borderBottomWidth: 1, borderColor: '#DCDCDC', position: 'absolute', top: 0, left: 0, right: 0, 
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', overflow: 'hidden', 
                    height: HEADER_MAX_HEIGHT, transform: [{ translateY: headerTranslate }], zIndex: 1}} >
                        <Animated.Image
                            style={{alignSelf: 'center', width: '100%', height: HEADER_MAX_HEIGHT, resizeMode: 'cover', opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }}
                            source={require('../assets/images/hall1.jpg')}
                        />
                </Animated.View>
            </View>
        )
    }
}
