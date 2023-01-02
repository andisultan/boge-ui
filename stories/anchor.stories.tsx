import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DownloadOutlined } from '@ant-design/icons'
import { Anchor } from '../src'

export default {
  title: 'Component/Anchor',
  component: Anchor,
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
} as ComponentMeta<typeof Anchor>

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Anchor',
}

export const Before = Template.bind({})
Before.args = {
  children: 'Anchor',
  before: <DownloadOutlined />,
}

export const After = Template.bind({})
After.args = {
  children: 'Anchor',
  after: <DownloadOutlined />,
}

export const BeforeAfter = Template.bind({})
BeforeAfter.args = {
  children: 'Anchor',
  before: <DownloadOutlined />,
  after: <DownloadOutlined />,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Anchor',
  disabled: true,
}
