import React, { Component } from 'react';

class SortableElement extends Component {

    render() {
        return (
            <g transform={ "translate(" + this.props.x + ", " + (200 - this.props.height) + ")" }>
                <rect className="sortable-element"
                    width={ this.props.width } 
                    height={ this.props.height } />
            </g>
        );
    }
}

export default SortableElement;