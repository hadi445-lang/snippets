const config = {
    server: {
        port: null,
    },
};

// Using nullish coalescing to provide a default port if
// 'port' is null or undefined
const port = config.server?.port ?? 3000;

console.log(`The server is running on port: ${port}`);