import { useState } from 'react';
import { EmojiRow } from './EmojiRow';
import styled from 'styled-components/macro';
import { Input } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { getEmojis } from '../api/emoji';

export const EmojiSearch = () => {
  const [emojis, setEmojis] = useState([]);

  const deboucedEmojiSearch = debounce(
    async (searchText) => setEmojis(await getEmojis(searchText)),
    500,
  );

  return (
    <>
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
    </>
  );
};

const EmojiTableWrapper = styled.div`
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 10px;
`;
