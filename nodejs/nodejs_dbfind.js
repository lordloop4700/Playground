.post('/createMachineGroup', async (req, res) => { 
    const { mId, uId, value } = req.body
    try {
      const mGrp = await MachineGroup.findAll({
        attributes: ['value'],
        include: [{
          model: User,
          attributes: ['id'],
          where: { uId },
        },{
          model: Machine,
          attributes: ['id'],
          where: { mId },
        }],
      })
    
      if(mGrp.length > 0 ){ 
        return res.status(401).json({ result: false })
      }
  
      const machines = await Machine.findAll({
        attributes: ['id'],
        where: { mId }
      })
  
  
      if(machines.length <= 0 ){ 
        return res.status(401).json({ result: false })
      }
  
      const users = await User.findAll({
        attributes: ['id'],
        where: { uId }
      })
  
      if(users.length <= 0 ){ 
        return res.status(402).json({ result: false })
      }
  
      await MachineGroup.create({ machineId: machines[0].id, userId: users[0].id, value: value })
      return res.status(203).json({ result: true })
      
    } catch (err) {
      console.error(err)
      return res.redirect('/')
    }
  })

  .post('/updateMachine', async (req, res) => {
    const { id, mId, value } = req.body
  
    if(id === ""){
      if( !mId || !value) return res.status(400).json({ result: false })
      try {
        await Machine.create({ mId, value })
        return res.status(203).json({ result: true })
      } catch (err) {
        console.error(err)
        return res.redirect('/')
      }
    }
  
    if(!id || !mId || !value) return res.status(400).json({ result: false })
    try {
      await Machine.update({ mId, value }, { where: { id } })
      return res.status(203).json({ result: true })
    } catch (err) {
      console.error(err)
      return res.redirect('/')
    }
  })