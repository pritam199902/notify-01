import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './AdminHome'
import Login from './AdminLogin'
import Register from './AdminRegister'
 

function main({match}) {
    const log =()=>{
        console.log(match);
    }
    return (
        <div>
            {log()}
            
            <Switch>
                <Route exact path="/admin/:id" children={Home} />
                <Route exact path="/admin/login" children={Login} />
                <Route exact path="/admin/register" children={Register} />

            </Switch>


        </div>
    )
}

export default main
