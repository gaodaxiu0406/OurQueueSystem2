/**
 * Created by ZhaoQiHui on 2017/8/7.
 */
import React,{Component} from "react";
import Header from "../../components/header/Header";
export default  class Pay extends Component{
    constructor(){
        super();
        this.state={title:'支付页'}
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                Pay
            </div>
        )
    }
}