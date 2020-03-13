import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import Input from "../../engine/base/Input.js";
import Engine from "../../engine/Engine.js";
import Missile from "../prefabs/Missile.js";
import Player from "../prefabs/Player.js";
import Point from "../../engine/base/Point.js";
import SceneManager from "../SceneManager.js";

export default class PlayerBehavior extends Base.Behavior {
    //time = 10;
    start() {

    }
    update() {
        //this.time -= .1;
        if (Base.Input.keys['w']) {
            this.gameObject.y -= 5;
        }
        if (Base.Input.keys['s']){
            this.gameObject.y += 5;
        }
        if (Base.Input.keys['a']){
            this.gameObject.x -= 5;
        }
        if (Base.Input.keys['d']){
            this.gameObject.x += 5;
        }

        if(Base.Input.getKeyUp[' ']){
            Player.children.push(SceneManager.instantiate(Missile, new Point(0,0), 0));
        }
    }
}