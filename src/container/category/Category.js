import React,{Component} from "react";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import Favorite from "./Favorite";
import History from "./History";
import HotList from "../hotlist/HotList";
import Header from "../../components/header/Header";
import itemList from "../../../mock/orderList"
import ReactSwipe from 'react-swipe';
import o1 from  '../../img/swiper/download.jpg'
import o2 from  '../../img/swiper/download-1.jpg'
import o3 from '../../img/swiper/download-2.jpg'
import o4 from '../../img/swiper/download-3.jpg'
import './category.less'
import Footer from "../../components/footer/Footer";

export default  class Category extends Component{
    constructor(){
        super();
        this.state={title:'点餐'}
    }
    render(){
        return (
            <div className="foodMenu">
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
                <Header title={this.state.title}/>
                <form>
                    <label htmlFor="search">
                        <input id="search" type="text" placeholder="主银~想吃啥??? (●ﾟωﾟ●)"/><button>检索</button>
                    </label>
                </form>
                <div className="menu">
                <Link to="/category/histroy">以前吃过</Link>
                <Link to="/category/favorite">我最喜爱</Link>
                <Link to="/category/hotlist">美食分类</Link>
                </div>

                <div className="menuList">
                <Route path="/category/histroy" component={History}></Route>
                </div>
                <div className="menuList">
                <Route path="/category/favorite" component={Favorite}></Route>
                </div>
                <div className="menuList">
                <Route path="/category/hotlist" component={HotList}></Route>
                </div>

            </div>

        )
    }
}