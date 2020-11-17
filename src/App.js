import './reset.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './global/components/NavBar';
import UserContextProvider from './global/contexts/UserContext/Provider';
import Home from './scenes/Home/Home';
import NotFound from './scenes/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <UserContextProvider>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;
