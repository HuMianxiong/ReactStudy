## 路由
控制地址栏改变 <router-link> vue
控制地址栏改变 <Link to='/singer'>歌手</Link> react
根据改变渲染不同的组件<router-view> vue
根据改变渲染不同的组件<Route path='/singer' component={要渲染的组件}></Route> react


## 路由插件 react-router
1 - 3 :react-router
4 - 5 :react-router-dom react-router-native
[react-router] 
```
下载安装
npm install react-router-dom 
```

### 路由的基本使用
HashRouter BrowserRouter 哈希路由 历史路由 作为组件的父容器
控制地址栏的改变 to
Link to exact
NavLink to exact activeClassName

Route 控制组件的渲染 path exact component render children
Switch 百里挑一 只返回第一个匹配到的组件 
Redirect 重定向
```
<HashRouter>
    <Link exact to='/singer>歌手</Link>
    <NavLink exact to='/recommend' activeClassName='hehe'>推荐</NavLink>
    <Switch>
    <Redirect from='/' to='/singer'></Redirect>
    <Route path='/singer' component={组件}></Route>
    <Route path='/recommend' render={组件}></Route>
    <Route path='/singer' children={组件}></Route>

    <Route component={404}>
    </Switch>
<HashRouter>
```
 
###  编程式导航 和 声明式导航（寻找路由对象）
<Link><NavLink>实现路由的跳转 声明式导航
通过js路由对象的方式叫做编程式导航  push replace go goBack goForward
注意：正常创建的组件是没有路由对象的
1.通过Route 处理过的组件在props里有路由对象
2.通过withRouter 处理过的组件也有路由对象

### 路由传参
动态导航 /hehe/:id
query /hehe?us=123&ps=123
state 
this.props.history.push(`/singer/${us}/${ps}`)
在路由对象的match 里获取传递的参数

query /hehe?us=123&ps=123
相当于get方法 接收数据在路由对象的location里 需要自己做字符解析
this.props.history.push('/singer?us=123&ps=456')

state
在路由对象的location里接收
this.props.history.push({pathname:'/recommend',state:{要传递的数据}})
### 嵌套路由
在路由里套路由 所有的组件都可以使用 Link Switch ..
嵌套路由的上一级 千万不能加精准匹配

<Route path='/singer' render={()=>{
    <Route></Router>
}}></Route>

### 命名路由 命名视图 路由守卫 xxx

## 高阶组件
hoc 本质是一个函数 接收一个组件作为参数 返回一个新的组件
功能性的封装 减少重复代码
一般被高阶组件处理过的组件获取数据 都从props获取

music首页用react写一遍


