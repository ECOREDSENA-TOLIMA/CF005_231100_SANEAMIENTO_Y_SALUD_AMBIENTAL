<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, se describe el tema principal del componente formativo Muestreo de la calidad del agua que es una herramienta esencial para evaluar y monitorear su estado. Este proceso consiste en la recolección de muestras representativas en diferentes puntos de una fuente de agua, como ríos, lagos o pozos. Estas muestras se analizan posteriormente en laboratorios para determinar la presencia de contaminantes y evaluar su concentración. El muestreo adecuado requiere de protocolos rigurosos para garantizar la representatividad y minimizar la posibilidad de errores. Además, es necesario considerar factores como el tiempo, la frecuencia y la ubicación de muestreo, para obtener resultados confiables y tomar medidas adecuadas para preservar la calidad del agua y proteger la salud humana y ambiental.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se describen los temas principales del muestreo de la calidad de agua, entre ellos el aislamiento, la calibración de equipos, la preparación del área de muestreo y los parámetros para la toma de muestras.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
