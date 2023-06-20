import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail} from './index';


function App() {
  return (
    <div className="container">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          //below is postId url param
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
