import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import cakeReducer from './cakeslice'

const store = configureStore ({
    reducer:{
        cake: cakeReducer
    }
  
})

export default store