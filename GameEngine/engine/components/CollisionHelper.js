import CircleCollider from "./CircleCollider.js"
import PointCollider from "./PointCollider.js"
import AABBCollider from "./AABBCollider.js";
import Point from "../base/Point.js";

export default class CollisionHelper{
   
        static inCollision(one, two){
            if(one.collider instanceof CircleCollider && two.collider instanceof PointCollider){
                let distance = one.gameObject.location.distance(two.gameObject.location);
                
                if(distance < one.collider.radius)
                    return true;
                return false;
            }
            else if(one.collider instanceof PointCollider && two.collider instanceof CircleCollider){
                return this.inCollision(two,one);
            }
            else if(one.collider instanceof AABBCollider && two.collider instanceof PointCollider){
                //console.log("Testing AABB")
                let diff = one.gameObject.location.diff(two.gameObject.location);
                return Math.abs(diff.x) < one.collider.width && Math.abs(diff.y) < one.collider.height;

            }
            else if(one.collider instanceof PointCollider && two.collider instanceof AABBCollider){
                return this.inCollision(two, one);
            }
            else if(one.collider instanceof CircleCollider && two.collider instanceof CircleCollider){
                let distance = one.gameObject.location.distance(two.gameObject.location);
                
                if(distance < +one.collider.radius + +two.collider.radius)
                    return true;
                return false;
            }
            else if(one.collider instanceof AABBCollider && two.collider instanceof AABBCollider){
                if (one.collider.x < two.collider.x + two.collider.width &&
                    one.collider.x + one.collider.width > two.collider.x &&
                    one.collider.y < two.collider.y + two.collider.height &&
                    one.collider.y + one.collider.height > two.collider.y){
                    return true;
                }
            }
            else if(one.collider instanceof CircleCollider && two.collider instanceof AABBCollider){
                if(one.collider.x < two.collider.x + two.collider.width &&
                    one.collider.x + one.collider.radius > two.collider.x &&
                    one.collider.y < two.collider.y + two.collider.height &&
                    one.collider.y + one.collider.radius > two.collider.y)
                    return true;
            }
        }
}