import { useState } from 'react';
import { EmojiRow } from './components/EmojiRow';
import styled from 'styled-components/macro';
import { Input } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { getEmojis } from './api/emoji';

export const App = () => {
  const [emojis, setEmojis] = useState([]);

  const deboucedEmojiSearch = debounce(
    async (searchText) => setEmojis(await getEmojis(searchText)),
    500,
  );

  return (
    <AppWrapper>
      <Input
        fluid
        icon="search"
        placeholder="Search..."
        onChange={async (e) => {
          await deboucedEmojiSearch(e.target.value);
        }}
      />
      <EmojiTableWrapper>
        {emojis?.map((emoji) => {
          return <EmojiRow key={emoji.slug} emoji={emoji} />;
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
