import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MoreOutlined } from '@ant-design/icons'
import { Dropdown } from '../src'

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Example = Template.bind({})
Example.args = {
  after: <MoreOutlined />,
  label: 'Dropdown',
  children: <div>Lorem Ipsum</div>,
}
