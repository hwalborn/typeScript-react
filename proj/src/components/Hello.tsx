import * as React from 'react';

import { Programmer } from '../classes/Programmer';

import { HelloProps } from '../interfaces/HelloProps';

export class Hello extends React.Component<HelloProps, {}> {
    programmer: Programmer;
    constructor(props:  Readonly<HelloProps>) {
        super(props);
        const nameArray = this.props.lastFirstMiddle.split(',');
        const firstNameMiddleInitial = nameArray.pop();
        this.programmer = new Programmer(firstNameMiddleInitial.split(' ')[1], firstNameMiddleInitial.split(' ')[2], nameArray[0])
    }

    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                <p>-{this.programmer.fullName}</p>
            </div>
        )
    }
}