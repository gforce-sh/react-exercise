import styled from 'styled-components/macro';
import { EmojiSearch } from './components/EmojiSearch';
import { EmojiDetails } from './components/EmojiDetails';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<EmojiSearch />} />
        <Route path="/emoji/:slug" element={<EmojiDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  margin: 100px 25%;
`;
