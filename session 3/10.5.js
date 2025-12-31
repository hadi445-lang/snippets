onmessage = (event) => {
  if (event.data === 'Start computation') {
    // Simulate a time-consuming task
    const result = 'Computation done in background thread!';
    postMessage(result);
  }
};
