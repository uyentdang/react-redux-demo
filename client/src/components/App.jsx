import React, { Component } from 'react';
import DisplayContainer from '../containers/DisplayContainer.jsx';
import ControlsContainer from '../containers/ControlsContainer.jsx';

const App = function() {
    //console.log(store.getData())
    return (
        <div>
        <h1>React Redux Demo</h1>
        <DisplayContainer />
        <ControlsContainer />
        </div>
    );
};



/*

() => (

    <div>
        <h1>React Redux Demo</h1>
        <DisplayContainer />
        <ControlsContainer />
    </div>
) */



export default App;