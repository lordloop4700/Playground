.get('/index',             async (req, res) => {
    if(!req.session.user) return res.redirect("/")
    else return res.render('index', { title: 'LK Ventures', test: await FinduserId() })
  })