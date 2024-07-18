import { OBJECT_TYPE, DIRECTIONS } from "./setup";

class Pacman {
    constructor(speed, startPos) {
        this.pos = startPos;
        this.speed = speed;
        this.dir = null; //will be an object(movement, rotation, code)
        this.timer = 0;
        this.powerPill = false;
        this.rotation = true;
    }

    shouldMove() {
        //when a key will be pressed, a direction will be set
        if (!this.dir) return;

        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        //incrementing on every fn call regardless
        this.timer++;
    }

    getNextMove(objectExist) {
        let nextMovePos = this.pos + this.dir.movement;

        //do a class like wall or ghostlair exists on our next move?
        if (
            objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
        ) {
            //no movement on encountering wall/ghostlair
            nextMovePos = this.pos;
        }

        return { nextMovePos, direction: this.dir };
    }

    makeMove() {
        //A move can only be made by removing class of pacman from the curr position and adding it on the next position
        const classesToRemove = [OBJECT_TYPE.PACMAN];
        const classesToAdd = [OBJECT_TYPE.PACMAN];

        return { classesToRemove, classesToAdd };
    }

    setNewPos(nextMovePos, direction) {
        this.pos = nextMovePos;
        this.dir = direction;
    }

    handleKeyInput(e, objectExist) {
        //The dir will be set here
        let dir;

        if (e.keyCode >= 37 && e.keyCode <= 40) {
            dir = DIRECTIONS[e.key]; //i.e ArrowLeft or ArrowDown
        } else {
            return;
        }

        const nextMovePos = this.pos + dir.movement;
        if (objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOSTLAIR)) return;
        this.dir = dir;
    }
}

export default Pacman;