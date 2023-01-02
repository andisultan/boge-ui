import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DownloadOutlined } from '@ant-design/icons'
import { Input } from '../src'

export default {
  title: 'Component/Input',
  component: Input,
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
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Solid = Template.bind({})
Solid.args = {
  placeholder: 'placeholder',
}

export const Message = Template.bind({})
Message.args = {
  placeholder: 'placeholder',
  message: (
    <span>
      <DownloadOutlined /> This is message
    </span>
  ),
}

export const Hint = Template.bind({})
Hint.args = {
  placeholder: 'placeholder',
  hint: 'This is hint',
}

export const SolidBefore = Template.bind({})
SolidBefore.args = {
  placeholder: 'placeholder',
  before: <DownloadOutlined />,
}

export const SolidAfter = Template.bind({})
SolidAfter.args = {
  placeholder: 'placeholder',
  after: <DownloadOutlined />,
}

export const SolidBeforeAfter = Template.bind({})
SolidBeforeAfter.args = {
  placeholder: 'placeholder',
  before: <DownloadOutlined />,
  after: <DownloadOutlined />,
}

export const Transparent = Template.bind({})
Transparent.args = {
  variant: 'transparent',
  placeholder: 'placeholder',
}

export const TransparentIcon = Template.bind({})
TransparentIcon.args = {
  placeholder: 'placeholder',
  variant: 'transparent',
  before: <DownloadOutlined />,
}

export const TransparentBefore = Template.bind({})
TransparentBefore.args = {
  placeholder: 'placeholder',
  variant: 'transparent',
  before: <DownloadOutlined />,
}

export const TransparentAfter = Template.bind({})
TransparentAfter.args = {
  placeholder: 'placeholder',
  variant: 'transparent',
  after: <DownloadOutlined />,
}

export const TransparentBeforeAfter = Template.bind({})
TransparentBeforeAfter.args = {
  placeholder: 'placeholder',
  variant: 'transparent',
  before: <DownloadOutlined />,
  after: <DownloadOutlined />,
}
