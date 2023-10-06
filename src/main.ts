import { Sorozat } from "./sorozat";

let sorozatok: Sorozat[] = [];

function newSeries(){
  let ujCim = (document.getElementById('series') as HTMLInputElement).value;
  let ujEpizodszam = parseInt((document.getElementById('episode') as HTMLInputElement).value);
  let ujRendezonev = (document.getElementById('director') as HTMLInputElement).value;

  let ujKonyv = new Sorozat(ujCim, ujEpizodszam, ujRendezonev);
  sorozatok.push(ujKonyv);

  console.log(sorozatok);
}

function init(){
  document.getElementById('newSeriesButton')!.addEventListener('click', newSeries)
}


document.addEventListener('DOMContentLoaded', init)
