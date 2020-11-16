// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/cards/PostCard.style.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Thursday, October 15th 2020, 8:25:57 pm
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
import styled, { css } from 'styled-components'
import type { ComponentType } from 'react'

const FIXEDHEIGHT = css`
  height: ${(props) => props.fixedHeight};
`
const EXPANDWIDTH = css`
  max-width: 100%;
`

export const CardBackground: ComponentType<any> = styled.img`
  position: relative;
  object-fit: contain;
  ${(props) => (props.fixedHeight ? FIXEDHEIGHT : EXPANDWIDTH)}
  z-index: 0;
`

export const CardArea: ComponentType<any> = styled.div`
  display: inline-block;
  position: relative;
  justify-self: start;
  grid-area: ${(props) => props.gridArea};
`
