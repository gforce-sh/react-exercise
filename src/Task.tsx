import styled from 'styled-components';
import { useState } from 'react';

export interface TaskProps {
  /** The description of the task */
  description: string;
  /** Is the task complete? */
  completed?: boolean;
  /** How large should the text be? */
  size?: 'small' | 'regular' | 'big';
  /** Colour shade of the completed task item */
  colour?: string;
}

export const Task = ({ description, size, colour, completed: isCompleted = false }: TaskProps) => {
  const [completed, setCompleted] = useState(isCompleted);

  return (
    <TaskContainer completed={completed} colour={colour} onClick={() => setCompleted(!completed)}>
      <Text completed={completed} size={size}>{description}</Text>
    </TaskContainer>);
};

const TaskContainer = styled.div<{ completed?: boolean, colour?: string }>`
    display: flex;
    align-items: center;
    background: ${({ completed, colour }) => (completed ? colour ? colour : '#c1ffb1' : 'none')};
    height: 100%;
    cursor: pointer;
    padding: 0 15px;

    :hover {
        opacity: 0.5;
    }
`;

const Text = styled.span<{ completed: boolean, size?: string }>`
    color: ${({ completed }) => (completed ? 'grey' : 'black')};
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
    font-size: ${({ size }) => (size === 'big' ? '36px' : size === 'small' ? '14px' : '24px')};
`;