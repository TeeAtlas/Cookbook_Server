import express from 'express';
import filmsRouter from './routes/films.js';

const app = express();
const port = 8000;

app.use('/films', filmsRouter)

app.get('/', (req, res) => {
  res.send('get request at root') //to retrieve data
})

    app.post('/', (req, res) => {
        res.send('post request to root')
    })

        app.put('/', (req, res) => {
            res.send('put request to root')
        })

            app.delete('/', (req, res) => {
                res.send('delete request to root')
            })

  

app.listen(port, () => {
  console.log(`films app listening on port ${port}`)
});