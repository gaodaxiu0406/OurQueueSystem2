import React,{Component} from 'react';

import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
// import "../../font/iconfont.css"
import './footer.less';
export default class Footer extends Component{
    render(){
        return(
        <Router>
            <div className="footer">
                <span className="footerText footer-recommend">
<Link to="/"><i className="iconfont icon-aixin"></i><span>首页推荐</span></Link></span>
                <span className="footerText footer-list">

                    <Link to='/category/hotlist'><i className="iconfont icon-mifan"></i><span>菜单分类</span></Link></span>
                <span className="footerText footer-message">
                   <Link to='/info'> <i className="iconfont icon-xiaolian"></i><span>个人信息</span></Link></span>
            </div>
        </Router>

        )
    }
}