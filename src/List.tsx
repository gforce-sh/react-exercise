import { Task } from './Task.tsx';
import styled from 'styled-components';

export interface ListProps {
  /** The list of to do tasks */
  tasks: Array<string>;
  /** How spaced out should the items in the list be? */
  spacing?: 'compact' | 'comfortable' | 'relaxed';
}

export const List = ({ spacing = 'comfortable', tasks = [] }: ListProps) => (
  <ListContainer>
    {tasks.map(task => (<TaskWrapper spacing={spacing}><Task description={task} /></TaskWrapper>))}
  </ListContainer>
);

const TaskWrapper = styled.div<{ spacing: string }>`
    height: ${({ spacing }) => spacing === 'compact' ? 35 : spacing === 'comfortable' ? 45 : spacing === 'relaxed' ? 55 : 35}px;
    border-bottom: 1px solid #e7e7e7;
    width: 500px;
`;

const ListContainer = styled.div`
    border: 1px solid #e7e7e7;
    border-radius: 10px;
    padding: 5px;

    :last-child {
        border-bottom: none;
    }
`;
