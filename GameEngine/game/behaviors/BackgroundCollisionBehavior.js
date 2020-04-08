import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"

export default class DotBehavior extends Base.Behavior {

    start() {
        //console.log("Background started");

    }
    update() {

    }
    onCollisionEnter(collisionObject) {
        
    }

    onCollisionStay(collisionObject) {
        if (collisionObject.gameObject.name == "SuperSub") {
            SceneManager.destroy(collisionObject.gameObject);
        }
        if (collisionObject.gameObject.name == "Mine") {
            SceneManager.destroy(collisionObject.gameObject);
        } 
        if (collisionObject.gameObject.name == "SlowBoat") {
            SceneManager.destroy(collisionObject.gameObject);
        }
        if (collisionObject.gameObject.name == "MediumBoat") {
            SceneManager.destroy(collisionObject.gameObject);
        } 
        if (collisionObject.gameObject.name == "FastBoat") {
            SceneManager.destroy(collisionObject.gameObject);
        } 
    }
}