import React from 'react'
import { Link } from 'react-router-dom'
import '../../pages/main/Main.scss'

function Card({post}) {
  return (
    <>
      <div className='card' >
        <Link className='card_link' to={`/pokemon/${post.name}`}>
          {post.name}
        </Link>
      </div>
    </>
  )
}

export default Card
