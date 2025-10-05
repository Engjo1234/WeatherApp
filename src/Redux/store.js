
import { Alert } from "react-native";
import { createStore } from "redux";
const initstate={value:0,showCounter:true}
const CounterReducer=(state=initstate,action)=>{
    if (action.type==='increse'){
        return {...state,value:state.value+action.payload}

    }
    if (action.type==='dcrese'){
        return {...state,value:state.value-action.payload}

    }
    if (action.type==='toogleCounter'){
        return {...state,showCounter:!state.showCounter}

    }
    return state;
}
const store=createStore(CounterReducer)

export default store;