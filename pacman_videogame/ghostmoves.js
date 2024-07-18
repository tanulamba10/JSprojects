import { OBJECT_TYPE, DIRECTIONS } from "./setup";

//Random Movement
export function randomMovement(position, direction, objectExist) {
    let dir = direction;
    let nextMovePos = position + dir.movement;

    //array of keys in DIRECTION
    const keys = Object.keys(DIRECTIONS);

    while (
        objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
        objectExist(nextMovePos, OBJECT_TYPE.GHOST)
    ) {
        //generate random key index
        const key = keys[Math.floor(Math.random() * keys.length)];
        //set the new direction using the index
        dir = DIRECTIONS[key];
        //set the new next move
        nextMovePos = position + dir.movement;
    }

    return { nextMovePos, direction: dir };
}