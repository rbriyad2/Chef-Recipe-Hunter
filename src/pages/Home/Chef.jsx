import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allchefs from '../Allchefs/Allchefs';

const Chef = () => {
    const chefsinfo = useLoaderData()

    
    return (
        <section className='allchefs'>
           <div className="container">
           <h2 className='gradianthead'>Chef Lists</h2>
           <div className="allchefdata">
            {chefsinfo.map(chefs => <Allchefs key={chefs._id} chefs={chefs}></Allchefs>)}
            </div>
           </div>
        </section>
    );
};

export default Chef;