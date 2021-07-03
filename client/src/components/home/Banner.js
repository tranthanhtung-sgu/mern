import React, { Component } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
import LinearGradient from "react-native-web-linear-gradient";
import "typeface-roboto";

const logoUri =
  "https://imagesvc.timeincapp.com/v3/fan/image?url=https://raptorsrapture.com/wp-content/uploads/getty-images/2016/04/1094224730.jpeg&w=1600";

class App extends Component {
  render() {
    return (
      <View style={styles.heroContainer}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.linearGradient}
        />
        <FullWidthImage
          accessibilityLabel="Hero Banner"
          source={{ uri: logoUri }}
        />
        <View style={styles.heroHeaderContainer}>
          <View style={styles.heroHeaderTextContainer}>
            <Text style={styles.heroHeaderText}>VanVleet.</Text>
            <Text style={styles.heroHeaderText}>The Playoff God.</Text>
          </View>
          <Button title="Raptor For Life" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heroContainer: {
    position: "relative"
  },
  linearGradient: {
    position: "absolute",
    zIndex: 10,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.35
  },
  heroHeaderContainer: {
    left: 0,
    top: 0,
    right: 0,
    bottom: "25%",
    position: "absolute",
    alignItems: "start",
    justifyContent: "center",
    zIndex: 11,
    marginLeft: 50
  },
  heroHeaderText: {
    fontSize: 50,
    color: "white",
    textTransform: "uppercase"
  },
  heroHeaderTextContainer: {
    marginBottom: 25
  }
});

export default App;
