import { BUY_CAKE } from "./CakeTypes"

const initialState = {
    numOfCakes:20
}

const cakeReducer = (state = initialState, aaction)=>{
    switch(aaction.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}
export default cakeReducer
