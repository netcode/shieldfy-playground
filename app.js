const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let name = getName(req);
    res.send(`Hello, ${name}!`)
})

const getName = (inputs) => {
    let name = inputs.query.name;
    return name;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
