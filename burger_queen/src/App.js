import { Login } from './Components/Login/Login.js';
import { OrderMenu } from './Components/OrderMenu/OrdersMenu.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth">
            <Login />
          </Route>
          <Route path="/">
            <OrderMenu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
