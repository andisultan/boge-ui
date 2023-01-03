import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Accordion } from '../src/components/accordion/accordion'

export default {
  title: 'Component/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const Example = Template.bind({})
Example.args = {
  items: [
    {
      title: 'Accordion Item 1',
      content: <div>Hello</div>,
    },
    {
      title: 'Accordion Item 2',
      content: <div>Hello 2</div>,
    },
  ],
  icon: <LeftOutlined />,
}
