import type { Meta, StoryObj } from '@storybook/react';
import { Task } from '../Task';
import styled from 'styled-components';

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

type Story = StoryObj<typeof Task>;

const TaskTemplate: Story = {
  render: (props) => {
    return (
      <Bordered>
        <Task {...props} />
      </Bordered>
    );
  },
};

const Bordered = styled.div`
    border: 1px solid #e7e7e7
`;

export const Incomplete: Story = {
  ...TaskTemplate,
  args: {
    description: 'Find nemo',
    size: 'regular',
    completed: false,
  },
};

export const Complete: Story = {
  ...TaskTemplate,
  args: {
    description: 'Buy a loaf of bread on the way back home',
    size: 'regular',
    completed: true,
  },
};
