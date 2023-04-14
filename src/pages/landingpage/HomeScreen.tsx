import React from 'react'
import Home from "./Home"
import Connect from "./Connect"
import Plan from './Plan'
import Payment from "./Payment"
import Modern from './Modern/Modern'
import Facts from "./Facts/Facts"

const HomeScreen = () => {
  return (
    <div>
        <Home/>
        <Plan/>
        <Modern/>
        <Connect/>
        <Payment/>
        <Facts/>
    </div>
  )
}

export default HomeScreen