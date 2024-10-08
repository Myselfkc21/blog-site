import express from 'express';
import cors from 'cros'
const app = express();
app.use(cors());
app.get('/register', (req, res) => {
    res.json("test ok")
})

app.listen(4000)