export class Player {
    ID: number;
    gamerTag: string;
    realName: string;
    age: number;
    mouse: string;
    mousepad: string;
    keyboard: string;
    headset: string;
    picture: string;

    constructor(ID: number, gamerTag: string, realName: string, age: number, mouse: string, mousepad: string, keyboard: string, headset: string, picture: string) {
        this.ID = ID;
        this.gamerTag = gamerTag;
        this.realName = realName;
        this.age = age;
        this.mouse = mouse;
        this.mousepad = mousepad;
        this.keyboard = keyboard;
        this.headset = headset;
        this.picture = picture;
    }
}
