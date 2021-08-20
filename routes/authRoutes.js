const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  
  app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

  app.post('api/stripe', (req, res) => {
    console.log('coucouc')
    // const charge = await stripe.charges.create({
    //   amount: 500,
    //   currency: 'usd',
    //   description: '$5 for 5 credits',
    //   source: req.body.id
    // });


  });
}