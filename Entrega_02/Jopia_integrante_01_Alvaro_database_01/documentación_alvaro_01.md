## Documentación Alvaro Jopia- Olivia López
Nuestras bases de datos buscaban ser idénticas con respecto a las dimensiones que las componían y el rango de años que cubrían. Es por ello que desde un inicio estipulamos que abordaríamos un período de tiempo de 76 años, desde el 1950 hasta el 2026.

Aquello parecía una buena idea, sin embargo, conforme fuimos adentrándonos en las páginas web que usaríamos para armar cada una de las bases de datos, nos dimos cuenta de que había una gran parte de la investigación que estaba quedando fuera (1950-1978) debido a que no había información respecto a su recaudación. Debido a aquello, a pesar de contar con la información de quienes fueron los ganadores y nominados al Oscar en la categoría Best Picture durante esos años, es que finalmente optamos por eliminar ese período de tiempo. Esto con el fin de hacer una base de datos confiable y sólida de cara a las cifras que en ella habría.

Finalmente, decidimos considerar a las 6 películas más taquilleras de cada año.
Es así como empezamos a extraer los datos correspondientes. En la página Box Office Mojo existe una ventana que da cuenta de las películas más taquilleras de cada año en el período ya estipulado anteriormente.
Creamos un documento nuevo en Excel, usamos como ID los diferentes años que contemplamos (pusimos 6 veces el 2026, 6 veces el 2025, 6 veces el 2024… hasta el 1978).

Teniendo los ID listos, comenzamos a copiar el nombre, la recaudación internacional y doméstica de las 6 películas más taquilleras de cada año. Fue así como nuestra base de datos fue agarrando forma.
Le agregamos más dimensiones: director, género, subgénero, productora, actor principal. Esto debido a que se nos pidió ampliar nuestra base de datos para así obtener conclusiones más jugosas. Una vez sumadas las dimensiones, comenzamos a buscar los géneros que las componían. Para ello usamos FilmAfinnity.

En esta página, buscamos el nombre de cada una de las películas de la tabla. Una vez dentro de las ventanas que abría el buscador de FilmAfinnity, copiamos y pegamos el género que designaba a cada filme y también, el primer subgénero que aparecía en la lista. De esta manera sólo se contempló el primer subgénero de cada película (en caso de que la película no tuviese subgéneros, se dejaba vacía la celda).

Con los géneros y subgéneros ya listos, pasamos a completar las dimensiones de actor principal, director y productora. Para ello, hicimos lo siguiente.
1.	Le enviamos a Chat GPT una lista con todas las películas que integraban nuestra base de datos.
2.	Le enviamos un prompt en el cual se le pedía que nos enviara un archivo csv con los actores principales, los directores y las productoras de cada película.
3.	Chat GPT nos lo envío por partes, pero de igual forma hizo un buen trabajo.
4.	Con el archivo listo, pasamos los datos al bloc de notas. En él, guardamos el documento como CSV, puesto que no podíamos realizar aquella acción desde Chat GPT.
5.	Ya con el archivo CSV guardado, procedimos a usar Excel para transformarlo en una tabla de datos.
6.	Con la tabla de datos lista, copiamos y pegamos las celdas correspondientes.
   
Las fuentes utilizadas para la construcción de esta base de datos fueron:
•	https://www.filmaffinity.com/es/awards3.php?award_id=academy_awards&decade=2020
•	https://www.boxofficemojo.com/?ref_=bo_nb_di_mojologo
•	https://chatgpt.com/

Con nuestra base de datos limpia, podemos responder preguntas como:
-	¿Qué combinación de géneros se repite más durante el período estudiado?
-	¿Cuál es el actor más taquillero del período analizado?
-	¿Qué productora logró el mayor número de películas taquilleras?
