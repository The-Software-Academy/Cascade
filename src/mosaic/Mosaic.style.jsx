// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/Mosaic/Mosaic.style.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Saturday, September 19th 2020, 6:55:51 pm
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

const MosaicWrapper: ComponentType<any> = styled.div`
  max-width: 100% !important;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  position: static;
  min-height: 200px;
  overflow: hidden;
  /* overflow: auto;
  white-space: nowrap;
  scrollbar-width: none; */
`

export default MosaicWrapper
