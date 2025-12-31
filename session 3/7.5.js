fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    return reader.read().then(function processText({ done, value }) {
      if (done) {
        console.log('Stream complete');
        return;
      }
      console.log(decoder.decode(value));
      return reader.read().then(processText);
    });
  })
  .catch(error => console.error('Stream error:', error));
