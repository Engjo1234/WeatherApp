import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'
import { theme } from '../constants/Theme'

export default function Splash() {
  return (
    <View style={styles.continer}>
        <Image 
        source={require('../images/weather.png')}
        style={{width:100,height:100}}
        />
      <Text style={styles.text}>Weather</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    continer: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: theme.colors.light.background,
        padding: theme.spacing.md,
      },
      text: {
    fontSize: theme.font.size.title,
    color: theme.colors.light.text,
    marginBottom: theme.spacing.xs,
    fontWeight:'bold'
    
  },
})