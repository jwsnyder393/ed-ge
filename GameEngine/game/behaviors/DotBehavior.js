import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"

export default class DotBehavior extends Base.Behavior {
    score = 0;
    start() {
        //console.log("Dot started");

    }
    update() {

    }
    onCollisionEnter(otherGameObject) {
        //console.log("in collision");
    }

    onCollisionStay(collisionObject) {

        if (collisionObject.gameObject.name == "Mine") {
            SceneManager.destroy(collisionObject.gameObject);
            SceneManager.destroy(this.gameObject);
        }
        else if (collisionObject.gameObject.name == "FastBoat") {
            SceneManager.destroy(collisionObject.gameObject);
            SceneManager.destroy(this.gameObject);
            this.score += 700;
            // Obtain the text of the Score Text object and increment it by a set amount
        }
        else if (collisionObject.gameObject.name == "MediumBoat") {
            SceneManager.destroy(collisionObject.gameObject);
            SceneManager.destroy(this.gameObject);
        } 
        else if (collisionObject.gameObject.name == "SlowBoat") {
            SceneManager.destroy(collisionObject.gameObject);
            SceneManager.destroy(this.gameObject);
        }
        else if (collisionObject.gameObject.name == "SuperSub") {
            SceneManager.destroy(collisionObject.gameObject);
            SceneManager.destroy(this.gameObject);
        }
    }
}