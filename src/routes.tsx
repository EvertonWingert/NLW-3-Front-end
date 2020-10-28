import React from 'react';

import Landing  from './pages/landing';
import OrfanatosMap  from './pages/OrfanatosMap';

import { BrowserRouter,Switch,Route  } from 'react-router-dom';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrfanatosMap} />
            </Switch>

        </BrowserRouter>
     
    );
}
export default Routes;