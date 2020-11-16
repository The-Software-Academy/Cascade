// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/card/Card.style.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Monday, September 14th 2020, 2:51:21 pm
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

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import type { ComponentType } from 'react'

const LinkForeground: ComponentType<any> = styled(Link)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  &:hover {
    background-color: rgba(46, 49, 49, 0.5);
    opacity: 1;
  }
  color: white;

  z-index: 2;
`
export default LinkForeground
