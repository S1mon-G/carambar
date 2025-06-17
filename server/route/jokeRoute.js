import express from "express"
import { getAllJokes, getRandomJoke, getJokeById, createJoke } from "../controller/jokeController.js"

const router = express.Router()

router.get("/", getAllJokes);
router.get("/random", getRandomJoke);
router.get("/:id", getJokeById);
router.post("/", createJoke);

export default router;