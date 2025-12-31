onmessage = (event) => {
    const receivedData = event.data;
    // Modify the received data
    receivedData.age = 32;
    receivedData.processed = true;
    postMessage(receivedData);
};