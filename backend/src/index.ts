import express from 'express';
import cors from "cors";
import connectDB from './db'

const app = express();

app.use(cors({  
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log('Error: ', error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runnnig on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('Mongo db connection failed !!!',err);
});

import adminRouter from './route/admin.route'
import portfolioRouter from './route/portfolio.route'

app.get('/api', (req, res) => {
    res.send('Hello!')
});

app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/portfolio',portfolioRouter);

export {app};


