import express from "express";

import { getFilms, getFilm } from "../controllers/filmsController.js";

const filmsRouter = express.Router();


//make sure you use path to router not url
filmsRouter.get('/', getFilms);
filmsRouter.get('/:id', getFilm); //needs to be path to a variable


export default filmsRouter;