import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Main from './pages/main'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'


class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes