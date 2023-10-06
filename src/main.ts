import { Sorozat } from "./sorozat";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

let sorozatok: Sorozat[] = [];

function listaKiir(){
  const lista = document.getElementById('list')!;
  lista.innerHTML = '';
  for (const s of sorozatok) {
    const liElem = document.createElement('li');

  liElem.textContent = '${s.title} ($s.episodes})';

  lista.appendChild(liElem);
  }
}

function newSeries(){
  try {
  let ujCim = (document.getElementById('series') as HTMLInputElement).value;
  let ujEpizodszam = parseInt((document.getElementById('episode') as HTMLInputElement).value);
  let ujRendezonev = (document.getElementById('director') as HTMLInputElement).value;

  let ujSorozat = new Sorozat(ujCim, ujEpizodszam, ujRendezonev);
  sorozatok.push(ujSorozat);

  listaKiir();
  
  document.getElementById('errormessage')!.textContent = '';
  (document.getElementById('series') as HTMLInputElement).value = '';
  (document.getElementById('episode') as HTMLInputElement).value = '';
  (document.getElementById('director') as HTMLInputElement).value = '';
  } catch(e){
    if(e instanceof Error) {
      document.getElementById('errormessage')!.textContent = e.message;
    }
  }
}


function init(){
  document.getElementById('newSeriesButton')!.addEventListener('click', newSeries)
}


document.addEventListener('DOMContentLoaded', init)
