import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Badge, Avatar } from '../src'

export default {
  title: 'Component/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Avatar size='40px' shap='rounded'>
      AS
    </Avatar>
  </Badge>
)

export const OneNumber = Template.bind({})
OneNumber.args = {
  count: '9',
}

export const MulipleNumber = Template.bind({})
MulipleNumber.args = {
  count: '999',
}

export const Status = Template.bind({})
