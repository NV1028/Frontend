import React from 'react';
// import '.../App.css';

class Geolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        }
        this.getLocation = this.getLocation.bind(this);
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        console.log(position)
    }

    render(){
        return (
            <div className='Geolocation'>
                <h2>
                    Geolocation of User:
                </h2>
                <button onClick={this.getLocation}>Get Coordinates</button>
                <h4>HTML5 Coordinates</h4>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <h4>Google Maps Reverse Geocoding</h4>
                <p>Address: {this.state.userAddress}</p>
            </div>
        )
    }
}

export {Geolocation}