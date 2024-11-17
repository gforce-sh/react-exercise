import type { Meta, StoryObj } from '@storybook/react';
import { Task } from '../Task';

const meta = {
  title: 'TodoList/Task',
  component: Task,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colour: { control: 'color' },
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Incomplete: Story = {
  args: {
    description: 'Find nemo',
    size: 'regular',
    completed: false,
  },
};

export const Complete: Story = {
  args: {
    description: 'Buy a loaf of bread on the way back home',
    size: 'regular',
    completed: true,
  },
};
