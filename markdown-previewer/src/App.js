import React, {Component} from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

let marked = require("marked");

class App extends Component {

    state = {
        markdown: ""
    }

    updateMarkdown = function (markdown) {
        this.setState({markdown});
    }

    render() {
        let {markdown} = this.state;
        console.log(markdown);
        return (
            <div cName="App container">
                <br/>
                <h1><u>Welcome to my React Markdown Previewer!</u></h1>
                <div className="inputText">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel><h2>Editor</h2></ControlLabel>
                        <FormControl componentClass="textarea" id="editor" placeholder="Enter Markdown Text (HTML & ReactJS text)" value={markdown}
                                     onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
                    </FormGroup>
                </div>
                <div className="outputText">
                    <h2>Previewer</h2>
                </div>
                <div id="preview">
                    <div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
                </div>
            </div>
        );
    }
}

export default App;