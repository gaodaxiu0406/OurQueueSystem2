
import {createStore,combineReducers} from "redux";
const initState={nickname:"(｡･∀･)ﾉﾞ嗨  主银~~!!"};
const GET_USERINFO="GET_USERINFO";
/*
 import {persistStore, autoRehydrate} from 'redux-persist'
 const store = createStore(reducer, autoRehydrate())
 persistStore(store)
*/
function reducer(state=initState,aciton) {
    console.log(aciton,88888888);
    switch (aciton.type){
        case GET_USERINFO:
            return{nickname:aciton.text.nickname,password:aciton.text.password,tel:aciton.text.tel};
        default:
            return state;
    }
}
export let store=createStore(reducer);