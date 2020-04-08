import React,{Component, Fragment } from "react";
import {HashRouter,BrowserRouter,NavLink,Link,Route,Switch,Redirect} from 'react-router-dom'
import './nav.css'
function Singer(props){
    console.log('歌手的props',props)
    return(
        <div>这里是歌手组件</div>
    )
}
function SingerTest(props){
    return(
        <div>这里是歌手测试组件</div>
    )
}
function Recommend(){
    return(
        <div>这里是推荐1组件</div>
    )
}
function NotFound(){
    return(
        <div>你的页面打了</div>
    )
}
class Box extends Component{
    render (){ 
        return(
            <div>

                <h3>编程式导航</h3>
               
                <HashRouter>

                    {/* 编程式导航 :必须要有路由对象，路由对象必须被route处理过之后才会有*/}
                    {/* vue中可以直接在组件里获取路由对象，但是呢react里组件是获取不到路由对象的 */}

                    <Route render={(props)=>{
                        console.log('编程式导航',props )
                        return(
                            <div>这里是导航
                                <button onClick={()=>{
                                    // props.history.push('/singer')
                                    props.history.replace({pathname:'/singer'})
                                    
                                    props.history.go(-1)//返回
                                    props.history.goBack()//返回
                                    props.history.goForward()//前进
                                }}>
                                歌手
                                </button>

                                <button onClick={()=>{
                                    props.history.push('/recommend')
                                }}>
                                    推荐
                                </button>
                            </div>
                        )
                }}></Route>
            <hr/>

                    <Route path='/singer' component={Singer}>

                    </Route>
                    <Route path='/recommend' component={Recommend}></Route>
                   
                </HashRouter>

                <hr/>
               
            </div>
        )
    }
}
export default Box