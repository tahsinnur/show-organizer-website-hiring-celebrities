import React from 'react';
import './Performer.css'

const Performer = (props) => {
    const {img, name, age, job, wage} = props.performer;
    return (
        <div>
            <div className="col">
                <div className="card h-100 performer">
                    <img style={{height:"300px", borderRadius:"50%", padding: "20px"}} src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">{name}</h4>
                        <p className="card-text fs-5 fw-bold">Age: <span className="fw-normal">{age}</span></p>
                        <p className="card-text fs-5 fw-bold">Job: <span className="fw-normal">{job}</span></p>
                        <p className="card-text fs-5 fw-bold">Wage: <span className="fw-normal">{wage}</span></p>
                        <button
                        onClick={ () => props.handleHireMeBtn(props.performer)} 
                        style={{backgroundColor:"#a90455"}} 
                        className="btn text-white fw-bold px-4"
                        >Hire Me <i className="fas fa-cart-arrow-down"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performer;