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

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, function() {
  console.log('Your app is listening on port 8080.');
});
