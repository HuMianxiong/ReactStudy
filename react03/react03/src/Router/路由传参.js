import React,{Component, Fragment } from "react";
import {HashRouter,BrowserRouter,NavLink,Link,Route,Switch,Redirect} from 'react-router-dom'
import './nav.css'
import CustomNav from './CustomNav'
function Singer(props){
    console.log('歌手的props',props)
    return(
        <div>这里是歌手组件</div>
    )
}

function Recommend(props){
    console.log('query传参',props)
    return(
        <div>这里是推荐1组件</div>
    )
}

class Box extends Component{
    render (){ 
        return(
            <div>

                <h3>编程式导航</h3>
                
                <HashRouter>
                    <CustomNav></CustomNav>
                    {/* 编程式导航 :必须要有路由对象，路由对象必须被route处理过之后才会有*/}
                    {/* vue中可以直接在组件里获取路由对象，但是呢react里组件是获取不到路由对象的 */}

                    
            <hr/>

                    <Route path='/singer/:id/:hehe' component={Singer}>

                    </Route>
                    <Route path='/recommend' component={Recommend}></Route>
                   
                </HashRouter>

                <hr/>
               
            </div>
        )
    }
}
export default Box