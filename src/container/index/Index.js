
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


class Index extends Component{
    constructor(){
        super();
        this.state={title:'(｡･∀･)ﾉﾞ嗨  主银~~!!'}
    }
    componentWillMount(){
        this.setState({nickname:this.props.nickname});
        console.log(this.state,33333);
        console.log(utils.readUsers(),666666666);
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
                <Header title={this.props.nickname}/>
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
                    (this.state.title=='(｡･∀･)ﾉﾞ嗨  主银~~!!')||(this.state.title=='请登录您的账户')?<div className="sing">
                        <p>立即登录查看最新优惠券</p>
                        <Link to="/signup">注册</Link>
                        <Link to="/signin">登录</Link>
                    </div>:''
                }
                <div>
                    <p className="toDayList">~≈今日热卖≈~</p>
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