// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/cards/PostCard.style.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Thursday, October 15th 2020, 10:34:57 pm
 * Author: Andrea Gaetano Citrolo
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2020 The Software Academy ACG
 * Creative Commons Attribution Non Commercial No Derivatives 4.0, http://creativecommons.org/licenses/by-nc-nd/4.0/legalcode
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */
import styled from 'styled-components'
import type { ComponentType } from 'react'

const OpaqueForeground: ComponentType<any> = styled.div`
  position: absolute;
  top: 0px;
  bottom: 3px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(46, 49, 49, 0.5);
  opacity: 1;
  color: white;
  z-index: 2;
  font: ${(props) => props.theme.font.TITLE_TEXT};
`

export default OpaqueForeground
