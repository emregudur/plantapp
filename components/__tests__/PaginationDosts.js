import * as React from 'react'
import { render } from '@testing-library/react-native'
import PaginationDots from '../PaginationDots'

it(`renders correctly`, () => {
  const tree = render(<PaginationDots activeIndex={0} />).toJSON()

  expect(tree).toMatchSnapshot()
})

it(`should render active index correctly`, async () => {
  const { getByTestId } = render(<PaginationDots activeIndex={0} />)

  expect(getByTestId('pagination-dots').children).toHaveLength(3)
})

it(`should active dots correctly`, async () => {
  let index = 2
  const { getByTestId } = render(<PaginationDots activeIndex={index} />)

  expect(getByTestId('pagination-dots').children[2].props.style.width).toBe(10)
})
