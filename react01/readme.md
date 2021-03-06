### react 是什么
用于描述用户界面的js库 view
angular mvc 
vue mvvm

fackbook
15.6 
16

### jsx 语法糖 javascript xhtml
用jsx 来描述组件的虚拟dom
当成vue中的模板一样来用

class 也是语法糖
```
<div id='test' class = 'hehe'>
    <p id='p'>
        <div></div>
    </p>
    <span>呵呵</span>
</div>

React.createElement('div',{id:"test",className:"hehe"},[
    React.createElement('p',{id:p},[
        React.createElement('div',{id:p,text:'呵呵'},[])
    ])
    React.createElement('span',{id:p,text:"呵呵"},[])
])
```

xhtml 严格模式的HTML
1.必须只有一个根元素
2.标签必须闭合


### 创建组件
引入文件 提供 react reactdom对象 帮助浏览器解析jsx
组件名一定要大写
```
let Component = React.createClass({
    render(){
        return (jsx)
    }
})
ReactDOM.render(组件名,要挂载的元素)
```

### 数据承载
state 组件内部的数据 可以尽心修改 getInitialState 生命周期初始化
props 来自于组件外部的数据 组件内部不能修改
        用过getDefaultProps 进行初始化
        外部数据和组件内部初始化同时存在以外部传递优先

### 数据绑定
{} 存放变量表达式
1.基本数据类型 数字 字符串 基本用户
2.对象 不能直接绑定
3.数组 数组的每一项都会被拆分出来
4.布尔值 null undefined 在页面不会直接显示 配置3元表达式或者其他的表达式

 ### 指令
 1.列表渲染
 数组在绑定的时候会被拆解开来 通常结合map实现对数据的处理
 2.条件渲染
 a.三元表达式控制渲染
 b.||或运算符控制渲染
 c.函数的返回控制渲染
 3.属性绑定
 希望属性的值是变量
 <img src={变量或者表达式}>
 注意类名要用className
4.事件绑定 v-on:click
react事件和原生事件类似只需要把事件名写成小驼峰就ok
原生 <div onclick=''></div>
react <div onClick=''></div>
1.
onClick = {(e)=>{
    事件处理代码
}}
2.不带参数 默认参数是事件对象 千万别加()
onClick = {this.fun}
3.带参数 通过bind实现 默认参数会放到最后方
onClick = {this.fun.bind(null,4,6)}

### 响应式 数据变页面变
vue中数据变页面变
react中不是这样，它需要重新执行一遍render函数
react中不像vue有数据响应式 要通过setState
触发页面的修改
this.setState({要修改的数据：修改的内容},cb)
setState 是一个异步方法 参数一是要修改的数据
                       参数二是修改成功之后的回调


### 组件嵌套
react不像vue 全局和局部组件之分
组件的嵌套关系随意 谁在外部谁是爸爸

### 插槽
和vue中组件标签汇总存放的内容默认不会被渲染 react中没有slot
组件对象下 props.children可以用来获取标签中的内容

### ref
可以绑定dom 也可以绑定组件
通过组件对象下的refs 进行获取
### react组件通信
父子通信 props refs
子父通信 props
亲兄弟通信 状态提升
远亲通信    全局状态管理 redux