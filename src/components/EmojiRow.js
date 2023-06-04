import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const EmojiRow = ({ emoji }) => {
  const { character, unicodeName, codePoint, slug } = emoji;

  return (
    <Link to={`/emoji/${slug}`}>
      <EmojiRowContainer>
        <EmojiBoxAndName>
          <EmojiBox>{character}</EmojiBox>
          <span>{unicodeName}</span>
        </EmojiBoxAndName>
        <span>{codePoint}</span>
      </EmojiRowContainer>
    </Link>
  );
};

const centreAlignedBox = css`
  display: flex;
  align-items: center;
`;

const EmojiRowContainer = styled.div`
  ${centreAlignedBox}
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  padding: 5px;
`;

const EmojiBoxAndName = styled.div`
  ${centreAlignedBox}
`;

const EmojiBox = styled.div`
  margin-right: 20px;
  font-size: 24px;
`;
