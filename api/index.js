const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// GET method
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// POST method
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    res.status(200).json({
        is_success: true,
        user_id: "your_name_ddmmyyyy", 
        email: "your_email@example.com", 
        roll_number: "YourRollNumber", 
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
