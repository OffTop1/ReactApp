import React,{Component} from 'react';
import { directive } from '@babel/types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';



class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <div><Button 
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          value={this.props.value}
          size={this.props.size}
          variant={this.props.variant}
          variant="contained"  color="primary" fullWidth={this.props.fullWidth}>
          Next Step
        </Button></div>  
        );
    }
}
export default Header;