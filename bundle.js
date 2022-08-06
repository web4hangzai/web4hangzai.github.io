// bundle.js used for react dom and svg backgrounds

console.clear();

(function(React, ReactDOM) {
    'use strict';
    // React Document Objection Method
    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;
    // Competiable with the inner explore window
    const width = window.innerWidth;
    const height = window.innerHeight;
    const center_X_axis = width / 2;
    const center_Y_axis = height / 2;
    // ReactDOM App
    const App = () => (
        React.createElement('svg', { width: width, height: height, fill: "orange" },
            React.createElement('defs', null,
                // Draw radial transforming effects, for elegant appearance
                React.createElement('radialGradient', {
                        id: "sky-gradient",
                        cx: "50%",
                        cy: "50%",
                        r: "55%"
                    },
                    React.createElement('stop', { offset: "0%", 'stop-color': "aliceblue" },
                        React.createElement('animate', {
                            attributeName: "stop-color",
                            values: "aliceblue; indigo",
                            dur: "25s",
                            repeatCount: "indefinite"
                        })
                    ),
                    React.createElement('stop', { offset: "100%", 'stop-color': "steelblue" })
                ),
                // Draw linear transforming effects, for elegant appearance
                React.createElement('linearGradient', {
                        id: "land1-gradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%"
                    },
                    React.createElement('stop', { offset: "0%", 'stop-color': "aliceblue" },
                        React.createElement('animate', {
                            attributeName: "stop-color",
                            values: "aliceblue; blue",
                            dur: "25s",
                            repeatCount: "indefinite"
                        })
                    ),
                    React.createElement('stop', {
                        offset: "70%",
                        stopcolor: "midnightblue"
                    })
                ),
                // Draw linear transforming effects, for elegant appearance
                React.createElement('linearGradient', {
                        id: "land2-gradient",
                        x1: "55%",
                        y1: "25%",
                        x2: "90%",
                        y2: "980%"
                    },
                    React.createElement('stop', { offset: "0%", stopcolor: "aliceblue" },
                        React.createElement('animate', {
                            attributeName: "stopcolor",
                            values: "aliceblue; steelblue; aliceblue",
                            dur: "25s",
                            repeatCount: "indefinite"
                        })
                    ),
                    React.createElement('stop', {
                        offset: "100%",
                        stopcolor: "midnightblue"
                    })
                )
            ),
            // Draw FullScreen Rect
            React.createElement('rect', {
                x: "0",
                y: "0",
                width: width,
                height: height,
                fill: "url(#sky-gradient)"
            }),
            // Draw Circle as sun, for elegant appearance
            React.createElement('circle', { cx: center_X_axis, cy: center_Y_axis, r: "150" },
                React.createElement('animate', {
                    attributeName: "cy",
                    values: "250px; 350px; 250px",
                    dur: "25s",
                    repeatCount: "indefinite"
                })
            ),
        )
    );

    // ReactDom Element
    const Element = document.getElementById('SVG_BG');
    ReactDOM.render(React.createElement(App, null), Element);

}(React, ReactDOM));