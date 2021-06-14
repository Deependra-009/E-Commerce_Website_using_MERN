import React from 'react'
import Detailsbox from './Detailsbox';
import {Fitness} from '../Data/Beautycards';
import {Laptopcard} from './Card';

const Fitnesspage=()=>{
    return (
        <>
            <Detailsbox></Detailsbox>
            <div className="mobilespage">
                <div className="pageheading">
                    <h1>Fitnesspage </h1>
                </div>
                <div >
                    {
                        Fitness.map((val) => {
                            return (
                                <Laptopcard id={val.id} imgsrc={val.image} cname={val.name} list={val.list}></Laptopcard>
                            )
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Fitnesspage;