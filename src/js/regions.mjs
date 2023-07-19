import { getRegionData } from "./externalSevices.mjs";

export async function addRegionPOI() {

    const kantoData = await getRegionData(1);
    
    const Kanto = document.getElementById("Kanto");
    for (let i = 0; i < kantoData.locations.length; i++){
        if (kantoData.locations[i].name.includes("town") || kantoData.locations[i].name.includes("city")) {
    const list = document.createElement("li");
    const node = document.createTextNode(kantoData.locations[i].name);
    list.appendChild(node);
    Kanto.appendChild(list);
        }
    }
    
    const johtoData = await getRegionData(2);
    
    const Johto = document.getElementById("Johto");
    for (let i = 0; i < johtoData.locations.length; i++){
        if (johtoData.locations[i].name.includes("city") || johtoData.locations[i].name.includes("town")) {
             const list = document.createElement("li");
    const node = document.createTextNode(johtoData.locations[i].name);
    list.appendChild(node);
    Johto.appendChild(list);   
        }
    }

    const hoennData = await getRegionData(3);
    
    const Hoenn = document.getElementById("Hoenn");
    for (let i = 0; i < hoennData.locations.length; i++){
        if (hoennData.locations[i].name.includes("city") || hoennData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(hoennData.locations[i].name);
    list.appendChild(node);
    Hoenn.appendChild(list);         
        }
    }

    const sinnohData = await getRegionData(4);
    
    const Sinnoh = document.getElementById("Sinnoh");
    for (let i = 0; i < sinnohData.locations.length; i++){
        if (sinnohData.locations[i].name.includes("city") || sinnohData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(sinnohData.locations[i].name);
    list.appendChild(node);
    Sinnoh.appendChild(list);    
        }
    }

    const unovaData = await getRegionData(5);
    
    const Unova = document.getElementById("Unova");
    for (let i = 0; i < unovaData.locations.length; i++){
        if (unovaData.locations[i].name.includes("city") || unovaData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(unovaData.locations[i].name);
    list.appendChild(node);
    Unova.appendChild(list);            
        }
    }

    const kalosData = await getRegionData(6);
    
    const Kalos = document.getElementById("Kalos");
    for (let i = 0; i < kalosData.locations.length; i++){
        if (kalosData.locations[i].name.includes("city") || kalosData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(kalosData.locations[i].name);
    list.appendChild(node);
    Kalos.appendChild(list);     
        }
    }

    const alolaData = await getRegionData(7);
    
    const Alola = document.getElementById("Alola");
    for (let i = 0; i < alolaData.locations.length; i++){
        if (alolaData.locations[i].name.includes("city") || alolaData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(alolaData.locations[i].name);
    list.appendChild(node);
    Alola.appendChild(list);
        }
    }

    const galarData = await getRegionData(8);
    
    const Galar = document.getElementById("Galar");
        if (galarData.locations.length === 0) {
            const list = document.createElement("li");
            const node = document.createTextNode("No information Available");
            list.appendChild(node);
            Galar.appendChild(list);   
        }
        else {
    for (let i = 0; i < galarData.locations.length; i++){
         if (galarData.locations[i].name.includes("city") || galarData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(galarData.locations[i].name);
    list.appendChild(node);
    Galar.appendChild(list);            
        }
    }
        }

    const hisuiData = await getRegionData(9);
    
    const Hisui = document.getElementById("Hisui");
    if (hisuiData.locations.length == 0){
        const list = document.createElement("li");
        const node = document.createTextNode("No information Available");
        list.appendChild(node);
        Hisui.appendChild(list);  
    }
    else {
    for (let i = 0; i < hisuiData.locations.length; i++){
        if (hisuiData.locations[i].name.includes("city") || hisuiData.locations[i].name.includes("town")) {
    const list = document.createElement("li");
    const node = document.createTextNode(hisuiData.locations[i].name);
    list.appendChild(node);
    Hisui.appendChild(list); 
       }
    }
    }

    
    const paldeaData = await getRegionData(10);
    
    const Paldea = document.getElementById("Paldea");
    for (let i = 0; i < paldeaData.locations.length; i++){
        if (paldeaData.locations[i].name.includes("m") || paldeaData.locations[i].name.includes("z")) {
    const list = document.createElement("li");
    const node = document.createTextNode(paldeaData.locations[i].name);
    list.appendChild(node);
    Paldea.appendChild(list);   
        }
    }
  }

