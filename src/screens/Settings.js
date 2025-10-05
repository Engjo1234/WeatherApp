import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React ,{useState,useRef }from 'react'
import { theme } from '../constants/Theme'
import Icon from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Settings() {
    const refRBSheet=useRef()
    const [unit, setUnit] = useState("Celsius")
  const [wind, setWind] = useState("m/s")
  const [notifications, setNotifications] = useState(false)
  const [location, setLocation] = useState("Cairo")

 return (
  <View style={styles.continer}>
   <Text style={styles.text}>Settings</Text>
   <TouchableOpacity
   onPress={()=>refRBSheet.current.open()}
   style={styles.button}>
    <View style={styles.arrow}>
     <Text style={styles.text}>Temperature Unit</Text>
     <Icon name='chevron-right' size={20} style={{ color: theme.colors.light.text }} />
    </View>
    <Text style={styles.secound_text}>Celsius</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.button}>
    <View style={styles.arrow}>
    <Text style={styles.text}>Wind Speed</Text>
    <Icon name='chevron-right' size={20} style={{ color: theme.colors.light.text }} />
    </View>
    <Text style={styles.secound_text}>m/s</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.button1}>
    <Text style={styles.text}>Notifications</Text>
    <Fontisto name='toggle-off' size={40} style={{ color: theme.colors.light.grey }} />
   </TouchableOpacity>
   <TouchableOpacity style={styles.button1}>
    <Text style={styles.text}>Location</Text>
    <Text style={styles.secound_text}>Cairo</Text>
   </TouchableOpacity>
  
<RBSheet
  ref={refRBSheet}
  
  >
        <Text style={[styles.text,{alignSelf:'center',}]}>Temperature unit</Text>
    <View style={{width:'100%',borderBottomWidth:1,borderColor:theme.colors.light.grey}}></View>
    <View style={{alignItems:'center',justifyContent:'space-between',flex:1}}>
    <TouchableOpacity style={styles.bottomsheet}>
        <Text style={[styles.secound_text,{marginBottom:0,marginLeft:5}]}>Celsius</Text>
        <Icon name='chevron-right' size={20} style={{ color: theme.colors.light.text ,marginRight:5}} />
    </TouchableOpacity>
    <View style={styles.bottomsheet}>
        <Text style={[styles.secound_text,{marginBottom:0}]}>F</Text>
        <Icon name='chevron-right' size={20} style={{ color: theme.colors.light.text }} />
    </View>
    <View style={styles.bottomsheet}>
        <Text style={[styles.secound_text,{marginBottom:0}]}>F</Text>
        <Icon name='chevron-right' size={20} style={{ color: theme.colors.light.text }} />
    </View>
    
    </View>
    <TouchableOpacity style={{width:'90%',borderRadius:theme.spacing.xl,height:50,backgroundColor:theme.colors.light.card,alignItems:'center',justifyContent:'center'}}>
    <Text style={styles.text}>Notifications</Text>
    </TouchableOpacity>
  </RBSheet>
  </View>
  
 )
}
const styles = StyleSheet.create({
 continer: {
  flex: 1,
  backgroundColor: theme.colors.light.background,
  padding: theme.spacing.md,
 },
 text: {
  fontSize: theme.font.size.title,
  color: theme.colors.light.text,
  marginBottom: theme.spacing.sm
 },
 secound_text: {
  fontSize: theme.font.size.subtitle,
  color: theme.colors.light.secondaryText,
  marginBottom: theme.spacing.sm

 },
 button: {
  width: "100%",
  height: 100,
  borderRadius: 12,
  backgroundColor: theme.colors.light.card,
  padding: theme.spacing.sm,
  marginBottom: theme.spacing.sm
 },
 button1: {
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: 'row',
  height: 60,
  borderRadius: 12,
  backgroundColor: theme.colors.light.card,
  padding: theme.spacing.sm,
  marginBottom: theme.spacing.sm
 },
 arrow:
 {
  alignItems: 'center',
  justifyContent: "space-between",
  flexDirection: 'row'
 },
 bottomsheet:{
    width:'100%',
    height:35,
    borderBottomWidth:1,
    borderColor:theme.colors.light.grey,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
}
})