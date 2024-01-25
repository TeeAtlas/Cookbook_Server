import express from 'express';
import filmsRouter from './routes/films.js';

const app = express();
const port = 8000;

//to load router in app call .use method
app.use('/films', filmsRouter)

app.get('/', (req, res) => {
  res.send('GET request at root') //to retrieve data
})

    app.post('/', (req, res) => {
        res.send('POST request to root')
    })

        app.put('/', (req, res) => {
            res.send('PUT request to root')
        })

            app.delete('/', (req, res) => {
                res.send('DELETE request to root')
            })

  

app.listen(port, () => {
  console.log(`films app listening on port ${port}`)
});