import { v4 } from 'uuid';
import { random as _ru } from 'underscore';
import Cryptr from 'cryptr';

const criptoestancia = new Cryptr('f4bb229208278c0b5a70aa268c35ac22dbde9fc820ed43acf7');

export class Enlace {
    
    private matchid:string;
    private matchpass:string;
    private jugador:string;
    
    constructor(code?:string){
        if(code){
            const { matchid , matchpass , player } = JSON.parse(criptoestancia.decrypt(code));
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