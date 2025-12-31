<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Worker Debugging</title>
</head>
<body>
    <button id="startWorker">Start Worker</button>
    <div id="result"></div>

    <script>
        const worker = new Worker('debugWorker.js');

        // Log worker messages and errors
        worker.onmessage = (event) => {
            document.getElementById('result').textContent = event.data;
        };

        worker.onerror = (error) => {
            console.error('Worker Error:', error.message);
        };

        // Trigger the worker task
        document.getElementById('startWorker').onclick = () => {
            worker.postMessage('Start task');
        };
    </script>
</body>
</html>