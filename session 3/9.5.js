<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Worker Example</title>
</head>
<body>

  <button id="startWorker">Start Worker</button>
  <div id="result"></div>

  <script>
    const worker = new Worker('worker.js');

    document.getElementById('startWorker').onclick = () => {
      worker.postMessage('Start computation');
    };

    worker.onmessage = (event) => {
      document.getElementById('result').textContent = event.data;
    };
  </script>

</body>
</html>
