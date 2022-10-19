import { preguntaData } from "./data/preguntas.js"
import { setPreguntasCuestionario } from "./data/setTodo.js"
const data = null
const variables = {
    main: document.querySelector('#main'),
    vistas: {
        form: null,
        respuestas: null,
        respuestaUser: null,
        cuestionario: null,

    },
    botones: {

    },
    titulos: {
        principal: null
    },
    data: {
        nombrePrevio: null,
        preguntas: null,
        preguntaActual: 0,
        conteoRespuesta: 0,
        tope: 5
    }

}
export const metodos = {
    inicio: function() {
        console.log('inicio')
        this.renderInicial()

        variables.data.preguntas = setPreguntasCuestionario(preguntaData, variables.data.preguntas)
        variables.vistas.form.addEventListener('submit', this.validarFormulario, false)
    },
    renderInicial: function() {
        // creacion de formulario 
        console.log(variables.main);
        variables.vistas.form = document.createElement('form')
            // agregando titulo al form
        variables.titulos.principal = document.createElement('h1')

        variables.titulos.principal.textContent = 'encuesta de satisfación'
        variables.titulos.principal.setAttribute('class', 'titulo show')
        variables.main.append(variables.titulos.principal)
            // agrgando el form en el main 
        variables.main.append(variables.vistas.form)
        variables.vistas.form.setAttribute('class', 'main__form show')
        variables.vistas.input = document.createElement('input')
            // add input al form
        variables.vistas.form.appendChild(variables.vistas.input)
        variables.vistas.input.setAttribute('name', 'user')
        variables.vistas.input.setAttribute('id', 'input')
        variables.vistas.input.setAttribute('placeholder', 'tu nombre')
        variables.vistas.input.setAttribute('autocomplete', 'off')
            // creando las preguntas vista

        variables.vistas.cuestionario = document.createElement('section')
        variables.main.append(variables.vistas.cuestionario)
        variables.vistas.cuestionario.setAttribute('class', 'main__cuestionario hidden')

        // creando vista respuestas users
        variables.vistas.respuestas = document.createElement('section')
        variables.vistas.respuestas.setAttribute('class', 'main__respuestas hidden')
        variables.main.appendChild(variables.vistas.respuestas)

        // creando vista respuesta user
        variables.vistas.respuestaUser = document.createElement('section')
        variables.vistas.respuestaUser.setAttribute('class', 'main__respuestaUser hidden')
        variables.main.append(variables.vistas.respuestaUser)

        // creando botones
        // init
        variables.botones.iniciar = document.createElement('button')
        variables.botones.iniciar.setAttribute('class', 'iniciar btn')
        variables.botones.iniciar.setAttribute('type', 'submit')

        variables.botones.iniciar.textContent = 'iniciar'

        variables.vistas.form.append(variables.botones.iniciar)
            // mostrar respuestas de otros users
        variables.botones.mostrarRespuestasUsers = document.createElement('button')
        variables.botones.mostrarRespuestasUsers.setAttribute('class', 'mostrarRespuestasUsers btn')
        variables.botones.mostrarRespuestasUsers.setAttribute('type', 'button')


        // mostrar mis respuestas

        variables.botones.showResultUser = document.createElement('button')
        variables.botones.showResultUser.setAttribute('class', 'showResultUser btn')
        variables.botones.showResultUser.setAttribute('type', 'button')








    },
    renderPreguntas: function() {
        console.log(variables.data.preguntaActual, '🔴 pregunta actual')
        console.log(variables.data.preguntas.preguntas.length, '🔴 total preguntas')

        variables.vistas.cuestionario.classList.replace('hidden', 'show')
        if (variables.data.preguntaActual < variables.data.preguntas.preguntas.length) {
            console.log('esta');
            metodos.renderOpciones()
        } else {
            console.log('salir')
        }
    },
    renderOpciones: function() {

        variables.titulos.principal.textContent = variables.data.preguntas.preguntas[variables.data.preguntaActual].title
        variables.vistas.sectionOpciones = document.createElement('section')
        variables.vistas.sectionOpciones.setAttribute('class', 'containerPreguntas')
        console.log(variables.data.preguntas.preguntas[variables.data.preguntaActual])
        variables.data.preguntas.preguntas[variables.data.preguntaActual].condiciones.forEach((opcion, i) => {
            variables.vistas.articlesOpciones = document.createElement('article')
            variables.vistas.articlesOpciones.setAttribute('class', 'opcione')
            variables.vistas.articlesOpciones.id = i
            variables.vistas.articlesOpciones.textContent = opcion.title
                // add event click
            variables.vistas.articlesOpciones.addEventListener('click', this.clickPregunta, false)
                // AGREGANDO AL SECTION DE preguntas
            variables.vistas.sectionOpciones.appendChild(variables.vistas.articlesOpciones)
        })
        variables.vistas.cuestionario.replaceChildren(variables.vistas.sectionOpciones)


    },
    clickPregunta: function(e) {
        // console.log(e.target.textContent);
        // console.log(variables.data.preguntas.preguntas[variables.data.preguntaActual].condiciones[parseInt(e.target.id)].condition)
        // console.log(variables.data.preguntaActual, '🔴 antes de cambiar');
        // console.log(variables.data.preguntaActual, '✅ despues de cambiar');
        if (Number.isInteger(parseInt(variables.data.preguntas.preguntas[variables.data.preguntaActual].condiciones[parseInt(e.target.id)].condition))) {
            variables.data.preguntaActual = variables.data.preguntas.preguntas[variables.data.preguntaActual].condiciones[parseInt(e.target.id)].condition
            metodos.renderPreguntas()
            console.log(variables.data.conteoRespuesta);

            variables.data.conteoRespuesta++
                console.log(variables.data.conteoRespuesta);
        }

    },
    validarFormulario: function(e) {
        e.preventDefault()
            // console.log(Boolean(e.target.user.value.length))
        if (e.target.user.value.length !== 0) {
            console.log('no esta vacio');
            variables.data.nombrePrevio = e.target.user.value
            e.target.user.value = ''
            variables.vistas.form.classList.replace('show', 'hidden')
            variables.titulos.principal.textContent = 'preggunta 1'
            metodos.renderPreguntas()
        } else {
            console.log('esta vacio');

        }
    }
}