import { RequestOptions, request } from 'https';

const body = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: "user",
            content: "System Instruction: You are a chatbot.\nQuestion: Which name do you like most?\nAnswer:",
        }
    ],
});

const requestOptions: RequestOptions = {
    host: 'openai-proxy.tngtech.com',
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': body.length,
    },
};  

const req = request(requestOptions, (res) => {
    // console.log(res.statusCode);
    // console.log(res.headers);

    res.on('data', (d) => process.stdout.write(d));
});

req.write(body);
req.end();

