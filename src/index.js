/**
 * Created by ZhaoQiHui on 2017/7/27.
 */
import React from "react";
import './index.less';

import ReactDOM from "react-dom";
import {
    HashRouter as Router,Route,Link,Switch
} from "react-router-dom";
import Index from "./container/index/Index";
import SignUp from "./container/signup/SignUp";
import SignIn from "./container/signin/SignIn";
import HotList from "./container/hotlist/HotList";
import Car from "./container/car/Car";
import Category from "./container/category/Category";
import Info from "./container/info/Info";
import ItemDetail from "./container/itemDetail/ItemDetail";
import Pay from "./container/pay/Pay";
import Footer from "./components/footer/Footer";
import {store} from "./store";
import {Provider} from "react-redux";
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Index}></Route>
                    <Route path="/index" component={Index}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="/signin" component={SignIn}></Route>
                    <Route path="/hotlist" component={HotList}></Route>
                    <Route path="/car" component={Car}></Route>
                    <Route path="/category" component={Category}></Route>
                    <Route path="/info" component={Info}></Route>
                    <Route path="/itemdetail" component={ItemDetail}></Route>
                    <Route path="/pay" component={Pay}></Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    </Provider>
    ,
    document.querySelector("#root")
)