<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Preparación del área de muestreo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La preparación es un paso crucial en el proceso de recolección de muestras de agua. Dependiendo de los objetivos del muestreo y la información proporcionada por el cliente, se define el área específica que se va a estudiar. A continuación, se describen los pasos involucrados en la preparación del área de muestreo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Figura decorativa')
      .col-lg-5
        .cajon.color-primario.p-4.mb-4(style="background-color:#E7FFD1")
          ol.lista-ol
            li 
              span.text-bold a) 
              | Ubicación de los puntos de muestreo.
            li 
              span.text-bold b) 
              | Acceso y logística.
            li 
              span.text-bold c) 
              | Seguridad.
            li 
              span.text-bold d) 
              | Identificación de peligros.
            li 
              span.text-bold e) 
              | Comunicación.
            li 
              span.text-bold f) 
              | Planificación del tiempo.
            li 
              span.text-bold g) 
              | Documentación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La preparación del área del muestreo hace referencia a todas aquellas actividades realizadas previamente y que son determinantes en el momento de llevar a cabo satisfactoriamente el estudio. Es importante tener en cuenta algunos criterios, los cuales se presentan a continuación:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-12.desktop 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Criterios para la preparacion del área de muestreo')              

          .tarjeta.p-3(x="38%" y="21.5%" numero="1")(style="background-color:#FFFFFF")
            p Esto se logra mediante el uso de coordenadas UTM u otros sistemas de referencia geoespacial, marcadores físicos si es necesario y registros detallados. La documentación y organización de esta información son esenciales para garantizar la precisión y la reproducibilidad de los resultados del muestreo a lo largo del tiempo y en diferentes investigaciones.
          .tarjeta.p-3(x="64%" y="21%" numero="2")(style="background-color:#FFFFFF")
            p Esto implica la realización de actividades como la demarcación de caminos, la poda de vegetación y la ubicación de marcas que faciliten el acceso al punto de muestreo. Estas medidas contribuyen a garantizar que el equipo de muestreo pueda llegar de manera segura y eficiente a los lugares designados para recolectar las muestras de agua.
          .tarjeta.p-3(x="29%" y="64%" numero="3")(style="background-color:#FFFFFF")
            p Esto implica tomar medidas de como proteger el equipo contra daños o pérdidas, y garantizar la integridad física del personal mediante el uso de chalecos salvavidas, cuerdas, arneses y sistemas de comunicación en caso de riesgos públicos o emergencias. La seguridad es esencial para llevar a cabo un muestreo efectivo y seguro.
          .tarjeta.p-3(x="68.5%" y="61.5%" numero="4")(style="background-color:#FFFFFF")
            p Se debe realizar un análisis del área de muestreo y seleccionar un sitio que refleje las características predominantes del lugar. Es importante evitar zonas con agua estancada o turbulenta y proporcionar referencias específicas, como la cercanía a puentes, postes, rocas grandes, árboles o puntos de referencia de kilometraje vial. Esto garantiza que la muestra sea representativa de la ubicación y el entorno que se está evaluando.
      .col-md-12.movil
        figure
          img(src='@/assets/curso/temas/tema2/img2_1.svg', alt='Criterios para la preparacion del área de muestreo')

    Separador
    .row
      .col-xl-12       
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1 Técnicas de adecuación del área
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La preparación del lugar de muestreo es esencial para garantizar la calidad de las muestras y la seguridad del personal. Implica considerar las características naturales del sitio, eliminar peligros potenciales, mantener el entorno limpio y ordenado, asegurar un acceso adecuado, establecer protocolos de limpieza, evaluar riesgos y seguir protocolos de seguridad. Esta preparación contribuye a obtener muestras de alta calidad y a proteger la salud del equipo de muestreo.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p A continuación, se estimarán los aspectos a tener en cuenta para la adecuación:
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario.p-4(titulo="Evaluar condiciones")(style="background-color:#E7FFD1")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p Es esencial evaluar las condiciones de la zona de muestreo, considerando si es un área húmeda, resbaladiza, con pendientes o terreno irregular, y si existe riesgo de caídas. En caso de condiciones adversas, se deben tomar medidas de seguridad, como utilizar calzado adecuado, como botas de caucho, o colocar tablones o maderos para reducir la humedad y mejorar la seguridad en el área de muestreo.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Imagen decorativa')
      .tarjeta.color-primario.p-4(titulo="Entorno seguro")(style="background-color:#E7FFD1")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p Es importante verificar si el área de muestreo está rodeada de árboles o vegetación densa que pueda albergar fauna indeseada, como serpientes o arbustos espinosos, que puedan representar un riesgo para la seguridad del técnico encargado del muestreo. En tales casos, es necesario llevar a cabo una labor de "poda" para limpiar la zona y garantizar un entorno seguro y libre de obstáculos que puedan afectar la integridad del personal encargado del muestreo.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imagen decorativa')
      .tarjeta.color-primario.p-4(titulo="Personas no autorizadas")(style="background-color:#E7FFD1")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p Es fundamental evitar que personas ajenas al equipo de muestreo se acerquen al área de trabajo, tanto por razones de seguridad como para prevenir la posible contaminación de las muestras. La presencia de personas no autorizadas puede representar riesgos adicionales y comprometer la integridad del proceso de muestreo. Por lo tanto, es importante establecer medidas para restringir el acceso y garantizar que solo el personal debidamente capacitado y equipado participe en las actividades de muestreo, contribuyendo así a mantener la calidad y la confiabilidad de las muestras recolectadas.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imagen decorativa')
      .tarjeta.color-primario.p-4(titulo="Vía de evacuación")(style="background-color:#E7FFD1")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p Es fundamental garantizar una vía de evacuación eficiente en el área de muestreo para asegurar la seguridad del personal en caso de emergencia. Esto implica identificar y establecer rutas claras y seguras que permitan a los trabajadores abandonar rápidamente el área en situaciones inesperadas. La planificación y la comunicación de estos procedimientos de evacuación son esenciales para que todos los miembros del equipo estén informados y sepan cómo actuar en caso de emergencia.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')
      .tarjeta.color-primario.p-4(titulo="Iluminación y ventilación")(style="background-color:#E7FFD1")
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            p Seleccionar lugares con buena iluminación durante los monitoreos diurnos y sitios bien ventilados para la preservación de muestras, es crucial para garantizar la seguridad y el bienestar del personal involucrado en el muestreo de calidad de agua.
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imagen decorativa')
       

    Separador
    .row
      .col-xl-12       
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2 Técnicas de aseo e higienización
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La preparación del lugar de muestreo no solo implica la organización del sitio de trabajo, sino también la realización de procesos de limpieza, desinfección e higienización para evitar la contaminación y el crecimiento de gérmenes que puedan afectar la calidad de la muestra. Estos procesos incluyen la limpieza para eliminar residuos visibles, la desinfección para eliminar microorganismos no visibles y la higienización que combina ambas acciones.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Entre los productos que se utilizan para realizar la higienización se encuentran:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(style="background-color:#E7FFD1")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imagen decorativa')
        h2.text-center Detergentes
        p Son compuestos que reaccionan a la suciedad y facilitan su eliminación. Funcionan ante grasas, sales minerales, también tienen la capacidad de ablandar residuos sólidos, de disolver y dispersar la suciedad.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Imagen decorativa')
        h2.text-center Desinfectantes
        p La desinfección puede lograrse mediante métodos físicos, como el uso de vapor de agua o aire caliente, o mediante métodos químicos que involucran el uso de compuestos clorados, sales de amonio, formaldehído, alcoholes y otros productos químicos diseñados para eliminar o reducir la carga microbiana en las superficies.
     

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            h3 ¡Recuerde!
            P Los detergentes y desinfectantes deben ser tratados con precaución debido a que algunos de ellos pueden afectar la salud del operario que realiza la higienización, deben ser debidamente rotulados y guardados en áreas especialmente destinadas y en un lugar seguro. Algunos reaccionan ante la luz y a altas temperaturas o son corrosivos ante algunos metales. Es importante tener a la mano la ficha técnica de los productos químicos.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
