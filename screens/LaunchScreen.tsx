import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const LaunchScreen = () => {
  return (
    <View style={styles.launchScreen}>
      <View style={styles.container2}>
        <View style={[styles.image14, styles.imagePosition]}>
          <View style={[styles.group, styles.groupPosition]}>
            <View style={styles.group1}>
              <Image
                style={[styles.groupIcon, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group3.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.image15, styles.imagePosition]}>
          <View style={[styles.group2, styles.groupPosition]}>
            <View style={styles.group1}>
              <Image
                style={[styles.groupIcon2, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group4.png")}
              />
              <Image
                style={[styles.groupIcon3, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.unisphere, styles.unisphereFlexBox]}>UniSphere</Text>
      <Image
        style={styles.image71Icon}
        contentFit="cover"
        source={require("../assets/image-71.png")}
      />
      <Text style={[styles.tapDiscoverEngage, styles.unisphereFlexBox]}>
        TAP DISCOVER ENGAGE
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    top: "50%",
    marginTop: -22,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "-14.77%",
    position: "absolute",
  },
  groupIconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  groupIconLayout: {
    height: 0,
    width: 0,
    top: "100%",
    position: "absolute",
  },
  unisphereFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupIcon: {
    height: "36.88%",
    bottom: "63.13%",
  },
  groupIcon1: {
    left: "68.11%",
  },
  group1: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  group: {
    height: "72.73%",
    width: "41.81%",
    top: "42.05%",
    right: "16.53%",
    left: "41.67%",
  },
  image14: {
    width: 72,
    left: 0,
    top: "50%",
    marginTop: -22,
  },
  groupIcon2: {
    height: "36.02%",
    bottom: "63.98%",
  },
  groupIcon3: {
    left: "56.97%",
  },
  group2: {
    height: "73.18%",
    width: "75.52%",
    top: "41.59%",
    right: "14.9%",
    left: "9.58%",
  },
  image15: {
    width: 96,
    top: "50%",
    marginTop: -22,
    right: 0,
  },
  container2: {
    top: 0,
    backgroundColor: Color.colorGray_200,
    height: 44,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  unisphere: {
    top: 491,
    left: 61,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_100,
    width: 273,
  },
  image71Icon: {
    top: 306,
    left: 75,
    width: 241,
    height: 192,
    position: "absolute",
  },
  tapDiscoverEngage: {
    top: 539,
    left: 131,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorLightslategray,
  },
  launchScreen: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaunchScreen;
