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
        nombrePrevio: null
    }

}
export const metodos = {
    inicio: function() {
        console.log('inicio')
        this.renderInicial()
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
    validarFormulario: function(e) {
        e.preventDefault()
            // console.log(Boolean(e.target.user.value.length))
        if (e.target.user.value.length !== 0) {
            console.log('no esta vacio');
            variables.data.nombrePrevio = e.target.user.value
            e.target.user.value = ''

        } else {
            console.log('esta vacio');

        }
    }
}