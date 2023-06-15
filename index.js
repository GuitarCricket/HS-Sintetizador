var teclasAsociadas = {
    a: 'C4',
    w: 'C#4',
    s: 'D4',
    e: 'D#4',
    d: 'E4',
    f: 'F4',
    t: 'F#4',
    g: 'G4',
    y: 'G#4',
    h: 'A4',
    u: 'A#4',
    j: 'B4',
    k: 'C5',
    o: 'C#5',
    l: 'D5',
    p: 'D#5',
    ñ: 'E5',
    z: 'F5',
    x: 'F#5',
    c: 'G5',
    v: 'G#5',
    b: 'A5',
    n: 'A#5',
    m: 'B5',
    q: 'C6'
};


//! Accede a el conjunto de teclas
var lista = document.getElementById('teclas');

//! Permite separar las teclas blancas de las negras por medio de su clase
var elementosB = lista.getElementsByClassName('blanca');

//! Declara la variable a usar al llamar la funcion tocar
var valorId;

//! Declara la varible que por ahora da valor al constructor
var seleccion = 'Synth' ;

//! Aqui esta a la escucha de los cambios en el valor de seleccion
document.getElementById("efecto").addEventListener("change", function(){
    seleccion = this.value;
    console.log(seleccion)
})

//! Accede al input tipo range por medio de su Id
var slider = document.getElementById('volumen')

//! Cre una instancia nueva del objeto Tone para la ganancia o volumen
var ganancia = new Tone.Gain().toDestination();

//! Actualiza el span que marca el volumen

function rango(value){
    document.getElementById('rangoNumero').innerHTML = value;
}

//! Aqui esta a la escucha de los cambios en el input tipo range contenido en la variable slide para modificar el volumen
slider.addEventListener('input', function(){
    var nivel = parseFloat(this.value)
    ganancia.gain.value = nivel
})


//! Esta funcion es la escargada de generar el sonido crando una nueva instancia del objeto Tone
//* Enlazando con la instancia de ganancia que ya creamos
function tocarSynth(){
    var synth = new Tone.Synth().connect(ganancia);
    synth.triggerAttackRelease(valorId, '4n')
    this.classList.add('clicked');
};

function tocarFMSynth(){
    var synth = new Tone.FMSynth().connect(ganancia);
    synth.triggerAttackRelease(valorId, '4n')
};

function tocarMembraneSynth(){
    var synth = new Tone.MembraneSynth().connect(ganancia);
    synth.triggerAttackRelease(valorId, '1n')
};

function tocarDuoSynth(){
    var synth = new Tone.DuoSynth().connect(ganancia);
    synth.triggerAttackRelease(valorId, '4n')
};





//! Este ciclo es para recorrer la lista de teclas blancas y hacer 2 cosas: asignar la clase de css al tocar la tecla y obtener el valor nuevo de ValorId desde el dataser
for (var i = 0; i < elementosB.length; i++){
    elementosB[i].addEventListener('mousedown', function(){
        this.classList.add('clicked');
        valorId = this.dataset.id
        if (seleccion == 'Synth'){
            tocarSynth(valorId)
        }else if (seleccion == 'FMSynth'){
            tocarFMSynth(valorId)
        }else if (seleccion == 'MembraneSynth'){
            tocarMembraneSynth(valorId)
        }else{
            tocarDuoSynth(valorId)
        }
        
    });
//!esta parte remueve la clase que pusimos antes
    elementosB[i].addEventListener('mouseup', function(){
        this.classList.remove('clicked');
    });
}

//! Accede a el conjunto de teclas
var lista2 = document.getElementById('teclas')
//! Permite separar las teclas negras de las blancas por medio de su clase
var elementosN = lista2.getElementsByClassName('negra');

//! Este ciclo es para recorrer la lista de teclas negras y hacer 2 cosas: asignar la clase de css al tocar la tecla y obtener el valor nuevo de ValorId desde el dataser
for (var i = 0; i < elementosN.length; i++){
    elementosN[i].addEventListener('mousedown', function(){
        this.classList.add('clicked2');
        valorId = this.dataset.id
        if (seleccion == 'Synth'){
            tocarSynth(valorId)
        }else if (seleccion == 'FMSynth'){
            tocarFMSynth(valorId)
        }else if (seleccion == 'MembraneSynth'){
            tocarMembraneSynth(valorId)
        }else if (seleccion == 'Instrument'){
            tocarInstrument(valorId)
        }else{
            tocarDuoSynth(valorId)
        }
    });
//!esta parte remueve la clase que pusimos antes
    elementosN[i].addEventListener('mouseup', function(){
        this.classList.remove('clicked2');
    });
}



//todo_________________________________________________________________-

document.addEventListener('keydown', function(event){
    var tecla = event.key.toLowerCase();
    valorId = teclasAsociadas[tecla]   
    if (seleccion == 'Synth'){
        tocarSynth(valorId) 
    }else if (seleccion == 'FMSynth'){
        tocarFMSynth(valorId)
    }else if (seleccion == 'MembraneSynth'){
        tocarMembraneSynth(valorId)
    }else{
        tocarDuoSynth(valorId)
    }
    console.log(valorId)
})



