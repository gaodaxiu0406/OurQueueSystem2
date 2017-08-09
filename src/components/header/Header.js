import React,{Component} from 'react';
import './header.less';
export default class Header extends Component{
    render(){
        // console.log(this.props);
        return(
            <div className="header">
                {this.props.title}
            </div>
        )
    }
}