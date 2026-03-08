import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryItems from "./pages/CategoryItems";
import ItemDetails from "./pages/ItemDetails";
import Favorites from "./pages/Favorites";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Router>

      <div className="app-container">

        <Header />

        <div className="main-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/category/:categoryName" element={<CategoryItems />} />
            <Route path="/category/:categoryName/:id" element={<ItemDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipes" element={<Recipes />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </Router>
  );
}

export default App;