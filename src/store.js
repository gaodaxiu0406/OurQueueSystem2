/**
 * Created by ZhaoQiHui on 2017/8/9.
 */
import {createStore,combineReducers} from "redux";
const initState={nickname:"(｡･∀･)ﾉﾞ嗨  主银~~!!"};
const GET_USERINFO="GET_USERINFO";
function reducer(state=initState,aciton) {
    console.log(aciton);
    switch (aciton.type){
        case GET_USERINFO:
            return{nickname:aciton.text.nickname,pwd:aciton.text.pwd,tel:aciton.text.tel};
        default:
            return state;
    }
}
export let store=createStore(reducer);