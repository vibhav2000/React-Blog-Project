import {BrowserRouter as Router, Route} from 'react-router-dom'
//pages
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import About from './pages/About';
//components
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    <div className='max-w-screen-md mx-auto pt-20'>
    <Route exact path='/'component={Home} />
    <Route exact path='/About'component={About} />
    <Route exact path='/Article'component={Article} />
    <Route exact path='/article-list'component={ArticleList} />

    </div>
    </Router>
  );
}

export default App;
