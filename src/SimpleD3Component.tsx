import React, { 
    Component,
    createRef
} from 'react';
import * as d3 from 'd3';

export interface SimpleD3ComponentProps {
    size: { width: number, height: number },
    data: any
}

export interface SimpleD3ComponentState {
    size: { width: number, height: number },
    data: any,
    componentReference: React.RefObject<HTMLDivElement>,
}

export class SimpleD3Component extends Component<SimpleD3ComponentProps, SimpleD3ComponentState>{
    constructor(props: SimpleD3ComponentProps) {
        super(props);
        this.state = {
            data: props.data,
            size: props.size,
            componentReference: createRef<HTMLDivElement>(),
        }
    }

    componentDidMount() {
        this.clearVisualization();
        this.createVisualization();
    }
    
    private clearVisualization() {
        d3.select(this.state.componentReference.current)
            .select('svg')
            .remove();
    }
    
    protected createVisualization() {
        d3.select(this.state.componentReference.current)
            .append('svg')
            .attr('width', this.state.size.width)
            .attr('height', this.state.size.height);
    }

    componentDidUpdate(prevProps: Readonly<SimpleD3ComponentProps>) {
        if (prevProps.size !== this.props.size) {
            this.clearVisualization();
            this.createVisualization();
        }
    }

    render() {   
        return <div ref={this.state.componentReference} />
    }        
}
