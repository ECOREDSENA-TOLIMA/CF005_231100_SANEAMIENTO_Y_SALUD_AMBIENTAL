<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Toma de muestras de agua y embalaje
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La toma de muestras de agua es un proceso que involucra la recolección de datos en el lugar (#[i in situ]) y la obtención de muestras hidrobiológicas. Los parámetros #[i in situ] deben ser registrados en el campo, ya que pueden experimentar cambios una vez que las muestras lleguen al laboratorio. Estos parámetros, que son recomendados por el IDEAM (Instituto de Hidrología, Meteorología y Estudios Ambientales), se miden utilizando una sonda multiparámetros u otro equipo de medición adecuado.

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 Tomas de muestras #[i in situ]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La toma de muestras de agua #[i "in situ"] se refiere a la recolección de datos y muestras directamente en el lugar donde se encuentra el cuerpo de agua que se va a analizar. Este proceso implica medir diversos parámetros y características del agua en su entorno natural, sin la necesidad de llevar las muestras al laboratorio. Algunos de los parámetros #[i in situ] más comunes que se miden durante la toma de muestras de agua incluyen:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta-gris")
      .row(titulo="Temperatura")
        .col-md-6.mb-4.mb-md-0
          p Variaciones drásticas en este parámetro pueden causar daños en la flora y fauna acuáticas, acelerar las reacciones químicas, reducir los niveles de oxígeno y acelerar la eutrofización.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      .row(titulo="Conductividad")
        .col-md-6.mb-4.mb-md-0
          p Es una medida de la capacidad que tiene la solución para transmitir corriente eléctrica, esta capacidad depende de la presencia, movilidad, valencia y concentración de iones, así como de la temperatura del agua. Las sales minerales son buenas conductoras y las materias orgánicas y coloidales tienen poca conductividad.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img2.png', alt='Imagen decorativa')
      .row(titulo="Oxígeno disuelto")
        .col-md-6.mb-4.mb-md-0
          p Las concentraciones de oxígeno disuelto están influenciadas por factores como la temperatura, la presión y la salinidad del agua. Bajas concentraciones de oxígeno disuelto pueden indicar contaminación por materia orgánica u otros factores que afectan negativamente la calidad del agua y la vida acuática.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img3.png', alt='Imagen decorativa')
      .row(titulo="Potencial de hidrógeno")
        .col-md-6.mb-4.mb-md-0
          p Es una medida que indica la concentración de iones de hidrógeno en el agua y se expresa en una escala que va desde 0 (muy ácido) hasta 14 (muy alcalino), con 7 siendo neutro. En el contexto del muestreo de agua, se busca mantener el pH dentro de un rango específico, generalmente entre 6 y 9, ya que valores fuera de este rango pueden tener efectos negativos en los organismos acuáticos y en la salud del ecosistema.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/img4.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Una vez tomados los datos in situ, se procede a la toma de las muestras que serán enviadas al laboratorio, sumergiendo un balde limpio para obtener la muestra de agua, o tomar cada envase, enjuagar los recipientes con el agua del sitio de muestreo y llenarlos directamente del cuerpo de agua, tapar los recipientes asegurando que no haya fugas. Es importante tener en cuenta que la etiqueta de cada envase debe tener consignados los datos correspondientes, almacenar los frascos en las neveras portátiles, verificando que se realizó la preservación de la muestra (aplicación de reactivo según el parámetro) o adición de hielo, sellar las neveras (embalaje) y enviar las muestras al laboratorio junto con el formato de la cadena de custodia.
        p En el laboratorio se analizarán los parámetros fisicoquímicos según su naturaleza de la siguiente manera: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img5.png', alt='Imagen decorativa')
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-12.p-2(data-aos="fade-down-left")
            .tarjeta-avatar-b.p-2.mb-2
              
              .tarjeta.tarjeta-verde.color-primario(style="background-color:#E7FFD1;margin-left:0px;")
                p.mb-3
                ul.lista-ul
                  li
                    i.fas.fa-check(style="color:#63C500")
                    |	#[b Parámetros inorgánicos]: turbiedad, color, sólidos totales, sólidos totales disueltos, sólidos totales en suspensión y sólidos sedimentables, iones como nitratos, nitritos, sulfato, fosfatos, cianuro, cloruros, dureza total y cálcica, alcalinidad total, acidez y metales (Al, B, Ca, Mg, Ag, Ni, K, Si, Ba, Cd, Cr, Pb, Zn, Mn, Fe, Cu Hg y As).
          .col-lg-12(data-aos="fade-down-left")

            .tarjeta-avatar-b.mb-2        
              .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;")
                p.mb-3
                ul.lista-ul
                  li
                    i.fas.fa-check(style="color:#63C500;")
                    | #[b Parámetros orgánicos]: aceites y grasas, hidrocarburos totales de petróleo, Demanda Biológica de Oxígeno (DBO5) y Demanda Química de Oxígeno (DQO).
          .col-lg-12(data-aos="fade-down-left")
            .tarjeta-avatar-b.mb-2        
              .tarjeta.tarjeta--azul.color-secundario(style="background-color:#E7FFD1;margin-left:0px;")
                p.mb-3
                ul.lista-ul
                  li
                    i.fas.fa-check(style="color:#63C500")
                    | #[b Parámetros biológicos]: coliformes totales, coliformes fecales o termotolerantes. huevos y larvas de Helmintos, bacterias heterotróficas, #[i Escherichia coli, Salmonella, Pseudomona Aeuroginosa].

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 Toma de muestras hidrobiológicas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La diversidad de organismos acuáticos en los cuerpos de agua proporciona una valiosa fuente de información sobre la calidad del agua. Algunos de estos organismos pueden considerarse indicadores biológicos, ya que su presencia o ausencia refleja ciertos aspectos de la salud del ecosistema acuático. En Colombia, el protocolo de monitoreo del agua (IDEAM, 2018) identifica diversas comunidades hidrobiológicas que son objeto de estudio en cuerpos de agua lóticos (como ríos y quebradas) y lénticos (como lagos y embalses).
        p Es importante destacar que la recolección de este material biológico requiere de permisos específicos, de acuerdo con los Decretos 3016 de 2016, 1076 de 2015 y 309 de 2000. Estos permisos autorizan la colecta y el transporte de especímenes y aseguran que el proceso se realice de manera legal y controlada. Además, una vez que los organismos son recolectados, deben ser debidamente ingresados en colecciones biológicas registradas ante el Instituto de Investigación de Recursos Biológicos Alexander Von Humboldt, lo que contribuye a mantener la trazabilidad y la integridad de los datos relacionados con la biodiversidad acuática en el país.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 1.
          span  #[i  Comunidades hidrobiológicas objeto de estudio en los muestreos de calidad de agua]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .tabla-b.color-acento-botones.mb-5        
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th Comunidad biológica
                th Lótico
                th Léntico
            tbody
              tr
                td Fitoplancton
                td.text-center 
                td.text-center X
              tr
                td Zooplancton
                td.text-center
                td.text-center X
              tr
                td Perifiton
                td.text-center X
                td.text-center X
              tr
                td Macroinvertebrados acuáticos
                td.text-center X
                td.text-center X
              tr
                td Macrófitos
                td.text-center X
                td.text-center X
              tr
                td Peces
                td.text-center X
                td.text-center X
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p A continuación, se puede conocer a detalle cada de las comunidades hidrobiológicas.
    .tarjeta.tarjeta--amarilla.p-4.mb-4(style="background-color:#EEFFDE")
      SlyderA(tipo="b")(data-aos="flip-right")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Fitoplancton
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Organismos microscópicos unicelulares capaces de realizar fotosíntesis, se encuentran flotando en lagos, lagunas, ciénagas, humedales, estanques, embalses y algunos ríos con velocidad lenta. Son de vida corta, por lo cual responden rápidamente a cambios ambientales. Entre estos organismos se encuentran las algas, que son ampliamente utilizadas como indicadores de calidad de agua, pues algunas se encuentran en ambientes muy enriquecidos de nutrientes, otras son sensibles a vertimientos químicos u orgánicos, otras pueden desarrollar crecimiento excesivo conocidos como floraciones algales, capaces de generar condiciones tóxicas perjudiciales para la vida (IDEAM, 2018).
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img6.png', alt='Fitoplancton')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Zooplancton
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Organismos microscópicos heterótrofos, es decir incapaces de realizar fotosíntesis, entre estos se encuentran los protozoarios, rotíferos, cladóceros, copépodos, ostrácodos, cnidarios, y platelmintos. Así como el fitoplancton la presencia o ausencia de estos organismos pueden inferir en la calidad de un cuerpo de agua (IDEAM, 2018). 
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img7.png', alt='Zooplancton')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Perifiton
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Es un conjunto de organismos que incluye bacterias, hongos, algas, protozoarios y rotíferos que se adhieren a sustratos naturales y artificiales en las orillas de cuerpos de agua. Su estudio se divide en muestras cualitativas, que generan un listado de especies presentes, y muestras cuantitativas, que miden la biomasa. El análisis del perifiton es crucial para comprender la salud de los ecosistemas acuáticos y la calidad del agua, ya que estos organismos pueden indicar cambios ambientales y de biodiversidad en estos hábitats.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img8.png', alt='Fitoplancton')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Macroinvertebrados acuáticos
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Son animales que habitan en el sustrato o fondo de los cuerpos de agua, aunque también pueden encontrarse en la superficie o nadar. Este grupo incluye insectos, moluscos, crustáceos y platelmintos, entre otros. Los macroinvertebrados son particularmente útiles en los estudios de calidad del agua debido a su sensibilidad a los cambios ambientales, su facilidad de recolección y su ciclo de vida corto, lo que facilita su identificación y estudio. La presencia o ausencia de ciertas especies de macroinvertebrados bentónicos puede servir como indicadores de la calidad de un cuerpo de agua y de su salud ecológica.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img9.png', alt='Fitoplancton')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Macrófitas
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Son plantas que crecen en ambientes acuáticos, y su distribución puede variar según las condiciones del agua y el entorno. Son utilizadas como indicadores de la calidad del agua.
                p Para muestrear macrófitas, se utiliza un cuadrante de 1m x 1m. Se determina el porcentaje de cobertura y se lista las especies presentes. Si no se pueden identificar en el campo, se colectan muestras para su análisis en laboratorio. Este proceso permite evaluar la diversidad y la presencia de macrófitas en un ecosistema acuático y, por ende, la calidad del agua en ese lugar.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img10.png', alt='Macrófitas')
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Peces
            .row.mb-5
              .col-sm.mb-5.mb-sm-0
                p Son evaluados como parte de la evaluación de la calidad de un cuerpo de agua. Se utilizan métodos de muestreo cualitativos y cuantitativos, seleccionados según los objetivos, el tiempo y los recursos disponibles. Algunos de los métodos de pesca utilizados incluyen la electropesca, así como artes tradicionales como atarrayas, redes y jaulas. Estos métodos permiten recopilar información sobre la diversidad de especies de peces presentes en el ecosistema acuático y ayudan a determinar la calidad del agua en ese lugar específico.
                  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img11.png', alt='Peces')

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 ¿Cómo tomar las muestras de fitoplancton y zooplancton?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Se pueden tomar muestras cualitativas que consiste en la determinación de los organismos, generando un listado con las especies que convergen en el cuerpo de agua, identificando la presencia de especies tóxicas. En la toma de muestras cuantitativas se busca conocer la biomasa en un volumen de agua determinado.
        p ¿Y en campo cómo se toman dichas muestras?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
      .col-lg-8       
        h4 Muestras cualitativas:        
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Se obtienen desde una embarcación utilizando redes cónicas diseñadas para fitoplancton y zooplancton.
          li
            i.lista-ul__vineta
            | La operación dura aproximadamente 10 minutos a velocidad constante.
          li
            i.lista-ul__vineta
            | El agua filtrada se colecta en un tubo colector y se transfiere a envases ámbar de unos 250 ml de capacidad.
          li
            i.lista-ul__vineta
            | Se añade alcohol para preservar las muestras, y en el caso del fitoplancton, se agregan gotas de Lugol.
          li
            i.lista-ul__vineta
            | Se utilizan redes con mallas de diferentes tamaños (23 micras para fitoplancton y 55 micras para zooplancton).

        h4 Muestras cuantitativas:
        ul.lista-ul
          li
            i.lista-ul__vineta
            | Implican la recolección de muestras de agua a diferentes profundidades con una botella tipo Van Dorn.
          li
            i.lista-ul__vineta
            | Se cierra la botella a la profundidad deseada para tomar la muestra.
          li
            i.lista-ul__vineta
            | Las muestras de diferentes profundidades se combinan en un balde y se extraen aproximadamente 300 ml.
          li
            i.lista-ul__vineta
            | Estas muestras se colocan en frascos ámbar de boca ancha.
          li
            i.lista-ul__vineta
            | Se utiliza alcohol para preservar las muestras, y si son de fitoplancton, se añaden gotas de Lugol.
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 ¿Cómo tomar las muestras de perifiton?
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Se puede utilizar un cepillo de dientes nuevo para hacer raspados suaves en diferentes sustratos (como raíces, rocas, palos o madera en descomposición) que se encuentren en las orillas de los cuerpos de agua. Luego, se recolecta el material raspado en un volumen de agua de aproximadamente 100 ml. Para preservar estas muestras, se les añade alcohol, y si se trata de muestras de fitoplancton, también se les aplican gotas de Lugol.
        p En el caso de las muestras cuantitativas, el procedimiento es similar, pero el área y el número de raspados se determinan según los objetivos específicos del estudio. La toma de muestras cuantitativas proporcionará datos más precisos sobre la biomasa y la composición del perifiton en un área determinada, lo que puede ser importante para evaluar la salud de los ecosistemas acuáticos y la calidad del agua.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')

    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/imgt.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 ¿Cómo tomar las muestras de macroinvertebrados acuáticos?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')
      .col-lg-8

        p #[b Muestreo cualitativo:] este método se utiliza para identificar las especies presentes en un área y generar un registro de ellas. Implica la recolección de organismos sin necesariamente cuantificar su densidad.

        p #[b Muestreo cuantitativo:] este método se utiliza para determinar la densidad de organismos en un área específica.

        p #[b Muestreo cuantitativo en ecosistemas lóticos (ríos y quebradas):] se utiliza una red Surber, que se coloca en el sustrato con los marcos abiertos en contra de la corriente. Luego, se agita el sustrato manualmente para que los organismos puedan ingresar a la red. Una vez recogidos los organismos, se depositan en frascos plásticos de boca ancha de aproximadamente 500 ml.

        p #[b Muestreo cuantitativo y cualitativo en ecosistemas lénticos (lagos, humedales, embalses):] en este caso, se utiliza una draga Eckman, un dispositivo que se envía al fondo del agua para recoger sedimento y los organismos presentes en él. Después de eliminar gran parte del sedimento, los organismos se transfieren a frascos plásticos de boca ancha de aproximadamente 500 ml.

    Separador
    .row
      .col-xl-12       
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.1 Tipos de muestreo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El muestreo de agua es una parte crucial de la evaluación de la calidad en diferentes tipos de cuerpos de agua, ya que cada entorno acuático tiene sus propias características y desafíos únicos. Para abordar estas diferencias, se utilizan varios tipos de muestreo, que se clasifican en función del tipo de agua a evaluar. A continuación, se describen algunos de estos tipos de muestreo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario.mb-4
          .row(numero="1" titulo="Agua superficial")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo realizado en ríos, quebradas, arroyos, embalses, lagos. Aquí se incluye el análisis de los parámetros fisicoquímicos e hidrobiológicos. 
              p.text-small #[b Finalidad:] garantizar que el agua cumpla con los criterios aceptables de acuerdo a su uso.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa') 
          .row(numero="2" titulo="Agua residual doméstica")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo que se realiza en las plantas de tratamiento de agua residual. Las muestras se recogen en varios puntos (inicio o final de la descarga) para evaluar el rendimiento. 
              p.text-small #[b Finalidad:] garantizar que el tratamiento del agua residual cumple con los estándares según la normatividad.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen decorativa')
          .row(numero="3" titulo="Agua residual industrial")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo que se realiza en las industrias para evaluar rendimiento.
              p.text-small #[b Finalidad:] garantizar que  se cumplan los estándares del tratamiento del agua residual según la normatividad.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen decorativa') 
          .row(numero="4" titulo="Agua potable")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo que se realiza para verificar que los sistemas de tratamiento funcionen correctamente.
              p.text-small #[b Finalidad:] garantizar que el tratamiento del agua potable cumpla con la normatividad y sea apta para consumo humano.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen decorativa')
          .row(numero="5" titulo="Agua de mar")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo realizado a profundidad con equipos especiales.
              p.text-small #[b Finalidad:] verifica la calidad del agua a diferentes profundidades.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa') 
          .row(numero="6" titulo="Agua subterránea")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo que incluye la utilización de una amplia gama de equipos.
              p.text-small #[b Finalidad:] verifica pruebas de cumplimiento, estableciendo condiciones de referencia y evaluando la naturaleza y el alcance de la posible contaminación.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Imagen decorativa') 
          .row(numero="7" titulo="Agua de lastre")
            .col-md-12.mb-4.mb-md-0          
              p.text-small #[b Definición:] muestreo para identificar especies potencialmente no deseadas en el agua de lastre.
              p.text-small #[b Finalidad:] garantiza que el tratamiento de este tipo de agua sea el adecuado.
          
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Imagen decorativa') 
    Separador
    .row
      .col-xl-12       
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.2 Formatos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Se debe diligenciar un formato de registro de datos en campo, estos muestran los datos recolectados durante el muestreo. Un formato debe contener la siguiente información:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.p-4(style="background-color:#E7FFD1")
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Título del muestreo.

          li 
            i.lista-ul__vineta
            | Proyecto o investigación a la que pertenece.
          li 
            i.lista-ul__vineta
            | Departamento.
          li 
            i.lista-ul__vineta
            | Municipio.
          li 
            i.lista-ul__vineta
            | Nombre de la estación de muestreo.
          li 
            i.lista-ul__vineta
            | Coordenadas.
          li 
            i.lista-ul__vineta
            | Hora.
          li 
            i.lista-ul__vineta
            | Registro de los parámetros.
          li 
            i.lista-ul__vineta
            | Observaciones.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img22.png', alt='Imagen decorativa') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 2.
          span  #[i  Formato de parámetros in situ]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5        
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th.text-center(colspan=5) Formato parámetros #[i In situ]             
            tbody
              tr
                td Proyecto:
                td(colspan=4)
              tr
                td Departamento:
                td 
                td Municipio:
                td(colspan=2)
              tr
                td Estación de muestreo:
                td(colspan=4)
              tr
                td Fecha:
                td(colspan=2)
                td Hora:
                td
              tr
                td Coordenadas:
                td(colspan=2) N:
                td W:
                td
              tr
                td Temperatura (°C):
                td pH:
                td Conductividad (mS/cm):
                td Oxígeno disuelto (mg/L):
                td Saturación de oxígeno (%):
              tr
                td
                td
                td
                td
                td
              tr
                td(colspan=5) Observaciones: (factores climáticos,intervención antrópica)
              tr
                td(colspan=5) Responsable:
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cadena de custodia es un proceso crucial para garantizar la integridad y trazabilidad de las muestras de agua desde su recolección hasta la entrega de resultados en el laboratorio. Implica un control detallado de quién tiene posesión de las muestras en cada etapa del proceso. Se utiliza un formato de cadena de custodia que incluye información sobre el proyecto, el muestreador, las muestras y los responsables de custodia y transporte. Este registro se completa meticulosamente en cada cambio de responsabilidad, y todas las personas involucradas deben firmar y fechar dichos cambios. Esto asegura la calidad y confiabilidad de los resultados en el laboratorio. A continuación, se encuentra un ejemplo de un formato de cadena de custodia que puede utilizarse para documentar y mantener un registro de la posesión y manipulación de muestras desde el momento de su recolección hasta su entrega en el laboratorio:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 3.
          span  #[i  Formato de cadena de custodia matriz agua]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        table(border=1)
          thead(style="background-color:#FFAE7E;")
            tr
              th.text-center(colspan=11) Formato de cadena de custodia matriz agua             
          tbody
            tr
              td Proyecto:
              td(colspan=7)
              td Fecha:
              td(colspan="2")
            tr
              td(colspan=6) Departamento:
              td(colspan=2) Municipio:
              td(colspan=3)
            tr
              td(rowspan=2) Código laboratorio
              td(rowspan=2) Código en campo
              td(colspan=3) Tipo de muestra
              td(rowspan=2) Fecha muestreo
              td(rowspan=2) Sitio de muestreo
              td(colspan=4) Tipo y cantidad de recipientes
            tr
              td Simple
              td Compuestra
              td Integrada
              td Plástico (N° recipientes)
              td Vidrio (N° recipientes)
              td Bolsa plástica
              td Otros
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td           
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr
              td 
                p.p-1
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td    
              td
            tr 
              td(rowspan=2) ¿Refrigerada?
              td SI
              td(rowspan=2)(colspan=4) Responsable
              td(rowspan=2) Total
              td(rowspan=2)
              td(rowspan=2)
              td(rowspan=2)
              td(rowspan=2)
            tr
              td NO
    Separador
    .row
      .col-xl-12       
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.3 Tipos de embalaje
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        P El embalaje es un proceso crucial para asegurar la protección y preservación adecuada de las muestras recolectadas en el campo. Los tipos de embalaje pueden variar según el tipo de muestra y su uso posterior en el laboratorio. A continuación, se describen algunos tipos comunes de embalaje:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/img24.png', alt='Imagen decorativa') 
      .col-lg-8
        LineaTiempoD.color-primario.mb-4
          .row(numero="1" titulo="Embalaje primario")
            .col-md-12.mb-4.mb-md-0          
              p Es crucial para contener y proteger la muestra de agua directamente en contacto con ella. Aquí hay algunas consideraciones clave:
              ol.lista-ol
                li 
                  span.text-bold a) 
                  | Material del envase: puede ser de plástico o vidrio, elegido según la naturaleza de la muestra y los requisitos de análisis.
                li 
                  span.text-bold b) 
                  | Volumen del envase: debe ser apropiado para la cantidad de muestra sin llenarse en exceso.
                li 
                  span.text-bold c) 
                  | Tapas y cierres herméticos: las tapas deben sellar herméticamente para evitar fugas o contaminación.
                li 
                  span.text-bold d) 
                  | Etiquetado: cada envase debe etiquetarse claramente con información relevante.
                li 
                  span.text-bold e) 
                  | Preservación: algunas muestras requieren preservativos químicos para mantener su integridad.
                li 
                  span.text-bold f) 
                  | Limpieza y preparación: los envases deben limpiarse adecuadamente antes de su uso.
                li 
                  span.text-bold g) 
                  | Compatibilidad: debe ser compatible con la muestra y el análisis.
                li 
                  span.text-bold h) 
                  | Almacenamiento: debe almacenarse adecuadamente para evitar cambios en la muestra.

                p El embalaje primario garantiza la integridad de la muestra y es fundamental para obtener resultados de análisis confiables en el laboratorio.
          .row(numero="2" titulo="Embalaje secundario o colectivo")
            .col-md-12.mb-4.mb-md-0          
              p Es esencial para agrupar y proteger los envases primarios durante el transporte y el almacenamiento. Aquí hay algunas consideraciones clave:
              ol.lista-ol
                li 
                  span.text-bold a) 
                  | Agrupación de envases primarios: el embalaje secundario debe diseñarse para contener una cantidad específica de envases primarios, lo que facilita el manejo y el transporte.
                li 
                  span.text-bold b) 
                  | Protección adicional: debe proporcionar protección adicional a los envases primarios contra golpes, vibraciones y cambios de temperatura.
                li 
                  span.text-bold c) 
                  | Resistencia: debe ser lo suficientemente resistente para soportar el apilado y la manipulación durante el transporte sin comprometer la integridad de las muestras.
                li 
                  span.text-bold d) 
                  | Etiquetado: debe incluir información de identificación y manejo, como etiquetas de precaución y dirección del laboratorio.
                li 
                  span.text-bold e) 
                  | Aislamiento térmico: en algunos casos, como el transporte de muestras sensibles a la temperatura, se pueden utilizar embalajes secundarios con aislamiento térmico.
                li 
                  span.text-bold f) 
                  | Sellado y cierres seguros: debe contar con sistemas de cierre seguros para evitar cualquier fuga o contaminación.
                li 
                  span.text-bold g) 
                  | Control de temperatura: si es necesario mantener una temperatura específica, se pueden utilizar envases secundarios con sistemas de control de temperatura.
                li 
                  span.text-bold h) 
                  | Cumplimiento de regulaciones: debe cumplir con las regulaciones de transporte de sustancias peligrosas si corresponde.
          .row(numero="3" titulo="Embalaje terciario")
            .col-md-12.mb-4.mb-md-0          
              p Cumple la función de reunir y organizar los embalajes primarios y secundarios para facilitar el transporte y almacenamiento de las muestras de agua de manera eficiente. Debe ser diseñado con materiales resistentes y duraderos que puedan soportar el apilado de neveras portátiles u otros contenedores utilizados en el proceso. Además, debe estar configurado de manera que se aproveche al máximo la capacidad de almacenaje, permitiendo transportar y manipular múltiples muestras de manera ordenada y segura. Esto garantiza que las muestras se mantengan protegidas y en condiciones adecuadas hasta llegar al laboratorio para su análisis.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p La elección del tipo de embalaje depende del tipo de muestra, su tamaño, su estado físico y los requisitos específicos del análisis de laboratorio. Es esencial etiquetar adecuadamente cada muestra con información relevante, como la fecha de recolección, el lugar de muestreo y cualquier detalle importante para su identificación y trazabilidad. Además, se deben seguir los protocolos y regulaciones aplicables para el manejo y transporte de muestras, especialmente si se trata de sustancias peligrosas o biológicas.

</template>

<script>
export default {
  name: 'Tema3',
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
