import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from '../src/'

export default {
  title: 'Component/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select placeholder='Selectooooooooooo item...' {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
  ],
  onChange: (value) => console.log(value),
}

export const Searchable = Template.bind({})
Searchable.args = {
  options: [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
  ],
  isSearchable: true,
}

export const Multi = Template.bind({})
Multi.args = {
  options: [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
  ],
  isMulti: true,
}

export const MultiAndSearchable = Template.bind({})
MultiAndSearchable.args = {
  options: [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'grey', label: 'Grey' },
  ],
  isMulti: true,
  isSearchable: true,
}
