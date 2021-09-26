import React from 'react';

const Performer = (props) => {
    const {img, name, age, job, wage} = props.performer;
    return (
        <div>
            <div className="col shadow">
                <div className="card h-100 bg-light">
                    <img style={{height:"300px", borderRadius:"50%", padding: "20px"}} src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title fw-bold">{name}</h4>
                        <p className="card-text fs-5">Age: {age}</p>
                        <p className="card-text fs-5">Job: <span className="fw-bold">{job}</span></p>
                        <p className="card-text fs-5">Wage: {wage}</p>
                        <button style={{backgroundColor:"#a90455"}} className="btn text-white fw-bold px-4">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performer;