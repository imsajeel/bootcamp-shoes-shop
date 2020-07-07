import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import products from "./database/products";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Hello World!</h1>;
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>
      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.name}</h1>

          <img key={product.id} src={product.images[0]} alt={product.name} />
          <label>{product.price}</label>
        </li>
      ))}
    </ul>
  );
}

export default App;
