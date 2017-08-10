
import './info.less'
import React,{Component} from "react";
import Header from "../../components/header/Header";
import {ajax} from '../../util/index.js';
import {connect} from 'react-redux'

class Info extends Component{
    constructor(){
        super();
        this.state={title:'我的账号'}
    }
    // handleClick(){
    //     ajax({
    //         method:'post',
    //         url:'http://localhost:8000/info',
    //         async:true,
    //         data:{
    //             name:"aa"
    //         },
    //         headers:{} }).then((result)=>{
    //         console.log(result);
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    //     console.log('click');
    // }
    handleClick=()=> {
        console.log(this.props, 222222);
        ajax({
            method: 'post',
            url: 'http://localhost:8000/signin',
            async: true,
            // data:this.refs.nickname,
            headers: {}
        }).then((result) => {
            // result = JSON.parse(result);
            alert('您已退出登录！');
            this.props.history.push("/signin");
            data = "(｡･∀･)ﾉﾞ嗨  主银~~!!";
            this.props.getUserInfo(data);
            // console.log(this.props,3333333);
        }).catch((err) => {
            console.log(err);
        });
    }
    render(){
        return (
            <div>
                <Header title={this.state.title}/>
                <form id="form" method="post" action="submit">

                    <div className="form-group">
                        <label htmlFor="name">昵称</label>
                        <input id="name" name="name" type="text" placeholder={this.props.nickname}/>
                    </div>
                    <div className="form-group form-group-sex">
                        <label htmlFor="name">性别</label>
                        <select name="sex" id="sex">
                            <option value="0">男</option>
                            <option value="1">女</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码</label>
                        <span style={{color:'black',fontSize:'16px',display:'block'}}>1{this.props.password}</span>
                        {/*<input id="password" type="text" placeholder=/>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">手机号</label>
                        {this.props.tel}
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={this.handleClick} id="register">退出登录</button>
                    </div>
                </form>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    nickname:state.nickname,
    password:state.password,
    tel:state.tel
});
let mapDispatchToProps=dispatch=>({
    getUserInfo:(text)=>dispatch({type:"GET_USERINFO",text})
});

export default connect(mapStateToProps,mapDispatchToProps)(Info)