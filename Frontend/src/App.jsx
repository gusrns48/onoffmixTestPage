import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Footer from './component/layout/footer'
import Header from './component/layout/header'
import Login from './component/login'
import Product from './component/product'
import Detailclass from './component/detailclass'
import Signup from './component/signup'
import Newclass from './component/newclass'
import Myclass from './component/myclass'
import Masterclass from './component/masterclass'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Product} />
        <Route exact path="/product" component={Product} />
        <Route exact path='/detailclass/:no' component={Detailclass} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/newclass" component={Newclass} />
        <Route exact path="/myclass" component={Myclass} />
        <Route exact path="/masterclass" component={Masterclass} />
      </Router>
      <Footer />
    </div>
  )
}

export default App
