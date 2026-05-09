# Documentación de Álvaro Jopia

### Explicación de cómo se realizó el proceso de visualización, con los pasos y decisiones tomados.

Antes de empezar a hacer la visualización, revisé los distintos ejemplos que presenta la librería Altair, es decir, sus gráficos con los que uno puede trabajar. Yo pensaba trabajar con las categorías de edad de cada una de las películas taquilleras, es por ello que cuando me encontré con Simple Stacked Area Chart, vi posible el realizar un gráfico que expresase a través de los colores cómo fueron evolucionando las diferentes categorías de edad en el tiempo.

Con eso ya en mente, fue hora de entrar a Collab. Subí la data, y tuve que tomar la primera decisión: cambiar el signo de separación del CSV de "," a ";" porque me estaba leyendo mal la base de datos.

Usé "df" para ver si estaba bien, y sí. Luego comprobé cuántas celdas estaban vacías para ver si podía hacer un gráfico noble con la información. Me encontré con un número de celdas vacías muy bajo, lo cual me permitió continuar. Estaba dentro de lo presupuestado.

Fue entonces que me propuse lo siguiente: mi gráfico abordaría la desaparación del cine para adultos a través del tiempo. Esto porque durante la construcción de mi base de datos, me fui dando cuenta que, a pesar de algunas excepciones, el cine para adultos fue perdiendo terreno dentro de las películas más taquilleras. "No debe ser rentable", pensé.

Para poder saber cuán rentable había sido cada una de las categorías (G,PG,PG-13,R) durante el período de tiempo establecido, me propuse sumar año por año la cantidad de dinero recolectado por cada género. Así podría tener una muestra extensa sobre la evolución del tema.

Le dije a Collab que mi nuevo df sería "Taquilla total" el cual estaría representado por la suma de la taquilla doméstica y la taquilla internacional de las peliculas.

Con ayuda de Gémini, fui empezando a hacer el resto de las operaciones. Primero, pensé en agrupar solo lo que me interesaba: año y taquilla total... pero me encontré con un error. Collab no me tomaba las recaudaciones porque me tomaba los valores como texto. Debía de quitar el signo $ y también los puntos de cada valor. Con un código, lo hice.

Lo probé y funcionó.

Luego procedí a hacer una nueva variable: año más taquilla total sería "Total_año".

Crucé información para saber cuántas películas de cada categoría estuvieron dentro de las 6 más taquilleras de cada año. Una vez hecho eso, pasé a reinterpretar el número de películas por año a porcentaje, o sea, si habían 3 películas categoría "PG" dentro de las más taquilleras del 1985, ahora eso se traduciría a un 50% de aquel año.

Lo probé para ver cómo iba y sí, estaba funcionando.

Antes de proceder a insertar el código del gráfico, determine que las categorías dentro de este serían 4. Las ya mencionadas G, PG, PG-13 Y R.

Finalmente, con ayuda de Chat-GPT le dije todo lo que quería hacer de manera detallada para que armase un gráfico como el que vi en los ejemplos de Altair.

Este lo hizo pero vi falencias o detalles que aún podían mejorar, por ejemplo, los colores o las ausencias de líneas guía. Además, el que el gráfico contemplase año tras año lo hacía poco limpio.

Por ello hice tres cosas:

1. Le pedí colores específicos para cada categoría.
    - Amarillo para G, asociado al cine infantil.
    - Azul para PG, asociado al cine familiar.
    - Naranja para PG-13, asociado al blockbuster contemporáneo.
    - Gris oscuro para R, asociado al cine adulto.
2. Inserté líneas guía que creo ayudan a la visualización del gráfico. Son leves pero funcionan.
3. Cambié la variable "Año" de O a Q, puesto que de esta forma el gráfico era capaz de ir saltando cada 5 años, es decir, del 1980 al 1985.

El eje Y por cierto, contempla el porcentaje.

En resumen, en este gráfico se puede observar las transformaciones históricas y cambios de predominio entre categorías a lo largo del tiempo.

### Base de datos (CSV) que utilizaron, cómo la procesaron hasta dejarla lista para usar en la visualización que quieren hacer y por qué la seleccionaron.

Mi base de datos final fue:

https://uccl0-my.sharepoint.com/:x:/g/personal/alvaro_jopia_estudiante_uc_cl/IQAHATwz1mCvTIZYbSingYEHAXgmhR-GhBZL9xg0uLjCuwI?e=QoOBQl

Antes de la construcción de mi gráfico, tuve que arreglar mi base de datos ya que presentaba errores como:

1. Algunos géneros y subgéneros estaban escritos aveces con mayúsculas y otras con minúsculas, lo que a la hora de pasarlo a Collab, hacía que los leyera como géneros diferentes.
2. Había más de un director por película en algunas ocasiones. Tuve que optar por dejar al director principal.
3. Eliminé el período de tiempo en el que no pude encontrar datos fiables sobre la recaudación (1977-1952 aproximadamente).

La seleccioné porque era la que había trabajado desde un principio, además creo que el contar con las películas más taquilleras de cada año daban más juego de cara a armar un gráfico.

### Ejemplos sobre preguntas que puede responder su visualización de datos final (o el conjunto de visualizaciones que crearon).

- ¿Cómo ha cambiado el tipo de películas que domina la taquilla?
- ¿Qué clasificaciones etarias predominan en distintas décadas?
- ¿Cuándo comenzó el auge del cine PG-13?
- ¿Cómo perdió relevancia relativa el cine adulto clasificado R?
- ¿Qué relación existe entre blockbuster contemporáneo y cine familiar/global?