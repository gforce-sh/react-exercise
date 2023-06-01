import { useState } from 'react';
import { EmojiRow } from './components/EmojiRow';
import styled from 'styled-components/macro';
import emojis from './resources/emojis.json';
import { Input } from 'semantic-ui-react';

export const App = () => {
  const [searchText, setSearchText] = useState('');

  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.includes(searchText),
  );

  return (
    <AppWrapper>
      <Input
        fluid
        icon="search"
        placeholder="Search..."
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <EmojiTableWrapper>
        {filteredEmojis.map((emoji) => {
          return <EmojiRow key={emoji.code} emoji={emoji} />;
        })}
      </EmojiTableWrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  margin: 100px 25%;
`;

const EmojiTableWrapper = styled.div`
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 10px;
`;
