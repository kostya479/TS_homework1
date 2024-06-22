interface IuserPosition {
    name : string,
    position : string,
    age : number,
    gender : string
}

interface IuserPositionArray extends Array<IuserPosition>{}

export {IuserPositionArray}