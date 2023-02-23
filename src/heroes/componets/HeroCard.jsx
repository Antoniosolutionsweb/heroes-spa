import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters


}) => {
    const heroImageUrl =`/src/assets/${id}.jpg`;
  return (
    
    <>
    <div className="row animate__animated animate__fadeInLeft ">
        <div className="col-12 col-sm-12 col-md-12 p-2">
            <div className="card">
                <img src={heroImageUrl} className="card-img-top" alt={superhero}/>
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                    
                    {
                    (alter_ego !== characters) && (<p className="card-text">{characters}</p>)
                    }
                    <p className="card-text">{first_appearance}</p>
                    <Link to={`/hero/${id}`}>
                        <button className="btn btn-primary">Ver mas</button>
                    </Link>
                    
                </div>
            </div>
        </div>

    </div>
       
    </>
  )
}

 
