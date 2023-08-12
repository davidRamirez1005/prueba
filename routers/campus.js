import{Router} from 'express'


const app = express()



app.get('/routers/:id', (req, res) => {
    res.send("bababa")
})