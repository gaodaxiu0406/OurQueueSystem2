
import React,{Component} from "react";
import Header from "../../components/header/Header";
import './pay.less';
import {connect} from 'react-redux';
class Pay extends Component{
    constructor(){
        super();
        this.state={title:'支付页'}
    }
    handleLeft=()=>{
        if(confirm('确定付款？')){
            alert('恭喜您付款成功!');
            this.props.history.push('/index');
        }else {
            alert('您已取消付款!');
        }

    };
    handleRight=()=>{
        alert('您已取消付款!');
        this.props.history.push('/car');
    };
    render(){
        // console.log(this.props.totalPrice,66666666666666666);
        console.log(this.props.time,666666);
        return (
            <div>
                <Header title={this.state.title}/>
                <div className="pay">
                    <div className="price">
                        <span>合计需付款</span>
                        <span>{this.props.totalPrice}</span>
                    </div>
                    <div className="money">
                        <span>请确认您的到店时间:</span>
                        <span>{this.props.time}</span>
                    </div>
                    <div className="message">
                        <span>
                            付款后,请及时到店享用美食,一旦付款成功,概不退款。
                        </span>
                    </div>
                    <div className="click">
                        <button className="btn left" onClick={this.handleLeft}>确定</button>
                        <button className="btn right" onClick={this.handleRight}>取消</button>
                    </div>
                </div>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    totalPrice:state.goodsReducer.totalPrice,
    time:state.getTime.time,
    nickname:state.userReducer.nickname
});
let mapDispatchToProps=dispatch=>({
});
export default connect(mapStateToProps,mapDispatchToProps)(Pay)