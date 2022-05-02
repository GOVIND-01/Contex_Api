import './App.css';
import { Route, Routes } from "react-router-dom";
import { Input } from "./component/Input";
import { Result } from './component/Result';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />}></Route>
        <Route path="/result" element={<Result/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
