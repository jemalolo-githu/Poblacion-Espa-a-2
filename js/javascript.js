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
            svgElement.style.transform = 'scale(1.5)';
            svgElement.style.transformOrigin = 'top left'; // Escala desde la esquina superior izquierda
            
            // Aseguramos que el contenedor no recorte el SVG escalado
            container.style.display = 'inline-block';
            container.style.overflow = 'visible';
            
          
        }
        

    

        const paths = container.querySelectorAll("path");
        // const display = document.getElementById("selected-name");

        // Crear los eventos de cada provincia (del mapa)
       
        paths.forEach(path => {
            
            // los titles se muestran solos si está en formato <path d="..." id=".."><title></title><path>
            
            // Eventos click para marcar y desmarcar
           
            const id = path.id;
            
            path.addEventListener("click", () => {
                toggleProvince(path.id);
            });
      });
    });
}
   


// *******************************
// Inicializar la aplicación
// *******************************
function inicio() {
    cargarMapaSVG();
    crearPanelDeComunidades();
    setupFilter();
    setupSelectAll();
    actualizarPoblacionSeleccionada();
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
// Filtro
// Configurar el filtro de población
function setupFilter() {
    const applyFilterBtn = document.getElementById('apply-filter');
    const resetFilterBtn = document.getElementById('reset-filter');
    
    applyFilterBtn.addEventListener('click', applyPoblacionFilter);
    resetFilterBtn.addEventListener('click', resetSelection);
}


// ****************************************
// Aplicar filtro por población
function applyPoblacionFilter() {
    const minPoblacion = parseInt(document.getElementById('min-population').value) || 0;
    const maxPoblacion = parseInt(document.getElementById('max-population').value) || Infinity;
    
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
    console.log("Entro en Actualizo Estado comunidad");
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
        if (isSelected) {
            area.classList.add('selected');
        } else {
            area.classList.remove('selected');
        }
        /*
        if (path.classList.contains("selected")) {
            path.classList.remove("selected");
            provinciasSeleccionadas = provinciasSeleccionadas.filter(p => p !== id);
        } else {
            path.classList.add("selected");
            provinciasSeleccionadas.push(id);
        }
        */





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



// ****************************************
// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicio);
// ****************************************