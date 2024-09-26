import type { Meta, StoryObj } from '@storybook/react'

import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,

  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
  },

  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },

  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
