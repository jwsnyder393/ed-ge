import Base from "../../engine/Base.js"

export default class CentipedeBehavior extends Base.Behavior{
    position = 0;
    speed = 10;
    goingLeft = false;
    start(){
        this.gameObject.x = 0;
        this.gameObject.y = 0;
    }
    update(){
        if(this.goingLeft){
            this.position -= this.speed;
        }
        else{
            this.position += this.speed;
        }

        if(this.position >= 640){
            this.gameObject.y += 28;
            this.goingLeft = true;
        }
        if(this.position <= 0 + 15){
            this.gameObject.y += 28;
            this.goingLeft = false;
        }
        if(this.gameObject.y >= 480){
            if(goingLeft){
                goingLeft = false;
            }
            else{
                goingLeft = true;
            }
        }

        this.gameObject.x = this.position;
    }
}