// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/card/Card.definitions.js
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Monday, September 14th 2020, 7:41:34 pm
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

export type CardData = {
  image: string,
  fixedHeight?: string,
  gridArea?: string,
  key?: string | number,
  placeSelf?: string
}
export type PostCardData = { ...CardData, text: string }
export type LinkCardData = { ...PostCardData, link: string }
