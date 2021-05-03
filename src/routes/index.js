import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Users from "../pages/users";

export default function Routes() {

    return (<>
        <Router>
            <Switch>
                <Route path="/:username?" component={Users}/>
            </Switch>
        </Router>
    </>
    )
}
