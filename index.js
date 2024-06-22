import { userArray } from "./users";
import { usersInfoArray } from "./userInfo";
function getUsersJobPositions(userArray) {
    let positionArray = [];
    usersInfoArray.forEach(userInfo => {
        userArray.forEach(user => {
            if (userInfo.userid === user.userid) {
                positionArray.push({ name: userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    gender: user.gender
                });
            }
        });
    });
    return positionArray;
}
const userPosition = getUsersJobPositions(userArray);
console.log("UserPosition", userPosition);
//# sourceMappingURL=index.js.map