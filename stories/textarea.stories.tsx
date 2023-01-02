import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textarea } from '../src'

export default {
  title: 'Component/Textarea',
  component: Textarea,
  argTypes: {
    disabled: {
      description: 'disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

export const Default = Template.bind({})
Default.args = {}
