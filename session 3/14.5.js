onmessage = (event) => {
    if (event.data === 'Start task') {
        try {
            console.log("Worker received message: ", event.data);
            
            let result = 5 / 0; // Intentional error (division by zero)
            
            if (!isFinite(result)) {
                throw new Error('Calculation resulted in Infinity');
            }
            
            postMessage('Task completed');
        } catch (error) {
            console.error("Worker encountered an error:", error.message);
            
            // Send error message back to main thread
            postMessage('Error: ' + error.message); 
        }
    }
};