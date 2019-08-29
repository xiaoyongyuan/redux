import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Index from "./components/home/index";
class App extends Component{
  state={
    newdata:"",
    list:[]
  }

  componentWillUpdate (nextProps,nextState){
    this.state.newdata=nextProps.police
    this.state.list=nextProps.list
  }
  render () {
    return (
        <div>
          <p>{this.state.newdata}</p>
          <Index/>   
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>电话</th>
                <th>地址</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.list.map((v,i)=>(
                  <tr key={i}>
                      <td>{v.name}</td>
                      <td>{v.tel}</td>
                      <td>{v.address}</td>
                  </tr>
                ))
              }  
          </tbody> 
          </table>
      
        </div>
    )
  }
  
}

const mapStateToProps = state => ({
  police: state.policeSelect.police,
  list: state.policeSelect.list,
})
export default connect(mapStateToProps, {  })(App);