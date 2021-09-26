import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Performer from '../Performer/Performer';
import './Performers.css'

const Performers = () => {
    const [performers, setPerformers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./performers.json')
        .then(res => res.json())
        .then(data => setPerformers(data))
    } , [])

    const handleHireMeBtn = (performer) => {
        const newCart = [...cart, performer];
        setCart(newCart);
    }

    return (
        <div className="performers-shop container mx-auto row mt-3">

            <div className="performer-container col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        performers.map(performer => <Performer 
                            key={performer._id} 
                            performer={performer}
                            handleHireMeBtn={handleHireMeBtn}
                            ></Performer>)
                    }
                </div>
            </div>

            <div className="cart-container col-md-3">
                <Cart cart={cart}></Cart>
            </div>

        </div>
        
    );
};

export default Performers;