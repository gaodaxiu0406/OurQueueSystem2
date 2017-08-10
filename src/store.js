
import {createStore,combineReducers} from "redux";
const initState={nickname:"(｡･∀･)ﾉﾞ嗨  主银~~!!"};
const GET_USERINFO="GET_USERINFO";
const ADD_GOODS="ADD_GOODS";
function userReducer(state=initState,aciton) {
    console.log(aciton,88888888);
    switch (aciton.type){
        case GET_USERINFO:
            return{nickname:aciton.text.nickname,password:aciton.text.password,tel:aciton.text.tel};
        default:
            return state;
    }

}
function goodsReducer(state={},action) {
    console.log(action,11111);
    switch (action.type){
        case ADD_GOODS:
            console.log(action.goods.carLength,2222222);
            return {length:action.goods.carLength};
        default:
            return state
    }

}
let reducer= combineReducers({userReducer,goodsReducer});
export let store=createStore(reducer);