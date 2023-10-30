export default {
  global: {
    componenteFormativo: 'Muestreo de la calidad de agua',
    descripcionCurso:
      'El presente componente formativo contiene los temas necesarios para que el aprendiz pueda reconocer el proceso para llevar a cabo el muestreo de calidad de agua, los materiales que debe utilizar, los equipos, los procedimientos, el área de muestreo para finalmente elaborar el informe de resultados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Alistamiento de materiales y equipos de muestreo de calidad de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Calibración de equipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Materiales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos de protección personal',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preparación del área de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de adecuación del área',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de aseo e higienización',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Toma de muestras de agua y embalaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de muestreo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Formatos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de embalaje',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Informe de operaciones de muestreo de calidad de agua',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_005_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Toma de muestras de agua y embalaje',
      referencia:
        'Huella verde (2018, 2 de noviembre). Monitoreo de la calidad del agua. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z_yhTzWeWT4',
    },
    {
      tema: 'Calibración de equipos ',
      referencia:
        'Hanna Instruments México (2018, 22 de agosto). Calibración del medidor HI98194. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Wp-ci9Arynk',
    },
    {
      tema: '1.2 Materiales ',
      referencia:
        'Hanna Instruments Colombia (2019, 24 de enero). Vídeo Tutorial HI 98193 Medidor portátil Impermeable de Oxígeno Disuelto y DBO. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KDRwO0q6kPI',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de custodia:',
      significado:
        'proceso de control y seguimiento para garantizar y proteger la calidad de la muestra de su contaminación o destrucción desde que se toma la muestra hasta el reporte de los resultados en el laboratorio. ',
    },
    {
      termino: 'Calibración: ',
      significado:
        'proceso que compara y documenta la medición de un equipo respecto a una referencia estándar. ',
    },
    {
      termino: 'Certificado de calibración:',
      significado:
        'documento que contiene los resultados de la calibración de un instrumento. ',
    },
    {
      termino: 'Embalaje',
      significado:
        'proceso de almacenar, agrupar, envolver y transportar de manera temporal la muestra recolectada en campo en óptimas condiciones. ',
    },
    {
      termino: 'Estación de muestreo:',
      significado:
        'lugar que por sus características fue definido previamente para recolectar la muestra de agua. ',
    },
    {
      termino: 'Monitoreo:',
      significado:
        'proceso diseñado para muestrear y analizar parámetros fisicoquímicos y biológicos, para luego realizar un seguimiento periódico del proceso particular, para guiar las decisiones de gestión. ',
    },
    {
      termino: 'Muestreo:',
      significado:
        'proceso de selección de una parte de algo que se considera representativo de un todo, para conocer y determinar las características del grupo al que pertenece. ',
    },
    {
      termino: 'Parámetro:',
      significado:
        'variables in situ, variables fisicoquímicas e hidrobiológicas que hacen parte de la muestra de agua y que se analizan según los objetivos del estudio. ',
    },
    {
      termino: 'Sonda multiparámetro:',
      significado:
        'dispositivo electrónico que se utiliza para realizar las mediciones de los parámetros en campo, arrojando el resultado inmediato como el oxígeno disuelto, temperatura, el potencial de Hidrógeno (pH), la conductividad. ',
    },
  ],
  referencias: [
    {
      referencia:
        'IDEAM. (2018). Instituto de Hidrología, Meteorología y Estudios Ambientales. Protocolo de Monitoreo y seguimiento del Agua: ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/021172/Protocoloparaelmonitoreoyseguimientodelagua.pdf',
    },
    {
      referencia:
        'INS. (2011). Instituto Nacional de Salud. Obtenido de Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio: ',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia:
        'ISO. (2017). Organización Internacional para la Estandarización. Requisitos generales para la competencia de los laboratorios de ensayo y calibración (ISO/IEC 17025:2017): ',
      link:
        'http://colbiosa.com.ar/wp-content/uploads/2019/10/UNE-EN-ISO-IEC-17025-2017-2.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Daniela Reinoso Diaz',
          cargo: 'Experta temática',
          centro: 'Regional Tolima. Centro Agropecuario La Granja',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander. Centro de la Industria, la Empresa y los Servicios – CIES',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'egional Distrito Capital. Centro de Diseño y Metrología',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yobanni Penagos',
          cargo: 'Diseñador web',
          centro: 'Regional Tolima  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
