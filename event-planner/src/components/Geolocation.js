import React from 'react';
// import '.../App.css';
import {GOOGLE_API_KEY} from './config.js';

class Geolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.handleLocationError = this.handleLocationError.bind(this);
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        console.log(position.coords.latitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }

    handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("User denied the request for Geolocation.")
                break;
            default:
                alert("An unknown error occurred.")
        }
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
                {
                    this.state.latitude && this.state.longitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${GOOGLE_API_KEY}`} alt="reverse geocoding" />
                    :
                    null
                }
            </div>
        )
    }
}

export {Geolocation}