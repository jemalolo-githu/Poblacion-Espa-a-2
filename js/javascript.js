// Datos de provincias de España con posiciones aproximadas

const datosDeProvincias = [
     // Andalucía
    { id: "almeria", nombre: "Almería", poblacion: 731792, comunidad: "Andalucía" },
    { id: "cadiz", nombre: "Cádiz", poblacion: 1239487, comunidad: "Andalucía" },
    { id: "cordoba", nombre: "Córdoba", poblacion: 777547, comunidad: "Andalucía" },
    { id: "granada", nombre: "Granada", poblacion: 921987, comunidad: "Andalucía" },
    { id: "huelva", nombre: "Huelva", poblacion: 521968, comunidad: "Andalucía" },
    { id: "jaen", nombre: "Jaén", poblacion: 631381, comunidad: "Andalucía" },
    { id: "malaga", nombre: "Málaga", poblacion: 1692985, comunidad: "Andalucía" },
    { id: "sevilla", nombre: "Sevilla", poblacion: 1958755, comunidad: "Andalucía" },
    
    // Aragón
    { id: "huesca", nombre: "Huesca", poblacion: 219345, comunidad: "Aragón" },
    { id: "teruel", nombre: "Teruel", poblacion: 134572, comunidad: "Aragón" },
    { id: "zaragoza", nombre: "Zaragoza", poblacion: 972528, comunidad: "Aragón" },
    
    // Asturias
    { id: "asturias", nombre: "Asturias", poblacion: 1011796, comunidad: "Asturias" },
    
    // Canarias
    { id: "las-palmas", nombre: "Las Palmas", poblacion: 1139281, comunidad: "Canarias" },
    { id: "santa-cruz", nombre: "Santa Cruz de Tenerife", poblacion: 1049438, comunidad: "Canarias" },
    
    // Cantabria
    { id: "cantabria", nombre: "Cantabria", poblacion: 582905, comunidad: "Cantabria" },
    
     // Cataluña
    { id: "barcelona", nombre: "Barcelona", poblacion: 5670282, comunidad: "Cataluña" },
    { id: "girona", nombre: "Girona", poblacion: 781788, comunidad: "Cataluña" },
    { id: "lleida", nombre: "Lleida", poblacion: 439253, comunidad: "Cataluña" },
    { id: "tarragona", nombre: "Tarragona", poblacion: 821453, comunidad: "Cataluña" },
    
     // Castilla y León
    { id: "avila", nombre: "Ávila", poblacion: 158421, comunidad: "Castilla y León" },
    { id: "burgos", nombre: "Burgos", poblacion: 357650, comunidad: "Castilla y León" },
    { id: "leon", nombre: "León", poblacion: 456439, comunidad: "Castilla y León" },
    { id: "palencia", nombre: "Palencia", poblacion: 160321,  comunidad: "Castilla y León" },
    { id: "salamanca", nombre: "Salamanca", poblacion: 328674,  comunidad: "Castilla y León" },
    { id: "segovia", nombre: "Segovia", poblacion: 153478, comunidad: "Castilla y León" },
    { id: "soria", nombre: "Soria", poblacion: 88591, comunidad: "Castilla y León" },
    { id: "valladolid", nombre: "Valladolid", poblacion: 519249, comunidad: "Castilla y León" },
    { id: "zamora", nombre: "Zamora", poblacion: 168725, comunidad: "Castilla y León" },
    
    // Castilla-La Mancha
    { id: "albacete", nombre: "Albacete", poblacion: 388786, comunidad: "Castilla-La Mancha" },
    { id: "ciudad-real", nombre: "Ciudad Real", poblacion: 495045, comunidad: "Castilla-La Mancha" },
    { id: "cuenca", nombre: "Cuenca", poblacion: 196139, comunidad: "Castilla-La Mancha" },
    { id: "guadalajara", nombre: "Guadalajara", poblacion: 261995, comunidad: "Castilla-La Mancha" },
    { id: "toledo", nombre: "Toledo", poblacion: 703772, comunidad: "Castilla-La Mancha" },
    
    // Comunidad Valenciana
    { id: "alicante", nombre: "Alicante", poblacion: 1882159, comunidad: "Comunidad Valenciana" },
    { id: "castellon", nombre: "Castellón", poblacion: 587064, comunidad: "Comunidad Valenciana" },
    { id: "valencia", nombre: "Valencia", poblacion: 2580643, comunidad: "Comunidad Valenciana" },
    
     // Extremadura
    { id: "badajoz", nombre: "Badajoz", poblacion: 669943, comunidad: "Extremadura" },
    { id: "caceres", nombre: "Cáceres", poblacion: 391850,  comunidad: "Extremadura" },
    
    // Galicia
    { id: "a-coruna", nombre: "A Coruña", poblacion: 1119078, comunidad: "Galicia" },
    { id: "lugo", nombre: "Lugo", poblacion: 326013, comunidad: "Galicia" },
    { id: "ourense", nombre: "Ourense", poblacion: 305223, comunidad: "Galicia" },
    { id: "pontevedra", nombre: "Pontevedra", poblacion: 941772, comunidad: "Galicia" },
    
    // Islas Baleares
    { id: "baleares", nombre: "Islas Baleares", poblacion: 1208135, comunidad: "Islas Baleares" },
    
    // La Rioja
    { id: "la-rioja", nombre: "La Rioja", poblacion: 319914, comunidad: "La Rioja" },
    
    // Madrid
    { id: "madrid", nombre: "Madrid", poblacion: 6779888, comunidad: "Madrid" },

    // Navarra
    { id: "navarra", nombre: "Navarra", poblacion: 661197, comunidad: "Navarra" },
    
    // País Vasco
    { id: "alava", nombre: "Álava", poblacion: 334412, comunidad: "País Vasco" },
    { id: "gipuzkoa", nombre: "Gipuzkoa", poblacion: 724634, comunidad: "País Vasco" },
    { id: "vizcaya", nombre: "Vizcaya", poblacion: 1153117, comunidad: "País Vasco" },
    
    // Región de Murcia
    { id: "murcia", nombre: "Murcia", poblacion: 1511251, comunidad: "Región de Murcia" },
    
    // Ciudades autónomas
    { id: "ceuta", nombre: "Ceuta", poblacion: 84202, comunidad: "Ciudades Autónomas" },
    { id: "melilla", nombre: "Melilla", poblacion: 87076, comunidad: "Ciudades Autónomas" }

];
        

// Variables de estado
let provinciasSeleccionadas = [];

// CARGAR EL MAPA SVG
  fetch("svg/spain-provinces.svg")
    .then(response => response.text())
    .then(svgData => {
        // meto el codigo HTML en el div del mapa
        const container = document.getElementById("contenedor-del-mapa");
        container.innerHTML = svgData;
       

        //const paths   = document.querySelectorAll("svg path[id]");
        const paths = container.querySelectorAll("path");
        // const display = document.getElementById("selected-name");

        // Crear los eventos de cada provincia (del mapa)
         let n=0;
        paths.forEach(path => {
            
            // los titles se muestran solos si está en formato <path d="..." id=".."><title></title><path>
            
            // Eventos click para marcar y desmarcar
           
            const id = path.id;
            console.log(n+" "+id);
            path.addEventListener("click", () => {
            
                
                if (path.classList.contains("selected")) {
                    path.classList.remove("selected");
                    provinciasSeleccionadas = provinciasSeleccionadas.filter(p => p !== id);
                } else {
                    path.classList.add("selected");
                    provinciasSeleccionadas.push(id);
                }

                /*
                display.textContent =
                    provinciasSeleccionadas.length > 0
                    ? "Provincias seleccionadas: " + provinciasSeleccionadas.join(", ")
                    : "Provincias seleccionadas: ninguna";
                */
                
                alterarProvincia(id);
            });


       
      });
    });


// ***************************
// Inicializar la aplicación
function inicio() {   
// ***************************
      // crearAreasDelMapa();
    crearPanelDeComunidades();
    crearEventosDelFiltro();
    crearEventoSelecTodas();
    // actualizarPoblacionSeleccionada();
}



// ***************************
// Crear panel de comunidades y provincias
function crearPanelDeComunidades() {
// ***************************
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
        comunidadCheckbox.addEventListener('change', (e) => alterarComunidad(comunidad, e.target.checked));
        comunidadCabecera.prepend(comunidadCheckbox);
        
        // Lista de provincias
        const provinciaList = document.createElement('div');
        provinciaList.className = 'listado-de-provincias';
        
        /*
        // Añadir "Seleccionar todas"
        const selectAll = document.createElement('span');
        selectAll.className = 'select-all';
        selectAll.textContent = 'Seleccionar todas';
        selectAll.addEventListener('click', () => alterarTodasLasProvincias(community, true));
        comunidadCabecera.appendChild(selectAll);
        */


        comunidades[comunidad].forEach(provincia => {
            const provinciaItem = document.createElement('div');
            provinciaItem.className = 'item-provincia';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox-provincia';
            checkbox.dataset.id = provincia.id;
            checkbox.addEventListener('change', (e) => alterarProvincia(provincia.id, e.target.checked));
            
            const label = document.createElement('label');
            label.textContent = `${provincia.nombre} (${provincia.poblacion.toLocaleString()} hab.)`;
            
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

// Filtro
// **********************************
// Configurar el filtro de población
function crearEventosDelFiltro() {
// **********************************
    const applyFilterBtn = document.getElementById('apply-filter');
    const resetFilterBtn = document.getElementById('reset-filter');
    
    applyFilterBtn.addEventListener('click', aplicarFiltroPoblacion);
    resetFilterBtn.addEventListener('click', reiniciarSeleccion);
}


// **********************************
// Aplicar filtro por población
function aplicarFiltroPoblacion() {
// **********************************
    const minPoblacion = parseInt(document.getElementById('min-population').value) || 0;
    const maxPoblacion = parseInt(document.getElementById('max-population').value) || Infinity;
    
    // Deseleccionar todas las provincias primero
    reiniciarSeleccion(false);
    
    // Seleccionar las provincias que cumplen con el filtro
    datosDeProvincias.forEach(provincia => {
        if (provincia.poblacion >= minPoblacion && provincia.poblacion <= maxPoblacion) {
            alterarProvincia(provincia.id, true);
        }
    });
}

// **********************************
// Reiniciar selección
function reiniciarSeleccion(update = true) {
// **********************************
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


// **********************************
// Seleccionar/deseleccionar provincia
function alterarProvincia(provinciaId, isChecked = null) {
// **********************************
    const provincia = datosDeProvincias.find(p => p.id === provinciaId);
    const index     = provinciasSeleccionadas.findIndex(p => p.id === provinciaId);
    
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
    actualizarCheckBoxComunidad(provincia.comunidad);

    // Actualizar checkbox "Seleccionar todas"
    actualizarSelectAllCheckbox();
    
    actualizarAreasSeleccionadas();
    actualizarPoblacionSeleccionada();
    actualizarListaDeProvincias();
}







// **********************************
// Seleccionar/deseleccionar toda una comunidad
function alterarComunidad(comunidad, isChecked) {
// **********************************
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






// ****************************
// Seleccionar/deseleccionar todas las provincias de una comunidad
function alterarTodasLasProvincias(comunidad, isChecked) {
// ****************************
    const comunidadCheckbox = document.querySelector(`.checkbox-comunidad[data-comunidad="${comunidad}"]`);
    if (comunidadCheckbox) {
        comunidadCheckbox.checked = isChecked;
        alterarComunidad(comunidad, isChecked);
    }
}



// ****************************
// Actualizar el estado del checkbox de la comunidad
function actualizarCheckBoxComunidad(comunidad) {
// ****************************
    //console.log("Entro en Actualizar Estado comunidad");
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


// **********************************
// Actualizar el estado del checkbox "Seleccionar todas"
function actualizarSelectAllCheckbox() {
// **********************************
    const selectAllCheckbox = document.getElementById('select-all-provinces');
    if (provinciasSeleccionadas.length === 0) {
        selectAllCheckbox.checked = false;
    } else if (provinciasSeleccionadas.length === datosDeProvincias.length) {
        selectAllCheckbox.checked = true;
    } else {
        selectAllCheckbox.checked = false;
    }
}




// **********************************
// Configurar el checkbox "Seleccionar todas"
function crearEventoSelecTodas() {
// **********************************
  const selectAllCheckbox = document.getElementById('select-all-provinces');
    
  selectAllCheckbox.addEventListener('change', function() {
    if (this.checked) {
        selectTodasLasProvincias();
    } else {
        reiniciarSeleccion();
    }
  });

}
        
// **********************************
// Seleccionar todas las provincias
function selectTodasLasProvincias() {
// **********************************
    
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

// **********************************
// Actualizar las estadísticas
function actualizarPoblacionSeleccionada() {
// **********************************
    // Calcular población total seleccionada
    const selectedPoblacion = provinciasSeleccionadas.reduce((sum, provincia) => sum + provincia.population, 0);
    
    // Actualizar DOM
    document.getElementById('nProvincias-seleccionadas').textContent = provinciasSeleccionadas.length;
    document.getElementById('ttPoblacion-seleccionada').textContent = selectedPoblacion.toLocaleString();
    document.getElementById('total-display-poblacion').textContent = selectedPoblacion.toLocaleString();
}


// **********************************
// Actualizar la lista de provincias seleccionadas
function actualizarListaDeProvincias() {
// **********************************
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

    // Mostrar tb la lista ordenada por población
    actualizarListaDeProvinciasOrdenadas();
}

// **********************************
// Actualizar la lista de provincias ordenadas por poblacion
function actualizarListaDeProvinciasOrdenadas() {
// **********************************
    const list = document.getElementById('lista-provincias-ordenadas');
    list.innerHTML = '';
    
    // Ordenar por poblacion
    
    let provinciasOrdenadas = [...provinciasSeleccionadas];
    
    provinciasOrdenadas.sort((a,b) => b.population - a.population);
    console.log(provinciasOrdenadas);
    
    
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



 


// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicio);


