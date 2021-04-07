const model = require('../models');

const DBconnection = async () => { //filecoin db랑 연결
    await model.User.sequelize.sync().then( () => {
        console.log("connect");
    }).catch(err => {
        console.log("err");
    })
}

const FinduserId = async () => {
    const user = await model.User.findOne({
        where: {uId: "test2"} //나중에 아이디를 입력받아서 변수로 집어 넣도록 변경
    })

    return user.id;
}

const UserHaveMachine = async (userid_p) => {
    try{
        
        const data = await model.MachineGroup.findAll({
            where: {userId: userid_p},
            attibutes: [ "value" , "machineId"] //해당 유저가 각 머신에 얼마의 비율을 가지고 있는지
        });
        /*
        let count = data.length;
        let machine_data = {};
        for(i = 0; i < count; i++){
            
        }
        */

        console.log(data[1].value);
        return data[0].value;
        
    }catch(err){
        console.log(err);
    }
}

( async () => {
    await DBconnection();
    const a = await FinduserId();
    let test = await UserHaveMachine(a);
    console.log(test);
} )()

module.exports = {
    DBconnection,
    FinduserId,
    UserHaveMachine
}