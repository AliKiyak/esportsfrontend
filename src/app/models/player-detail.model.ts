import { Player } from './player.model';

export class PlayerDetail {
    id: number;
    gamerTag: string;
    realName: string;
    age: number;
    mouse: string;
    mousepad: string; 
    keyboard: string;
    headset: string;
    picture: string;
    teamName: string;
    teamLogo: string;
    teammembers: Player[];

    constructor(id: number, gamerTag: string, realName: string, age: number, mouse: string, mousepad: string, keyboard: string, headset: string, picture: string, teamName: string, teamLogo: string, teammembers: Player[] ) {
        this.id = id;
        this.gamerTag = gamerTag;
        this.realName = realName;
        this.age = age;
        this.mouse = mouse;
        this.mousepad = mousepad;
        this.keyboard = keyboard;
        this.headset = headset;
        this.picture = picture;
        this.teamName = teamName;
        this.teamLogo = teamLogo;
        this.teammembers = teammembers;
    }

}
