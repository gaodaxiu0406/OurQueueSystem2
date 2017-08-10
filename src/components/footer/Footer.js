
import React, {Component} from 'react';
import {ajax} from '../../util/index'
import {connect} from "react-redux";

import {
    HashRouter as Router, Route, Link, Switch
} from "react-router-dom";
// import "../../font/iconfont.css"
import './footer.less';

class Footer extends Component {
    constructor(){
        super();
        this.state={
            carLength:0
        }
    }
        componentWillMount(){
        ajax({
            method:'get',
            url:'http://localhost:8001/car'
        }).then((res)=>{

            let carLength=JSON.parse(res).length;
            // this.setState({
            //     carLength:carLength
            // })
        })
        }
    render() {
        console.log(this.props,777777);
        return (
            <Router>
                <div className="footer">
                    <div className="shopCar">
                        <Link to="/car">
                            <span>{this.props.length}</span>
                            <p> </p>
                        </Link>
                    </div>
                    <Link className="nav" to="/"><span className="footerText footer-recommend">
                        <i className="iconfont icon-aixin"></i><span>首页推荐</span></span></Link>

                    <Link className="nav" to='/category/hotlist'>
                                            <span className="footerText footer-list">
                        <i className="iconfont icon-mifan"></i><span>菜单分类</span></span></Link>


                    <Link className="nav" to='/info'><span className="footerText footer-message"><i className="iconfont icon-xiaolian"></i><span>个人信息</span></span></Link>
                </div>
            </Router>

        )
    }
}
let mapStateToProps=state=>{
    console.log(Number(state.goodsReducer.length),1111111);
    return  {
    length:Number(state.goodsReducer.length)?state.goodsReducer.length:0
}};
let mapDispatchToProps=dispatch=>({

});

export default connect(mapStateToProps,mapDispatchToProps)(Footer)