
import React, {Component} from 'react';

import {
    HashRouter as Router, Route, Link, Switch
} from "react-router-dom";
// import "../../font/iconfont.css"
import './footer.less';

export default class Footer extends Component {
    render() {
        return (
            <Router>
                <div className="footer">
                    <div className="shopCar">
                        <Link to="/car">
                            <span>0</span>
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
