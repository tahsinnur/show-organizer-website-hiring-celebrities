import React, { useEffect, useState } from 'react';
import Performer from '../Performer/Performer';

const Performers = () => {
    const [performers, setPerformers] = useState([]);

    useEffect( () => {
        fetch('./performers.json')
        .then(res => res.json())
        .then(data => setPerformers(data))
    } , [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 ">
            {
                performers.map(performer => <Performer key={performer._id} performer={performer}></Performer>)
            }
        </div>
    );
};

export default Performers;