import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { GetData} from '../../configs'
import './Main.scss'


function Main() {

  const [data, setData] = useState(null)
  const [offset, setOffset] = useState(0)
  const [current, setCurrent] = useState(1)
  const [maxPage, setMaxPage] = useState(0)

  const limit = 20

  useEffect(() => {
    GetData(`pokemon?offset=${offset}&limit=${limit}`)
      .then(r => {
        setData(r.results)
        setMaxPage(Math.ceil(r.count / limit))
      })
  }, [current])

  const next = () => {
    current <= maxPage && setOffset(offset + limit)
    setCurrent(current + 1)
  }
  const prev = () => {
    current !== 0 && setOffset(offset - limit)
    setCurrent(current - 1)
  }

  if(!data) return <h1>loading</h1>
  return (
    <div>
      <div className="card_row">
        {
          data.map(({ name }, index) => (
            <Card key={index} post={{ name: name, id: index }} />
          ))
        }
      </div>  
      
      <div className="page_btns">
        <div className="page">
          <button className='prev_btn' disabled={current == 1 ? true : false}  onClick={prev} >Prev</button>
          <div className="pageCounter">
            <span>{current}</span>
            /
            <span>{maxPage}</span>
          </div>
          <button className='next_btn' disabled={current == maxPage ? true : false} onClick={next}>Next</button>
        </div>
      </div>

    </div>
     
  )
}

export default Main
