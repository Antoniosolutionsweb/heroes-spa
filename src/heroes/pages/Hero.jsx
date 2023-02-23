import React, { useMemo } from 'react'
import { Navigate,useNavigate,useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers';

export const Hero = () => {
  

  const {id} = useParams();

  const hero = useMemo( ()=> getHeroesById(id),[id] );   

  const heroImageUrl =`/src/assets/${id}.jpg`;

  const navigate = useNavigate(); 

  
  const onNavigateBack= ()=>{
    navigate(-1)
  }
  

  if(!hero){
    return <Navigate to='/marvel'/>
  }



  return (
    <div className='row mt-5 row animate__animated animate__fadeInLeft'>
      <div className="col-4 col-sm-4 col-md-4 ">
        <img 
          src={heroImageUrl}
          alt={hero.superhero} 
          className='img-thumbnail '
        />
      </div>
      <div className="col-8 col-sm-8 col-md-8">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
             <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item"> 
            <b>Publisher:</b> {hero.publisher}
          
          </li>
          <li className="list-group-item"> 
            <b>First appearence:</b> {hero.first_appearance}
          
          </li>
         
         
        </ul>

        <h5 className="mt-5">
          Characters
        </h5>
        <p>{hero.characters}</p>

        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}
        >
          back
        </button>

      </div>
    </div>
  )
}


