import './App.css';
import User from "./pages/user"
import {Routes,Route} from "react-router-dom";

function App() {
  return (
   <section>
    <Routes>
      <Route path="/" element={<User/>}/>
    </Routes>
   </section>
  );
}

export default App;
