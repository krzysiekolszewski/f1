require('../sass/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

class Home extends React.Component{
    render() {
        return (
            <p>Welcome to Home of F1 site</p>
        );
    }
}

class News extends React.Component{
    render() {
        return (
            <p>News (use fetch maybe ?)</p>
        );
    }
}

class Drivers extends React.Component{
    render() {
        return (
            <p>Drivers (photos + full name - - > on click bio ?)</p>
        );
    }
}

class Teams extends React.Component{
    render() {
        return (
            <p>Teams logos + short specyfication</p>
        );
    }
}

class Circuts extends React.Component{
    render() {
        return (
            <div>
                <div className='buttons'>
                    <button>Australian Grand Prix, Melbourne</button>
                    <button>Chinese Grand Prix, Shanghai</button>
                    <button>Bahrain Grand Prix, Sakhir</button>
                    <button>Russian Grand Prix, Sochi</button>
                    <button>Spanish Grand Prix, Catalunya</button>
                    <button>Monaco Grand Prix, Monte Carlo</button>
                    <button>Canadian Grand Prix, Montreal</button>
                    <button>European Grand Prix, Baku</button>
                    <button>Austrian Grand Prix, Spielberg</button>
                    <button>British Grand Prix, Silverstone</button>
                    <button>Hungarian Grand Prix, Budapest</button>
                    <button>Belgian Grand Prix, Spa-Francorchamps</button>
                    <button>Italian Grand Prix, Monza</button>
                    <button>Singapore Grand Prix, Singapore</button>
                    <button>Malaysian Grand Prix, Kuala Lumpur</button>
                    <button>Japanese Grand Prix, Suzuka</button>
                    <button>United States Grand Prix, Austin</button>
                    <button>Mexican Grand Prix, Mexico City</button>
                    <button>Brazilian Grand Prix, Sao Paulo</button>
                    <button>Abu Dhabi Grand Prix, Yas Marina</button>
                </div>
                <img id='world' src='images/worldLow.svg'></img>
            </div>

        );
    }
}

class Rules extends React.Component{
    render() {
        return (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        );
    }
}

class Blog extends React.Component{
    render() {
        return (
            <p>Blog - my foughts on current events</p>
        );
    }
}

class WrongPage extends React.Component{
    render() {
        return (
            <p>404 PAGE NOT FOUND</p>
        );
    }
}

const activeStyle = {
    color:'red'
};

const linkStyle ={
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    letterSpacing: "0.5rem"


}

const mainLinkStyle ={
    textDecoration: "none",
    color: "white",
    fontSize: "5rem",
}

class Template extends React.Component{
    render() {
        return (

            <div>
                <div className="row">
                <header className="header col-12">
                    <div className='container'>
                        <Link to='/' style={mainLinkStyle}>HOME OF F1</Link>
                    </div>
                </header>
                </div>

                <div className="row">
                    <div className="col-2 navigation">
                        <nav>
                        <ul>
                            <li><Link to='/news' style={linkStyle} activeStyle={activeStyle}>News</Link></li>
                            <li><Link to="/drivers" style={linkStyle} activeStyle={activeStyle}>Drivers</Link></li>
                            <li><Link to="/teams" style={linkStyle} activeStyle={activeStyle}>Teams</Link></li>
                            <li><Link to="/circuts" style={linkStyle} activeStyle={activeStyle}>Circuts</Link></li>
                            <li><Link to="/rules" style={linkStyle} activeStyle={activeStyle}>Rules</Link></li>
                            <li><Link to="/blog" style={linkStyle} activeStyle={activeStyle}>Blog</Link></li>
                        </ul>
                        </nav>
                    </div>

                    <div className="col-10 content">
                            <h1 className='content'>{this.props.children}</h1>
                    </div>

                    <div className='row'>
                        <div className='col-12 footer'>
                            Copyright Krzysztof Olszewski, 2017
                        </div>
                    </div>
                </div>


                </div>
        );
    }
}
class App extends React.Component{
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Template}>
                    <IndexRoute component={Home} />
                    <Route path='/' component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route path='/drivers' component={Drivers}/>
                    <Route path='/teams' component={Teams}/>
                    <Route path='/circuts' component={Circuts}/>
                    <Route path='/rules' component={Rules}/>
                    <Route path='/blog' component={Blog}/>


                </Route>

             <Route path='*' component={WrongPage}>/</Route>
             </Router>
        );
    }

}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App></App>,
        document.getElementById('app')
    );
});
