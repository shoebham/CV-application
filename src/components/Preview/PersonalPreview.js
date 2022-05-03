import { Component } from "react";

class PersonalPreview extends Component{
    render(){
        const {firstName, lastName, contact, email, city, state, country} = this.props.PersonalDetails;
        return (
            <div>
                <p>Personal</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Contact: {contact}</p>
                <p>Email: {email}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Country: {country}</p>
            </div>
        );
    }
}

export default PersonalPreview