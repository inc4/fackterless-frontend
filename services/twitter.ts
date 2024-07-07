import axios from 'axios';

const CUSTOM_TWITTER_API_URL = 'http://164.90.226.52:8080';

export const axiosApiInstance = axios.create({
  baseURL: CUSTOM_TWITTER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserTwitterInfo = async (username: string) => {
  const apiUrl = `${CUSTOM_TWITTER_API_URL}/userMetadata?username=${username}`;
  try {
    const response = await axiosApiInstance.get(apiUrl)
    return response.data;
  } catch(e) {
    console.log('Error GET user info: ', e)
  }
}
