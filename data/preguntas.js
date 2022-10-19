export let preguntaData = [
    /* question 0*/
    {
        title: "¿Cómo evaluarías tu nivel de satisfacción con la empresa?",
        condiciones: [{
                title: "Muy satisfecho",
                condition: 3 //lleva al index de la pregunta
            },

            {
                title: "Satisfecho",
                condition: 3 //lleva al index de la pregunta

            },
            {
                title: "Ni satisfecho ni insatisfecho",
                condition: 4 //lleva al index de la pregunta

            },
            {
                title: "Insatisfecho",
                condition: 1 //lleva al index de la pregunta

            },
            {
                title: "Muy insatisfecho",
                condition: 4 //lleva al index de la pregunta

            },

        ],
        isCondition: false
    },

    /* question 1*/
    {
        title: "¿Qué motivo o motivos le han llevado a cancelar el servicio?",
        condiciones: [{
                title: "La atención al cliente no ha cubierto mis expectativas",
                condition: 4 //lleva al index de la pregunta
            },
            {
                title: "La facilidad de uso del servicio no ha cubierto mis expectativas",
                condition: 5 //lleva al index de la pregunta

            },
            {
                title: "He encontrado otra alternativa que cubre mejor mis necesidades",
                condition: 4 //lleva al index de la pregunta
            },
            {
                title: " La calidad del servicio no ha cubierto mis expectativas",
                condition: 8 //lleva al index de la pregunta

            },
            {
                title: "Ya no necesito el servicio",
                condition: 20 //lleva al index de la pregunta

            }, {
                title: "El precio es muy elevado para mi presupuesto",
                condition: 0 //lleva al index de la pregunta

            },

        ],
        isCondition: true
    },
    /* question 2*/
    {
        title: "¿Cuánto tiempo llevas utilizando los productos/servicios de la empresa?",
        condiciones: [{
                title: "Menos de un mes",
                condition: 6 //lleva al index de la pregunta
            },
            {
                title: "Entre 1 y 3 meses",
                condition: 8 //lleva al index de la pregunta

            },
            {
                title: "Entre 3 y 6 meses",
                condition: 6 //lleva al index de la pregunta
            },
            {
                title: "Entre 6 meses y un año",
                condition: 7 //lleva al index de la pregunta

            },
            {
                title: "Más de un año",
                condition: 7 //lleva al index de la pregunta

            },

        ],
        isCondition: false
    },
    /* question 3*/
    {
        title: "¿Cuáles son los tipos de fallas que tienen nuestros productos que te han provocado una mala experiencia?",
        condiciones: [{
                title: "Defectos de fábrica",
                condition: 3 //lleva al index de la pregunta
            },
            {
                title: "Cajas vienen abiertas",
                condition: 4 //lleva al index de la pregunta

            },
            {
                title: "Productos usados",
                condition: 5 //lleva al index de la pregunta
            },
            {
                title: "Se dañan rápido",
                condition: 19 //lleva al index de la pregunta

            },


        ],
        isCondition: false
    },
    /* question 4*/
    {
        title: "¿Por que recomendarías nuestros productos a tus amigos?",
        condiciones: [{
                title: "Me encantan",
                condition: 4 //lleva al index de la pregunta
            },

            {
                title: "Son economicos",
                condition: 7 //lleva al index de la pregunta

            },
            {
                title: "Buena calidad",
                condition: 15 //lleva al index de la pregunta

            },
            {
                title: "Relacion precio calidad",
                condition: 5 //lleva al index de la pregunta

            },
        ],
        isCondition: false
    },
    /* question 5*/
    {
        title: "En cuanto a la relación entre el precio y la calidad del producto/servicio. ¿Qué opinión tienes?",
        condiciones: [{
                title: "En general, el precio es demasiado alto para la calidad del producto/servicio",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "En general, el precio es demasiado bajo para la calidad del producto/servicio",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "En general, el precio es adecuado para la calidad del producto/servicio",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "No tengo una opinión clara sobre la relación entre el precio y la calidad del producto/servicio",
                condition: null //lleva al index de la pregunta

            },
        ],
        isCondition: true
    },
    /* question 6*/
    {
        title: "¿Como calificarías tu ultima experiencia con nosotros?",
        condiciones: [{
                title: "Muy buena",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Buena",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Regular",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Mala",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Muy mala",
                condition: null //lleva al index de la pregunta

            },

        ],
        isCondition: false
    },
    /* question 7*/
    {
        title: "¿Cuánto tiempo llevas siendo cliente de nuestra marca?",
        condiciones: [{
                title: "Menos de un mes",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Entre 1 y 3 meses",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Entre 3 y 6 meses",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Entre 6 meses y un año",
                condition: null //lleva al index de la pregunta
            },
        ],
        isCondition: false
    },
    /* question 8*/
    {
        title: "¿Qué imagen tienes de nuestra marca?",
        condiciones: [{
                title: "Muy buena",
                condition: null //lleva al index de la pregunta
            },

            {
                title: "Buena",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Regular",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Mala",
                condition: null //lleva al index de la pregunta

            },
        ],
        isCondition: false
    },

    /* question 9*/
    {
        title: "¿Nuestra Tienda es de fácil acceso?",
        condiciones: [{
                title: "Si",
                condition: null //lleva al index de la pregunta
            },

            {
                title: "No",
                condition: 10 //lleva al index de la pregunta

            },
        ],
        isCondition: false
    },

    /* question 10*/
    {
        title: "Si respondiste no al facil acceso a nuestra tienda. ¿Por que?",
        condiciones: [{
                title: "No hay tienda cerca",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "No hay tienda en mi ciudad",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "No hay tienda en mi país",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "No hay tienda en mi continente",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "No hay tienda en mi planeta",
                condition: null //lleva al index de la pregunta

            },
        ],
        isCondition: true
    },





    /* question 11*/
    {
        title: "¿Cómo conociste nuestra tienda?",
        condiciones: [{
                title: "Por internet",
                condition: null //lleva al index de la pregunta
            },

            {
                title: "Por recomendación de un amigo",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Por recomendación de un familiar",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Por recomendación de un conocido",
                condition: 1 //lleva al index de la pregunta

            },
            {
                title: "Por recomendación de un vecino",
                condition: 1 //lleva al index de la pregunta

            },

        ],
        isCondition: false
    },

    /* question 12*/
    {
        title: "¿Qué tan agradable fue tu navegación por nuestra tienda web?",
        condiciones: [{
                title: "Muy agradable",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Agradable",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Regular",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Mala",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Muy mala",
                condition: null //lleva al index de la pregunta

            }, {
                title: "No navegue por la tienda web",
                condition: null //lleva al index de la pregunta

            },

        ],
        isCondition: true
    },
    /* question 13*/
    {
        title: "¿Consideras que el lenguaje de nuestra marca es el adecuado?",
        condiciones: [{
                title: "Si",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "No",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "No se",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "No navegue por la tienda web",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "¿Habia una tienda web?",
                condition: null //lleva al index de la pregunta

            },

        ],
        isCondition: false
    },
    /* question 14*/
    {
        title: "¿¿Qué alternativas ofrecemos que te llevó a experimentar con nuestro producto?",
        condiciones: [{
                title: "Accesorios",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Promociones",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Descuentos",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Ninguna",
                condition: null //lleva al index de la pregunta

            },


        ],
        isCondition: false
    },
    /* question 15*/
    {
        title: "¿Como evalua la atencio de su ejecutivo?",
        condiciones: [{
                title: "Muy buena",
                condition: null //lleva al index de la pregunta
            },

            {
                title: "Buena",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Regular",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Mala",
                condition: 16 //lleva al index de la pregunta

            },
        ],
        isCondition: false
    },
    /* question 16*/
    {
        title: "¿En que aspectos deberia mejorar la atencio de su ejecutivo?",
        condiciones: [{
                title: "No se",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Ser atento",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Ser mas amable",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Ser mas cordial",
                condition: null //lleva al index de la pregunta

            },
        ],
        isCondition: true
    },
    /* question 17*/
    {
        title: "¿Cada cuanto tiempo contrata un seguro?",
        condiciones: [{
                title: "Cada 6 meses",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Cada 1 año",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Cada 2 años",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Cada 3 años",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Cada 4 años",
                condition: null //lleva al index de la pregunta

            },

        ],
        isCondition: false
    },
    /* question 18*/
    {
        title: "¿Cuáles son los tipos de fallas que tienen nuestros productos que te han provocado?",
        condiciones: [{
                title: "Corte de luz",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Corte de agua",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Corte de gas",
                condition: null //lleva al index de la pregunta
            },
            {
                title: "Corte de internet",
                condition: null //lleva al index de la pregunta
            },
        ],
        isCondition: false
    },
    /* question 19*/
    {
        title: "¿Que caracteristicas buscas en una buena marca?",
        condiciones: [{
                title: "Que sea innovadora",
                condition: null //lleva al index de la pregunta
            },

            {
                title: "Que sea confiable",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Que sea de calidad",
                condition: null //lleva al index de la pregunta

            },
            {
                title: "Que sea de precio accesible",
                condition: null //lleva al index de la pregunta

            },
        ],
        isCondition: false
    },
]