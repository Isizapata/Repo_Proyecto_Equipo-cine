### Ficha técnica y diccionario de datos, Álvaro Jopia y Olivia López

## Fuente de los datos

Los datos de cada dimensión (película, género, subgénero, actor principal, director, productora y su recaudación tanto internacional como doméstica) fueron extraídos de páginas como Box Office Mojo, página creada por IMDbPro, o FilmAffinity. A través de ellas, pudimos saber con más detalle los aspectos que conforman cada película inserta en la base de datos.

https://www.filmaffinity.com/es/awards3.php?award_id=academy_awards&decade=2020

https://www.boxofficemojo.com/?ref_=bo_nb_di_mojologo

## Metodología de la construcción de la base

### Alcance de los datos
Debido a que los datos respecto a la recaudación doméstica e internacional sólo son confiables hasta 1978, decidimos acotar nuestra investigación hasta aquel año. De todos modos, no nos cerramos a que, en un futuro, en caso de dar con una base de datos certera respecto a la recaudación de las películas pertenecientes al tramo 1950-1978, podamos incluirlas dentro de nuestro análisis. Finalmente, es oportuno recalcar que tuvimos que pasar las cantidades de recaudación de comas a puntos para así no estropear el CSV.

### Característica de los datos

Exceptuando lo referente al año y a la recaudación de las películas, los datos son en su mayoría de índole cualitativa. Sumado a lo comentado en el punto anterior respecto al vacío de nuestra tabla entre los años 1978-1950, la tabla está compuesta de dos apartados. Uno que comprende del 1950 al 1952 y otro que corresponde al que finalmente se utilizará para efectos de esta investigación, de 1978 a 2026.
Con respecto a las recaudaciones, todos los valores están dados en dólares americanos.

## Diccionario de datos
|Año|Género|Subgénero|Actor principal|Director|Productora/estudio|Recaudación doméstica|Recaudación internacional||
|-|-|-|-|-|-|-|-|-|
|Descripción de dimensión|Aquí se organizan las películas por el año de de estreno|El género dominante de la película, según la página Filmaffinity|El subgénero de la película, según la página Filmaffinity|En esta sección se organizaron los nombres de los actores principales de las películas|Aquí se menciona el nombre del director de cada película|Aquí se organizan los nombres de las productoras o estudios de cada película|Aquí se organizan por película la recaudación correspondiente al país de origen de cada una|Aquí se organiza la recaudación internacional de la película, correspondiente al total de recaudaciones de los países donde se ha estrenado la película|Aquí se muestra si la película ganó o fue nominada a la categoría de Mejor Película del Premios Oscar|
|Tipo de dato, valores|Cuantitativo, del año 1977 al 2025|Cualitativo, depende del género dominante|Cualitativo, depende del subgénero|Cualitativo, depende del subgénero|Cualitativo, respecto a cada actor principal o protagonista|Cualitativo, respecto al director de la película|Cualitativo, depende del director de cada película|Cuantitativo, depende de la recaudación de cada película en su país de origen|Cuantitativo, depende de la recaudación de cada película a nivel internacional|  
