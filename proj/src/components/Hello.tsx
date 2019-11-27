import * as React from 'react';

import { DefaultState } from '../classes/DefaultState';
import { Programmer } from '../classes/Programmer';

import { HelloProps } from '../interfaces/HelloProps';
import { Drank } from '../interfaces/Drank';

import DrankOptions from '../static/DrankOptions';

export class Hello extends React.Component<HelloProps, DefaultState> {
    programmer: Programmer;
    constructor(props:  Readonly<HelloProps>) {
        super(props);
        const nameArray = this.props.lastFirstMiddle.split(',');
        const firstNameMiddleInitial = nameArray.pop();
        this.programmer = new Programmer(firstNameMiddleInitial.split(' ')[1], firstNameMiddleInitial.split(' ')[2], nameArray[0]);
        this.handleDrankClick = this.handleDrankClick.bind(this);
        this.state = new DefaultState(null);
    }

    handleDrankClick = (e: any) => {
        console.log(this);
        var currentDrank = DrankOptions.find((drank: Drank) => {
            return drank.name === e.target.innerText;
        })
        this.setState({currentDrank: currentDrank});
    }

    render() {
        let options = DrankOptions.map((drank: Drank, index: number) => {
            return <li onClick={this.handleDrankClick}>{drank.name}</li>;
        })

        let currentDrankIngredients = this.state.currentDrank ? 
            this.state.currentDrank.ingredientString() : 'No Drank Selected';

        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>
                <p>-{this.programmer.fullName}</p>
                <ul>
                    {options}
                </ul>
                <p>
                    {currentDrankIngredients}
                </p>
            </div>
        )
    }
}