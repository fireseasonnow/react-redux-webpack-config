// @flow
import React, { Component } from 'react';
import * as actionCreators from '../actions';

type Props = {
    state: Object,
    dispatch: (Function) => void
};

export default class App extends Component<Props> {
    render() {
        return (
            <h1>Hello world!</h1>
        );
    }
};