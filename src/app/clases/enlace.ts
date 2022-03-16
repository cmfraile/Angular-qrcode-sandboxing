import { v4 } from 'uuid';
import { random as _ru } from 'underscore';
const Cryptr = require('cryptr');

const criptoestancia = new Cryptr('9e3427cee6e1441645c2b307b31517524fc2a1b2b1e073649e');

export class Enlace {
    
    private matchid:string;
    private matchpass:string;
    private jugador:string;
    
    constructor(code?:string){
        if(code){
            const { matchid , matchpass , player } = criptoestancia.decrypt(code);
            this.matchid = matchid ; this.matchpass = matchpass ; this.jugador = player;
        }else{
            this.matchid = v4();
            this.matchpass = `${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}`;
            this.jugador = `antoñin${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}`
        }
    }

    public get link(){
        let data = { matchid:this.matchid , matchpass:this.matchpass , player:this.jugador }
        return `http://192.168.0.14:4200/${criptoestancia.encrypt(JSON.stringify(data))}`;
    }

    public get info(){
        return {
            partida: this.matchid,
            pase: this.matchpass,
            jugador: this.jugador,
        }
    }

}