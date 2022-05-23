import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
    return (
    <Router>
        <div className="App ">
            <Navbar />

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/Products" component={Products}></Route>
                    <Route exact path="/products/:id" component={Product}></Route>
                </Switch>
            <Footer />

        </div>
    </Router>
    );
}

export default App;


