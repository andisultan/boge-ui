import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../src'

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Check = Template.bind({})
Check.args = {
  variant: 'check',
}

export const Plus = Template.bind({})
Plus.args = {
  variant: 'plus',
}

export const Minus = Template.bind({})
Minus.args = {
  variant: 'minus',
}
