
import React,{Component} from "react";
import Header from "../../components/header/Header";
import './pay.less'
export default  class Pay extends Component{
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
        return (
            <div>
                <Header title={this.state.title}/>
                <div className="pay">
                    <div className="price">
                        <span>合计需付款</span>
                        <span>price</span>
                    </div>
                    <div className="money">
                        <p>请输入您的付款金额</p>
                        <input type="number"/>
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