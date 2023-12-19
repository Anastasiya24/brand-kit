const API_URL = process.env.REACT_APP_API_URL

export const getVideo = () => {
  return fetch(API_URL).then(data => data.json())
};
