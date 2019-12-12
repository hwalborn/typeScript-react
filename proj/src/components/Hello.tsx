import * as React from 'react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import { DefaultState } from '../classes/DefaultState';

import { Drank } from '../interfaces/Drank';

import DrankOptions from '../static/DrankOptions';

import { DrankComponent } from './Drank';
import IngredientBox from './IngredientBox';

export class Hello extends React.Component<{}, DefaultState> {
    constructor(props:  Readonly<{}>) {
        super(props);
        this.handleDrankClick = this.handleDrankClick.bind(this);
        this.state = new DefaultState(null);
    }

    handleDrankClick = (e: any) => {
        var currentDrank = DrankOptions.find((drank: Drank) => {
            return drank.name === e.target.innerText;
        })
        this.setState({currentDrank: currentDrank});
    }

    render() {
        let options = DrankOptions.map((drank: Drank, index: number) => {
            return <DrankComponent  currentDrank={drank} onClick={this.handleDrankClick} />
        })

        let currentDrankIngredients = this.state.currentDrank ? 
            this.state.currentDrank.ingredientString() : 'No Drank Selected';

        return (
            <div>
                <ul>
                    {options}
                </ul>
                <p>
                    {currentDrankIngredients}
                </p>
                <DndProvider backend={Backend}>
                    <IngredientBox />
                </DndProvider>
            </div>
        )
    }
}