import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Toolbar from './Toolbar';

class Main extends Component {
  state = {
    markdown: ''
  };

  componentDidMount = () => {
    const placeholder = require('../sample/placeholder.md');

    fetch(placeholder)
      .then(res => res.text())
      .then(text => {
        this.setState({
          markdown: text
        });
      });
  };

  handleChange = e => {
    this.setState({
      markdown: e.target.value
    });
  };

  render() {
    const { markdown } = this.state;

    return (
      <React.Fragment>
        <div id="editor-wrapper" className="section">
          <Toolbar title="Editor" customClass="editor-title" />
          <Editor markdown={markdown} onChange={this.handleChange} />
        </div>
        <div id="preview-wrapper" className="section">
          <Toolbar title="Preview" customClass="preview-title" />
          <Preview markdown={markdown} />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
