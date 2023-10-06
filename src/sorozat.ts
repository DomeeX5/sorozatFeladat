export class Sorozat {
    cim: string;
    epizodszam: number;
    rendezo: string;
  
    constructor(cim: string, epizodszam: number, rendezo: string) {
  
      if(cim.trim() == ""){
        throw new Error('A cím nem lehet üres');
      } else if(epizodszam <= 0){
        throw new Error('Az epizódszám nem lehet kisebb 0-nál');
      } else if(rendezo.trim() == ""){
        throw new Error('A rendező neve nem lehet üres');
      }
  
  
      this.cim = cim;
      this.epizodszam = epizodszam;
      this.rendezo = rendezo;
    }
  
    toString(): string {
      return this.cim + ' - ' + this.epizodszam + ' - ' + this.rendezo;
    }
  }