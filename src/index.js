const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/Routers/user')
const taskRouter = require('../src/Routers/task')
const app = express()
// const bcrypt = require('bcryptjs')


const port = process.env.PORT

// app.use((req,res,next)=>{   
//     if (req.method === 'GET') {
//         res.send('Get requests are disable')
//     }else{
//         next()
//     }
// })


// app.use((req,res,next)=>{
//     if (req.method === 'GET' | req.method === 'POST' | req.method === 'PATCH' ) {
//         res.status(503).send("site under maintainess")
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


// const jwt = require('jsonwebtoken')

// const myfunction = async () =>
// {
//     const token = jwt.sign({_id:'1234abc'},'This is my token',{expiresIn: '0 seconds'})
//     console.log(token)
//     const data = jwt.verify(token,'This is my token')
//     console.log(data)
// }

// myfunction()
// const myfunction = async () => {
//     const password = 'red1234!'
//     const hashedpassword = await bcrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedpassword)

//     const isMatch = await bcrypt.compare(password,hashedpassword)
//     console.log(isMatch)
// }

// myfunction()


// const multer = require('multer')
// const upload = multer({
//     dest:'images'
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// })


app.listen(port,()=>{
    console.log('Server running on port '+port)
})



