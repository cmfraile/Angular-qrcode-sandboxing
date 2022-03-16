import { v4 } from 'uuid';
import { random as _ru } from 'underscore';

export class Enlace {
    
    private key:string = '9e3427cee6e1441645c2b307b31517524fc2a1b2b1e073649e';
    
    private matchid:string;
    private matchpass:string;
    private jugador:string;
    
    constructor(code?:string){
        if(code){
            const { matchid , matchpass , player } = JSON.parse(AES.decrypt(code,this.key).toString(enc.Utf8));
            this.matchid = matchid ; this.matchpass = matchpass ; this.jugador = player;
        }else{
            this.matchid = v4();
            this.matchpass = `${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}`;
            this.jugador = `antoñin${_ru(0,9)}${_ru(0,9)}${_ru(0,9)}`
        }
    }

    public get link(){
        let data = { matchid:this.matchid , matchpass:this.matchpass , player:this.jugador }
        return `http://localhost:4200/${AES.encrypt(JSON.stringify(data),this.key).toString()}`;
    }

    public get info(){
        return {
            partida: this.matchid,
            pase: this.matchpass,
            jugador: this.jugador,
        }
    }

}