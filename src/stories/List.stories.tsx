import type { Meta, StoryObj } from '@storybook/react';
import { List } from '../List';
import tasks from './assets/sampleTasks.json';

const meta = {
  title: 'TodoList/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    spacing: 'comfortable',
    headerSize: 'large',
    tasks,
  },
};

export const Loading: Story = {
  args: {
    spacing: 'comfortable',
    headerSize: 'large',
    tasks: [],
    loading: true,
  },
};
