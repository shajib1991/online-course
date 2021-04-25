import React from 'react';
import './Topics.css'

const Topics = (props) => {
    const {img, name, features, instructor, seats, price} = props.topics;
    
    
    return (
        <div className="topic-container">
            <div>
                <img src={img} alt=""/>

            </div>
            <div className="topic-details">
                <h2 className="topic-name">Course Title: {name}</h2>
                <p>Course Details: {features}</p>
                <h4>Course Instructor: {instructor}</h4>
                <p>Available Seats: {seats}</p>
                <p>Course Price: $ {price}</p>
                <button onClick= {() => props.handleAddTopic(props.topics)} className="main-button">Enroll Now</button>
            </div>
        </div>
    );
};

export default Topics;