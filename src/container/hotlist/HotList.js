
import React,{Component} from "react";
import itemList from "../../../mock/orderList"
import {ajax} from '../../util/index'
import ItemDetail from '../../container/itemDetail/ItemDetail.js'
import {
    HashRouter as Router,Route,Link,Switch,withRouter
} from "react-router-dom";
class HotList extends Component{
    constructor(){
        super();
        this.state={
            list:[
                {
                    id:Date.now(),
                    img:'',
                    title:'',
                    count:0,
                    price:'',
                    commentState:0
                }
            ]
        }
    }
    componentWillMount(){
        ajax({
            method:'get',
            url:'http://localhost:8000/list',
            async:true,
        }).then((res)=>{
            res=res.split("=")[1];
            res=eval("("+res+")");
            this.setState({list:res})
        });
    }
    handelClick=(item)=>{
        this.props.history.push({
            pathname:'/itemdetail',
            state:item
        })
    };
    render(){
        return (
        <ul>
            {
                this.state.list.map((item, index) => {
                    return (
                        <li onClick={this.handelClick.bind(this,item)} className="item" key={index} id={index}>
                                <img src={item.img}/>
                                <p>{item.title}</p>
                                <p>当月销量:{item.count}</p>
                                <p>售价:<span>${item.price}</span></p>
                                <p>评价条数:{item.commentState}</p>
                        </li>
                    )
                })
            }
        </ul>
        )
    }
}
export default withRouter(HotList)