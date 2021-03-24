//이 nodejs는 특정 사용자를 입력받아서 그 사용자의 모든 머신에 대한 values값을 준다.(비율값)

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
        where: {uId: "test1"} //나중에 아이디를 입력받아서 변수로 집어 넣도록 변경
    })

    return user.id;
}

const HaveMachine = async (userid_p) => {
    try{
        
        const data = await model.MachineGroup.findAll({
            where: {userId: userid_p},
            attibutes: [ "value" , "machineId"] //해당 유저가 각 머신에 얼마의 비율을 가지고 있는지
        });

        console.log(data[1].value);
        
    }catch(err){
        console.log(err);
    }
}



( async () => {
    await DBconnection();
    const a = await FinduserId();
    await HaveMachine(a);
} )()



//let usercount = check();
//console.log(usercount);
/*
    머신 번호에 따라서 자동으로 가져올 수 있도록 제작해야함.
    이 nodejs는 db에서 a라는 유저가 f1머신에서의 지분을 받아서 ejs로 쏘도록 만들어야함.
    특히 a라는 유저가 f1, f2라는 복수의 서버에 대해서 지분을 가지고 있을 경우 이를 db에서 전부 검색하여, 각 지분별 총 합을 보여줄 수 있도록 셋팅해야함.

    실행 흐름
    1. 유저가 인생네컷에 로그인하면 머신을 가진 사용자를 한해서 machineGroup에서 해당 유저를 찾음
    2. 해당 유저가 가지고 있는 모든 서버를 검색
    3. machineGroup에 있는 values필드를 이용해서, 해당 유저가 각 머신에 대해서 얼마의 지분을 가지고 있는지 데이터를 가져옴.
    4. 가져온 각 머신에 대한 지분 값을 ejs로 각각 쏴버림
    5. ajax와 nodejs에서 온 값을 이용해서 각각 나누어 버림.
    6. 사용자화면에서 "내가 체굴한 양"부분에 나눈 값들의 합을 표시해버림.
*/