
import React,{Component} from "react";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import itemList from "../../../mock/orderList"
import {ajax} from '../../util/index'
import './index.less'
import ReactSwipe from 'react-swipe';
import Header from '../../components/header/Header'
import o1 from  '../../img/swiper/download.jpg'
import o2 from  '../../img/swiper/download-1.jpg'
import o3 from '../../img/swiper/download-2.jpg'
import o4 from '../../img/swiper/download-3.jpg'
import Footer from "../../components/footer/Footer";
import ItemDetail from "../../container/itemDetail/ItemDetail";
import {connect} from "react-redux";
import HotList from "../hotlist/HotList";
import utils from '../../localStorange/utils';
import sun from '../../img/遮阳棚.png'


class Index extends Component{
    constructor(){
        super();
        this.state={title:'(｡･∀･)ﾉﾞ嗨  主银~~!!'}
    }
    componentDidMount(){
        console.log(utils.readUsers());
        // console.log((JSON.parse(localStorage.users)).filter((item)=>item.nickname==this.props.nickname)[0].nickname,22222222)
        console.log(this.props.nickname);
        /*ajax({
            method:'get',
            url:'http://localhost:8001/other',
            async:true,
            headers:{} }).then((result)=>{
            console.log(result,1111111);
            result=JSON.parse(result);
            this.props.getUserInfo(result);
            result=result=="undefined"?'(｡･∀･)ﾉﾞ嗨  主银~~!!':result.nickname;
            this.setState({
                title:result
            });
        }).catch((err)=>{
            console.log(err);
        });*/
    }
    render(){
        return (
            <div className="index">
                {
                    this.state.title=='(｡･∀･)ﾉﾞ嗨  主银~~!!'?<Header title={this.props.nickname}/>:<Header title={(utils.readUsers().filter((item)=>item.nickname==this.props.nickname))[0].nickname}/>
                }
                <ReactSwipe className="carousel" swipeOptions={{startSlide: 2,
                    speed: 400,
                    auto: 3000,
                    continuous: true,
                    disableScroll: false,
                    stopPropagation: false,
                    }}>
                    <div><img src={o1}/></div>
                    <div><img src={o2}/></div>
                    <div><img src={o3}/></div>
                    <div><img src={o4}/></div>
                </ReactSwipe>
                {
                    this.props.nickname=='(｡･∀･)ﾉﾞ嗨  主银~~!!'?<div className="sing">
                        <p>立即登录查看最新优惠券</p>
                        <Link to="/signup">注册</Link>
                        <Link to="/signin">登录</Link>
                    </div>:''
                }
                <div className="today">
                    <p className="toDayList"><img src={sun} alt=""/><span>今 日 热 卖</span></p>
                    <HotList/>
                </div>

            </div>
        )
    }
}
let mapStateToProps=state=>({
    nickname:state.userReducer.nickname,
    password:state.userReducer.password
});


let mapDispatchToProps=dispatch=>({
    getUserInfo:(text)=>dispatch({type:"GET_USERINFO",text})
});

export default connect(mapStateToProps,mapDispatchToProps)(Index)