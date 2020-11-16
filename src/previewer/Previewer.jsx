// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/Previewer/Previewer.jsx
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
import PreviewerWrapper from './Previewer.style'

type PreviewerProps = {
  CardComponent: ComponentType<any>,
  data: Array<Object>
}

const Previewer = ({ CardComponent, data }: PreviewerProps) => {
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
    <PreviewerWrapper>
      {data.map((item) => (
        <CardComponent key={item.key} {...item} /> // eslint-disable-line react/jsx-props-no-spreading
      ))}
    </PreviewerWrapper>
  )
}

export default Previewer
