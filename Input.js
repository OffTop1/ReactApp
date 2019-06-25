import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class Input extends Component{
            constructor(props){
          super(props)
          
        }
        
        render() {
          
          return (
            <Paper style={{width: 220, height: 230}}>
            <Typography component="p">
              Study Detailes
            </Typography>
            <TextField style={{ backgroundColor: 'rgb(252, 252, 252)'}}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="6"
            margin="normal"
            variant="outlined"
/>      <div>
          <AddIcon />
         <EditIcon />    
        <DeleteIcon /> 
          </div>     

          </Paper>
            
          );
        }
    
}
export default Input;