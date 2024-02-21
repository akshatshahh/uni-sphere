import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const FreeEvent = () => {
  return (
    <View style={styles.freeEvent}>
      <View style={styles.container118}>
        <View style={styles.button26}>
          <Text style={[styles.register, styles.cesaTypo]}>Register</Text>
        </View>
        <Image
          style={[styles.eventTicket1, styles.clock4IconLayout]}
          contentFit="cover"
          source={require("../assets/event-ticket-1.png")}
        />
        <View style={[styles.container118Child, styles.button31Layout]} />
      </View>
      <View style={[styles.container120, styles.container120Border]}>
        <Image
          style={[styles.switch1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/switch-1.png")}
        />
        <Text style={styles.notifyMe}>Notify me on registration starts</Text>
        <Image
          style={[styles.container121Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/container-121.png")}
        />
      </View>
      <Image
        style={styles.freeEventChild}
        contentFit="cover"
        source={require("../assets/line-54.png")}
      />
      <View style={[styles.container122, styles.containerPosition]}>
        <Image
          style={[styles.image87Icon, styles.imageContainerPosition]}
          contentFit="cover"
          source={require("../assets/image-87.png")}
        />
        <Text style={[styles.free, styles.freeClr]}>Free</Text>
        <Text style={[styles.cesa, styles.freeClr]}>CESA</Text>
      </View>
      <Text style={[styles.description, styles.freeTypo]}>Description</Text>
      <Text
        style={[styles.quisOccaecatMagnaContainer, styles.containerPosition]}
      >
        <Text style={styles.quisOccaecatMagna}>
          Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor
          nisi exercitation .
        </Text>
        <Text style={styles.more}>..more</Text>
      </Text>
      <View style={[styles.container125, styles.imageContainerPosition]}>
        <Text style={[styles.hackathon, styles.freeClr]}>Hackathon</Text>
        <View style={[styles.button31, styles.button31Layout]}>
          <Text style={[styles.text, styles.cesaTypo]} />
          <Image
            style={[styles.chevronLeftLarge, styles.textPosition]}
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
                  source={require("../assets/group7.png")}
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
        style={[styles.calendar4Icon, styles.pin33Position]}
        contentFit="cover"
        source={require("../assets/calendar-41.png")}
      />
      <Text style={[styles.jan2023, styles.pm1230Typo]}>21 Jan, 2023</Text>
      <Image
        style={[styles.clock4Icon, styles.clock4IconLayout]}
        contentFit="cover"
        source={require("../assets/clock-41.png")}
      />
      <Text style={[styles.pm1230, styles.pm1230Typo]}>7:00 PM - 12:30 AM</Text>
      <Text style={[styles.mainBuildingAuditorium, styles.cesaTypo]}>
        Main building, Auditorium
      </Text>
      <Text style={[styles.jan2024, styles.cesaTypo]}>
        1 Jan 2024 - 21 Jan 2024
      </Text>
      <Image
        style={[styles.pin33, styles.pin33Position]}
        contentFit="cover"
        source={require("../assets/pin-3-3.png")}
      />
      <Image
        style={[styles.hourglassTop1, styles.containerPosition]}
        contentFit="cover"
        source={require("../assets/hourglass-top-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cesaTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeRegular,
  },
  clock4IconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  button31Layout: {
    height: 36,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  container120Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    width: 40,
    position: "absolute",
  },
  containerPosition: {
    left: 20,
    position: "absolute",
  },
  imageContainerPosition: {
    top: 0,
    position: "absolute",
  },
  freeClr: {
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  freeTypo: {
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
  },
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
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
  pin33Position: {
    left: 22,
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
  register: {
    marginLeft: -27.5,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginTop: -11,
    fontSize: FontSize.size_sm,
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
  eventTicket1: {
    top: 23,
    left: 32,
    position: "absolute",
  },
  container118Child: {
    top: 15,
    left: 24,
    backgroundColor: "rgba(23, 26, 31, 0)",
    borderColor: Color.colorBlueviolet,
    width: 36,
    borderWidth: 1,
    borderStyle: "solid",
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
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
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
    borderColor: Color.colorGainsboro,
    height: 72,
    width: 335,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  freeEventChild: {
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
  free: {
    top: 204,
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    left: 0,
  },
  cesa: {
    top: 207,
    left: 281,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container122: {
    top: 96,
    height: 232,
    width: 335,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  description: {
    top: 369,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    left: 20,
    position: "absolute",
    color: Color.colorDarkslategray,
    textAlign: "left",
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
    width: 335,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  hackathon: {
    top: 54,
    left: 44,
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
  },
  text: {
    marginLeft: 8,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginTop: -11,
    fontSize: FontSize.size_sm,
  },
  chevronLeftLarge: {
    marginTop: -8,
    marginLeft: -8,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  button31: {
    top: 50,
    backgroundColor: Color.colorGray_300,
    width: 44,
    left: 0,
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
  calendar4Icon: {
    top: 472,
  },
  jan2023: {
    left: 45,
  },
  clock4Icon: {
    left: 219,
    top: 472,
    position: "absolute",
  },
  pm1230: {
    left: 244,
  },
  mainBuildingAuditorium: {
    top: 565,
    left: 45,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  jan2024: {
    top: 525,
    left: 45,
    color: Color.colorDarkslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  pin33: {
    top: 566,
  },
  hourglassTop1: {
    top: 526,
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  freeEvent: {
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

export default FreeEvent;
