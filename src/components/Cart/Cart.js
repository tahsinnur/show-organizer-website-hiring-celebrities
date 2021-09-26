import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const performer of cart){
        total = total + performer.wage;
    }

    return (
        <div>
            <h2 className="fw-bold">Performers Cart <i className="fas fa-cart-arrow-down"></i></h2>
            <br />
            <h3>Total Peformers : <span className="fw-bold">{props.cart.length}</span></h3>
            <h3>Total Cost: $<span className="fw-bold">{total}</span></h3>
            <h3>
                {
                    cart.map(performerInCart => <div style={{backgroundColor:"#a90455"}} className="d-flex my-2 align-items-center p-2 rounded">
                        <div>
                            <img style={{height:"100px", width:"100px", borderRadius:"50px"}} src={performerInCart.img} alt="" />
                        </div>
                        <div>
                            <p className="fs-4 ms-2 text-white">{performerInCart.name}</p>
                        </div>
                    </div>)
                }
            </h3>
            <button
                style={{backgroundColor:"#a90455"}} 
                className="btn text-white fw-bold px-4"
                >Buy Now
            </button>
        </div>
    );
};

export default Cart;