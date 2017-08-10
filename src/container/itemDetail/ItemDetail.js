/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import {ajax} from '../../util/index';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './itemDetail.less'
import comment from '../../../mock/comment'
 class ItemDetail extends Component{
    constructor(){
        super();
        this.state={title:'食品详情'}
    }
    componentWillMount(){
    }
    toStarArr(count){
        let arr = [];
        for(var i =1;i<=5;i++){
            if(count>=i){
                arr.push(true)
            }else{
                arr.push(false);
            }
        }
        return arr
    }
    itemAdd=()=>{
        let item=this.props.location.state;
        ajax({
            method:'get',
            url:'http://localhost:8001/car',
        }).then((res)=>{
            let carLength=JSON.parse(res).length;
            console.log(carLength,9999999999);
            this.setState({carLength});
            this.props.addGoods({
                carLength
            })
        });
        ajax({
            method:'post',
            url:'http://localhost:8001/additem',
            data:{
                item
            }
        }).then((res)=>{
            let Counter=JSON.parse(res).length
        })
};
    render(){
       if (this.props.location.state){
           return (
               <div className="itemDetail">
                   <Header state={this.state.title}/>
                   <div className="itemPhoto">
                       <img src={this.props.location.state.img}/>
                   </div>
                   <div className="itemAdd">
                   <div className="AddInCar">
                       <strong>
                           {this.props.location.state.title}
                       </strong>
                       <p>
                    $<span>{this.props.location.state.price}</span>
                </p>

                           <i onClick={this.itemAdd}>+</i>
                   </div>
                   <div className="comment">
                       <strong>商品评价</strong><span>(好评率98%)</span>
                       <ul>
                           {
                               comment.data.map((item,index)=>{
                                   return(<li key={index} className="commentList">
                                        <p>{item.username}</p>
                                        <span>{item.comment}</span>
                                       <p className="start">评级  {
                                        this.toStarArr(item.star).map((item,index)=>{
                                            if(item){
                                                return <span key={index} className="active"></span>
                                            }else{
                                                return <span key={index}></span>
                                            }
                                        })
                                       }</p>
                                   </li>)
                               })
                           }
                       </ul>
                   </div></div>
                   <Footer length={this.state.carLength}/>
               </div>
           )
       }else {
            return(
                <div>
                    <p className="noContent">
                        看来主银是第一次来呢 ╮(￣▽￣)╭ <br/>
                        请到菜单中尽情挑选吧~~
                    </p>
                </div>
            )
       }

    }
}

let mapStateToProps=state=>({

});
let mapDispatchToProps=dispatch=>({
    addGoods:(goods)=>dispatch({type:"ADD_GOODS",goods})
});

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail)