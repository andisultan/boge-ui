import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from '../src'

export default {
  title: 'Component/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Solid = Template.bind({})
Solid.args = {
  children: 'Button',
}

export const SolidIcon = Template.bind({})
SolidIcon.args = {
  before: <DownloadOutlined />,
}

export const SolidBefore = Template.bind({})
SolidBefore.args = {
  children: 'Button',
  before: <DownloadOutlined />,
}

export const SolidAfter = Template.bind({})
SolidAfter.args = {
  children: 'Button',
  after: <DownloadOutlined />,
}

export const SolidBeforeAfter = Template.bind({})
SolidBeforeAfter.args = {
  children: 'Button',
  before: <DownloadOutlined />,
  after: <DownloadOutlined />,
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  children: 'Button',
}

export const OutlineIcon = Template.bind({})
OutlineIcon.args = {
  variant: 'outline',
  before: <DownloadOutlined />,
}

export const OutlineBefore = Template.bind({})
OutlineBefore.args = {
  variant: 'outline',
  children: 'Button',
  before: <DownloadOutlined />,
}

export const OutlineAfter = Template.bind({})
OutlineAfter.args = {
  variant: 'outline',
  children: 'Button',
  after: <DownloadOutlined />,
}

export const OutlineBeforeAter = Template.bind({})
OutlineBeforeAter.args = {
  variant: 'outline',
  children: 'Button',
  before: <DownloadOutlined />,
  after: <DownloadOutlined />,
}

export const Transparent = Template.bind({})
Transparent.args = {
  variant: 'transparent',
  children: 'Button',
}

export const TransparentIcon = Template.bind({})
TransparentIcon.args = {
  variant: 'transparent',
  before: <DownloadOutlined />,
}

export const TransparentBefore = Template.bind({})
TransparentBefore.args = {
  variant: 'transparent',
  children: 'Button',
  before: <DownloadOutlined />,
}

export const TransparentAfter = Template.bind({})
TransparentAfter.args = {
  variant: 'transparent',
  children: 'Button',
  after: <DownloadOutlined />,
}

export const TransparentBeforeAfter = Template.bind({})
TransparentBeforeAfter.args = {
  variant: 'transparent',
  children: 'Button',
  before: <DownloadOutlined />,
  after: <DownloadOutlined />,
}
