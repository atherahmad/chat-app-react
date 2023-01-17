import {Route, Routes} from "react-router-dom";
import HomePage from './components/home/HomePage';
import ChatPage from './components/chats/ChatPage'

function App() {
  return (
    <div className="App">
        <h1>
          Chat APP
        </h1>
        <Routes>

          <Route path='/chats' element={<ChatPage/>}/>
          <Route path='/' element={<HomePage />}/>

        </Routes>
    </div>
  );
}

export default App;
