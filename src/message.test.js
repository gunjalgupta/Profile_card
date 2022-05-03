import { fireEvent, getByText,render, screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './message.html'), 'utf8');

let dom
let container
window.alert = jest.fn();

describe('message.html', () => {
  beforeEach(() => {
    // Constructing a new JSDOM with this option is the key
    // to getting the code in the script tag to execute.
  
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  test('renders a paragraph element', () => {
    console.info("renders a paragraph element")
    expect(container.querySelector('p')).not.toBeNull()
    expect(getByText(container, 'Thank you for visiting my profile. Feel free to message.')).toBeInTheDocument()
  })

  test('renders a button element', () => {
    console.info("renders a button element")
    expect(container.querySelector('button')).not.toBeNull()
    expect(getByText(container, 'Return to home')).toBeInTheDocument()
  })
})
