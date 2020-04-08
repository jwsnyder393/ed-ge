import Base from "../../engine/Base.js";
import Mine from "../prefabs/Mine.js";
import SceneManager from "../SceneManager.js";
import Point from "../../engine/base/Point.js";
import SuperSub from "../prefabs/SuperSub.js";
import FastBoat from "../prefabs/FastBoat.js";
import MediumBoat from "../prefabs/MediumBoat.js";
import SlowBoat from "../prefabs/SlowBoat.js";

export default class FieldBehavior extends Base.Behavior {
    randBoat;
    randMine;
    start() {
        
    }
    update() {  
        setInterval(() =>{ this.randBoat = Math.floor(Math.random()*500); }, 1000);
        this.randMine = Math.floor(Math.random()*100);
                  
            if(this.randMine == 5 || this.randMine == 3 || this.randMine == 2) {
                SceneManager.instantiate(Mine, new Point(-25, Math.floor(Math.random()*121 + 255)), 0);
            }
            if(this.randBoat == 1)
                SceneManager.instantiate(SuperSub, new Point(0, 115), 0);

            if(this.randBoat == 50)
                SceneManager.instantiate(FastBoat, new Point(0, Math.floor(Math.random()*105 + 120)), 0);

            if(this.randBoat == 75)
                SceneManager.instantiate(MediumBoat, new Point(0, Math.floor(Math.random()*100 + 120)), 0);
                
            if(this.randBoat == 25)
                SceneManager.instantiate(SlowBoat, new Point(0, Math.floor(Math.random()*80 + 120)), 0);
    }
}
