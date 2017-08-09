/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import Header from "../../components/header/Header";
import "./car.less"
export default  class Car extends Component{
    constructor(){
        super();
        this.state={title:'我的购物车'}
    }
    render(){
        console.log(222);
        return (
            <div className="Car">
                <Header title={this.state.title}/>
                <ul>
                    <li>
                        <img src={require("./avatar.png")} alt=""/>
                        <span></span>
                        <div>
                            <p>price</p>
                            <span>-</span>
                            <span>2</span>
                            <span>+</span>
                        </div>
                    </li>
                    <li>
                        <img src={require("./图层 2.png")} alt=""/>
                        <span></span>
                        <div>
                            <p>price</p>
                            <span>-</span>
                            <span>2</span>
                            <span>+</span>
                        </div>
                    </li>
                    <li>
                        <img src={require("./图层 3.png")} alt=""/>
                        <span></span>
                        <div>
                            <p>price</p>
                            <span>-</span>
                            <span>2</span>
                            <span>+</span>
                        </div>
                    </li>

                </ul>
                <div className="price">
                    <span>合计</span>
                    <span>price</span>
                </div>
                <div className="time">
                    <p>请输入到店时间</p>
                    <input type="time"/>
                </div>
            </div>
        )
    }
}