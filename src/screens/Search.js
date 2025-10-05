import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { theme } from '../constants/Theme'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { get, getForecast, searchCities } from '../Api/Weather'
export default function Search() {
 const navigation = useNavigation()
 const [Cityname, setCityname] = useState('')
 const [Cities, setCities] = useState([])

 // handle search
 const handleSearch = async (text) => {
  setCityname(text)

  if (text.length > 2) { // يبدأ البحث بعد 3 حروف
   try {
    const res = await searchCities(text)
    setCities(res.data)
   } catch (err) {
    console.log("Error fetching cities:", err)
   }
  } else {
   setCities([]) // لو مفيش كتابة
  }
 }

 // SelectCity
 function SelectCity(city) {
  getForecast(city).then((res) => {
   console.log(res.data)
   navigation.navigate('Home', { data: res.data })

  }).catch((error) => {
   console.log('error :', error)
  })
 }
 return (
  <View style={styles.continer}>
   <Text style={styles.text}>Search</Text>
   <View style={{ width: '100%', height: 50, alignItems: 'center', borderRadius: 12, backgroundColor: theme.colors.light.grey, flexDirection: 'row' }}>
    <Icon name="search" size={15} color={theme.colors.light.text} style={{ marginLeft: theme.spacing.xs }} />
    <TextInput
     style={{
      width: "100%",
      height: 50,
      marginLeft: theme.spacing.xs
     }}
     placeholder='Search...'
     value={Cityname}
     onChangeText={handleSearch} />
   </View>
   <FlatList
    showsVerticalScrollIndicator={false}
    data={Cities}
    keyExtractor={(item) => item.id?.toString()}
    renderItem={({ item }) => (
     <TouchableOpacity
      onPress={() => SelectCity(item.name)}
      style={styles.list}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.secound_text}>{item.region},{item.country}</Text>

     </TouchableOpacity>
    )}
   />
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
  marginBottom: theme.spacing.xs
 },
 secound_text: {
  fontSize: theme.font.size.subtitle,
  color: theme.colors.light.accent,
  marginBottom: theme.spacing.xs
 },
 list: {
  width: "100%",
  height: 80,
  borderRadius: 12,
  padding: theme.spacing.sm,
  marginBottom: theme.spacing.sm
 }
})