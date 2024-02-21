import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <Text style={[styles.logIntoYour, styles.logIntoYourTypo]}>
        Log into your account
      </Text>
      <View style={styles.container102}>
        <View style={[styles.image75, styles.imagePosition]}>
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
        <View style={[styles.image76, styles.imagePosition]}>
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
      <View style={[styles.textbox11, styles.textboxBorder]}>
        <Text style={[styles.enterYourEmail, styles.logInTypo]}>
          Enter your email address
        </Text>
        <Image
          style={[styles.mailIcon, styles.mailIconPosition]}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
      </View>
      <View style={styles.button34}>
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </View>
      <View style={[styles.textbox12, styles.textboxBorder]}>
        <Text style={[styles.enterYourEmail, styles.logInTypo]}>
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
      <Text style={[styles.forgotPassword, styles.logIntoYourTypo]}>
        Forgot password?
      </Text>
      <View style={[styles.unisphereParent, styles.unisphereLayout]}>
        <Text style={[styles.unisphere, styles.unisphereLayout]}>
          UniSphere
        </Text>
        <Image
          style={styles.image71Icon}
          contentFit="cover"
          source={require("../assets/image-711.png")}
        />
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.logInTypo]}>
        <Text style={styles.dontHaveAn}>{`Don't have an account ?   `}</Text>
        <Text style={styles.signUpNow}>Sign Up now</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logIntoYourTypo: {
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
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
  textboxBorder: {
    height: 45,
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_300,
    left: 27,
    borderRadius: Border.br_xs,
    right: 27,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  mailIconPosition: {
    height: 20,
    width: 20,
    marginTop: -10.5,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  unisphereLayout: {
    width: 273,
    position: "absolute",
  },
  logIntoYour: {
    marginLeft: -69,
    top: 317,
    color: Color.colorLightslategray,
    textAlign: "center",
    left: "50%",
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
  image75: {
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
  image76: {
    width: 96,
    right: 0,
    top: "50%",
    marginTop: -20,
  },
  container102: {
    backgroundColor: Color.colorGray_200,
    height: 40,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  enterYourEmail: {
    marginTop: -13.5,
    left: 44,
    color: Color.colorSilver,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
  },
  mailIcon: {
    left: 16,
  },
  textbox11: {
    top: 381,
  },
  logIn: {
    marginTop: -13,
    marginLeft: -22,
    color: Color.colorWhite,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "50%",
    left: "50%",
  },
  button34: {
    top: 550,
    left: 28,
    backgroundColor: Color.colorBlueviolet,
    height: 44,
    borderRadius: Border.br_xs,
    right: 27,
    position: "absolute",
    overflow: "hidden",
  },
  removeRedEye: {
    right: 17,
  },
  textbox12: {
    top: 449,
  },
  forgotPassword: {
    top: 504,
    right: 28,
    color: "#3f0ea6",
    textAlign: "right",
  },
  unisphere: {
    top: 185,
    fontSize: FontSize.size_13xl,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_100,
    left: 0,
    textAlign: "center",
  },
  image71Icon: {
    left: 15,
    width: 241,
    height: 192,
    top: 0,
    position: "absolute",
  },
  unisphereParent: {
    top: 82,
    left: 58,
    height: 233,
  },
  dontHaveAn: {
    color: Color.colorGray_100,
  },
  signUpNow: {
    color: Color.colorCornflowerblue_100,
  },
  dontHaveAnContainer: {
    top: 637,
    left: 81,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  signIn: {
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

export default SignIn;
