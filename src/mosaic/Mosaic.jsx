// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/Mosaic/Mosaic.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Saturday, September 19th 2020, 6:51:22 pm
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
import React, { useState, useEffect } from 'react'
import type { ComponentType } from 'react'
import MosaicWrapper from './Mosaic.style'

type MosaicProps = {
  CardComponent: ComponentType<any>,
  data: Array<Object>
}

const Mosaic = ({ CardComponent, data }: MosaicProps) => {
  const [loadedImagesCounter, setCounter] = useState([])
  useEffect(() => {
    function computeSize(item) {
      const img = new Image()
      img.src = item.image
      img.onload = () => {
        setCounter([
          ...loadedImagesCounter,
          {
            name: item.name,
            image: img
          }
        ])
      }
    }
    if (loadedImagesCounter.length !== data.length) {
      computeSize(data[loadedImagesCounter.length])
    }
  }, [loadedImagesCounter, data])
  return (
    <MosaicWrapper>
      {data.map((item) => (
        <CardComponent key={item.key} {...item} /> // eslint-disable-line react/jsx-props-no-spreading
      ))}
    </MosaicWrapper>
  )
}

export default Mosaic
