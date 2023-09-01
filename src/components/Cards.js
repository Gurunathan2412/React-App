import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

let arr = new Set()
while(arr.size <5){
    arr.add(Math.floor(Math.random() * 14)+1)
}
arr = [...arr]
// console.log(arr[0])
function changeArr(src, val){
    // arr = arr.filter((num) => {
    //     return num!==src
    // })
    const index = arr.indexOf(src)
    arr[index] = val
    // arr.push(val)
}
function Cards() {
  return (
    <div className='cards'>
    <h1>Check out these EPIC Destinations!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src={arr[0]}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
            arr = {arr}
            changeArr = {changeArr}
          />
          <CardItem
            src={arr[1]}
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
            arr = {arr}
            changeArr = {changeArr}
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src={arr[2]}
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
            arr = {arr}
            changeArr = {changeArr}
          />
          <CardItem
            src={arr[3]}
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
            arr = {arr}
            changeArr = {changeArr}
          />
          <CardItem
            src={arr[4]}
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
            arr = {arr}
            changeArr = {changeArr}
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Cards