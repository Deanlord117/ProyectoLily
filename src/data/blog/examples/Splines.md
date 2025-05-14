---
title: "Splines"
description: "Técnicas de interpolación que utilizan polinomios de bajo grado para aproximar funciones en segmentos. Los splines cúbicos son los más comunes, garantizando una transición suave entre los puntos de datos al asegurar continuidad en la primera y segunda derivada. Son útiles para modelar curvas suaves en problemas de ajuste de datos."
featured: True
pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Splines
---

<figure>
  <img
    src="https://joseguerreroa.wordpress.com/wp-content/uploads/2013/11/gdalwarp.png"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://joseguerreroa.wordpress.com/2013/11/01/interpolacion-spline-cubica-con-gdalwarp-de-mapas-de-precipitacion-obtenidos-por-interpolacion-tin/">El Blog de José Guerrero</a>
  </figcaption>
</figure>

## Historia
La interpolación por splines se desarrolló a mediados del siglo XX como una solución a los problemas de oscilación asociados con la interpolación polinómica de alto grado. Los splines son funciones polinómicas por tramos que garantizan suavidad y continuidad en los puntos de unión, lo que los hace ideales para la interpolación de datos complejos. 

El término "spline" proviene de una herramienta utilizada por los dibujantes para trazar curvas suaves, y su adopción en matemáticas refleja la similitud en la creación de curvas suaves a través de puntos dados. Los splines, especialmente los cúbicos, se han convertido en una herramienta estándar en gráficos por computadora, diseño asistido por computadora y análisis numérico.

## Fundamentos del Método de Splines 

El **Método de Splines** es una técnica de interpolación que utiliza funciones polinomiales para aproximar un conjunto de puntos de datos. A diferencia de la interpolación polinómica tradicional, los **Splines** dividen el dominio en segmentos y ajustan polinomios de menor grado en cada intervalo, garantizando suavidad en las transiciones.

### Definición de Splines  

Dado un conjunto de puntos $(x_i, y_i)$, el objetivo es encontrar una función interpolante $S(x)$ que cumpla:

$$
S(x_i) = y_i, \quad \forall i = 0, 1, ..., n.
$$

Cada segmento de la interpolación se describe mediante un polinomio **de grado bajo**, evitando el comportamiento oscilatorio de los polinomios de alto grado.



### Tipos de Splines

Existen varios tipos de splines según el grado del polinomio utilizado:

- **Spline lineal:** Cada segmento se describe con una función lineal.
- **Spline cuadrático:** Se emplean polinomios de segundo grado en cada intervalo.
- **Spline cúbico:** Se usan polinomios de tercer grado, garantizando suavidad en primera y segunda derivada.

El **Spline cúbico** es el más utilizado, pues optimiza la precisión y continuidad de la interpolación.



###  Condiciones de Continuidad y Suavida

Para garantizar una interpolación precisa, los splines cúbicos deben cumplir las siguientes condiciones:

1. **Interpolación:** Cada spline pasa por los puntos de datos.
2. **Continuidad:** La función debe ser continua en todo el dominio.
3. **Suavidad:** Las primeras y segundas derivadas deben coincidir en los puntos de unión entre segmentos.

Matemáticamente, para cada punto interno $x_i$:

$$
S_{i-1}(x_i) = S_i(x_i)
$$

$$
S'_{i-1}(x_i) = S'_i(x_i)
$$

$$
S''_{i-1}(x_i) = S''_i(x_i)
$$

Estas condiciones garantizan una interpolación libre de discontinuidades o irregularidades.



###  Sistema de Ecuaciones para Splines Cúbicos

Cada spline cúbico tiene la forma:

$$
S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3
$$

Para determinar los coeficientes $\{ a_i, b_i, c_i, d_i \}$, se establece un **sistema de ecuaciones** basado en las condiciones de continuidad y derivadas.

Se forma una **matriz tridiagonal** que se resuelve mediante métodos como **Gauss-Seidel**, **LU**, o **Montante** para obtener los coeficientes de cada spline.



### Aplicaciones de Splines

El método de splines se usa en múltiples áreas, como:

- **Modelado gráfico:** Generación de curvas suaves en animación.  
- **Procesamiento de datos:** Interpolación en tablas y cálculos científicos.  
- **Diseño CAD:** Construcción de superficies precisas.  
- **Economía y estadística:** Ajuste de datos financieros y predicciones.  

## Pasos para Resolver un Problema con Splines Cúbicos

### Paso 1: Definir los Puntos de Datos

Dado un conjunto de **$n+1$ puntos** $(x_i, y_i)$, el objetivo es construir una función spline cúbica que pase por todos ellos:

$$
(x_0, y_0), (x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)
$$

Cada intervalo entre dos puntos consecutivos será interpolado con un **polinomio cúbico**.


### Paso 2: Definir la Forma General del Spline Cúbico

Cada segmento del spline cúbico se define como:

$$
S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3
$$

donde los coeficientes $a_i, b_i, c_i, d_i$ deben determinarse para cada intervalo.

### Paso 3: Condiciones de Interpolación

Para garantizar una interpolación precisa, los splines cúbicos deben cumplir:

- **Interpolación**: El spline debe pasar por cada punto de datos:

   $$
   S_i(x_i) = y_i
   $$

   $$
   S_i(x_{i+1}) = y_{i+1}
   $$

- **Continuidad**: En cada punto intermedio, los segmentos deben coincidir:

   $$
   S_{i}(x_{i+1}) = S_{i+1}(x_{i+1})
   $$

- **Suavidad**: Las primeras y segundas derivadas deben coincidir en los puntos internos:

   $$
   S'_i(x_{i+1}) = S'_{i+1}(x_{i+1})
   $$

   $$
   S''_i(x_{i+1}) = S''_{i+1}(x_{i+1})
   $$



### Paso 4: Construcción del Sistema de Ecuaciones

Para encontrar los coeficientes de cada spline cúbico, se forma un **sistema de ecuaciones lineales** basado en:

- Las condiciones de continuidad.  
 - Las condiciones de suavidad en primera y segunda derivada.  
 - Las condiciones de frontera (pueden ser naturales o ajustadas).  

Esto genera una **matriz tridiagonal**, que se puede resolver con métodos numéricos como **Gauss-Seidel, LU, o Montante**.


### Paso 5: Resolver el Sistema para Obtener los Coeficientes

Al resolver el sistema de ecuaciones, obtenemos los coeficientes $a_i, b_i, c_i, d_i$ de cada spline cúbico. Estos coeficientes permiten calcular cualquier valor dentro del intervalo de interpolación.


### Paso 6: Evaluar la Función Spline en un Punto Deseado

Si deseamos encontrar la aproximación de $S(x)$ en un valor específico $x$, buscamos el intervalo correspondiente y evaluamos:

$$
S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3
$$

Este cálculo proporciona una interpolación precisa y libre de oscilaciones.

### Paso 7: Presentar el Resultado y Visualizar la Interpolación

Una vez obtenidos los splines cúbicos, se pueden graficar para visualizar cómo se ajustan a los datos originales.

## Ejemplo de Aplicación del Método de Splines Cúbico

Supongamos que tenemos los siguientes puntos de datos:

| $x$  | $y$  |
|------|------|
| 0    | 1    |
| 1    | 2    |
| 2    | 0    |
| 3    | 2    |

Queremos obtener la interpolación spline cúbica que pase por estos puntos.


### Paso 1: Definir la Forma de los Splines

Cada segmento se modela como un polinomio cúbico:

$$
S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3
$$

Para cada intervalo entre los puntos, debemos determinar los coeficientes $a_i, b_i, c_i, d_i$.



### Paso 2: Condiciones del Sistema de Ecuaciones

Para que el spline cúbico sea **suave y continuo**, debe cumplir:
- **Interpolación**: Cada spline debe pasar por los puntos de datos.
- **Continuidad**: Los splines deben coincidir en los puntos intermedios.
- **Suavidad**: Las derivadas primera y segunda deben coincidir en los puntos de unión.

Esto genera un sistema de ecuaciones con condiciones en cada punto:

$$
S_0(0) = 1, \quad S_0(1) = 2
$$

$$
S_1(1) = 2, \quad S_1(2) = 0
$$

$$
S_2(2) = 0, \quad S_2(3) = 2
$$

$$
S'_0(1) = S'_1(1), \quad S'_1(2) = S'_2(2)
$$

$$
S''_0(1) = S''_1(1), \quad S''_1(2) = S''_2(2)
$$

Estas ecuaciones conforman una **matriz tridiagonal** que se puede resolver numéricamente.


### Paso 3: Resolver el Sistema para Obtener los Coeficientes

Usamos **métodos numéricos** como:
- Eliminación de Gauss
- Factorización LU
- Método de Montante

Al resolver, obtenemos:

| Intervalo | Polinomio Spline |
|-----------|-----------------|
| $[0,1]$  | $S_0(x) = 1 + 1.5(x - 0) - 0.5(x - 0)^2 + 0(x - 0)^3$ |
| $[1,2]$  | $S_1(x) = 2 - 1.5(x - 1) - 0.5(x - 1)^2 + 1(x - 1)^3$ |
| $[2,3]$  | $S_2(x) = 0 + 1.5(x - 2) + 0.5(x - 2)^2 - 1(x - 2)^3$ |


### Paso 4: Evaluación del Spline en un Punto Deseado

Si queremos estimar $y(1.5)$, usamos el spline correspondiente:

$$
S_1(1.5) = 2 - 1.5(0.5) - 0.5(0.5)^2 + 1(0.5)^3
$$

$$
S_1(1.5) = 2 - 0.75 - 0.125 + 0.125 = 1.25
$$

La interpolación predice que **$y(1.5) \approx 1.25$**.

## Ejemplo en python

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from scipy.interpolate import CubicSpline

# Definimos los puntos de datos en 3D
x = np.array([0, 1, 2, 3])
y = np.array([1, 2, 0, 2])
z = np.array([0, 1, -1, 0])  # Coordenada Z para profundidad

# Creamos el Spline Cúbico para X y Y
spline_x = CubicSpline(x, y)
spline_z = CubicSpline(x, z)

# Generamos valores interpolados
x_interp = np.linspace(min(x), max(x), 100)
y_interp = spline_x(x_interp)
z_interp = spline_z(x_interp)

# Configuración de la figura en 3D
fig = plt.figure(figsize=(8, 6))
ax = fig.add_subplot(111, projection='3d')

ax.set_xlim(min(x), max(x))
ax.set_ylim(min(y) - 1, max(y) + 1)
ax.set_zlim(min(z) - 1, max(z) + 1)
ax.set_xlabel("X")
ax.set_ylabel("Y")
ax.set_zlabel("Z")
ax.set_title("Animación de Splines Cúbicos en 3D")

# Puntos originales
ax.scatter(x, y, z, color='red', label="Puntos Originales", s=50, zorder=2)

# Línea de interpolación (inicialmente vacía)
line, = ax.plot([], [], [], color='blue', lw=2, label="Spline Cúbico", zorder=1)

# Función de actualización para la animación
def update(frame):
    line.set_data(x_interp[:frame], y_interp[:frame])
    line.set_3d_properties(z_interp[:frame])
    return line,

# Creación de la animación
ani = animation.FuncAnimation(fig, update, frames=len(x_interp), interval=50, blit=True)

# Guardar la animación como GIF
ani.save("/Users/adrianrdz/grubby-gamma/src/assets/images/spline.gif", writer="pillow", fps=20)

plt.legend()
plt.show()
```

  ## Grafica 
  ![Texto alternativo](/src/assets/images/spline.gif)

   # Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/jvPPXbo87ds"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   
The Continuity of Splines

 (Canal: Freya Holmér)
  </figcaption>
</div>

<style>
  .video-wrapper {
    max-width: 800px;
    margin: 2rem auto;
    border: 3px solid #8e3b46; 
    border-radius: 0.5rem; 
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* Sombra suave */
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* Relación 16:9 */
    height: 0;
    overflow: hidden;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

## Conclusión sobre los Splines  
El método de splines es una técnica de interpolación que utiliza funciones polinómicas por tramos, generalmente de tercer grado, para ajustarse de forma continua a un conjunto de puntos. Este enfoque es preferido cuando se requiere una interpolación suave y precisa, sin los problemas de oscilación que pueden surgir con otros métodos polinomiales de alto grado. Se utiliza ampliamente en gráficos computacionales, modelado de curvas y superficies, y en el diseño de trayectorias en robótica y animación.

La relevancia de los splines radica en que, a diferencia de la interpolación polinómica clásica, no solo proporciona una buena aproximación a los datos, sino que también asegura continuidad en las derivadas de la función interpolante, lo que los hace ideales para problemas de suavizado y modelado en áreas como la ingeniería y las ciencias aplicadas (Fritsch & Carlson, 1980).

Fritsch, F. N., & Carlson, R. E. (1980). Monotone Piecewise Cubic Interpolation. SIAM Journal on Numerical Analysis, 17(2), 238–246. https://doi.org/10.1137/0717022

