import * as React from 'react';

import { DefaultState } from '../classes/DefaultState';

import { DrankProps } from '../interfaces/DrankProps';

export class DrankComponent extends React.Component<DrankProps, DefaultState> {
    constructor(props:  Readonly<DrankProps>) {
        super(props);
        this.state = {
            currentDrank: props.currentDrank
        };
    }

    render() {
        return (
            <li onClick={this.props.onClick}>{this.state.currentDrank.name}</li>
        )
    }
}