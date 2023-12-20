const API_URL = process.env.REACT_APP_API_URL

export const getVideo = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return fetch(API_URL, {
    method: 'POST',
    body: formData,
  }).then(data => data.json())
};
