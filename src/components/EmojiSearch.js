import { useState } from 'react';
import { EmojiRow } from './EmojiRow';
import styled from 'styled-components/macro';
import { Input, Loader } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { getEmojis } from '../api/emoji';

export const EmojiSearch = () => {
  const [emojis, setEmojis] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmojis = async (searchText = '') => {
    setIsLoading(true);
    const emojis = await getEmojis(searchText);
    setEmojis(emojis);
    setIsLoading(false);
  };

  const deboucedEmojiSearch = debounce(
    (searchText) => fetchEmojis(searchText),
    500,
  );

  return (
    <>
      <Input
        fluid
        icon="search"
        placeholder="Search..."
        onChange={(e, data) => deboucedEmojiSearch(data?.value)}
      />
      <EmojiTableWrapper>
        {isLoading ? (
          <Loader active inline="centered">
            Loading
          </Loader>
        ) : (
          emojis?.map((emoji) => {
            return <EmojiRow key={emoji.slug} emoji={emoji} />;
          })
        )}
      </EmojiTableWrapper>
    </>
  );
};

const EmojiTableWrapper = styled.div`
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 10px;
`;
