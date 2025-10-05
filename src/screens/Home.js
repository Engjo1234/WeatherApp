import { View, Text, StyleSheet ,Image ,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import {getCurrentWeather,getForecast } from '../Api/Weather'
import {WeatherContext} from '../context/WeatherContext'
import { theme } from '../constants/Theme'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation, useRoute} from '@react-navigation/native'
import axios from 'axios'
import { setColorScheme } from 'react-native/types_generated/Libraries/Utilities/Appearance'
import {get} from '../Api/Weather'
// const forecastData = [
//   { day: "SATURDAY", icon: require('../images/cloudy.png'), max: "35°", min: "11°" },
//   { day: "SUNDAY", icon: require('../images/cloudy.png'), max:" 32°", min: "11°" },
//   { day: "MONDAY", icon:require('../images/cloudy.png'), max: '24°', min: '15°' },
//   { day: "TUESDAY", icon: require('../images/cloudy.png'), max: '23°', min: '14°' },
//   { day: "WEDNESDAY", icon: require('../images/cloudy.png'), max: '21°', min: '13°' },
//   { day: "THURSDAY", icon: require('../images/cloudy.png'), max: '20°', min: '12°' },
//   { day: "FRIDAY", icon: require('../images/cloudy.png'), max: '18°', min: '11°' },
// ];

export default function Home() {
const navigation= useNavigation()
const [card,setcard]=useState([])
const [forecast,setforecast]=useState([])
const route =useRoute()

useEffect(() => {
    if (route.params?.data) {
      const weatherData = {
        location: route.params.data.location,
        current: route.params.data.current,
      };
      setcard(weatherData);
      setforecast(route.params.data.forecast.forecastday);
    } else {
      getCurrentWeather();
    }
  }, [route.params?.data]);

function getCurrentWeather(){
  get('/forecast.json','&q=Tanta&days=7&aqi=no&alerts=no').then((res)=>{
    console.log(res.data)
    const weatherData={
  location: res.data.location,
  current: res.data.current
}
    setcard(weatherData)
    setforecast(res.data.forecast.forecastday)
  }).catch((err)=>{
    console.log('error',err)
  })
}

  return (
    <View style={styles.continer}>
      <Text style={styles.text}>Weather</Text>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View style={styles.card}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }} >
          <View style={styles.items}>
          <Text style={styles.secound_text} >{card?.location?.name}</Text>
          <Text style={styles.secound_text}>{card?.current?.temp_c}°</Text>
          </View>
          <Image 
          source={{uri: "https:" + card?.current?.condition?.icon}}
          style={{width:50,height:50}}
          />

        </View>
        <Text style={styles.secound_text}>{card?.current?.condition?.text}</Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={styles.items}>
            <Text style={styles.third_text}>Feels Like</Text>
            <Text style={styles.third_text} >{card?.current?.feelslike_c}°</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.third_text}>Humidity</Text>
            <Text style={styles.third_text} >{card.current?.humidity} %</Text>
          </View>
          <View style={styles.items}>
          <Text style={styles.third_text}>Wind</Text>
          <Text style={styles.third_text} >{card?.current?.wind_mph} m/s</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Search')}ق
        style={styles.search}>
       <Icon name="search" size={15} color={theme.colors.light.text}/>
       <Text style={[styles.third_text,{color:theme.colors.light.text}]}> Search City</Text>
        </TouchableOpacity>
       <TouchableOpacity
       onPress={()=>navigation.navigate('Settings')}
       style={styles.search}>
       <Icon name="settings" size={15} color={theme.colors.light.text}/>
       <Text style={[styles.third_text,{color:theme.colors.light.text}]}> Settings</Text>
        </TouchableOpacity>
      </View>
      <FlatList
      data={forecast.slice(0,3)}
      keyExtractor={(item) => item.date}
      
      renderItem={({item})=>{
        const dayName = new Date(item.date).toLocaleDateString("en-US", { weekday: "long" })
        return(
         <View style={styles.days}>
        <Text style={styles.secound_text}>{dayName}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-around",width:'50%'}}>
        <Image 
        source={{uri: "https:" + item.day.condition.icon}}
          style={{width:30,height:30}}
          />
        <Text style={styles.secound_text}>{item.day.maxtemp_c}°</Text>
        <Text style={styles.secound_text}>{item.day.mintemp_c}°</Text>
        </View>
      </View> 
  )}}
      />
      </ScrollView>
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
    marginBottom: theme.spacing.xs,
    fontWeight:'bold'
    
  },
  card:
  {
    width: "100%",
    height: 200,
    backgroundColor: theme.colors.light.card,
    borderRadius: 20,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg

  },
  secound_text: {
    fontSize: theme.font.size.title,
    color: theme.colors.light.text,
    marginBottom: theme.spacing.xs
  },
  third_text: {
    fontSize: theme.font.size.subtitle,
    color: theme.colors.light.secondaryText,
  },
  items: {
    alignItems: "center",
  }
  ,button:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginBottom: theme.spacing.lg
  },
  days:{
    flex:1,
    justifyContent:"space-between",
    flexDirection:"row",
    marginBottom: theme.spacing.lg

  },
  search:{flexDirection:"row",alignItems:'center',justifyContent:'center',width:'49%',height:50,backgroundColor:theme.colors.light.card,borderRadius:12}
})