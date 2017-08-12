
import React,{Component} from "react";
import ReactDOM from 'react-dom';
import {ajax} from '../../util/index';
import Header from "../../components/header/Header";
import "./car.less"
import Footer from '../../components/footer/Footer';
import {connect} from "react-redux";

class Car extends Component{
    constructor(){
        super();
        this.state={title:'我的购物车',count:0,totalprice:0}
    }
    componentWillMount(){
        ajax({
            method:'get',
            url:'http://localhost:8001/car',
        }).then((res)=>{
            let carLength=JSON.parse(res).reduce((sum,value)=>(sum+value.num),0);
            let totalPrice=JSON.parse(res).reduce(function (sum,value) {
                let price=value.price*value.num;
                return sum+price
            },0);
            let goodsList=JSON.parse(res);
            this.setState({goodsList,carLength,totalPrice});
            this.props.addGoods&&this.props.addGoods({
                carLength
            });
            this.props.caculateprice(totalPrice);
        });
    }
    handleClick=()=>{
        let time=this.refs.time.value;
        console.log(time,88888888888888);
        this.props.time(time);
        alert('您可以在购物车付款了哦亲~');
        this.props.history.push('/pay');
    };
    handleClick1=()=>{
        if(confirm('请登录您的用户进行付款')){
            this.props.history.push('/signin')
        }
    };
    handleClickM=(item)=>{
        ajax({
            method:'post',
            url:'http://localhost:8001/additem',
            data:{item,flag:"true"}
        }).then((res)=>{
            let carLength=JSON.parse(res).reduce((sum,value)=>(sum+value.num),0);
            let totalPrice=JSON.parse(res).reduce(function (sum,value) {
                let price=value.price*value.num;
                return sum+price
            },0);
            let goodsList=JSON.parse(res);
            this.setState({goodsList,carLength,totalPrice});
            this.props.addGoods&&this.props.addGoods({
                carLength
            });
            this.props.caculateprice(totalPrice);
        })
    };
    handleClickAdd=(item)=>{
        ajax({
            method:'post',
            url:'http://localhost:8001/additem',
            data:{item}
        }).then((res)=>{
            let carLength=JSON.parse(res).reduce((sum,value)=>(sum+value.num),0);
            let totalPrice=JSON.parse(res).reduce(function (sum,value) {
                let price=value.price*value.num;
                return sum+price
            },0);
            let goodsList=JSON.parse(res);
            this.setState({goodsList,carLength,totalPrice});
            this.props.addGoods&&this.props.addGoods({
                carLength
            });
            this.props.caculateprice(totalPrice);
        })
    };
    render(){
        return (
            <div className="Car">
                <Header title={this.state.title}/>
                <ul>
                    {this.state.goodsList&&this.state.goodsList.map((goods,index)=>(
                        <li key={index}>
                            <img src={goods.img} alt=""/>
                            <div>
                                <p>price:{goods.price}</p>
                                <span onClick={this.handleClickM.bind(this,goods)}>-</span>
                                <span>{goods.num}</span>
                                <span onClick={this.handleClickAdd.bind(this,goods)}>+</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="price">
                    <span>合计:</span>
                    <span>{this.state.totalPrice}元</span>
                </div>
                <div className="time">
                    <p>请输入到店时间</p>
                    <input id="time" ref="time"  type="time"/>
                </div>
                <div className="submit">
                    {
                        this.props.nickname=='(｡･∀･)ﾉﾞ嗨  主银~~!!'?<button className="btn" onClick={this.handleClick1}>请点击登录您的用户后提交订单</button>:<button className="btn" onClick={this.handleClick}>提交订单</button>
                    }
                </div>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    length:Number(state.goodsReducer.length)?state.goodsReducer.length:0,
    nickname:state.userReducer.nickname
});
let mapDispatchToProps=dispatch=>({
    addGoods:(goods)=>dispatch({type:"ADD_GOODS",goods}),
    caculateprice:(totalPrice)=>dispatch({type:"CACULATE_PRICE",totalPrice}),
    time:(time)=>dispatch({type:"TIME",time})
});

export default connect(mapStateToProps,mapDispatchToProps)(Car)