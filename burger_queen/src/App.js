import { Login } from './Components/Login/Login.js';
import { OrderMenu } from './Components/OrderMenu/OrdersMenu.js';
import { TakeOrder } from './Components/TakeOrder/TakeOrder.js';
import { Orders } from './Components/Orders/Orders.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/auth">
            <Login />
          </Route>
          <Route exact path="/">
            <OrderMenu />
          </Route>
          <Route exact path="/neworder">
            <TakeOrder />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
