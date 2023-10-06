export class Sorozat {
    cim: string;
    epizodszam: number;
    rendezo: string;
  
    constructor(cim: string, epizodszam: number, rendezo: string) {
  
      if(cim.trim() == ""){
        throw new Error('A cím nem lehet üres');
      } else if(cim.length>20){
        throw new Error('A cím nem lehet több 20 karakternél');
      } else if(epizodszam <= 0 || isNaN(epizodszam)){
        throw new Error('Az epizódszám nem lehet kisebb 0-nál');
      } else if(rendezo.trim() == ""){
        throw new Error('A rendező neve nem lehet üres');
      } else if(rendezo.length > 25){
        throw new Error('A rendező neve nem lehet hosszabb 25 karakternél');
      }
  
  
      this.cim = cim;
      this.epizodszam = epizodszam;
      this.rendezo = rendezo;
    }
  
    toString(): string {
      return this.cim + ' - ' + this.epizodszam + ' - ' + this.rendezo;
    }
  }