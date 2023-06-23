import styled, { css } from 'styled-components/macro';

export const EmojiRow = ({ emoji }) => {
  const { character, name, code } = emoji;

  return (
    <EmojiRowContainer>
      <EmojiBoxAndName>
        <EmojiBox>{character}</EmojiBox>
        <span>{name}</span>
      </EmojiBoxAndName>
      <span>{code}</span>
    </EmojiRowContainer>
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
