import jokes from "../model/jokeModel.js";

const getAllJokes = (req,res) => {
    res.json(jokes)
}

const getRandomJoke = (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
};

const getJokeById = (req, res) => {
  const jokeId = Number(req.params.id);
  const joke = jokes.find((j) => j.id === jokeId);
  if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ message: "Joke not found" });
  }
};

const createJoke = (req, res) => {
  const newJoke = req.body;
  const maxId = Math.max(...jokes.map(j => j.id));
  newJoke.id = maxId + 1;
  jokes.push(newJoke);
  res.status(201).json(newJoke);
};

export {getAllJokes, getRandomJoke, getJokeById, createJoke}