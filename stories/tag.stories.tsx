import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tag } from '../src'

export default {
  title: 'Component/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Solid = Template.bind({})
Solid.args = {
  variant: 'solid',
  children: 'Tag',
}

export const Closable = Template.bind({})
Closable.args = {
  closable: true,
  children: 'Tag',
}
