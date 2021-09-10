import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component.jsx';
import SignInSignUp from './pages/signin-and-signup/signin-and-signup.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route path='/shop'><ShopPage /></Route>
        <Route path='/signin'><SignInSignUp /></Route>
      </Switch>
    </div>
  );
}

export default App;
