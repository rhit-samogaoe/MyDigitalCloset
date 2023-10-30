import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
} from "react-router-dom"; 

import './Styles/App.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import ClosetPage from './Pages/ClosetPage';
import CategoryPage from './Pages/CategoryPage';
import ArticlePage from './Pages/ArticlePage';
import Home from './Pages/Homescreen';


function App() {
  return <div>
    
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/closet" element={<CategoryPage />} /> 
        <Route exact path="/closet/:category" element={<ClosetPage />} /> 
        <Route exact path="/closet/:category/:itemName" element={<ArticlePage />} />         
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />      
    </Router>
    
  </div>;
}

export default App;
