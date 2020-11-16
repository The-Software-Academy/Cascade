// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/cards/PostCard.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Thursday, October 15th 2020, 8:25:14 pm
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
import type { Node } from 'react'
import type { CardData } from './Cards.definitions'
import { CardArea, CardBackground } from './BaseCard.style'

const BaseCard = ({
  image,
  fixedHeight,
  children
}: {
  ...CardData,
  children?: Node
}) => {
  return (
    <CardArea>
      <CardBackground src={image} fixedHeight={fixedHeight} />
      {children}
    </CardArea>
  )
}

BaseCard.defaultProps = {
  children: null
}

export default BaseCard
