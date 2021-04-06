.get('/index',         async (req, res) => {
  
  if(!req.session.user) return res.redirect("/")
  else{
      const mGrp = await MachineGroup.findAll({
        include: [{
          model: Machine,
          attributes: ['id', 'mId', 'value']
        }],
        where: { userId: req.session.user.id }
      })

      if(req.session.user.userLevel === 9) return res.render('index', { titel: 'LK Ventures', mGrp: JSON.stringify(mGrp), level: req.session.user.userLevel })
      else                                 return res.render('index', { titel: 'LK Ventures', mGrp: JSON.stringify(mGrp), level: 0})
  }