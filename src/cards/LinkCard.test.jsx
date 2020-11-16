// @flow
/**
 * File: /home/andrea/projects/Degma/ui/src/components/card/Card.test.jsx
 * Project: /home/andrea/projects/Degma/ui
 * Created Date: Monday, September 14th 2020, 11:50:03 am
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
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import LinkCard from './LinkCard'
import type { LinkCardData } from './Cards.definitions'

describe('LinkCard', () => {
  const testData: LinkCardData = {
    image: 'testImage',
    text: 'testTitle',
    link: 'toSomewhere'
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
          <LinkCard
            image={testData.image}
            text={testData.text}
            link={testData.link}
          />
        </ThemeProvider>
      </MemoryRouter>,
      div
    )
    ReactDom.unmountComponentAtNode(div)
  })

  it('renders without crashing', () => {
    shallow(
      <LinkCard
        image={testData.image}
        text={testData.text}
        link={testData.link}
      />
    )
  })
})
