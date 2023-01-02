import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spinner } from '../src'

export default {
  title: 'Component/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}
