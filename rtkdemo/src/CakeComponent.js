import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './app/cakeslice'

const CakeComponent = () => {

    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of cakes available in stock - {numOfCakes}</h2>
        &nbsp;&nbsp;&nbsp;<button on onClick={()=> dispatch (ordered())}> Order Cake</button> &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;<button on onClick={()=> dispatch (restocked())}>Restock Cake</button>
    </div>
   
  )
}

export default CakeComponent