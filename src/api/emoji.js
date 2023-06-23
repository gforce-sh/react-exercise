const API_KEY = 'ADD-YOUR-API-KEY-HERE';
const ENDPOINT = 'https://emoji-api.com/emojis';

export const getEmojis = async (searchText) => {
  const url = `${ENDPOINT}?access_key=${API_KEY}&search=${searchText}`;
  try {
    const res = await fetch(url);
    const fetchedEmojis = await res.json();
    return fetchedEmojis?.slice(0, 20);
  } catch (err) {
    console.log('Error in fetching emojis', err.msg);
  }
};
