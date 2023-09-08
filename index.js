const express = require('express');
const dayOfTheWeek = require('./date');
const getCurrentUTCTime = require('./UTCTime')

const app = express();
app.set('json spaces', 2);
const port = 3000;

app.get('/api/user', (req, res) => {
    const { name, track } = req.query;

    if (!name || !track) {

        return res.status(400).json({ error: 'Either "name" or "track" query parameters are missing or incorrect.' });

    } else if (name !== "chime" || track !== "backend") {

        return res.status(400).json({ error: 'Invalid "name" or "track" ' });

    }


    const response = {
        "slack_name": name,
        "current_day": dayOfTheWeek(),
        "utc_time": getCurrentUTCTime(),
        "track": track,
        "github_file_url": "coming soon",
        "github_repo_url": "coming soon",
        "status_code": 200
    };

    res.status(200).json(response)

});

app.listen(port, () => {
    console.log(`Server is running on ports ${port}`);
});