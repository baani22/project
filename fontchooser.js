import React from 'react';

class FontChooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            checkboxState : true
        }
    }
    toggle(e) {
        this.setState({
            checkboxState : !this.state.checkboxState
        })
        console.log(!this.state.isChecked)
    }
    itoggle(e) {
        this.setState({
            checkboxState : !this.state.checkboxState
        })
        console.log(!this.state.isChecked)
    }

    render() {
        return(
            <div>
                <input type="button" 
                    id="boldCheckbox"
                    value="B"
                    class="btn btn-secondary"
                  
                    checked={this.state.isChecked}
                    onClick={this.toggle.bind(this)}
                />
                 <input type="button" 
                    id="italicCheckbox"
                  value="i"
                  class="btn btn-secondary"
                    checked={this.state.isChecked}
                    onClick={this.itoggle.bind(this)}
                />
               <span 
                   id="textSpan" 
                   style={ this.state.checkboxState ? { fontWeight: 'normal' } : { fontWeight: 'bold' } }
                  
                   italic={ this.state.checkboxState ? this.props.italic : !this.props.italic }
               >
                   {this.props.textarea}
               </span>
           </div>
       );
    }
}


export default FontChooser;