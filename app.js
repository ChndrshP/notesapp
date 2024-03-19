import express  from 'express';

const app = express();






app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})


app.listen(8080, () =>{
    console.log('server running on 8080');
})