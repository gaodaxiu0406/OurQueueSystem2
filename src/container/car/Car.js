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
        this.state={title:'我的购物车',count:0}
    }
    componentWillMount(){
        ajax({
            method:'get',
            url:'http://localhost:8001/car',
        }).then((res)=>{
            let carLength=JSON.parse(res).reduce((sum,value)=>(sum+value.num),0);
            let goodsList=JSON.parse(res);
            this.setState({goodsList,carLength});
            this.props.addGoods&&this.props.addGoods({
                carLength
            })

        });

    }
    handleClick=()=>{
        alert('您可以在购物车付款了哦亲~');
        this.props.history.push('/pay')
    };
    handleClickM=(item)=>{
        ajax({
            method:'post',
            url:'http://localhost:8001/additem',
            data:{item,flag:"true"}
        }).then((res)=>{
            let carLength=JSON.parse(res).reduce((sum,value)=>(sum+value.num),0);
            let goodsList=JSON.parse(res);
            this.setState({goodsList,carLength});
            this.props.addGoods&&this.props.addGoods({
                carLength
            })
        })
    };
    handleClickAdd=(item)=>{
        ajax({
            method:'post',
            url:'http://localhost:8001/additem',
            data:{item}
        }).then((res)=>{
            let carLength=JSON.parse(res).reduce((sum,value)=>(sum+value.num),0);
            let goodsList=JSON.parse(res);
            this.setState({goodsList,carLength});
            this.props.addGoods&&this.props.addGoods({
                carLength
            })

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
                    <span>合计</span>
                    <span>price</span>
                </div>
                <div className="time">
                    <p>请输入到店时间</p>
                    <input type="time"/>
                </div>
                <div className="submit">
                    <button className="btn" onClick={this.handleClick}>提交订单</button>
                </div>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    length:Number(state.goodsReducer.length)?state.goodsReducer.length:0
});
let mapDispatchToProps=dispatch=>({
    addGoods:(goods)=>dispatch({type:"ADD_GOODS",goods})
});

export default connect(mapStateToProps,mapDispatchToProps)(Car)
