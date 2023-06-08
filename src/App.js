import { useState } from 'react';
import { EmojiRow } from './components/EmojiRow';
import styled from 'styled-components/macro';
import { Input, Loader } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { getEmojis } from './api/emoji';

export const App = () => {
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
    <AppWrapper>
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
