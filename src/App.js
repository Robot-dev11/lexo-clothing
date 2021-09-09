import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route path='/shop'><ShopPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
