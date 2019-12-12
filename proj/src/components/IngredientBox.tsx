import * as React from 'react';

import Bar from './Bar';
import Ingredient from './Ingredient'
import ingredients from '../static/Ingredients'

export default class Container extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>){
    super(props);
  }
  render () {
    const ingredientComponents = ingredients.map((ingredient, i) => <Ingredient key={i} name={ingredient} />)
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Bar />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {ingredientComponents}
        </div>
      </div>
    )
  }
}