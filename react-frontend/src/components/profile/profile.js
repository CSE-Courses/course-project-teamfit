import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../post/feed'
import './profile.css'
import Feed from '../post/feed';
import { Button} from 'react-bootstrap';

class Profile extends React.Component{

    componentDidMount(){

    }

    componentWillUnmount(){
        
    }

    render() {
        return (
        <div>
            <div className="rows">
                <div className="row">
                <div class ="button">
                    <Button variant="info" size="xxl">Info</Button>{' '}
                    </div>
                    <img className="image" alt="profilepic" src="https://images.unsplash.com/photo-1514218698632-ef079aeae842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
                    <h2 className="name">Marcos Quan</h2>
                    <h4 className="age">Age: ~78</h4>
                    <h4 className="height">Height: 5'9</h4>
                    <h4 className="weight">Weight: ~147</h4>
                    <h4 className="gender">Gender: Male</h4>
                    <h4 className="number">Phone Number: 911</h4>
                    <h4 className="email">Email: marcos@teamfit.com</h4>
                    <div class ="button">
                    <Button variant="button" size="xxl">Delete Account</Button>{' '}
                    </div>
                </div>
                {/* <div className="row">
                    <Feed />
                </div> */}
            </div>
        </div>
        )
    };
}




export default Profile;
