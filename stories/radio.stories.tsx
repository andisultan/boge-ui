import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio } from '../src'

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      description: 'disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      description: 'checked',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

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
