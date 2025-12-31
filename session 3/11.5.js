<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Transfer with Web Worker</title>
</head>
<body>

    <button id="startWorker">Send Data to Worker</button>
    <div id="result"></div>

    <script>
        const worker = new Worker('dataWorker.js');

        document.getElementById('startWorker').onclick = () => {
            const data = { name: 'Alice', age: 30 };
            worker.postMessage(data);
        };

        worker.onmessage = (event) => {
            document.getElementById('result').textContent = 
                `Processed Data: ${event.data.name}, ${event.data.age}`;
        };
    </script>
</body>
</html>