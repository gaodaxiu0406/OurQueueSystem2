/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
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
class Index extends Component{
    constructor(){
        super();
        this.state={title:'(｡･∀･)ﾉﾞ嗨  主银~~!!',
        }
    }

    // componentWillMount(){
    //     ajax({
    //         method:'get',
    //         url:'http://localhost:8000/list',
    //         async:true,
    //     }).then((res)=>{
    //         console.log(res);
    //     });
    // }
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
                {/*待判断*/}
                <div className="sing">
                    <Link to="/signup">注册</Link>
                    <Link to="/signin">登录</Link>
                </div>

                <div>
                    <p className="toDayList">今日热卖</p>
                    <ul>
                    {
                        itemList.map((item,index)=>{
                            return(
                                    <li className="item" key={index}>
                                        <Link to={"/itemDetail/?id:"+encodeURIComponent(item.img)}>
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
                </div>
                <Footer/>
            </div>
        )
    }
}
let mapStateToProps=state=>({
nickname:state.nickname
});
let mapDispatchToProps=dispatch=>({})

export default connect(mapStateToProps,mapDispatchToProps)(Index)