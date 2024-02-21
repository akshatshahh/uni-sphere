import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SignUpWithEmailInputEma = () => {
  return (
    <View style={styles.signUpWithEmailInputEma}>
      <Text style={styles.createYourAccount}>Create your account</Text>
      <Image
        style={styles.iconButton6}
        contentFit="cover"
        source={require("../assets/icon-button-6.png")}
      />
      <View style={[styles.unisphereParent, styles.unispherePosition]}>
        <Text style={[styles.unisphere, styles.unispherePosition]}>
          UniSphere
        </Text>
        <Image
          style={styles.image71Icon}
          contentFit="cover"
          source={require("../assets/image-711.png")}
        />
      </View>
      <View style={styles.container101}>
        <View style={[styles.image72, styles.imagePosition]}>
          <View style={[styles.group, styles.groupPosition]}>
            <View style={styles.group1}>
              <Image
                style={[styles.groupIcon, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group5.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.image73, styles.imagePosition]}>
          <View style={[styles.group2, styles.groupPosition]}>
            <View style={styles.group1}>
              <Image
                style={[styles.groupIcon2, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group6.png")}
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
      <View style={styles.textbox8}>
        <View style={styles.rectangle} />
        <Text style={[styles.lilyambergmailcom, styles.containerTypo]}>
          lilyamber@gmail.com
        </Text>
        <Image
          style={[styles.mailIcon, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
      </View>
      <View style={[styles.textbox9, styles.textboxBorder]}>
        <Text style={[styles.enterYourPassword, styles.containerTypo]}>
          Enter your password
        </Text>
        <Image
          style={[styles.mailIcon, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/lock.png")}
        />
        <Image
          style={[styles.removeRedEye, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/remove-red-eye.png")}
        />
      </View>
      <View style={[styles.textbox10, styles.textboxBorder]}>
        <Text style={[styles.lilyambergmailcom, styles.containerTypo]}>
          Lily Amber
        </Text>
        <Image
          style={[styles.mailIcon, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/profile.png")}
        />
        <Image
          style={[styles.removeRedEye, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/check.png")}
        />
      </View>
      <Text style={[styles.iAgreeWithContainer, styles.containerTypo]}>
        <Text style={styles.iAgreeWith}>{`I agree with `}</Text>
        <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
      </Text>
      <View style={[styles.checkbox2, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={styles.rectangle1} />
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <Text style={styles.text} />
        </View>
      </View>
      <View style={styles.button30}>
        <Text style={[styles.signUp, styles.containerTypo]}>Sign Up</Text>
      </View>
      <View style={[styles.textbox91, styles.textboxBorder]}>
        <Text style={[styles.enterYourPassword, styles.containerTypo]}>
          Retype your password
        </Text>
        <Image
          style={[styles.mailIcon, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/lock.png")}
        />
        <Image
          style={[styles.removeRedEye, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/remove-red-eye.png")}
        />
      </View>
      <Text style={[styles.alreadyHaveAnContainer, styles.containerTypo]}>
        <Text style={styles.iAgreeWith}>{`Already have an account ?   `}</Text>
        <Text style={styles.termsConditions}>Login now</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unispherePosition: {
    width: 273,
    left: "50%",
    position: "absolute",
  },
  imagePosition: {
    top: "50%",
    marginTop: -20,
    height: 40,
    position: "absolute",
    overflow: "hidden",
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
  containerTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  mailIconPosition: {
    height: 20,
    marginTop: -10.5,
    width: 20,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  textboxBorder: {
    borderColor: Color.colorLightslategray,
    height: 45,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xs,
    left: 27,
    position: "absolute",
  },
  frameLayout: {
    height: 22,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  createYourAccount: {
    marginLeft: -66,
    top: 312,
    color: Color.colorLightslategray,
    textAlign: "center",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  iconButton6: {
    top: 64,
    left: 28,
    borderRadius: 18,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  unisphere: {
    marginLeft: -136.5,
    top: 185,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_100,
    textAlign: "center",
  },
  image71Icon: {
    marginLeft: -121.5,
    width: 241,
    height: 192,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  unisphereParent: {
    marginLeft: -136,
    top: 71,
    height: 233,
  },
  groupIcon: {
    height: "31.75%",
    bottom: "68.25%",
  },
  groupIcon1: {
    left: "75.09%",
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
    height: "84.25%",
    width: "37.92%",
    top: "42%",
    right: "20.42%",
    left: "41.67%",
  },
  image72: {
    width: 72,
    left: 0,
  },
  groupIcon2: {
    height: "31.36%",
    bottom: "68.64%",
  },
  groupIcon3: {
    left: "58.42%",
  },
  group2: {
    height: "84.5%",
    width: "68.65%",
    top: "41.75%",
    right: "18.85%",
    left: "12.5%",
  },
  image73: {
    width: 96,
    right: 0,
    top: "50%",
    marginTop: -20,
  },
  container101: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangle: {
    marginTop: -26.5,
    marginLeft: -172,
    borderColor: "rgba(55, 154, 230, 0.2)",
    borderWidth: 5,
    width: 342,
    height: 51,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xs,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  lilyambergmailcom: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
    left: 44,
    marginTop: -13.5,
    color: Color.colorGray_100,
  },
  mailIcon: {
    left: 16,
  },
  textbox8: {
    top: 449,
    borderColor: Color.colorCornflowerblue_100,
    height: 45,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_xs,
    left: 27,
    right: 27,
    position: "absolute",
  },
  enterYourPassword: {
    color: Color.colorSilver,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
    left: 44,
    marginTop: -13.5,
  },
  removeRedEye: {
    right: 17,
  },
  textbox9: {
    top: 517,
    right: 27,
    borderColor: Color.colorLightslategray,
  },
  textbox10: {
    top: 381,
    right: 27,
    borderColor: Color.colorLightslategray,
  },
  iAgreeWith: {
    color: Color.colorGray_100,
  },
  termsConditions: {
    color: Color.colorCornflowerblue_100,
  },
  iAgreeWithContainer: {
    left: 49,
    top: 650,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  rectangle1: {
    top: 3,
    borderRadius: 2,
    backgroundColor: "#197dca",
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 5,
    left: 2,
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    left: 22,
    width: 20,
    textAlign: "left",
    top: 0,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frame: {
    width: 42,
    left: 0,
    top: 0,
  },
  checkbox2: {
    right: 321,
    top: 650,
    left: 27,
    height: 22,
  },
  signUp: {
    marginTop: -13,
    marginLeft: -28,
    color: Color.colorWhite,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
    left: "50%",
  },
  button30: {
    right: 28,
    bottom: 104,
    backgroundColor: Color.colorBlueviolet,
    height: 44,
    borderRadius: Border.br_xs,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  textbox91: {
    top: 583,
    width: 336,
  },
  alreadyHaveAnContainer: {
    top: 762,
    left: 71,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  signUpWithEmailInputEma: {
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

export default SignUpWithEmailInputEma;
