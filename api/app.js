const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("App is working")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = app