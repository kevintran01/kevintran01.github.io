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
            <div className="App container">
                <div className="inputText">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Markdown Input</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Enter Markdown"
                                     value={markdown}
                                     onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
                    </FormGroup>
                </div>
                <div className="outputText">
                    <h1>Markdown Output</h1>
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>
                </div>
            </div>
        );
    }
}

export default App;