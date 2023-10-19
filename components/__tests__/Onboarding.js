import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import Onboarding from '../Onboarding'
import { NavigationContainer } from '@react-navigation/native'

describe('Onboarding one tests', () => {
  it(`renders correctly`, async () => {
    const tree = render(<Onboarding.One />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it(`should render header & button correctly`, async () => {
    const screen = render(<Onboarding.One />)

    const header = await screen.findByText('Take a photo to identify the plant!')
    const button = await screen.findByText('Continue')

    expect(header).not.toBeNull()
    expect(button).not.toBeNull()
    expect(screen.getByTestId('pagination-dots').children[0].props.style.width).toBe(10)
  })
})

describe('Onboarding two tests', () => {
  it(`renders correctly`, async () => {
    const tree = render(<Onboarding.Two />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it(`should render header & button correctly`, async () => {
    const screen = render(<Onboarding.Two />)

    const header = await screen.findByText('Get plant care guides')
    const button = await screen.findByText('Continue')

    expect(header).not.toBeNull()
    expect(button).not.toBeNull()
    expect(screen.getByTestId('pagination-dots').children[1].props.style.width).toBe(10)
  })
})

describe('Onboarding three tests', () => {
  const component = <Onboarding.Three />

  it(`renders correctly`, async () => {
    const tree = render(component).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it(`should render header & buttons correctly`, async () => {
    const screen = render(component)

    const header = await screen.findByText('PlantApp Premium')
    const closebutton = await screen.findByTestId('close-btn')
    const monthbutton = await screen.findByTestId('month-btn')
    const yearbutton = await screen.findByTestId('year-btn')

    expect(header).not.toBeNull()
    expect(closebutton).not.toBeNull()
    expect(monthbutton).not.toBeNull()
    expect(yearbutton).not.toBeNull()
  })

  it(`should switch the buttons`, async () => {
    const activeBorderColor = '#28AF6E'
    const screen = render(component)

    const monthbutton = await screen.findByTestId('month-btn')
    const yearbutton = await screen.findByTestId('year-btn')

    fireEvent(monthbutton, 'press')
    expect(monthbutton.children[0].children[0].children[0].props.style[1].borderColor).toEqual(activeBorderColor)

    fireEvent(yearbutton, 'press')
    expect(yearbutton.children[0].children[0].children[0].props.style[1].borderColor).toEqual(activeBorderColor)
  })
})
