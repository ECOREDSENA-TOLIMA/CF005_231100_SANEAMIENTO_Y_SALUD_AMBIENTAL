<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Informe de operaciones de muestreo de calidad de agua

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El informe de operaciones de muestreo de calidad de agua es un documento esencial para registrar y documentar todas las actividades llevadas a cabo durante el proceso de muestreo. Proporciona una visión completa de las operaciones, los resultados obtenidos y los aspectos clave relacionados con el muestreo. Los elementos que debe contener este informe incluyen:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-12.desktop 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg', alt='Elementos del informe de operaciones')              

          .tarjeta.p-3(x="34%" y="31.2%" numero="1")(style="background-color:#FFFFFF")
            p Debe identificar de forma rápida y eficiente lo que se está realizando o de lo que se quiere hablar.
          .tarjeta.p-3(x="34%" y="56%" numero="2")(style="background-color:#FFFFFF")
            p Se proporciona una breve descripción de los propósitos y objetivos del muestreo, así como una ubicación general del área de muestreo. Esta introducción permite al lector comprender el contexto y la importancia de las operaciones de muestreo que se detallarán en el informe.
          .tarjeta.p-3(x="33.5%" y="81%" numero="3")(style="background-color:#FFFFFF")
            p Deben responder al "porqué" se realizó el muestreo y deben estar alineados con los requisitos y las necesidades específicas del proyecto o estudio. Proporcionar una descripción precisa de los objetivos contribuye a contextualizar las operaciones de muestreo y a brindar un enfoque claro a las actividades realizadas.
          .tarjeta.p-3(x="68%" y="30.5%" numero="4")(style="background-color:#FFFFFF")
            p Explicación detallada de los procedimientos y métodos empleados en la toma de muestras.
          .tarjeta.p-3(x="68%" y="56%" numero="5")(style="background-color:#FFFFFF")
            p Deben incluir estadísticas, tablas y gráficos que reflejen el desempeño observado en relación con los parámetros de calidad de agua que se analizaron. Esta sección proporciona una visión objetiva de los hallazgos y permite a los lectores comprender las tendencias, variaciones y cualquier otra información relevante derivada de las muestras recopiladas.
          .tarjeta.p-3(x="68%" y="81%" numero="6")(style="background-color:#FFFFFF")
            p Se resumen los resultados obtenidos durante el proceso de muestreo y se ofrecen sugerencias para mejorar futuros muestreos y abordar posibles problemas en la calidad del agua. Las conclusiones resaltan las observaciones clave y la evaluación de la calidad del agua, mientras que las recomendaciones proporcionan orientación sobre cómo mejorar los procedimientos y abordar cualquier preocupación identificada.

      .col-md-12.movil        
        figure
          img(src='@/assets/curso/temas/tema4/img3.svg', alt='Elementos del informe de operaciones')

</template>

<script>
export default {
  name: 'Tema4',
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
