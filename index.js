const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/user');
require('./services/passport');
require('./routes/authRoutes');

const app = express();

app.use(
  cookieSession({
    // 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI,  {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000
app.listen(PORT);
