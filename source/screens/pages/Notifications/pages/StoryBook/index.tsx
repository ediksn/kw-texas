import React from 'react'
import '@storybook/addon-ondevice-knobs/register'
import '@storybook/addon-ondevice-actions/register'

import StorybookUIRoot from './sb/index'

export const StoryBook = () => {
  return <StorybookUIRoot />
}
