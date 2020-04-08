import React,{Component,Fragment} from 'react'
import Link from './Link'

class Route extends Component{
    constructor(){
        super()
        this.state={
            hashPath:'/recommend'
        }
    }
    //监听地址栏的改变
    cb=()=>{
        console.log('hash改变')
        let hash = window.location.hash.split('#')[1]
        console.log('hash改变',hash)
        this.setState({hashPath:hash})
    }
    componentDidMount(){
        window.addEventListener('hashchange',this.cb)
    }
    test(){
        return(
            <h3>你好</h3>
        )
    }
    render(){
        console.log('Route',this)
        let {path,component} = this.props
        console.log('123',path,component)
        return(
            <Fragment>
               {this.state.hashPath===path&&component()}
               {/* {this.test()} */}
               {/* {component()} */}
            </Fragment>
            
        )
    }
    componentWillUnmount(){
        window.removeEventListener('hashchange',this.cb)
    }
}
export default Route