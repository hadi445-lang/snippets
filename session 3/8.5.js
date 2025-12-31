const fetchWithTimeout = (url, options, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url, options)
      .then(response => {
        clearTimeout(timer);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('Fetch error:', error));
