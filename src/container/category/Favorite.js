/**
 * Created by ZhaoQiHui on 2017/8/8.
 */
import React,{Component} from "react";
import itemList from "../../../mock/orderList"
import ItemDetail from '../../container/itemDetail/ItemDetail.js'
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
export default  class Favorite extends Component{
    render(){
        return (
            <div>
                <p className="noContent">
                    看来主银是第一次来呢 ╮(￣▽￣)╭ <br/>
                    请到菜单中尽情挑选吧~~
                </p>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        )
    }
}