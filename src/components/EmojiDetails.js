import { useEffect, useState } from 'react';
import { Segment, List, Placeholder } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { getEmoji } from '../api/emoji';

const mapHeadingToAttr = {
  slug: 'Slug',
  character: 'Character',
  unicodeName: 'Unicode Name',
  codePoint: 'Code Point',
  group: 'Group',
  subGroup: 'Sub-group',
};

export const EmojiDetails = () => {
  const { slug } = useParams();
  const [emoji, setEmoji] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getEmoji(slug)
      .then((emoji) => {
        setEmoji(emoji[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.msg));
  }, [slug]);

  return (
    <>
      <Segment>
        {isLoading ? (
          <Placeholder>
            {Array(3)
              .fill()
              .map(() => (
                <>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="medium" />
                </>
              ))}
          </Placeholder>
        ) : (
          <List divided relaxed>
            {Object.keys(mapHeadingToAttr).map((attr) => (
              <List.Item key={attr}>
                <List.Content>
                  <List.Header>{mapHeadingToAttr[attr]}</List.Header>
                  {emoji[attr]}
                </List.Content>
              </List.Item>
            ))}
          </List>
        )}
      </Segment>
    </>
  );
};
