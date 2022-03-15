import { v4 } from 'uuid';
import { random as _ru } from 'underscore';
import { SHA256 } from 'crypto-js';
const hex2ascii = require('hex2ascii');

export class Enlace {
    
    private matchid:string;
    private matchpass:string;
    private jugador:string;
    
    constructor(code?:string){
        if(code){
            const { matchid , matchpass , player } = hex2ascii(code);
            this.matchid = matchid ; this.matchpass = matchpass ; this.jugador = player;
        }else{
            this.matchid = v4();
            this.matchpass = `${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}`;
            this.jugador = `antoñin${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}`
        }
    }

    public get link(){
        let data = { matchid:this.matchid , matchpass:this.matchpass , player:this.jugador }
        return SHA256(JSON.stringify(data)).toString();
    }

    public get info(){
        return {
            partida: this.matchid,
            pase: this.matchpass,
            jugador: this.jugador,
        }
    }

}