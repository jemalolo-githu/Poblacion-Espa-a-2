// Datos de provincias de España con posiciones aproximadas

const datosDeProvincias = [
     // Andalucía
    { id: "almeria", name: "Almería", population: 731792, comunidad: "Andalucía" },
    { id: "cadiz", name: "Cádiz", population: 1239487, comunidad: "Andalucía" },
    { id: "cordoba", name: "Córdoba", population: 777547, comunidad: "Andalucía" },
    { id: "granada", name: "Granada", population: 921987, comunidad: "Andalucía" },
    { id: "huelva", name: "Huelva", population: 521968, comunidad: "Andalucía" },
    { id: "jaen", name: "Jaén", population: 631381, comunidad: "Andalucía" },
    { id: "malaga", name: "Málaga", population: 1692985, comunidad: "Andalucía" },
    { id: "sevilla", name: "Sevilla", population: 1958755, comunidad: "Andalucía" },
    
    // Aragón
    { id: "huesca", name: "Huesca", population: 219345, comunidad: "Aragón" },
    { id: "teruel", name: "Teruel", population: 134572, comunidad: "Aragón" },
    { id: "zaragoza", name: "Zaragoza", population: 972528, comunidad: "Aragón" },
    
    // Asturias
    { id: "asturias", name: "Asturias", population: 1011796, comunidad: "Asturias" },
    
    // Canarias
    { id: "las-palmas", name: "Las Palmas", population: 1139281, comunidad: "Canarias" },
    { id: "santa-cruz", name: "Santa Cruz de Tenerife", population: 1049438, comunidad: "Canarias" },
    
    // Cantabria
    { id: "cantabria", name: "Cantabria", population: 582905, comunidad: "Cantabria" },
    
     // Cataluña
    { id: "barcelona", name: "Barcelona", population: 5670282, comunidad: "Cataluña" },
    { id: "girona", name: "Girona", population: 781788, comunidad: "Cataluña" },
    { id: "lleida", name: "Lleida", population: 439253, comunidad: "Cataluña" },
    { id: "tarragona", name: "Tarragona", population: 821453, comunidad: "Cataluña" },
    
     // Castilla y León
    { id: "avila", name: "Ávila", population: 158421, comunidad: "Castilla y León" },
    { id: "burgos", name: "Burgos", population: 357650, comunidad: "Castilla y León" },
    { id: "leon", name: "León", population: 456439, comunidad: "Castilla y León" },
    { id: "palencia", name: "Palencia", population: 160321,  comunidad: "Castilla y León" },
    { id: "salamanca", name: "Salamanca", population: 328674,  comunidad: "Castilla y León" },
    { id: "segovia", name: "Segovia", population: 153478, comunidad: "Castilla y León" },
    { id: "soria", name: "Soria", population: 88591, comunidad: "Castilla y León" },
    { id: "valladolid", name: "Valladolid", population: 519249, comunidad: "Castilla y León" },
    { id: "zamora", name: "Zamora", population: 168725, comunidad: "Castilla y León" },
    
    // Castilla-La Mancha
    { id: "albacete", name: "Albacete", population: 388786, comunidad: "Castilla-La Mancha" },
    { id: "ciudad-real", name: "Ciudad Real", population: 495045, comunidad: "Castilla-La Mancha" },
    { id: "cuenca", name: "Cuenca", population: 196139, comunidad: "Castilla-La Mancha" },
    { id: "guadalajara", name: "Guadalajara", population: 261995, comunidad: "Castilla-La Mancha" },
    { id: "toledo", name: "Toledo", population: 703772, comunidad: "Castilla-La Mancha" },
    
    // Comunidad Valenciana
    { id: "alicante", name: "Alicante", population: 1882159, comunidad: "Comunidad Valenciana" },
    { id: "castellon", name: "Castellón", population: 587064, comunidad: "Comunidad Valenciana" },
    { id: "valencia", name: "Valencia", population: 2580643, comunidad: "Comunidad Valenciana" },
    
     // Extremadura
    { id: "badajoz", name: "Badajoz", population: 669943, comunidad: "Extremadura" },
    { id: "caceres", name: "Cáceres", population: 391850,  comunidad: "Extremadura" },
    
    // Galicia
    { id: "a-coruna", name: "A Coruña", population: 1119078, comunidad: "Galicia" },
    { id: "lugo", name: "Lugo", population: 326013, comunidad: "Galicia" },
    { id: "ourense", name: "Ourense", population: 305223, comunidad: "Galicia" },
    { id: "pontevedra", name: "Pontevedra", population: 941772, comunidad: "Galicia" },
    
    // Islas Baleares
    { id: "baleares", name: "Islas Baleares", population: 1208135, comunidad: "Islas Baleares" },
    
    // La Rioja
    { id: "la-rioja", name: "La Rioja", population: 319914, comunidad: "La Rioja" },
    
    // Madrid
    { id: "madrid", name: "Madrid", population: 6779888, comunidad: "Madrid" },

    // Navarra
    { id: "navarra", name: "Navarra", population: 661197, comunidad: "Navarra" },
    
    // País Vasco
    { id: "alava", name: "Álava", population: 334412, comunidad: "País Vasco" },
    { id: "gipuzkoa", name: "Gipuzkoa", population: 724634, comunidad: "País Vasco" },
    { id: "vizcaya", name: "Vizcaya", population: 1153117, comunidad: "País Vasco" },
    
    // Región de Murcia
    { id: "murcia", name: "Murcia", population: 1511251, comunidad: "Región de Murcia" },
    
    // Ciudades autónomas
    { id: "ceuta", name: "Ceuta", population: 84202, comunidad: "Ciudades Autónomas" },
    { id: "melilla", name: "Melilla", population: 87076, comunidad: "Ciudades Autónomas" }

];
        

// Variables de estado
let provinciasSeleccionadas = [];
let estoyJugando = false;
let preguntas = 0;
let aciertos = 0;
let fallos = 0;


// ***********************
function cargarMapaSVG() {
// CARGAR EL MAPA SVG
  fetch("svg/spain-provinces.svg")
  
    .then(response => response.text())
    .then(svgData => {
        // meto el codigo HTML en el div del mapa
        const container = document.getElementById("contenedor-del-mapa");
        container.innerHTML = svgData;

        
        // Aplicamos escala CSS
        const svgElement = container.querySelector('svg');
        
        if (svgElement) {
            // Aplicamos escala CSS
            svgElement.style.transform = 'scale(1.4)';
            svgElement.style.transformOrigin = 'top left'; // Escala desde la esquina superior izquierda
            
            // Aseguramos que el contenedor no recorte el SVG escalado
            container.style.display = 'inline-block';
            container.style.overflow = 'visible';
            
          
        }
        

    
        // Crear los eventos y los titles de cada provincia (del mapa)
        const paths = container.querySelectorAll("path");
       
        paths.forEach(path => {
            if(path.childNodes.length>0) {
               
                // Eventos click para marcar y desmarcar
                path.addEventListener("click", () => {
                    toggleProvince(path.id);
                });
                
                // los titles se muestran solos si está en formato <path d="..." id=".."><title></title><path></path>
                // Añado la pobalción a los titles de cada provincia
                let title = path.querySelector('title');
                if (title) {
                    
                    const provincia = datosDeProvincias.find(p => p.id === path.id);
                    if (provincia) {
                        
                        title.textContent = title.textContent + '\n' + parseInt(provincia.population).toLocaleString();
                    }
                }   
                
            }
        });
    });
}
   


// *******************************
// Inicializar la aplicación
// *******************************
function inicio() {
    cargarMapaSVG();                            // Cargar el mapa svg con escala (1.5)
    crearPanelDeComunidades();                  // Crear el panel de checkboxes
    setupFilter();                              // crear evento para el botón filtrar por poblacion
    setupSelectAll();                           // Crear evento checkbox Seleccionar todas las provincias
    setupBotonColorFondoMapa();                 // Crear evento de darle color al agua del mapa
    
    getLocalStorageColoresMapa();               // 1º) Leer los colores del local Storage
    change5FillColorsClass() ;                  // 2º) Asignar los colores de las provincias ( y se guardan automáticamente en el localStorage)
}


// ***************************
// Leer del localStorage
function getLocalStorageColoresMapa() {
  const clave = 'coloresDelMapa';
  const defaults = ["#eee2b3","#bdeeb3","#b3eeee","#ab9fe4","#e79191"];
  try {
    coloresDelMapa = JSON.parse(localStorage.getItem(clave)) || defaults;
  } catch { 
    localStorage.setItem(clave, JSON.stringify(defaults));
    
  }
  let n=1;
  coloresDelMapa.forEach(color =>  {
    
    document.getElementById("color"+n).value = color;
    n++;
  });
 guardarLocalStorageColoresDelMapa();
}

// *************************
// Guardar colores del mapa en el localstorage
function guardarLocalStorageColoresDelMapa() {

  // Guardar en localStorage
  const nuevosColores =[];
  for(var i=0;i<5;i++) {
    nuevosColores[i] = document.getElementById(`color${i+1}`).value;
  }

  try {
    localStorage.setItem("coloresDelMapa", JSON.stringify(nuevosColores));
    return true;
  } catch (e) {
    alert("Error al guardar en localStorage:", e);
    return false;
  }
}

// *********************************
// Configurar el checkbox "Poner fondo azul al mapa"
function setupBotonColorFondoMapa() {
    const botonFondoDelMar  = document.getElementById("boton-FondoDelMar");
    const contenedorDelMapa = document.getElementById("contenedor-del-mapa");
    botonFondoDelMar.addEventListener("click",function() {
       
        if (contenedorDelMapa.style.backgroundColor=="" || contenedorDelMapa.style.backgroundColor == "rgb(245, 245, 245)") {
            contenedorDelMapa.style.backgroundColor = "rgb(202,220,229)";    // #f5f5f5
            contenedorDelMapa.style.border="2px solid rgb(177, 194, 206)";  //var(--primary-color);
        } else {
            contenedorDelMapa.style.backgroundColor = "rgb(245,245,245)";    // "#cadce5";   // var(secondary color)
            contenedorDelMapa.style.border="0px";
        } 
        
    });
}

// *********************************
// Configurar el checkbox "Seleccionar todas"
function setupSelectAll() {

    const selectAllCheckbox = document.getElementById('select-all-provinces');
    
    selectAllCheckbox.addEventListener('change', function() {
        if (this.checked) {
            selectAllProvinces();
        } else {
            resetSelection();
        }
    });
}

// *******************************
// Seleccionar todas las provincias
function selectAllProvinces() {
    
    provinciasSeleccionadas = [...datosDeProvincias];
    
    // Actualizar todos los checkboxes
    document.querySelectorAll('.checkbox-provincia').forEach(checkbox => {
        checkbox.checked = true;
    });
    
    // Actualizar checkboxes de comunidades
    document.querySelectorAll('.checkbox-comunidad').forEach(checkbox => {
        checkbox.checked = true;
        checkbox.indeterminate = false;
    });
    
    // Actualizar mapa y estadísticas
    actualizarAreasSeleccionadas();
    actualizarPoblacionSeleccionada();
    actualizarListaDeProvincias();
        
}


// ****************************************
// Crear panel de comunidades y provincias
function crearPanelDeComunidades() {
    const panel = document.getElementById('contenedor-de-comunidades');
    
    // Agrupar provincias por comunidad
    const comunidades = {};
    datosDeProvincias.forEach(provincia => {
        if (!comunidades[provincia.comunidad]) {
            comunidades[provincia.comunidad] = [];
        }
        comunidades[provincia.comunidad].push(provincia);
    });
    
    
    
    // Crear elementos del panel
    for (const comunidad in comunidades) {
        const comunidadElement = document.createElement('div');
        
        // Cabecera de la comunidad
        const comunidadCabecera = document.createElement('div');
        comunidadCabecera.className = 'nombre-comunidad';
        comunidadCabecera.textContent = comunidad;
        
        // Checkbox para seleccionar toda la comunidad
        const comunidadCheckbox = document.createElement('input');
        comunidadCheckbox.type = 'checkbox';
        comunidadCheckbox.className = 'checkbox-comunidad';
        comunidadCheckbox.dataset.comunidad = comunidad;
        comunidadCheckbox.addEventListener('change', (e) => toggleCommunity(comunidad, e.target.checked));
        comunidadCabecera.prepend(comunidadCheckbox);
        
        // Lista de provincias
        const provinciaList = document.createElement('div');
        provinciaList.className = 'listado-de-provincias';
        
        /*
        // Añadir "Seleccionar todas"
        const selectAll = document.createElement('span');
        selectAll.className = 'select-all';
        selectAll.textContent = 'Seleccionar todas';
        selectAll.addEventListener('click', () => toggleAllProvinces(community, true));
        comunidadCabecera.appendChild(selectAll);
        */


        comunidades[comunidad].forEach(provincia => {
            const provinciaItem = document.createElement('div');
            provinciaItem.className = 'item-provincia';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox-provincia';
            checkbox.dataset.id = provincia.id;
            checkbox.addEventListener('change', (e) => toggleProvince(provincia.id, e.target.checked));
            
            const label = document.createElement('label');
            label.textContent = `${provincia.name} (${provincia.population.toLocaleString()} hab.)`;
            
            provinciaItem.appendChild(checkbox);
            provinciaItem.appendChild(label);
            provinciaList.appendChild(provinciaItem);
        });
        
        // Evento para expandir/colapsar
        comunidadCabecera.addEventListener('click', function(e) {
            // if (e.target === comunidadCheckbox || e.target === selectAll) return;
            if (e.target === comunidadCheckbox ) return;
            this.classList.toggle('expanded');
            provinciaList.style.display = this.classList.contains('expanded') ? 'block' : 'none';
        });
        
        comunidadElement.appendChild(comunidadCabecera);
        comunidadElement.appendChild(provinciaList);
        panel.appendChild(comunidadElement);
    }
}

// ****************************************
// Filtros
// Crear evento para el boton filtrar por población
function setupFilter() {
    const applyFilterBtn = document.getElementById('apply-filter');
    const resetFilterBtn = document.getElementById('reset-filter');
    
    applyFilterBtn.addEventListener('click', applyPoblacionFilter);
    resetFilterBtn.addEventListener('click', resetSelection);

    let minPopulationInput = document.getElementById("min-population");
    let maxPopulationInput = document.getElementById("max-population");

    
    // Evento minPopulation para puntos de millares
    minPopulationInput.addEventListener('input', function(e) {
        // Acepta solo numeros
        let value = this.value.replace(/[^0-9]/g, '');
        if (value.length > 0) {
            minPopulationInput.value = parseInt(value, 10).toLocaleString('es-ES');
        }
    });


    // Evento maxPopulation para puntos de millares
    maxPopulationInput.addEventListener('input', function(e) {
        // Acepta solo numeros
        let value = this.value.replace(/[^0-9]/g, '');
        if (value.length > 0) { 
            maxPopulationInput.value = parseInt(value, 10).toLocaleString('es-ES');
        }
    });
    

}


// ****************************************
// Aplicar filtro por población
function applyPoblacionFilter() {
    let minPoblacion = document.getElementById('min-population').value;
    let maxPoblacion = document.getElementById('max-population').value;
    // Quito los puntos de millares 
    minPoblacion = minPoblacion.replaceAll(".","");
    maxPoblacion = maxPoblacion.replaceAll(".","");
    
    // Deseleccionar todas las provincias primero
    resetSelection(false);
    
    // Seleccionar las provincias que cumplen con el filtro
    datosDeProvincias.forEach(province => {
        if (province.population >= minPoblacion && province.population <= maxPoblacion) {
            toggleProvince(province.id, true);
        }
    });
}


// ****************************************
// Reiniciar selección
function resetSelection(update = true) {
    provinciasSeleccionadas = [];
    
    // Actualizar checkboxes
    document.querySelectorAll('.checkbox-provincia, .checkbox-comunidad').forEach(checkbox => {
        checkbox.checked = false;
        checkbox.indeterminate = false;
        
    });

    // Actualizar checkbox "Seleccionar todas"
    document.getElementById('select-all-provinces').checked = false;
    
    // Actualizar mapa
    actualizarAreasSeleccionadas();
    
    if (update) {
        actualizarPoblacionSeleccionada();
        actualizarListaDeProvincias();
       
    }
        
}

// ****************************************
// Seleccionar/deseleccionar provincia
function toggleProvince(provinciaId, isChecked = null) {
    const provincia = datosDeProvincias.find(p => p.id === provinciaId);
    const index = provinciasSeleccionadas.findIndex(p => p.id === provinciaId);
    
    // Determinar nuevo estado
    const shouldSelect = isChecked !== null ? isChecked : index === -1;
    
    if (shouldSelect && index === -1) {
        provinciasSeleccionadas.push(provincia);
    } else if (!shouldSelect && index !== -1) {
        provinciasSeleccionadas.splice(index, 1);
    }
    
    // Actualizar checkbox en el panel
    const checkbox = document.querySelector(`.checkbox-provincia[data-id="${provinciaId}"]`);
    if (checkbox) {
        checkbox.checked = shouldSelect;
    }
    
    // Actualizar checkbox de la comunidad
    updateCommunityCheckbox(provincia.comunidad);

    // Actualizar checkbox "Seleccionar todas"
    actualizarSelectAllCheckbox();
    
    actualizarAreasSeleccionadas();
    actualizarPoblacionSeleccionada();
    actualizarListaDeProvincias();
    
    // Mostrar la foto o comprobar si has acertado la foto presentada
    if (document.getElementById("div-flotante").style.display=="block") {
        if (estoyJugando) {
            // Comprobar si la provincia clickada es la de la foto presentada
            const nombreFoto = document.getElementById("div-flotante").style.backgroundImage;    
             
            if ('url("img/'+provinciaId+'.jpg")'==nombreFoto){
                
                aciertos++;
                avisarAcierto();
            }else {
                
                fallos++;
                avisarFallo();
            }

        } else {
             mostrarFotoProvincia(provinciaId);
        }
    } else {
        
        dejarDeJugar();
        
        // alert("No muestro la foto");
    }

}





// ****************************************
// Actualizar el estado del checkbox "Seleccionar todas"
function actualizarSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('select-all-provinces');
    if (provinciasSeleccionadas.length === 0) {
        selectAllCheckbox.checked = false;
    } else if (provinciasSeleccionadas.length === datosDeProvincias.length) {
        selectAllCheckbox.checked = true;
    } else {
        selectAllCheckbox.checked = false;
    }
}




// ****************************************
// Seleccionar/deseleccionar toda una comunidad
function toggleCommunity(comunidad, isChecked) {
    const comunidadProvincias = datosDeProvincias.filter(p => p.comunidad === comunidad);
    
    comunidadProvincias.forEach(provincia => {
        const index = provinciasSeleccionadas.findIndex(p => p.id === provincia.id);
        
        if (isChecked && index === -1) {
            provinciasSeleccionadas.push(provincia);
        } else if (!isChecked && index !== -1) {
            provinciasSeleccionadas.splice(index, 1);
        }
        
        // Actualizar checkbox de la provincia
        const checkbox = document.querySelector(`.checkbox-provincia[data-id="${provincia.id}"]`);
        if (checkbox) {
            checkbox.checked = isChecked;
        }
    });
    
    // Actualizar checkbox "Seleccionar todas"
    actualizarSelectAllCheckbox();  

    actualizarAreasSeleccionadas();
    actualizarPoblacionSeleccionada();
    actualizarListaDeProvincias();
}






// ****************************************
// Seleccionar/deseleccionar todas las provincias de una comunidad
function toggleAllProvinces(comunidad, isChecked) {
    const comunidadCheckbox = document.querySelector(`.checkbox-comunidad[data-comunidad="${comunidad}"]`);
    if (comunidadCheckbox) {
        comunidadCheckbox.checked = isChecked;
        toggleCommunity(comunidad, isChecked);
    }
}



// ****************************************
// Actualizar el estado del checkbox de la comunidad
function updateCommunityCheckbox(comunidad) {
   
    const comunidadProvincias = datosDeProvincias.filter(p => p.comunidad === comunidad);
    const comunidadCheckbox = document.querySelector(`.checkbox-comunidad[data-comunidad="${comunidad}"]`);
    
    if (comunidadProvincias.length > 0 && comunidadCheckbox) {
        const selectedCount = provinciasSeleccionadas.filter(p => p.comunidad === comunidad).length;
        
        if (selectedCount === 0) {
            comunidadCheckbox.checked = false;
            comunidadCheckbox.indeterminate = false;
        } else if (selectedCount === comunidadProvincias.length) {
            comunidadCheckbox.checked = true;
            comunidadCheckbox.indeterminate = false;
        } else {
            comunidadCheckbox.checked = false;
            comunidadCheckbox.indeterminate = true;
        }
    }
}

// ****************************************
// Actualizar el estilo de las áreas seleccionadas
function actualizarAreasSeleccionadas() {
    const areas = document.getElementById("contenedor-del-mapa").querySelectorAll('path');
    
    areas.forEach(area => {
        
        const isSelected = provinciasSeleccionadas.find(p => p.id === area.id);
        area.removeAttribute("class");
        if (isSelected) {
            //console.log(parseInt(isSelected.population));
          
            switch (true) {
                case parseInt(isSelected.population)<250000:
                    area.classList.add('selected-0-250m');
                    break;
                case parseInt(isSelected.population)<500000:
                    area.classList.add('selected-250-500m');
                    break;
                case parseInt(isSelected.population)<1000000:
                    area.classList.add('selected-500-1M');
                    break;
                case parseInt(isSelected.population)<2000000:
                    area.classList.add('selected-1-2M');
                    break;
                case parseInt(isSelected.population)<10000000:
                    area.classList.add('selected-2-100M');
                    break;
                
                default:
                
                    area.classList.add('selected');
                
                    
                    
            }
        } else {
             area.classList.add('no-selected');
        }

    });
}

// ****************************************
// Actualizar las estadísticas
function actualizarPoblacionSeleccionada() {
    // Calcular población total seleccionada
    const selectedPoblacion = provinciasSeleccionadas.reduce((sum, provincia) => sum + provincia.population, 0);
    
    // Actualizar DOM
    document.getElementById('nProvincias-seleccionadas').textContent = provinciasSeleccionadas.length;
    document.getElementById('ttPoblacion-seleccionada').textContent = selectedPoblacion.toLocaleString();
    document.getElementById('total-display-poblacion').textContent = selectedPoblacion.toLocaleString();
}


// ****************************************
// Actualizar la lista de provincias seleccionadas
function actualizarListaDeProvincias() {
    const list = document.getElementById('lista-provincias');
    list.innerHTML = '';
    
    // Agrupar por comunidad autónoma
    const agrupadasPorComunidad = {};
    provinciasSeleccionadas.forEach(provincia => {
        if (!agrupadasPorComunidad[provincia.comunidad]) {
            agrupadasPorComunidad[provincia.comunidad] = [];
        }
        agrupadasPorComunidad[provincia.comunidad].push(provincia);
    });
    
    // Mostrar en la lista
    for (const comunidad in agrupadasPorComunidad) {
        const comunidadCabecera = document.createElement('li');
        comunidadCabecera.innerHTML = `<strong>${comunidad}</strong>`;
        list.appendChild(comunidadCabecera);
        
        const subList = document.createElement('ul');
        agrupadasPorComunidad[comunidad].forEach(provincia => {
            const item = document.createElement('li');
            item.textContent = `${provincia.name} - ${provincia.population.toLocaleString()} hab.`;
            subList.appendChild(item);
        });
        list.appendChild(subList);
    }
    actualizarListaDeProvinciasOrdenadas();
}

// ****************************************
// Actualizar la lista de provincias ordenadas por poblacion
function actualizarListaDeProvinciasOrdenadas() {
    const list = document.getElementById('lista-provincias-ordenadas');
    list.innerHTML = '';
    
    // Ordenar por poblacion
    
    let provinciasOrdenadas = [...provinciasSeleccionadas];
    
    provinciasOrdenadas.sort((a,b) => b.population - a.population);
    
    
    // Mostrar en la lista
    const subList = document.createElement('ul');
   

    let n=1;
    provinciasOrdenadas.forEach(provincia => {
            
        const item = document.createElement('li');
        item.textContent = `${n} ${provincia.name} - ${provincia.population.toLocaleString()} hab.`;

        if (n%5==0) {
            // meto un salto de 5 en 5, para no saturar
            const br = document.createElement("br");
            const segundaParte = document.createTextNode(" ");       // ascii 255 espacio en blanco
            item.appendChild(br);
            item.appendChild(segundaParte);
        }
        subList.appendChild(item);
        n++;
    });
    list.appendChild(subList);
    
}



// *******************************************
//  Elementos de la gama de colores para las provincias
// Función para aplicar las gamas de colores
function applyColorScheme(baseColor) {
    if (baseColor=="arcoIris") {
         // Colores variados
         document.getElementById("color1").value ="#eee2b3";
         document.getElementById("color2").value ="#bdeeb3";
         document.getElementById("color3").value ="#b3eeee";
         document.getElementById("color4").value ="#ab9fe4";
         document.getElementById("color5").value ="#e79191";

    } else {
        const colors = generateColorScheme(baseColor);
        // Asignar los colores a los inputs
        for (let i = 0; i < 5; i++) {
            const colorInput = document.getElementById(`color${i+1}`);        
            colorInput.value = colors[i];
        
        }
    }
    change5FillColorsClass();
    
}




function change5FillColorsClass() {
    changeFillColorClass(".selected-0-250m",    document.getElementById("color1").value);
    changeFillColorClass(".selected-250-500m", document.getElementById("color2").value);
    changeFillColorClass(".selected-500-1M",    document.getElementById("color3").value);
    changeFillColorClass(".selected-1-2M",      document.getElementById("color4").value);
    changeFillColorClass(".selected-2-100M",    document.getElementById("color5").value);
    
    // Actualizamos y guardamos en el localStorage los colores
    guardarLocalStorageColoresDelMapa();
}

function changeFillColorClass(miClase,elNuevoValor) {
    // Busca en todas las hojas de estilo del documento
    const hojasDeEstilo = document.styleSheets;
    
    for (let i = 0; i < hojasDeEstilo.length; i++) {
        const reglas = hojasDeEstilo[i].cssRules || hojasDeEstilo[i].rules;
        
        for (let j = 0; j < reglas.length; j++) {
            // Si encuentra la clase .miClaseFill, cambia su fill
            if (reglas[j].selectorText === miClase) {
                reglas[j].style.fill = elNuevoValor; // Cambia de color
                return; // Termina después de aplicar el cambio
            }
        }
    }
}







// Función para generar las gamas de colores
function generateColorScheme(baseColor) {
    let baseHue;
    
    // Definir el tono base según el color seleccionado
    switch(baseColor) {
        case 'green':
            baseHue = 120;
            break;
        case 'yellow':
            baseHue = 60;
            break;
        case 'blue':
            baseHue = 240;
            break;
        case 'red':
            baseHue = 0;
            break;
        default:
            baseHue = 0;
    }
    
    const colors = [];
    
    // Generar 5 tonos variando saturación y luminosidad
    for (let i = 4; i >=0; i--) {
        const saturation = 70 + Math.floor(Math.random() * 30); // 70-100%
        const lightness = 30 + (i * 15); // 30%, 45%, 60%, 75%, 90%
        
        colors.push(hslToHex(baseHue, saturation, lightness));
    }
    
    return colors;
}

// Función para convertir HSL a HEX
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

/* ****************************** */
/* funciones para el div flotante */
/* ****************************** */
document.addEventListener('DOMContentLoaded', function() {
    const floatingWindow = document.getElementById('div-flotante');
    const windowHeader = document.getElementById('div-flotante-header');
    const closeBtn = document.getElementById('div-flotante-closeBtn');
    const actionBtn = document.getElementById('div-flotante-actionBtn-azar');

    // Posición inicial centrada
    positionWindow();

    // Función para posicionar la ventana centrada
    function positionWindow() {
        const windowWidth = floatingWindow.offsetWidth;
        const windowHeight = floatingWindow.offsetHeight;
        
        floatingWindow.style.left = `${(window.innerWidth - windowWidth) / 2}px`;
        floatingWindow.style.top = `${(window.innerHeight - windowHeight) / 2}px`;
    }

    // Mover la ventana
    let isDragging = false;
    let offsetX, offsetY;

    windowHeader.addEventListener('mousedown', function(e) {
        // Solo iniciar el arrastre si no estamos en un botón de redimensionar
        const computedStyle = window.getComputedStyle(floatingWindow);
        const cursor = computedStyle.getPropertyValue('cursor');
        
        if (cursor !== 'nwse-resize' && cursor !== 'nesw-resize' && 
            cursor !== 'ew-resize' && cursor !== 'ns-resize') {
            isDragging = true;
            offsetX = e.clientX - floatingWindow.getBoundingClientRect().left;
            offsetY = e.clientY - floatingWindow.getBoundingClientRect().top;
            floatingWindow.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            let newLeft = e.clientX - offsetX;
            let newTop = e.clientY - offsetY;

            // Limitar para que no salga de la pantalla
            const windowWidth = floatingWindow.offsetWidth;
            const windowHeight = floatingWindow.offsetHeight;

            newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - windowWidth));
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - windowHeight));

            floatingWindow.style.left = `${newLeft}px`;
            floatingWindow.style.top = `${newTop}px`;
        }
    });
    
    // Ratón por encima - no mover - cursor normal
    document.addEventListener('mouseup', function() {
        isDragging = false;
        floatingWindow.style.cursor = '';
    });

    // Botón de cerrar
    closeBtn.addEventListener('click', function() {
        floatingWindow.style.display = 'none';
        
        // Dejar de jugar
        dejarDeJugar();
        
    });

    // Botón de acción
    actionBtn.addEventListener('click', function() {
        // Mostrar una foto de provincia aleatoriamente
        mostrarFotoAleatoriaDeProvincia();
    });

    // Ajustar posición al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        const rect = floatingWindow.getBoundingClientRect();
        
        // Verificar si la ventana está fuera de los límites después del resize
        const windowWidth = floatingWindow.offsetWidth;
        const windowHeight = floatingWindow.offsetHeight;
        
        let newLeft = parseFloat(floatingWindow.style.left) || rect.left;
        let newTop = parseFloat(floatingWindow.style.top) || rect.top;
        
        newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - windowWidth));
        newTop = Math.max(0, Math.min(newTop, window.innerHeight - windowHeight));
        
        floatingWindow.style.left = `${newLeft}px`;
        floatingWindow.style.top = `${newTop}px`;
    });
});


// Evento para mostrar/ocultar las estadisticas (fija en la parte superior izquierda)
const e = document.getElementById("boton-Mostrar-Estadisticas");
e.addEventListener("click",()=>{
    const f = document.getElementById("contenedor-estadisticas");
    if (f.style.display=="block") {
        f.style.display="none"; 
    } else {
        f.style.display="block";
    }
});


// Evento de alternar ver / ocultar la foto en el div flotante
const e1 = document.getElementById("boton-FotoProvincia");
e1.addEventListener("click",()=>{
    const f1 = document.getElementById("div-flotante");
    if (f1.style.display=="block"){
        f1.style.display="none"; 
        
        // Dejar de jugar
        dejarDeJugar();
        

    } else {
        f1.style.display="block";
        // estoyJugando será true solo cunado pulse boton adivinar
    }
});

// ********************
function  mostrarFotoProvincia(provinciaId){

    const e = document.getElementById("div-flotante");
    const isSelected = datosDeProvincias.find(p => p.id === provinciaId);
   
    if (isSelected) {
        const imgsrc = "img/"+provinciaId+".jpg";
        e.style.backgroundImage = "url("+imgsrc+")";
        document.getElementById("div-flotante-title").title = isSelected.name;
        e.display="block";
    } else {
         e.style.backgroundImage="none";
         document.getElementById("div-flotante-title").title = "";
    } 
}

// *********************
function mostrarFotoAleatoriaDeProvincia() {
    // Math.random() * (max - min) + min;        Aleatorio entre min y max-1   
    const nAzar = parseInt(Math.random() * (datosDeProvincias.length - 0) + 0);       //( 0 y 52)    min = 0   max = datosDeProvincias.length (-1)
    const provElegida = datosDeProvincias[nAzar];
    if(provElegida.id) {
        estoyJugando=true;
        preguntas++;
        mostrarFotoProvincia(provElegida.id);
    }else{
        alert("No existe la provincia num "+nAzar);
    }
}



// Aciertos y fallos        **********************************************
// Obtener elementos del DOM
// const aciertoBtn = document.getElementById('acierto');
// const falloBtn = document.getElementById('fallo');
const aciertoModal = document.getElementById('aciertoModal');
const falloModal = document.getElementById('falloModal');
const aciertoSound = document.getElementById('aciertoSound');
const falloSound = document.getElementById('falloSound');



// Función para mostrar el modal
function mostrarModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar el modal haciendo clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
});

function dejarDeJugar() {
    estoyJugando = false;   // por si acaso
    preguntas = 0;
    aciertos= 0;
    fallos = 0;
}

// *********************
function avisarAcierto() {
    mostrarModal('aciertoModal');
    aciertoSound.currentTime = 0; // Reiniciar el sonido si ya estaba reproduciéndose
    aciertoSound.play();

}

// *********************
function avisarFallo() {
    mostrarModal('falloModal');
    falloSound.currentTime = 0;
    falloSound.play();
}





// ****************************************
// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicio);
// ****************************************