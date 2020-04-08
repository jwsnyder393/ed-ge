import Base from "../../engine/Base.js"

export default class FastBoatBehavior extends Base.Behavior {
    speed = 8;
    start() {

    }
    update() {  
        this.gameObject.x += this.speed;
    }
}