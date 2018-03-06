const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
 res.json({msg: 'hello world!'});
});

app.listen(PORT, () => {
    console.log('app is running on PORT', PORT);
});
