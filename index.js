const express = require('express');

const app = express()

app.get('/teste', (req,res) => {

    return res.json({hello: 'simon&caju'})

})

app.listen(3333);