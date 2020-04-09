import React,{ Component, Fragment } from "react";

//高阶组件就是一个函数 接收一个组件作为参数 返回一个新的组件
export default (TmpComponent)=>{
    //TmpComponent参数传递的组件
    //创建一个新的组件
    class NewComponent extends Component{
        constructor(){
        super()
        this.state={
            name:'数据加载ing'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            let name= localStorage.getItem('name')
            this.setState({name})
        },1000)
    }
        render(){
            return(
                <Fragment>
                    
                    <TmpComponent name={this.state.name}></TmpComponent>
                </Fragment>
            )
        }
    }
    //返回创建的新组建
    return NewComponent
}