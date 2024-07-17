# Simple D3 Component

An open-source package designed to simplify the creation of D3 components in React. This package leverages TypeScript's object-oriented programming (OOP) capabilities to provide a base component that is compatible with standard D3 usage.

This package originates from a personal project on Information Visualization. It offers a straightforward way to build components while maintaining flexibility and adhering to D3's standard practices.

The component defines two *props*: `size` and `data`. The `size` is an object with numeric `width` and `height` properties, and `data` is of type `any` to allow for custom definitions.

## Install

You can install the package via `Yarn` or `NPM`:

```bash 
yarn add simple-d3-component
```

```bash
npm install simple-d3-component 
```

## Usage 

To create a D3 component, import the main class SimpleD3Component along with its associated interfaces SimpleD3ComponentProps and SimpleD3ComponentState. Also, import the D3 functionality you want to use.

```typescript
// Barplot.tsx
import {
    SimpleD3Component,
    SimpleD3ComponentProps,
    SimpleD3ComponentState
} from 'simple-d3-component';

import * as d3 from 'd3';
```

Create a class that inherits from SimpleD3Component and override the method createVisualization to define your D3 functionality. The base class method createVisualization already appends an svg inside the component's div with the specified size. To select the svg, you need to first select the div of the component using the componentReference state.

```typescript
// Barplot.tsx
export class BarPlot extends SimpleD3Component {
    constructor(props: SimpleD3ComponentProps) {
        super(props);
    }

    createVisualization() {
        super.createVisualization();

        const barPlot = d3.select(this.state.componentReference.current)
            .select('svg')         
            .style('background-color', 'white')

        barPlot
            .append('text')
            .attr('x', this.state.size.width / 2)
            .attr('y', 20)
            .text('My First Barplot Component')
    }
}
```

Then you will be able to use this component in your React project:

```typescript
// App.tsx
import { BarPlot } from './charts/BarPlot.tsx';

function App() {
    const size = {
        width: 600,
        height: 500
    }

    const data = // Define your visualization data 

    return (
        <>
            //...
            <BarPlot size={size} data={data} />
            //...
        </>
    )
}

export default App;
```
