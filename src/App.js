import './App.css';
import Message from "./Message";
import MessageList from "./MessageList";
import Form from "./Form";



function App(props) {
  return (
    <div className="App">
      <header className="App-header">

        My first react app
        <h3>Hello, {props.name}</h3>
        <Message msg = "wassup"/>
        <MessageList handleAddMessage={handleAddMessage} />
        <Form onAddMessage={onAddMessage}/>
      </header>
    </div>
  );
}

export default App;
