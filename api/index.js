const express = require('express')
const PORT = 3030 || process.env.PORT
const cors = require('cors')

const app = express()

app.use(cors())

app.listen(PORT, ()=>console.log(`${PORT} :: Server running...`))