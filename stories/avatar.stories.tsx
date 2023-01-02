import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '../src'

export default {
  title: 'Component/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  size: '24px',
  children: 'k',
}

export const Small = Template.bind({})
Small.args = {
  size: '36px',
  children: 'k',
}

export const Large = Template.bind({})
Large.args = {
  size: '40px',
  src: 'https://rickandmortyapi.com/api/character/avatar/192.jpeg',
}
