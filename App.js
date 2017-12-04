import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, StatusBar, Dimensions, ScrollView, Button} from 'react-native';


const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const ASPECT_RATIO = 1;
const LATITUDE = -22.506947265045813;
const LONGITUDE = -44.074264795649924;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component {
    constructor(props) {
    super(props);

    this.state = {
      region: null,
    };

    this.fallowUser = {
        value: true
    };

    this.onPressLearnMore = function(e) {

    }

    this.onMapPress = function(thiz, e) {
      thiz.setState({region: e.nativeEvent.coordinate});
      // if(thiz.fallowUser){
      //   thiz.setFallowUser({value: false});
      // }
    }

    this.onRegionChange = function(thiz, e) {
      if(thiz.state.region == null) { return; }
      thiz.setState({region: e});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.scrollview}
        >
          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            showsUserLocation={true}
            followsUserLocation={this.fallowUser.value}
            // initialRegion={this.state.region}
            // followsUserLocation={true}
            onPress={e => this.onMapPress(this, e)}
            // onRegionChange={e => this.onRegionChange(this, e)}
          >
            <MapView.Marker
              title="This is a title"
              description="This is a description"
              coordinate={this.state.region}
            />
          </MapView>
        </ScrollView>
        <Button
          onPress={this.onPressLearnMore}
          style={styles.button2}
          title="Estacionar"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
  },
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  button2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});
