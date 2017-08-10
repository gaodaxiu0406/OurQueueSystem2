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
    componentWillMount(){
        console.log('ok'.repeat(10),this.props.location.state);
    }

    render(){
       if (this.props.location.state){
           return (
               <div>
                   <Header state={this.state.title}/>
                   <div className="itemPhoto">
                       <img src={this.props.location.state.img}/>
                   </div>
                   <div className="AddInCar">
                       <strong>
                           {this.props.location.state.title}
                       </strong>
                       <span>
                    ${this.props.location.state.price}
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
       }else {
            return(
                <div>
                    <p className="noContent">
                        看来主银是第一次来呢 ╮(￣▽￣)╭ <br/>
                        请到菜单中尽情挑选吧~~
                    </p>
                </div>
            )
       }

    }
}