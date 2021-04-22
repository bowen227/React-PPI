import { useState } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/NavComponent';
import Home from './views/HomeComponent';
import Dashboard from './views/DashboardComponent';
import Login from './views/LoginComponent';
import Signup from './views/SignupComponent';
import Footer from './components/FooterComponent';
import PlayerDetails from './views/PlayerDetailsComponent';
import NoRoute from './components/NoRouteComponent';

const store = ConfigureStore();

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    function LogUserIn() {
        setLoggedIn(!isLoggedIn);
    }

    function LogUserOut() {
        setLoggedIn(!isLoggedIn);
    }

    return (
        <Provider store={store}>
            <Router>
                <Navigation isLoggedIn={isLoggedIn} logout={LogUserOut} />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login" exact>
                        <Login login={LogUserIn} isLoggedIn={isLoggedIn} />
                    </Route>
                    <Route path="/dashboard" exact>
                        <Dashboard isLoggedIn={isLoggedIn} />
                    </Route>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                    <Route path="/playerDetails/:id" exact>
                        {isLoggedIn ?
                            <PlayerDetails />
                            :
                            <Redirect to="/" />
                        }
                    </Route>
                    <Route path="/">
                        <NoRoute />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </Provider>
    );
}

export default App;
