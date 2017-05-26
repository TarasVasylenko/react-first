import * as React from "react";

import { Router, Route, browserHistory } from 'react-router';

import { Products } from "./components/Hello";

const App = () => <Router history={ browserHistory }>
    <Route path="/" component={ Products }/>
</Router>;

export default App;