// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/cards/PostCard.test.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Thursday, October 15th 2020, 8:25:27 pm
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
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import BaseCard from './BaseCard'
import type { CardData } from './Cards.definitions'

describe('LinkCard', () => {
  const testData: CardData = {
    image: 'testImage'
  }
  const testTheme: Object = {
    font: {
      TITLE_TEXT: '600 6vw/30px Barlow, sans-serif'
    }
  }
  it('renders and unmounts', () => {
    const div = document.createElement('div')
    ReactDom.render(
      <MemoryRouter>
        <ThemeProvider theme={testTheme}>
          <BaseCard image={testData.image}>
            <p />
          </BaseCard>
        </ThemeProvider>
      </MemoryRouter>,
      div
    )
    ReactDom.unmountComponentAtNode(div)
  })

  it('renders without crashing', () => {
    shallow(
      <BaseCard image={testData.image}>
        <p />
      </BaseCard>
    )
  })
})
