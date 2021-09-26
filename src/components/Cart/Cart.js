import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const performer of cart){
        total = total + performer.wage;
    }

    return (
        <div>
            <h2 className="fw-bold">Performers Cart</h2>
            <br />
            <h3>Total Peformers Added: <span className="fw-bold">{props.cart.length}</span></h3>
            <h3>Total Cost: <span className="fw-bold">{total}</span></h3>
            <h3>Performer:
                {
                    cart.map(performerInCart => <li style={{listStyle:"none", color:"#a90455"}} className="fs-4">{performerInCart.name}</li>)
                }
            </h3>
        </div>
    );
};

export default Cart;