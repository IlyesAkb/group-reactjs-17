import React, {useState} from 'react'
import ReactDom from 'react-dom'
import { App } from './components/app'
import './index.scss'

ReactDom.render(
  <App />,
  document.querySelector('#app')
)
