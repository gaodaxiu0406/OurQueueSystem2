/**
 * Created by ZhaoQiHui on 2017/8/8.
 */
import React,{Component} from "react";
import itemList from "../../../mock/orderList"
import ItemDetail from '../../container/itemDetail/itemDetail.js'
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
export default  class HotList extends Component{
    render(){
        return (
            <ul>
                {
                    itemList.map((item,index)=>{
                        return(
                            <li className="item" key={index}>
                                <Link to={"/itemDetail"}>
                                    <Route path="/itemDetail" component={ItemDetail}

                                    />
                                    <img src={item.img}/>
                                    <p>{item.title}</p>
                                    <p>当月销量:{item.count}</p>
                                    <p>售价:<span>${item.price}</span></p>
                                    <p>评价条数:{item.commentState}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        )
    }
}