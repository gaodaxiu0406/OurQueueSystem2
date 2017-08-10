/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default  class Pay extends Component{
    constructor(){
        super();
        this.state={title:'支付页'}
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>

            </div>
        )
    }
}