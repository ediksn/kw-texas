import React from 'react'
import { render } from '@testing-library/react-native'
import { pickerResponse } from '~/../__mocks__/mockResponses'
import ImagePickerPreview from '~/components/ImagePickerPreview'
import { TEST_IDS } from '~/constants'
import { UploadImageInterface } from '~/interfaces/uploadImageInterface'

const handleDeleteImage = (image: UploadImageInterface) => {
  pickerResponse.filter(imageState => imageState !== image)
}

describe('<ImagePickerPreview />', () => {
  let rendered: any

  beforeEach(() => {
    rendered = render(<ImagePickerPreview images={pickerResponse} handleDelete={handleDeleteImage} />)
  })

  it('should render component ImagePickerPreview correctly', () => {
    const component = rendered.getAllByTestId(TEST_IDS.GENERAL_COMPONENTS.IMAGE_PICKER_PREVIEW_ID)
    expect(component).not.toBeNull()
  })

  it('should render images for ImagePickerPreview correctly', () => {
    const firstImage = rendered.getByTestId(`${TEST_IDS.IMAGE_PICKER_PREVIEW.IMAGE_ID}0`)
    const secondImage = rendered.getByTestId(`${TEST_IDS.IMAGE_PICKER_PREVIEW.IMAGE_ID}1`)
    expect(firstImage).not.toBeNull()
    expect(secondImage).not.toBeNull()
  })
})
