let films = [ 
    // {
    // id: 1,
    // name: 'The Godfather',
    // releaseYear: 1972
    // },
    {
    id: 2,
    name: 'The Apartment',
    releaseYear: 1969
    },
    {
    id: 3,
    name: 'The Artist',
    releaseYear: 2011
    }  
];

export const getFilms = (req, res) => {
    res.json(films)
}

export const getFilm= (req, res) => {
    const {id} = req.params;
    const film = films.find(film => film.id ===  Number(id))

    if(!film) {
        res.status(404).json({ message: "Requested Film Not Found" });
    } else {
        res.json(film);
    }
    console.log(film)
}


// res.send('Get fetch film')