import { Task } from './Task.tsx';
import styled from 'styled-components';
import { Loader } from './common/Loader.tsx';

export interface ListProps {
  /** The list of to do tasks */
  tasks: string[];
  /** How spaced out should the items in the list be? */
  spacing?: 'compact' | 'comfortable' | 'relaxed';
  /** Has the list data finished loading? */
  loading?: boolean;
  /** Size of the header */
  headerSize?: 'small' | 'medium' | 'large';
}

export const List = ({ spacing = 'comfortable', tasks = [], loading = false, headerSize = 'large' }: ListProps) => (
  <ListWrapper>
    <Header size={headerSize}>{loading ? 'Loading...' : 'To do list'}</Header>
    <ListContainer>
      {loading ? (
        <Loader />
      ) : tasks.map(task => (
        <TaskWrapper spacing={spacing}>
          <Task description={task} />
        </TaskWrapper>
      ))}
    </ListContainer>
  </ListWrapper>
);

const ListWrapper = styled.div`
`;

const Header = styled.div<{ size?: string }>`
    font-weight: 700;
    font-size: ${({ size }) => size === 'small' ? 24 : size === 'medium' ? 30 : size === 'large' ? 38 : 24}px;
    margin: 0 0 20px 10px;
`;

const TaskWrapper = styled.div<{ spacing: string }>`
    height: ${({ spacing }) => spacing === 'compact' ? 35 : spacing === 'comfortable' ? 46 : spacing === 'relaxed' ? 62 : 35}px;
    border-bottom: 1px solid #e7e7e7;
    width: 100%;
`;

const ListContainer = styled.div`
    border: 1px solid #e7e7e7;
    border-radius: 10px;
    padding: 5px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    :last-child {
        border-bottom: none;
    }
`;
