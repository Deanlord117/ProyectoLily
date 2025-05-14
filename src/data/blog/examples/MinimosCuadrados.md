---
title: "Aproximacion por mínimos cuadrados"
description: "Método utilizado para ajustar una curva a un conjunto de datos, minimizando la suma de los cuadrados de las diferencias entre los puntos dados y la curva estimada. Es ampliamente usado en regresión y ajuste de modelos."

pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Cuadrados
---

<figure>
  <img
    src="https://www.researchgate.net/profile/Franco-Perazzo/publication/228694380/figure/fig1/AS:669391431667713@1536606762047/Figura-1-Aproximacion-por-minimos-cuadrados-ponderados-fijos.ppm"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://www.researchgate.net/figure/Figura-1-Aproximacion-por-minimos-cuadrados-ponderados-fijos_fig1_228694380">ResearchGate</a>
  </figcaption>
</figure>


## Historia
El método de los mínimos cuadrados fue formalizado por Adrien-Marie Legendre en 1805 y posteriormente desarrollado por Carl Friedrich Gauss en 1809. Este método se utiliza para encontrar la mejor aproximación lineal a un conjunto de datos, minimizando la suma de los cuadrados de las diferencias entre los valores observados y los valores predichos por el modelo. Wikipedia

La técnica de mínimos cuadrados ha sido fundamental en el desarrollo de la estadística y el análisis de datos, con aplicaciones que van desde la astronomía hasta la economía. Su capacidad para manejar datos ruidosos y proporcionar estimaciones óptimas la ha convertido en una herramienta esencial en la modelización y la inferencia estadística.

## Funciones del Método de Aproximación por Mínimos Cuadrados

La Aproximación por Mínimos Cuadrados es una técnica numérica utilizada para encontrar la mejor aproximación lineal (o de otro tipo) a un conjunto de datos. El objetivo principal es minimizar la suma de los cuadrados de las diferencias entre los valores observados y los valores predichos por el modelo.


### Función Objetivo:

La función objetivo del método de Mínimos Cuadrados se define como la suma de los cuadrados de los errores:

$$
S = \sum_{i=1}^n (y_i - (a + bx_i))^2
$$

Donde:

* $y_i$ son los valores observados,
* $x_i$ son los valores de la variable independiente,
* $a$ y $b$ son los coeficientes del modelo lineal que queremos encontrar.


###  Cálculo de los Coeficientes:

Para minimizar $S$, derivamos con respecto a $a$ y $b$ y resolvemos el sistema de ecuaciones:

$$
\frac{\partial S}{\partial a} = -2 \sum_{i=1}^n (y_i - a - bx_i) = 0
$$

$$
\frac{\partial S}{\partial b} = -2 \sum_{i=1}^n x_i(y_i - a - bx_i) = 0
$$

Resolviendo este sistema se obtienen los coeficientes óptimos:

$$
a = \frac{\sum y - b \sum x}{n}
$$

$$
b = \frac{n \sum (xy) - \sum x \sum y}{n \sum (x^2) - (\sum x)^2}
$$


### Ecuación de la Recta Ajustada:

Una vez calculados $a$ y $b$, la ecuación de la recta ajustada es:

$$
y = a + bx
$$

### Error Cuadrático Medio (ECM)

El ECM mide qué tan buena es la aproximación. Se calcula como:

$$
ECM = \frac{1}{n} \sum_{i=1}^n (y_i - (a + bx_i))^2
$$

¡Vamos con los pasos bien explicados y claros para tu blog! 😊



## Pasos para Resolver el Método de Aproximación por Mínimos Cuadrados

### Recopilación de Datos

Se necesita un conjunto de puntos $(x_i, y_i)$ que representan las observaciones de la variable independiente $x$ y la variable dependiente $y$.

###  Cálculo de las Sumatorias Necesarias

Para poder encontrar los coeficientes $a$ y $b$, se calculan las siguientes sumatorias:

* $\sum x$ → Suma de todos los valores de $x_i$.
* $\sum y$ → Suma de todos los valores de $y_i$.
* $\sum (x^2)$ → Suma de los cuadrados de cada valor de $x_i$.
* $\sum (xy)$ → Suma del producto de cada par de valores $x_i y_i$.



### Aplicación de las Fórmulas para los Coeficiente

Los coeficientes de la recta ajustada se encuentran con las siguientes fórmulas:

$$
b = \frac{n \sum (xy) - \sum x \sum y}{n \sum (x^2) - (\sum x)^2}
$$

$$
a = \frac{\sum y - b \sum x}{n}
$$

Donde:

* $n$ es el número de puntos.


###  Construcción de la Ecuación de la Recta Ajustada

Con los valores de $a$ y $b$, se forma la ecuación lineal:

$$
y = a + bx
$$

### Cálculo del Error Cuadrático Medio (opcional)

Si se desea conocer la precisión del ajuste, se puede calcular el Error Cuadrático Medio (ECM):

$$
ECM = \frac{1}{n} \sum_{i=1}^n (y_i - (a + bx_i))^2
$$



### Interpretación de Resultado

Finalmente, se interpreta la ecuación obtenida, donde:

* El valor de $a$ representa el punto donde la recta cruza el eje $y$ (intersección).
* El valor de $b$ indica la pendiente, es decir, el cambio en $y$ por cada unidad que cambia $x$.

¡Vamos con el ejemplo bien estructurado para tu blog! 😊


## Ejemplo Resuelto: Método de Aproximación por Mínimos Cuadrados


Supongamos que tenemos el siguiente conjunto de datos que representan el comportamiento de una variable dependiente $y$ en función de una variable independiente $x$:

| $x$ | $y$ |
| --- | --- |
| 1   | 2.2 |
| 2   | 2.8 |
| 3   | 3.6 |
| 4   | 4.5 |
| 5   | 5.1 |

Queremos encontrar la recta que mejor se ajuste a estos datos utilizando el método de Mínimos Cuadrados.

### Paso 1: Recopilación de datos

Los puntos a interpolar son:

$$
(1, 2.2), (2, 2.8), (3, 3.6), (4, 4.5), (5, 5.1)
$$


### Paso 2: Cálculo de las sumatorias necesarias

$$
\sum x = 1 + 2 + 3 + 4 + 5 = 15
$$

$$
\sum y = 2.2 + 2.8 + 3.6 + 4.5 + 5.1 = 18.2
$$

$$
\sum (x^2) = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55
$$

$$
\sum (xy) = (1)(2.2) + (2)(2.8) + (3)(3.6) + (4)(4.5) + (5)(5.1) = 66.3
$$

$$
n = 5
$$


### Paso 3: Aplicación de las fórmulas para los coeficientes

$$
b = \frac{n \sum (xy) - \sum x \sum y}{n \sum (x^2) - (\sum x)^2}
$$

$$
b = \frac{5(66.3) - 15(18.2)}{5(55) - (15)^2}
$$

$$
b = \frac{331.5 - 273}{275 - 225}
$$

$$
b = \frac{58.5}{50} = 1.17
$$

Ahora calculamos $a$:

$$
a = \frac{\sum y - b \sum x}{n}
$$

$$
a = \frac{18.2 - 1.17(15)}{5}
$$

$$
a = \frac{18.2 - 17.55}{5}
$$

$$
a = 0.13
$$



### Paso 4: Ecuación de la recta ajustada

Finalmente, la ecuación de la recta que aproxima mejor los datos es:

$$
y = 0.13 + 1.17x
$$

## Ejemplo en Python
```python
# Reimportar librerías y reejecutar el código tras el reset
import matplotlib.pyplot as plt
import numpy as np

# Datos del ejemplo
x = np.array([1, 2, 3, 4, 5])
y = np.array([2.2, 2.8, 3.6, 4.5, 5.1])

# Número de puntos
n = len(x)

# Cálculo de las sumatorias
sum_x = np.sum(x)
sum_y = np.sum(y)
sum_x2 = np.sum(x**2)
sum_xy = np.sum(x * y)

# Cálculo de los coeficientes a y b
b = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x**2)
a = (sum_y - b * sum_x) / n
print(f"Coeficientes: a = {a:.2f}, b = {b:.2f}")

# Ecuación de la recta
x_line = np.linspace(0, 6, 100)
y_line = a + b * x_line

# Graficar
plt.figure(figsize=(6, 4))
plt.scatter(x, y, color='red', label='Datos originales')
plt.plot(x_line, y_line, color='blue', label=f'Recta ajustada: y = {a:.2f} + {b:.2f}x')
plt.title('Aproximación por Mínimos Cuadrados')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend()
plt.show()
```
## Salida 
```bash
Coeficientes: a = 1.39, b = 0.75
```

## Grafica
  ![Texto alternativo](/src/assets/images/MinimosCuadrados.png)

## Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/gUdU6BgnJ2c"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
    Video explicativo del metodo de minimos cuadrados (Canal: Flex Flix Teens en Español)
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

### Conclusión: Método de Aproximación por Mínimos Cuadrados
La aproximación por mínimos cuadrados es un método estadístico utilizado para minimizar la suma de los cuadrados de las diferencias entre los datos observados y los valores predichos por el modelo. Es fundamental en el análisis de regresión y en la aproximación de soluciones cuando los datos son ruidosos o no exactos. Este método se usa en una amplia variedad de campos, incluidos la economía, la ingeniería y las ciencias sociales.

La relevancia de este método es que permite encontrar una solución óptima para problemas de ajuste de curvas y regresión, incluso cuando los datos contienen errores o incertidumbres. Se utiliza de manera rutinaria en la modelización de fenómenos naturales y en la predicción de tendencias a partir de datos experimentales, lo que lo convierte en una herramienta esencial en el análisis de datos (Golub & Van Loan, 2013).

Golub, G. H., & Van Loan, C. F. (2013). Matrix Computations (4th ed.). Johns Hopkins University Press.


