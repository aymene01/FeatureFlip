import { Meta, StoryFn } from '@storybook/react'
import { Badge } from '.'

export default {
  title: 'Badge',
  component: Badge,
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = args => <Badge {...args}>Badge</Badge>

export const Default = Template.bind({})
Default.args = {
  variant: 'default',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
}

export const Destructive = Template.bind({})
Destructive.args = {
  variant: 'destructive',
  color: 'danger',
}

export const Green = Template.bind({})
Green.args = {
  variant: 'outline',
  color: 'green',
}
