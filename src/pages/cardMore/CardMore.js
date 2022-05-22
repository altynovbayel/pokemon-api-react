import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetData} from '../../configs'
import './CardMore.scss'


export default function CardMore() {
  
  const {id} = useParams()
  
  const [data, setData] = useState(null)
  
  useEffect(() => {
    GetData(`pokemon/${id}`)
      .then(r => setData(r))
  }, [])

  if(!data) return <h1>Loading...</h1>
  return (
    <div>
      <div className="back_btn">
        <Link className='back' to={'/pokemon'} >Back</Link>
      </div>
      <div className="single">
        <div className="single_wrapper">
          <img src={data.sprites.other.dream_world.front_default} alt='pokemon img' />
          
          <ul>
            <li>
              Name: <span>{data.name}</span>
            </li>
            <li>
              Weight: <span>{data.weight / 10} kg</span>
            </li>
            <li>
              Heigth: <span>{data.height} cm</span>
            </li>
            <li>
              Abilities: <span>{data.abilities[0].ability.name}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  
  
}
