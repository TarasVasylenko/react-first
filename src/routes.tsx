import * as React from "react";

import { Router, Route, browserHistory } from 'react-router';

import { Products } from "./components/bank-calculator";

const App = () => <Router history={ browserHistory }>
    <Route path="/" component={ Products }/>
</Router>;

export default App;