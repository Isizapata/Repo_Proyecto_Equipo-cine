## Documentación
### Explicación de cómo se realizó el proceso de visualización, con los pasos y decisiones tomados.

Para esta visualización quería trabajar con los directores de las películas nominadas y ganadoras de los Premios Oscar y ver el "Top 20 directores con más películas nominadas o ganadoras". Para esto le pedí a Gemini que me diera ideas de cómo graficar esta idea.

Me indicó que era buena idea trabajar con un gráfico de línea de tiempo con puntos, esto para ordenar los años y los 20 directores más repetidos con la ayuda de Colab.

En el Google Colab copie los códigos para importar pandas y altair, luego subí la base de datos y con el código "df= pd.read_csv" pedí que leyera la base de datos csv de la entrega 2 y copie el código para el gráfico que me dio Gemini, y finalmente le agregue mi base de datos.

Para hacerlo aún más entendible le pedí a los codigos que las películas ganadoras tuvieran el codigo de color amarillo y las nominadas en gris asi se pudieran diferenciar con "color=alt.Color".

Luego le pedí con el código "Tooltip# la información detallada de cada película al pasar el ratón, considerando el nombre de la película, el año de estreno, el director y si fue nominada o ganadora de la categoría "Mejor Película" 

Cuando generó el gráfico en un principio era complicado de leer, ya que no tenía lineas horizontales que guiara la vista y al ser solo puntos no se entendía de que director era cada película y se veía así: 


![alt text](<../../Captura de pantalla 2026-05-10 221822.png>)
=======

Es por esto que le pedí a gemini que me diera un código para poder colocar líneas horizontales pero no supe cómo colocarlo bien y en clases le pedí ayuda a la profe Trini para pegar el código de manera correcta y quedó más mucho más fácil de entender.

### Base de datos (CSV) que utilizaron, cómo la procesan hasta dejarla lista para usar en la visualización que quieren hacer y por qué la seleccionaron.
Trabajé con la base de datos de la entrega 2, "database premios excel" para filtrar años, películas y directores. La elegí porque es la más completa de los Premios Oscars y solo tuve que indicarle a los códigos que leyeran esas dimensiones para poder generar el gráfico con la función "df_filtrado". Sin embargo, quise hacer un segundo gráfico para probar otras ideas con género y subgénero. 

Fue aquí donde me di cuenta al buscar un gráfico de barras en Altair que la base de datos original la iba a tener que limpiar, ya que habían errores de tipeos que al momento de pasarlos a gráfico generaba un comedia y un Comedia, diferenciándose solo por la mayúscula, lo mismo con los tildes Fantasia y Fantasía eran dos categorías distintas. 

Por esto existen dos bases de datos al inicio
### Ejemplos sobre preguntas que puede responder su visualización de datos final (o el conjunto de visualizaciones que crearon).
- ¿Qué director tiene más películas nominadas a los Premios Oscar?
- ¿Qué director tiene más películas ganadoras de los Premios Oscar?
- ¿Cuál es el top 5 de directores con más películas ganadoras?
-  ¿Cuál es el top 5 de directores con más películas nominadas?
-  ¿Son más mujeres o hombres los directores con más películas nominadas?
-  Hipotético: ¿En qué años Martin Scorsese tuvo más películas nominadas?
-  ¿Qué director dejó de ser nominado?

