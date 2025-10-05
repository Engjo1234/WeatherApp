import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { theme } from '../constants/Theme'
import AppIntroSlider from 'react-native-app-intro-slider'
const slides = [
 {
  key: 1,
  title: 'Welcome',
  text: "Get real-time weather ",
  text1: 'for your location',
  image: require("../images/meteorology.png"),
 },
 {
  key: 2,
  title: 'Check Weather',
  text: "View 7-day detailed weather forecasts. ",
  image: require("../images/weather-forecast.png"),
 },
 {
  key: 3,
  title: 'Stay Prepared',
  text: "Always know if you need an umbrella or sunglasses. ",
  image: require("../images/disaster.png"),
 },
]

export default function IntroSlider() {
 const renderItem = ({ item }) => (
  <View style={styles.continer}>
   <Image
    source={item.image}
    style={{ width: 100, height: 100, marginBottom: theme.spacing.sm }}
   />
   <Text style={styles.text}>{item.title}</Text>
   <Text style={styles.third_text}>{item.text} </Text>
   <Text style={styles.third_text}>{item.text1}</Text>
  </View>
 );
 const renderNextButton = () => {
  return (
   <View style={styles.NextAndDonebutton}>
    <Text style={[styles.text, { color: theme.colors.light.text }]}> Next</Text>
   </View>
  )
 }

 const renderSkipButton = () => {
  return (
   <Text style={[styles.text, { color: theme.colors.light.text, marginTop: 5, textAlign: 'center' }]}>Skip</Text>
  )
 }
 return (

  <AppIntroSlider
   renderItem={renderItem}
   data={slides}
   renderNextButton={renderNextButton}
   renderSkipButton={renderSkipButton}
   bottomButton={true}
   showSkipButton={true}
   showNextButton={true}
   activeDotStyle={styles.activeDotStyle}
   dotStyle={styles.dotStyle}

  />
 )
}
const styles = StyleSheet.create({
 continer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.light.background,
  padding: theme.spacing.md,
 },
 text: {
  fontSize: theme.font.size.title,
  color: theme.colors.light.text,
  marginBottom: theme.spacing.xs,
  fontWeight: 'bold'

 },
 third_text: {
  fontSize: theme.font.size.subtitle,
  color: theme.colors.light.secondaryText,
  textAlign: 'center'
 },
 NextAndDonebutton: {
  width: "100%",
  height: 50,
  borderRadius: 12,
  backgroundColor: theme.colors.light.accent,
  alignItems: 'center',
  justifyContent: 'center'
 },
 activeDotStyle: {
  backgroundColor: theme.colors.light.accent
 },
 dotStyle: {
  backgroundColor: theme.colors.light.grey
 },
})