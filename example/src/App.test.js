// @flow
/**
 * File: /home/andrea/projects/Cascade/carousel/example/src/App.test.js
 * Project: /home/andrea/projects/Cascade/carousel/example
 * Created Date: Tuesday, September 15th 2020, 11:43:27 am
 * Author: Andrea Gaetano Citrolo
 * -----
 * Last Modified: Sun Nov 15 2020
 * Modified By: Andrea Gaetano Citrolo
 * -----
 * Copyright (c) 2020 The Software Academy ACG
 * Creative Commons Attribution Non Commercial No Derivatives 4.0, http://creativecommons.org/licenses/by-nc-nd/4.0/legalcode
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
