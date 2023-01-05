const express = require('express');
const app = express();
const fs = require('fs');
const fetch = require('node-fetch');

app.listen(3001, () => {
    console.log('Success... Server Running');
});

async function checkReachability(url) {3
    try {
        const response = await fetch(url);
        return response.status === 200 ? 'up' : 'down';
    } catch (error) {
        return 'down';
    }
}

async function main() {
    const hlsStreams = fs.readFileSync('streams.txt', 'utf-8').split('\n');

    const results = [];
    for (const stream of hlsStreams) {
        const result = await checkReachability(stream);
        results.push({ stream, result });
    }

    const csv = results.map(result => `${result.stream},${result.result}`).join('\n');
    fs.writeFileSync('reachability.csv', csv);
    console.log('Reachability data has been saved to reachability.csv');
}

app.get('/main', function (req, res) {
    main(req, res).then(() => {
        console.log(res);
    });
});


