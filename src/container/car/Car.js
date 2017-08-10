
import React,{Component} from "react";
import ReactDOM from 'react-dom';
import Header from "../../components/header/Header";
import "./car.less"
export default  class Car extends Component{
    constructor(){
        super();
        this.state={title:'我的购物车',count:0}
    }
    handleClickM=()=>{
        this.setState(x=>(
            {count:x.count-1}
            ));
    };
    handleClickAdd=()=>{
        this.setState(x=>(
            {count:x.count+1}
        ));
    };
    render(){
        return (
            <div className="Car">
                <Header title={this.state.title}/>
                <ul>
                    <li>
                        <img src={require("./avatar.png")} alt=""/>
                        <span></span>
                        <div>
                            <p>price</p>
                            <span onClick={this.handleClickM.bind(this)}>-</span>
                            <span>{this.state.count}</span>
                            <span onClick={this.handleClickAdd.bind(this)}>+</span>
                        </div>
                    </li>
                    <li>
                        <img src={require("./图层 2.png")} alt=""/>
                        <span></span>
                        <div>
                            <p>price</p>
                            <span onClick={this.handleClickM.bind(this)}>-</span>
                            <span>{this.state.count}</span>
                            <span onClick={this.handleClickAdd.bind(this)}>+</span>
                        </div>
                    </li>
                    <li>
                        <img src={require("./图层 3.png")} alt=""/>
                        <span></span>
                        <div>
                            <p>price</p>
                            <span onClick={this.handleClickM.bind(this)}>-</span>
                            <span>{this.state.count}</span>
                            <span onClick={this.handleClickAdd.bind(this)}>+</span>
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