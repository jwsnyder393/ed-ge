import Base from "../../engine/Base.js"
import Missile from "../prefabs/Missile.js";
import Point from "../../engine/base/Point.js";
import SceneManager from "../SceneManager.js";

export default class PlayerBehavior extends Base.Behavior {
    speed = 5
    count = 0
    limit = 5;
    start() {

    }
    update() {

        if (Base.Input.keys['ArrowLeft']){
            this.gameObject.x -= this.speed;
        }
        if (Base.Input.keys['ArrowRight']){
            this.gameObject.x += this.speed;
        }
        if(Base.Input.getKeyUp(' ') && ++this.count < this.limit)
            SceneManager.instantiate(Missile, new Point(this.gameObject.x + 22.5, this.gameObject.y - 15), 0);   
        else if (this.count == this.limit){
            let interval = setInterval(() => {
                this.count = 0;
                clearInterval(interval);
            }, 300);
        }
    }
}