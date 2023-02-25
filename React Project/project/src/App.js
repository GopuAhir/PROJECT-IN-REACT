import './App.css';
import Allproducts from './component/Allproducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import CollectionItem from "./component/CollectionItem"


function App() {
  return (
    <div className="App">
      <h1>All Products</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allproducts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/collect' element={<CollectionItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
