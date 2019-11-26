import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" lastFirstMiddle="Walborn, Holt C." />,
    document.getElementById('example')
)