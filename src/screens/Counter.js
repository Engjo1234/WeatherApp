import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { theme } from '../constants/Theme'
import { useSelector ,useDispatch} from 'react-redux'
export default function Counter() {
    const dispatch=useDispatch()
    const globalstate=useSelector((state)=>state)
    //  const tooglestate=useSelector((state)=> state.showCounter)
    // const Counterstate=useSelector((state)=>{
    //     if(state.value<1){
    //         return <Text>no number</Text>
    //     }
    //    return state.value
    // })
    const Handlecountervalue=(value)=>{
         if(value<1){
            return <Text>no number</Text>
        }
       return value
    }
    const CounterOpertion=(type,payload)=>{
        dispatch({type,payload})
    }
    // const increase=()=>{
    //     const action={type:'increse',payload:4}
    //     dispatch(action) 
    // }
    // const dcrease=()=>{
    //     const action={type:'dcrese',payload:2}
    //     dispatch(action)
    // }
   const toogleCounter=()=>{
    dispatch({type:'toogleCounter'})
   }
    
  return (
    
    <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
      <Text style={{fontSize:theme.font.size.subtitle,marginBottom:10}}>Counter:{Handlecountervalue(globalstate.value )}</Text>

        {globalstate.showCounter&&(<View style={style.button}>
    <TouchableOpacity
    onPress={()=>CounterOpertion('increse',5)}
    style={style.search}>
        <Text>+</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=>CounterOpertion('dcrese',5)}
    style={style.search}>
        <Text>-</Text>

    </TouchableOpacity>
 
</View>)}

<TouchableOpacity 
    onPress={toogleCounter}
    style={style.search}>
        <Text>show/hide</Text>

    </TouchableOpacity>
    </View>
  )
}
const style=StyleSheet.create({
button:{
    width:"100%",
    alignItems:'center',
    justifyContent:"space-around",
    flexDirection:"row",
    marginBottom: theme.spacing.lg
  },
  search:{alignItems:'center',justifyContent:'center',width:'40%',height:50,backgroundColor:theme.colors.light.grey,borderRadius:12}
})