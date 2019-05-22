import React,{Component} from 'react';
import { directive } from '@babel/types';

class Image_loader extends Component{
            constructor(props){
          super(props)
          this.state = {
            file: null
          }
          this.handleChange = this.handleChange.bind(this)
        }
        handleChange(event) {
          this.setState({
            file: URL.createObjectURL(event.target.files[0])
          })
        }
        render() {
          return (
            <div>
              <input type="file" onChange={this.handleChange}/>
              <img src={this.state.file} alt={this.props.alt}/>
            </div>
          );
        }
    
}
export default Image_loader;