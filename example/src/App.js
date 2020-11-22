// @flow
/**
 * File: /home/andrea/projects/Cascade/carousel/example/src/App.js
 * Project: /home/andrea/projects/Cascade/carousel/example
 * Created Date: Tuesday, September 15th 2020, 11:43:27 am
 * Author: Andrea Gaetano Citrolo
 * -----
 * Last Modified: Mon Nov 16 2020
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

import { Slider, LinkCard, Mosaic } from 'carousel'
import { Route } from 'react-router-dom'

import type { LinkCardData } from 'carousel'

import I1 from './images/1.jpg'
import I2 from './images/2.jpg'
import I3 from './images/3.jpg'
import I4 from './images/4.jpg'
import I5 from './images/5.jpg'
import I6 from './images/6.jpg'
import I7 from './images/7.jpg'
import I8 from './images/8.jpg'

const IMAGES = [I1, I2, I3, I4, I5, I6, I7, I8, I3, I1]

const setImages: (images: Array<any>) => Array<LinkCardData> = (images) =>
  images.map((item, index) => ({
    image: item,
    text: 'Questo è un testo di prova',
    link: '/',
    key: index
  }))


const App = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{width:"1000px"}}>
        <Slider>
          {IMAGES.map((item, index) => (
            <LinkCard text={index} image={item} link={"/"} />
          ))}
        </Slider>
        <h1> Questo testo non scrollabile non si deve muovere</h1>
      </div>
      <div style={{width:"80%"}}>
        <Mosaic CardComponent={LinkCard} data={setImages(IMAGES)} />
      </div>
    </div>
  )
}

const RoutedApp = () => <Route exact path="/" component={App} />

export default RoutedApp
