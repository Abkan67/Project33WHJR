class Snowflake {
    constructor(x,y,size,img) {
        this.size = size; this.img = img; this.x=x;this.y=y;
    }

    display() {
        this.y++;
        push();
        image(this.img, this.x,this.y,this.size,this.size);
        pop();
    }
}