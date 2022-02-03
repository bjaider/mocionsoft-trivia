import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Views/Home/Home'
import Trivia from './Views/Trivia/Trivia'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        {/* <Route path={`/question`} component={Trivia} /> */}
        <Route path="/question/:id" component={Trivia} />
      </Router>
    </div>
  )
}

export default App
