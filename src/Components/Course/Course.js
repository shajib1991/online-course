import React, { useState } from 'react';
import './Course.css'
import fakeData from '../../fakeData';
import Topics from '../Topics/Topics';
import Cart from '../Cart/Cart';


const Course = () => {
    const first12 = fakeData.slice(0,12);
    const [topics, setTopics] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddTopic = (topic) => {
        console.log("product Added", topic);
        const newCart = [...cart, topic];
        setCart(newCart);

    }
    
    
    return (
        <div className="course-detail">
            <div className="course-container">
                {
                    topics.map(topics => <Topics handleAddTopic={handleAddTopic} topics={topics}>{topics.name}></Topics>)
                }
                 
                
                
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
                
                
                
            </div>

        </div>
    );
};

export default Course;