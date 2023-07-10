import { getRegionData } from "./externalSevices.mjs";


export async function addRegionPOI() {

    // get the list of products 
    const kantoData = await getRegionData(1);
    console.log(kantoData);
    const Kanto = document.getElementById("Kanto");
    for (let i = 0; i < kantoData.locations.length; i++){
        if (kantoData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(kantoData.locations[i].name);
    list.appendChild(node);
    Kanto.appendChild(list);
    }
    }
    
    const johtoData = await getRegionData(2);
    console.log(johtoData);
    const Johto = document.getElementById("Johto");
    for (let i = 0; i < johtoData.locations.length; i++){
        if (johtoData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(johtoData.locations[i].name);
    list.appendChild(node);
    Johto.appendChild(list);
    }
    }

    const hoennData = await getRegionData(3);
    console.log(hoennData);
    const Hoenn = document.getElementById("Hoenn");
    for (let i = 0; i < hoennData.locations.length; i++){
        if (hoennData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(hoennData.locations[i].name);
    list.appendChild(node);
    Hoenn.appendChild(list);
    }
    }

    const sinnohData = await getRegionData(4);
    console.log(sinnohData);
    const Sinnoh = document.getElementById("Sinnoh");
    for (let i = 0; i < sinnohData.locations.length; i++){
        if (sinnohData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(sinnohData.locations[i].name);
    list.appendChild(node);
    Sinnoh.appendChild(list);
    }
    }

    const unovaData = await getRegionData(5);
    console.log(unovaData);
    const Unova = document.getElementById("Unova");
    for (let i = 0; i < unovaData.locations.length; i++){
        if (unovaData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(unovaData.locations[i].name);
    list.appendChild(node);
    Unova.appendChild(list);
    }
    }

    const kalosData = await getRegionData(6);
    console.log(kalosData);
    const Kalos = document.getElementById("Kalos");
    for (let i = 0; i < kalosData.locations.length; i++){
        if (kalosData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(kalosData.locations[i].name);
    list.appendChild(node);
    Kalos.appendChild(list);
    }
    }

    const alolaData = await getRegionData(7);
    console.log(alolaData);
    const Alola = document.getElementById("Alola");
    for (let i = 0; i < alolaData.locations.length; i++){
        if (alolaData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(alolaData.locations[i].name);
    list.appendChild(node);
    Alola.appendChild(list);
    }
    }

    const galarData = await getRegionData(8);
    console.log(galarData);
    const Galar = document.getElementById("Galar");
    for (let i = 0; i < galarData.locations.length; i++){
        if (galarData.locations[i].name.includes("route")) {
            i++;
        }
        else {
    const list = document.createElement("li");
    const node = document.createTextNode(galarData.locations[i].name);
    list.appendChild(node);
    Galar.appendChild(list);
    }
    }

    const hisuiData = await getRegionData(9);
    console.log(hisuiData);
    const Hisui = document.getElementById("Hisui");
    for (let i = 0; i < hisuiData.locations.length; i++){
        if (hisuiData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(hisuiData.locations[i].name);
    list.appendChild(node);
    Hisui.appendChild(list);
    }
    }

    const paldeaData = await getRegionData(10);
    console.log(paldeaData);
    const Paldea = document.getElementById("Paldea");
    for (let i = 0; i < paldeaData.locations.length; i++){
        if (paldeaData.locations[i].name.includes("route")) {
            i++;
        }
     
        else{
    const list = document.createElement("li");
    const node = document.createTextNode(paldeaData.locations[i].name);
    list.appendChild(node);
    Paldea.appendChild(list);
    }
    }
  }