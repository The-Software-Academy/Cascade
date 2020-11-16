// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/card/Card.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Monday, September 14th 2020, 11:49:49 am
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
import BaseCard from './BaseCard'
import type { LinkCardData } from './Cards.definitions'
import CardHover from './LinkCard.style'

const LinkCard = ({ text, image, link }: LinkCardData) => {
  return (
    <BaseCard image={image} fixedHeight='300px !important;'>
      <CardHover to={link}>{text}</CardHover>
    </BaseCard>
  )
}

export default LinkCard
