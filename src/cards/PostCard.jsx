// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/cards/PostCard.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Thursday, October 15th 2020, 9:44:13 pm
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

import React from 'react'
import BaseCard from './BaseCard'
import OpaqueForeground from './PostCard.style'
import type { PostCardData } from './Cards.definitions'

const PostCard = ({ text, image }: PostCardData) => (
  <BaseCard image={image}>
    <OpaqueForeground>{text}</OpaqueForeground>
  </BaseCard>
)

export default PostCard
