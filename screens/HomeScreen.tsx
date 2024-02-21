import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text style={[styles.upcomingEvents, styles.hackathonFlexBox]}>
        Upcoming Events
      </Text>
      <View style={[styles.container15, styles.container15Layout]}>
        <Text style={[styles.welcomeBack, styles.onwardsTypo]}>
          Welcome back !
        </Text>
        <Text style={[styles.akshatShah, styles.hackathonFlexBox]}>
          Akshat Shah
        </Text>
        <View style={[styles.image28, styles.imageLayout]}>
          <View style={[styles.group, styles.groupPosition1]}>
            <View style={styles.group1}>
              <Image
                style={[styles.groupIcon, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.image29, styles.imageLayout]}>
          <View style={[styles.group2, styles.groupPosition1]}>
            <View style={styles.group1}>
              <Image
                style={[styles.groupIcon2, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group2.png")}
              />
              <Image
                style={[styles.groupIcon3, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
          </View>
        </View>
        <Image
          style={[styles.container15Child, styles.container15Layout]}
          contentFit="cover"
          source={require("../assets/line-2.png")}
        />
        <View style={[styles.image19Parent, styles.image19Position]}>
          <Image
            style={[styles.image19Icon, styles.image19Position]}
            contentFit="cover"
            source={require("../assets/image-19.png")}
          />
          <Text style={styles.unisphere}>UniSphere</Text>
        </View>
        <Image
          style={[styles.circle102, styles.imageLayout]}
          contentFit="cover"
          source={require("../assets/circle-10-2.png")}
        />
      </View>
      <View style={[styles.container103, styles.containerShadowBox]}>
        <Image
          style={[styles.image77Icon, styles.hackathonPosition]}
          contentFit="cover"
          source={require("../assets/image-77.png")}
        />
        <Text style={[styles.hackathon, styles.garbaLayout]}>Hackathon</Text>
        <Text style={styles.cesa}>CESA</Text>
        <View style={[styles.button15, styles.buttonLayout]}>
          <Text style={[styles.register, styles.bookNowPosition]}>
            Register
          </Text>
        </View>
        <View style={styles.calendar4Parent}>
          <Image
            style={styles.calendar4Icon}
            contentFit="cover"
            source={require("../assets/calendar-4.png")}
          />
          <Text style={[styles.jan2023, styles.onwardsTypo]}>21 Jan, 2023</Text>
        </View>
        <View style={styles.clock4Parent}>
          <Image
            style={styles.calendar4Icon}
            contentFit="cover"
            source={require("../assets/clock-4.png")}
          />
          <Text style={[styles.pmOnwards, styles.onwardsTypo]}>
            4 PM Onwards
          </Text>
        </View>
      </View>
      <View style={[styles.container1031, styles.containerShadowBox]}>
        <Image
          style={[styles.image77Icon, styles.hackathonPosition]}
          contentFit="cover"
          source={require("../assets/image-771.png")}
        />
        <Text style={[styles.garba, styles.textPosition]}>Garba</Text>
        <Text style={styles.cesa}>SAC</Text>
        <View style={[styles.button151, styles.buttonLayout]}>
          <Text style={[styles.bookNow, styles.bookNowPosition]}>Book Now</Text>
        </View>
        <View style={[styles.calendar4Group, styles.groupPosition]}>
          <Image
            style={styles.calendar4Icon}
            contentFit="cover"
            source={require("../assets/calendar-4.png")}
          />
          <Text style={[styles.jan2023, styles.onwardsTypo]}>21 Jan, 2023</Text>
        </View>
        <View style={[styles.clock4Group, styles.clock4Layout]}>
          <Image
            style={styles.calendar4Icon}
            contentFit="cover"
            source={require("../assets/clock-4.png")}
          />
          <Text style={[styles.onwards, styles.onwardsTypo]}>
            19:30 Onwards
          </Text>
        </View>
        <Text style={[styles.text, styles.textPosition]}>₹</Text>
      </View>
      <View style={[styles.container1032, styles.containerShadowBox]}>
        <Image
          style={[styles.image77Icon, styles.hackathonPosition]}
          contentFit="cover"
          source={require("../assets/image-772.png")}
        />
        <Text style={[styles.hackathon, styles.garbaLayout]}>Auction</Text>
        <Text style={styles.cesa}>CESA</Text>
        <View style={[styles.button152, styles.buttonLayout]}>
          <Text style={[styles.register, styles.bookNowPosition]}>
            Register
          </Text>
        </View>
        <View style={[styles.calendar4Container, styles.containerPosition]}>
          <Image
            style={styles.calendar4Icon}
            contentFit="cover"
            source={require("../assets/calendar-4.png")}
          />
          <Text style={[styles.jan2023, styles.onwardsTypo]}>21 Jan, 2023</Text>
        </View>
        <View style={[styles.clock4Container, styles.containerPosition]}>
          <Image
            style={styles.calendar4Icon}
            contentFit="cover"
            source={require("../assets/clock-4.png")}
          />
          <Text style={[styles.onwards, styles.onwardsTypo]}>
            11 AM Onwards
          </Text>
        </View>
      </View>
      <View style={[styles.tabBarMenu1, styles.frameBg]}>
        <View style={[styles.frame, styles.frameBg]}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/house.png")}
          />
          <Text style={[styles.home, styles.homePosition]}>Home</Text>
        </View>
        <View style={[styles.frame1, styles.frameBg]}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/receipt.png")}
          />
          <Text style={[styles.myEvents, styles.homePosition]}>My events</Text>
        </View>
        <View style={[styles.frame2, styles.frameBg]}>
          <Image
            style={styles.houseIcon}
            contentFit="cover"
            source={require("../assets/globe.png")}
          />
          <Text style={[styles.others, styles.homePosition]}>Others</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hackathonFlexBox: {
    textAlign: "left",
    color: Color.colorGray_100,
  },
  container15Layout: {
    width: 390,
    left: 0,
  },
  onwardsTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  imageLayout: {
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition1: {
    bottom: "-14.77%",
    position: "absolute",
  },
  groupIconPosition: {
    maxWidth: "100%",
    maxHeight: "100%",
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
  image19Position: {
    height: 43,
    left: 0,
    position: "absolute",
  },
  containerShadowBox: {
    height: 150,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    borderRadius: Border.br_9xs,
    width: 390,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  hackathonPosition: {
    top: 16,
    position: "absolute",
  },
  garbaLayout: {
    width: 189,
    left: 160,
    fontFamily: FontFamily.lexendRegular,
  },
  buttonLayout: {
    height: 28,
    width: 226,
    backgroundColor: Color.colorGhostwhite,
    borderRadius: Border.br_xs,
    left: 151,
    position: "absolute",
    overflow: "hidden",
  },
  bookNowPosition: {
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    marginTop: -9,
    color: Color.colorBlueviolet,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    top: 19,
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupPosition: {
    top: 83,
    height: 22,
    position: "absolute",
  },
  clock4Layout: {
    width: 118,
    left: 266,
  },
  containerPosition: {
    top: 76,
    height: 22,
    position: "absolute",
  },
  frameBg: {
    backgroundColor: Color.colorGray_300,
    height: 44,
    position: "absolute",
  },
  homePosition: {
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  upcomingEvents: {
    top: 186,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  welcomeBack: {
    top: 123,
    color: Color.colorDimgray,
    left: 20,
  },
  akshatShah: {
    top: 144,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    left: 20,
    position: "absolute",
  },
  groupIcon: {
    height: "36.88%",
    bottom: "63.13%",
    maxHeight: "100%",
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
  image28: {
    width: 72,
    left: 0,
    top: 0,
  },
  groupIcon2: {
    height: "36.02%",
    bottom: "63.98%",
    maxHeight: "100%",
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
  image29: {
    right: 0,
    width: 96,
    top: 0,
  },
  container15Child: {
    top: 175,
    maxHeight: "100%",
    position: "absolute",
  },
  image19Icon: {
    borderRadius: 22,
    width: 59,
    top: 0,
  },
  unisphere: {
    top: 13,
    left: 59,
    width: 135,
    fontFamily: FontFamily.lexendRegular,
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  image19Parent: {
    top: 59,
    width: 194,
  },
  circle102: {
    top: 58,
    left: 326,
    width: 44,
  },
  container15: {
    height: 175,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    width: 390,
  },
  image77Icon: {
    bottom: 16,
    left: 16,
    borderRadius: Border.br_10xs,
    width: 128,
    maxHeight: "100%",
  },
  hackathon: {
    top: 16,
    position: "absolute",
    textAlign: "left",
    color: Color.colorGray_100,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
  },
  cesa: {
    top: 44,
    fontFamily: FontFamily.manropeRegular,
    left: 160,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  register: {
    marginLeft: -21.5,
    color: Color.colorBlueviolet,
  },
  button15: {
    top: 117,
  },
  calendar4Icon: {
    top: 1,
    width: 20,
    height: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  jan2023: {
    left: 23,
    top: 0,
    color: Color.colorGray_100,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  calendar4Parent: {
    height: 22,
    top: 91,
    width: 100,
    left: 155,
    position: "absolute",
  },
  pmOnwards: {
    left: 26,
    top: 0,
    color: Color.colorGray_100,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  clock4Parent: {
    width: 116,
    left: 266,
    height: 22,
    top: 91,
    position: "absolute",
  },
  container103: {
    top: 236,
  },
  garba: {
    width: 189,
    left: 160,
    fontFamily: FontFamily.lexendRegular,
  },
  bookNow: {
    marginLeft: -25,
    color: Color.colorBlueviolet,
  },
  button151: {
    top: 109,
  },
  calendar4Group: {
    width: 100,
    left: 155,
  },
  onwards: {
    left: 25,
    top: 0,
    color: Color.colorGray_100,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  clock4Group: {
    top: 83,
    height: 22,
    position: "absolute",
  },
  text: {
    left: 359,
    fontFamily: FontFamily.manropeRegular,
  },
  container1031: {
    top: 417,
  },
  button152: {
    top: 102,
  },
  calendar4Container: {
    width: 100,
    left: 155,
  },
  clock4Container: {
    width: 118,
    left: 266,
  },
  container1032: {
    top: 597,
  },
  houseIcon: {
    marginTop: -20,
    marginLeft: -12.05,
    width: 24,
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    marginLeft: -14.55,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  frame: {
    width: 123,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  myEvents: {
    marginLeft: -24.05,
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorDimgray,
  },
  frame1: {
    left: 123,
    width: 142,
    top: 0,
    overflow: "hidden",
  },
  others: {
    marginLeft: -16.05,
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorDimgray,
  },
  frame2: {
    left: 264,
    width: 126,
    top: 0,
    overflow: "hidden",
  },
  tabBarMenu1: {
    top: 800,
    width: 390,
    left: 0,
  },
  homeScreen: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
});

export default HomeScreen;
