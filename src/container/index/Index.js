
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
class Index extends Component{
    constructor(){
        super();
        this.state={title:'(｡･∀･)ﾉﾞ嗨  主银~~!!',
        }
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
                    (this.state.title==this.props.nickname)||(this.props.nickname=='请登录您的账户')?<div className="sing">
                        <p>立即登录查看最新优惠券</p>
                        <Link to="/signup">注册</Link>
                        <Link to="/signin">登录</Link>
                    </div>:''
                }

                <div>
                    <p className="toDayList">~≈今日热卖≈~</p>
                    <HotList/>
                </div>
                <Footer/>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    nickname:state.nickname,
    password:state.password,
    tel:state.tel
});
let mapDispatchToProps=dispatch=>({});

export default connect(mapStateToProps,mapDispatchToProps)(Index)