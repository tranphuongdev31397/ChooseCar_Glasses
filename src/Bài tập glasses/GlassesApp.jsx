import React, { Component } from 'react';
import GlassesRoom from './GlassesRoom';
import Heading from './Heading';

class GlassesApp extends Component {
    render() {
        return (
            <div>
                <Heading />
                <GlassesRoom />
            </div>

        );
    }
}

export default GlassesApp;