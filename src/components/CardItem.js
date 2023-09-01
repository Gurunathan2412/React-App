import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    const [src_n, setSrc_n] = useState(props.src)

    function changeImage(){
        const p = []
        for(let i=1;i<=14;i++){
            if(!props.arr.includes(i)){
                p.push(i)
            }
        }
        const r = Math.floor(Math.random()*p.length)
        setSrc_n(p[r])
        props.changeArr(props.src, p[r])
        // console.log(p,"p")
        // console.log(props.arr,r,"arr")
    }
  return (
    <div>
        <li className='cards__item'>
        {/* to={props.path} */}
        <Link className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              onClick= {changeImage}
              className='cards__item__img'
              alt='Travel '
              src={`images/img-${src_n}.jpg`}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default CardItem