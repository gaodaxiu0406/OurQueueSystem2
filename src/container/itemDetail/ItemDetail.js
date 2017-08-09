/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './itemDetail.less'
export default  class ItemDetail extends Component{
    constructor(){
        super();
        this.state={title:'食品详情'}
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <Header state={this.state.title}/>
                <div className="itemPhoto">
                    <img/>
                </div>
                <div className="AddInCar">
                    <strong>
                        巨无霸
                    </strong>
                    <span>
                    $6
                </span>
                    <Link to="/car">
                    <i>+</i>
                    </Link>
                </div>
                <p>

                </p>
                <Footer/>
            </div>
        )
    }
}