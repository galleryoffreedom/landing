import React from 'react';
import { SketchField, Tools } from 'react-sketch';

class Sketch extends React.Component {
    render() {
        return (
            <SketchField className="sketch"
                tool={Tools.Pencil}
                lineColor='#9AFF77'
                lineWidth={4} />
        )
    }
}

export default Sketch;
