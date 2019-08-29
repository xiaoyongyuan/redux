import React,{Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {policeSelect,policelist} from "./action/policeAction";
class Index extends Component{
    componentDidMount(){
        this.props.policelist()
    }
    haleclick(val){
        this.props.policeSelect(val)
    }
    render(){
        return(
            <div>
                <button type="button" onClick={this.haleclick.bind(this,1)}>1</button>
                <button type="button" onClick={this.haleclick.bind(this,10)}>1</button>
                <button type="button" onClick={this.haleclick.bind(this,100)}>1</button>
                <button type="button" onClick={this.haleclick.bind(this,12)}>1</button>
                <button type="button" onClick={this.haleclick.bind(this,13)}>1</button>
                <button type="button" onClick={this.haleclick.bind(this,14)}>1</button>
            </div>
        )
    }
}

Index.propTypes = {
    policeSelect: PropTypes.func.isRequired,
    policelist: PropTypes.func.isRequired,
  }
export default connect(null, { policeSelect,policelist })(Index);
