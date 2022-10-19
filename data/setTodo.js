export function setPreguntasCuestionario(data, dataPreview) {
    dataPreview = new SetCuestionario()
    data.forEach(dat => {
        const pregunta = new SetPregunta(dat.title, dat.isCondition, dat.condiciones)
        dataPreview.addPreguntas(pregunta)

    });
    return dataPreview
}

function SetPregunta(title, isCondition, condiciones) {
    this.title = title
    this.isCondition = isCondition
    this.condiciones = condiciones
}

function SetCuestionario() {
    this.preguntas = []
    this.addPreguntas = function(pregunta) {
        this.preguntas.push(pregunta)
    }
}