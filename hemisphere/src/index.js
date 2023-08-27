import React from 'react';
import {createRoot} from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

    // Second way to initialize state
    state = {latitude: null, longitude: null, errorMessage: ''}

    /*
    constructor(props) {
        super(props) // You can't use "this.sth" until you call parent's constructor by calling super(props)

        // One of the ways to initialize state
        // this.state = { latitude: null, longitude: null, errorMessage: '' }
    }
    */
   
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude,
                                longitude: position.coords.longitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        )
    }

    render() {
        if(this.state.errorMessage && !this.state.latitude){
            return (<div> {this.state.errorMessage} </div>)
        }
        else if(!this.state.errorMessage && this.state.latitude){
            return (<div> <HemisphereDisplay latitude={this.state.latitude}/> </div>)
        }
        else
            return ( <div> Loading... </div>)
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);