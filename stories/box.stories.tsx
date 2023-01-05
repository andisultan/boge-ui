import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '../src'

export default {
  title: 'Component/Box',
  component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <span>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam labore aperiam sequi quibusdam, corrupti repellat
      aut qui? Atque recusandae dignissimos earum sequi facere suscipit minus error cumque incidunt deleniti. Dolore.
    </span>
  ),
}
