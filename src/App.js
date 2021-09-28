import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component.jsx';
import SignInSignUp from './pages/signin-and-signup/signin-and-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log('userAuth', userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        const user = auth.currentUser;
        const snapshot = {
          displayName: user.displayName,
          email: user.email,
          createdAt: user.metadata['creationTime'],
        };

        this.setState({
          currentUser: {
            id: userRef.id,
            ...snapshot,
          },
        });
      }

      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route path='/shop'><ShopPage /></Route>
          <Route path='/signin'><SignInSignUp /></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
