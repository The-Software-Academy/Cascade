// @flow
/**
 * File: /home/andrea/projects/Cascade/carousel/src/setupTests.js
 * Project: /home/andrea/projects/Cascade/carousel
 * Created Date: Sunday, November 15th 2020, 8:57:29 pm
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
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
