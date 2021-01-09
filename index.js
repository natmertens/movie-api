const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

let topMovies = [
  {
    title: 'Love Actually',
    director: 'Richard Curtis',
    genre: 'Drama, Comedy, Romance'
  },
  {
    title: 'The Holiday',
    director: 'Nancy Meyers',
    genre: 'Comedy, Romance'
  },
  {
    title: 'The Intern',
    director: 'Nancy Meyers',
    genre: 'Drama, Comedy'
  },
  {
    title: 'The Secret Garden (1993)',
    director: 'Agnieszka Holland',
    genre: 'Drama, Family, Fantasy'
  },
  {
    title: 'The Secret Garden (2020)',
    director: 'Marc Munden',
    genre: 'Drama, Family, Fantasy'
  },
  {
    title: 'You\'ve Got Mail',
    director: 'Nora Ephron',
    genre: 'Drama, Comedy, Romance'
  },
  {
    title: 'Runaway Bride',
    director: 'Gary Marshall',
    genre: 'Comedy, Romance'
  },
  {
    title: 'My Best Friend\'s Wedding',
    director: 'P.J. Hogan',
    genre: 'Drama, Comedy, Romance'
  },
  {
    title: 'Pretty Woman',
    director: 'Gary Marshall',
    genre: 'Drama, Comedy, Romance'
  },
  {
    title: 'The Princess Diaries',
    director: 'Garry Marshall',
    genre: 'Comedy, Romance, Family'
  }
];

app.get('/movies', (req, res) => {
  res.json(topMovies);
})

app.get('/', (req, res) => {
  res.send('Welcome to MyFlix!');
})

app.get('/movies/:title', (req, res) => {
  res.send('Successful GET request returning data about a single movie by title');
});

app.get('/movies/genres/:title', (req, res) => {
  res.send('Successful GET request returning data about a movie genre by title');
});

app.get('/movies/directors/:name', (req, res) => {
  res.send('Successful GET request returning data about a director by name');
});

app.post('/users', (req, res) => {
  res.send('Successful POST request allowing new users to register');
});

app.put('/users/:username', (req, res) => {
  res.send('Successful PUT request allowing users to update their user info');
});

app.post('/users/:username/movies/:movieID', (req, res) => {
  res.send('Successful POST request allowing users to add a movie to their list of favorites');
});

app.delete('/users/:username/movies/:movieID', (req, res) => {
  res.send('Successful DELETE request allowing users to remove a movie from their list of favorites');
});

app.delete('/users/:username', (req, res) => {
  res.send('Successful DELETE request allowing users to deregister');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
