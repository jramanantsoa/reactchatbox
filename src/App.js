import React, { Component } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {
  state = {
    messages: {},
    pseudo : this.props.match.params.pseudo
  };
  addMessage = (messages) => {
    const message = this.state.message;
    messages[`message-$(Date.now())`];
    this.setState({ messages });
  };
  render() {
    return (
      <div className="box">
        <div className="message">
          <Message></Message>
        </div>
        <Formulaire 
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}></Formulaire>
      </div>
    );
  }
}

export default App;
