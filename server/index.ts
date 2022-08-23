const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const mainRouter = require('./routes/mainRouter')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/main', mainRouter)
app.get('/', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

app.listen(3000, () => {
    console.log('listening on PORT 3000 :)')
})

export default express