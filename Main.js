import React from 'react';
import './App.css';
import FontChooser from './fontchooser';



class Main extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
          
        }
       
	}
send=()=>{
   alert('you have clicked Send');
   var textarea=this.refs.textarea.value;
   var data=this.state.data;
   data.push({textarea:textarea});
   this.setState({data:data});

   console.log(data);
}

    
render(){
    return(

        <div>
        <div className="editor">
            {this.state.data.map((row,i)=><p>                   
                                {row.textarea}
            </p>
    )
}
                                
        </div>


        <div>
            <div className="TextStyle">
                
           
             <textarea required rows="5"  ref="textarea" cols="150" 
                            placeholder="Enter Text" />
 <div>
	       <FontChooser/><t></t> <input type="button"  class="btn btn-secondary"  value="Send"  onClick={this.send}/>  
          
             </div>
	      </div>

       
        </div>
        </div>
        
    )
}


}
export default Main;
