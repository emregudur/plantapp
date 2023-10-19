import * as React from 'react'
import { render } from '@testing-library/react-native'
import HomeCard from '../HomeCard'

it(`renders correctly`, () => {
  const tree = render(<HomeCard id={'test'} title={'test'} image_uri={'image_uri'} />).toJSON()

  expect(tree).toMatchSnapshot()
})

it(`should render title correctly`, () => {
  const { getByText } = render(<HomeCard id={'test'} title={'test'} image_uri={'image_uri'} />)

  expect(getByText('test').children[0]).toBe('test')
})

it(`should render image correctly`, async () => {
  const uri = 'https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png'
  const { findByTestId } = render(<HomeCard id={'test'} title={'test'} image_uri={uri} />)

  expect((await findByTestId('image-bg')).props.source.uri).toEqual(uri)
})
