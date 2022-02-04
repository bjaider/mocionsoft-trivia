import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Views/Home'
import Trivia from './Views/Trivia'
import Results from './Views/Results'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/questions" component={Trivia} />
        <Route path="/results" component={Results} />
      </Router>
    </div>
  )
}

export default App
