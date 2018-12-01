import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Spinner, Form, Button} from './sharedComponents'

class App extends Component {
  state = {
      to: 'nodemailertest9090@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      body: 'Hello world ?', // plaintext body
  }

  onChange = e =>{

    this.setState({
      [e.target.name]: e.target.value
    })

  }

  send = async e =>{
    e.preventDefault();
    const {to,subject, body } = this.state;

    const requestBody = {
      to,
      subject,
      text: body, 
      html: `<b>${body}</b>`, // html body
    };
    this.setState({
      sending: true
    })
    
    const resp = await axios.post('/api/send', requestBody);
    this.setState({
      sending: false
    })
    

  }

  render() {
    const {sending, to, subject, body} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <Form onSubmit={this.send}>
          <label htmlFor='to'>To:</label>
          <input id='to' name='to' value={to} onChange={this.onChange}/> 

          <label htmlFor='subject'>Subject:</label>
          <input id='subject' name='subject' value={subject} onChange={this.onChange}/>

          <label htmlFor='body'>body:</label>
          <textarea id='body' name='body' value={body} onChange={this.onChange}/>

          {sending? <Spinner/> : <Button type='submit'>Send</Button>} 
        </Form>
        </header>
      </div>
    );
  }
}

export default App;
