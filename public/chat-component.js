var ChatApp = React.createClass({
  getInitalState: function(){
    return{
      messages: [],
      socket: window.io('https://localhost:3000')
    }
  },

  componentDidMount: function(){

  },

  render: function(){
    return(
      <div>
        This will be the chat application
      </div>
    )
  }
});


ReactDOM.render(
  <ChatApp/>,
  document.getElementById('chat')
)


