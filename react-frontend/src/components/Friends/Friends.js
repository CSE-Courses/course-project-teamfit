import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';
import '../post/feed'
import './Friends.css'
import Feed from '../post/feed';

class friends extends React.Component{

    componentDidMount(){

    }

    componentWillUnmount(){
        
    }


    // constructor(props) {
    //     super(props);
    //     this.state = {isToggleOn: true};
    
    //     // This binding is necessary to make `this` work in the callback
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    
    //   handleClick() {
    //     this.setState(state => ({
    //       isToggleOn: !state.isToggleOn
    //     }));
    //   }









    render() {
    
        
        return (

        



        <div>
            <div className="button">
<Button variant="primary" size="xxl">Followers{" "}{" "}{" "}{" "} </Button>{' '} 
  <Button variant="Following" size="xxl">Following{" "}{" "}{" "}{" "}{" "}</Button>{' '}
  <Button variant="Spotters" size="xxl">Spotters{" "}{" "}{" "}{" "}{" "}</Button>{' '}

            </div>

            <div className="rows">
                {/* <div className="row">
                    <img className="image" alt="profilepic" src="https://images.unsplash.com/photo-1514218698632-ef079aeae842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
                    <h2 className="name">Marcos Quan</h2>
                    <h4 className="age">Age: ~78</h4>
                    <h4 className="height">Height: 5'9</h4>
                    <h4 className="weight">Weight: ~147</h4>
                    <h4 className="gender">Gender: Male</h4>
                    <h4 className="number">Phone Number: 911</h4>
                    <h4 className="email">Email: marcos@teamfit.com</h4>
                </div> */}
                <div className="row">
                    <img className="image" alt="profilepic" src="https://images.unsplash.com/photo-1514218698632-ef079aeae842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
                    <h2 className="name">Marcos Quan</h2>
                   <h4 className="number">Phone Number: 911</h4>
                    <h4 className="email">Email: marcos@teamfit.com</h4>
                </div>
               
              
               
            </div>
        </div>
        )
    };
}



export default friends;
