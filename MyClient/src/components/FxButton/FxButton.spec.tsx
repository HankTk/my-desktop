import { render } from '@testing-library/react'
import { FxButton } from '../index'

test('button should renders', () => {

  const { getByText } = render(<FxButton variant={''}>ButtonContent</FxButton>)

  expect(getByText('ButtonContent')).toBeTruthy()
  expect(getByText('ButtonContent')).toHaveAttribute('type', 'button')

})
