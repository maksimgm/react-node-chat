var ChatApp = window.React.createClass({
  getInitalState: function(){
    return{
      messages: [],
      socket: window.io('https://localhost:3000')
    };
  },

  componentDidMount: function(){
    console.log(this);
    console.log(this.state);
    this.state.socket.on('new-message',function(){
      this.setState({messages: this.state.messages.push(msg)});
    });
  },


  render: function(){
  var self = this;
    return(
      <div>
        <ul>
        </ul>
        <input type="text" id="message" />
        <button onClick={() => self.submitMessage}></button>
      </div>
    )
  }

});


window.ReactDOM.render(
  <ChatApp />,
  document.getElementById('chat')
)