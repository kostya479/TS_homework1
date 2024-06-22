import { userArray, IuserArray } from "./TS/users"
import { usersInfoArray } from "./TS/userInfo"
import { IuserPositionArray } from "./TS/userPos"


function getUsersJobPositions(userArray: IuserArray): IuserPositionArray {


    let positionArray: IuserPositionArray = []
    usersInfoArray.forEach(userInfo => {
        userArray.forEach(user => {
            if (userInfo.userid === user.userid) {
                positionArray.push(
                    {name : userInfo.name,
                        position: userInfo.organization.position,
                        age : userInfo.age,
                        gender : user.gender
                    }
                )
            }
        })
    });
    return positionArray
}

const userPosition = getUsersJobPositions(userArray);
console.log("UserPosition", userPosition);