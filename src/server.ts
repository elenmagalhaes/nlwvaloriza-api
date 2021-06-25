import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.send('Hello GET');
});

app.post("/teste", (request, response) => {
    return response.send('Hello POST');
});

app.listen(3000, () => console.log('Server is running'));