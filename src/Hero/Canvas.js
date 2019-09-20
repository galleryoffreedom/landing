import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";



class Canvas extends React.Component {
    state = {
        color: "#323234",
        width: 400,
        height: 400,
        brushRadius: 5,
        lazyRadius: 0,
        hideGrid: false,
        catenaryColor: "#9AFF77",
    };

    render() {
        return (
            <div className="canvas-holder">
                <CanvasDraw
                    className="canvas"
                    brushColor="#9AFF77"
                    hideGrid
                    lazyRadius={this.state.lazyRadius}
                    brushRadius={this.state.brushRadius}
                    catenaryColor={this.state.catenaryColor}
                />
            </div>
        );
    }
}

export default Canvas;
