import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PaidEvent = () => {
  return (
    <View style={styles.paidEvent}>
      <View style={styles.container118}>
        <View style={styles.button26}>
          <Text style={[styles.buyTickets, styles.text3FlexBox]}>
            Buy Tickets
          </Text>
        </View>
        <Image
          style={[styles.container118Child, styles.button31Layout]}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
      </View>
      <View style={styles.container120}>
        <Image
          style={[styles.switch1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/switch-1.png")}
        />
        <Text style={[styles.notifyMe, styles.text3FlexBox]}>
          Notify me on registration starts
        </Text>
        <Image
          style={[styles.container121Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/container-1211.png")}
        />
      </View>
      <Image
        style={styles.paidEventChild}
        contentFit="cover"
        source={require("../assets/line-54.png")}
      />
      <View style={styles.container122}>
        <Image
          style={[styles.image87Icon, styles.imageContainerPosition]}
          contentFit="cover"
          source={require("../assets/image-871.png")}
        />
        <Text style={[styles.text, styles.sacClr]}>
          <Text style={styles.text1}>₹</Text>
          <Text style={styles.text2Typo}> 250</Text>
        </Text>
        <Text style={[styles.sac, styles.sacClr]}>SAC</Text>
      </View>
      <Text style={[styles.description, styles.text2Typo]}>Description</Text>
      <Text style={[styles.quisOccaecatMagnaContainer, styles.text3FlexBox]}>
        <Text style={styles.quisOccaecatMagna}>
          Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor
          nisi exercitation .
        </Text>
        <Text style={styles.more}>..more</Text>
      </Text>
      <Text style={[styles.indusCampus, styles.text3FlexBox]}>
        Indus Campus
      </Text>
      <Text style={[styles.jan2024, styles.text3FlexBox]}>
        1 Jan 2024 - 21 Jan 2024
      </Text>
      <View style={[styles.container125, styles.imageContainerPosition]}>
        <Text style={[styles.garba, styles.text2Typo]}>Garba</Text>
        <View style={[styles.button31, styles.button31Layout]}>
          <Text style={[styles.text3, styles.text3FlexBox]} />
          <Image
            style={[styles.chevronLeftLarge, styles.text3Position]}
            contentFit="cover"
            source={require("../assets/chevron-left-large.png")}
          />
        </View>
        <View style={[styles.container126, styles.imageContainerPosition]}>
          <View style={[styles.image90, styles.imageContainerPosition]}>
            <View style={[styles.group, styles.groupPosition]}>
              <View style={styles.group1}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group9.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.image91, styles.imageContainerPosition]}>
            <View style={[styles.group2, styles.groupPosition]}>
              <View style={styles.group1}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group8.png")}
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
      </View>
      <Image
        style={[styles.pin33, styles.pin33Layout]}
        contentFit="cover"
        source={require("../assets/pin-3-3.png")}
      />
      <Image
        style={[styles.calendar4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/calendar-41.png")}
      />
      <Text style={[styles.jan2023, styles.pm1230Typo]}>21 Jan, 2023</Text>
      <Image
        style={[styles.clock4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/clock-41.png")}
      />
      <Text style={[styles.pm1230, styles.pm1230Typo]}>7:00 PM - 12:30 AM</Text>
      <Image
        style={[styles.hourglassTop1, styles.pin33Layout]}
        contentFit="cover"
        source={require("../assets/hourglass-top-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text3FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  button31Layout: {
    height: 36,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    position: "absolute",
  },
  imageContainerPosition: {
    top: 0,
    position: "absolute",
  },
  sacClr: {
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  text3Position: {
    left: "50%",
    top: "50%",
  },
  groupPosition: {
    bottom: "-26.25%",
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
  pin33Layout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 472,
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  pm1230Typo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    top: 471,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buyTickets: {
    marginLeft: -37.5,
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    marginTop: -11,
    textAlign: "left",
  },
  button26: {
    top: 12,
    left: 68,
    backgroundColor: Color.colorBlueviolet,
    width: 287,
    height: 42,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  container118Child: {
    top: 15,
    left: 24,
    width: 36,
  },
  container118: {
    top: 767,
    left: -12,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    height: 66,
    width: 375,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Color.colorWhite,
  },
  switch1Icon: {
    top: 24,
    left: 283,
    borderRadius: Border.br_xs,
    height: 24,
  },
  notifyMe: {
    top: 26,
    left: 64,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.manropeRegular,
  },
  container121Icon: {
    top: 16,
    left: 12,
    height: 40,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  container120: {
    top: 675,
    left: 8,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    height: 72,
    width: 335,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  paidEventChild: {
    top: 348,
    height: 1,
    left: 0,
    width: 375,
    position: "absolute",
  },
  image87Icon: {
    height: 178,
    left: 0,
    width: 335,
    borderRadius: Border.br_9xs,
  },
  text1: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  text: {
    top: 204,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    left: 0,
  },
  sac: {
    top: 207,
    left: 281,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container122: {
    top: 96,
    height: 232,
    left: 20,
    width: 335,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  description: {
    top: 369,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    left: 20,
    color: Color.colorDarkslategray,
    textAlign: "left",
    position: "absolute",
  },
  quisOccaecatMagna: {
    color: Color.colorDarkslategray,
  },
  more: {
    color: Color.colorBlueviolet,
  },
  quisOccaecatMagnaContainer: {
    top: 403,
    height: 50,
    left: 20,
    width: 335,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  indusCampus: {
    top: 562,
    left: 45,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  jan2024: {
    top: 522,
    left: 45,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  garba: {
    top: 54,
    left: 44,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  text3: {
    marginLeft: 8,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    marginTop: -11,
    textAlign: "left",
  },
  chevronLeftLarge: {
    marginTop: -8,
    marginLeft: -8,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  button31: {
    top: 50,
    backgroundColor: Color.colorGray_300,
    width: 44,
    left: 0,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  groupIcon: {
    height: "31.36%",
    bottom: "68.64%",
  },
  groupIcon1: {
    left: "58.42%",
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
    height: "84.5%",
    width: "68.65%",
    top: "41.75%",
    right: "18.85%",
    left: "12.5%",
  },
  image90: {
    left: 279,
    width: 96,
    height: 40,
    overflow: "hidden",
  },
  groupIcon2: {
    height: "31.75%",
    bottom: "68.25%",
  },
  groupIcon3: {
    left: "75.09%",
  },
  group2: {
    height: "84.25%",
    width: "37.92%",
    top: "42%",
    right: "20.42%",
    left: "41.67%",
  },
  image91: {
    width: 72,
    left: 0,
    height: 40,
    overflow: "hidden",
  },
  container126: {
    backgroundColor: Color.colorGray_200,
    left: 0,
    height: 40,
    width: 375,
  },
  container125: {
    height: 96,
    left: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
  },
  pin33: {
    top: 563,
    left: 22,
  },
  calendar4Icon: {
    left: 22,
  },
  jan2023: {
    left: 45,
  },
  clock4Icon: {
    left: 219,
  },
  pm1230: {
    left: 244,
  },
  hourglassTop1: {
    top: 523,
    left: 20,
  },
  paidEvent: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    height: 857,
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

export default PaidEvent;
