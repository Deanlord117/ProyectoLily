---
title: "Metodo de Newton-Raphson"
description: "Técnica iterativa para encontrar las raíces de una ecuación no lineal. Parte de una estimación inicial y mejora sucesivamente el valor utilizando la derivada de la función. Es eficiente y converge rápidamente cuando la estimación inicial está cerca de la raíz."

pubDatetime: 2025-05-02T15:00:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Newton
  - Raphson
---

<figure>
  <img
    src="https://gimledigital.com/sites/default/files/2018-11/newton-raphson.jpg"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://gimledigital.com/es/newton-raphson-made-easy-scala">Gimle Digital</a>
  </figcaption>
</figure>

## Historia
El método de Newton-Raphson es un algoritmo eficiente para encontrar aproximaciones de los ceros o raíces de una función real. Fue descrito por Sir Isaac Newton en su obra De analysi per aequationes numero terminorum infinitas (escrito en 1669, publicado en 1711) y en De metodis fluxionum et serierum infinitarum (escrito en 1671, publicado en 1736). Sin embargo, la descripción moderna del método fue presentada por Joseph Raphson en su libro Aequationum Universalis publicado en 1690, donde introdujo una versión más general y simplificada del algoritmo .Proyecto Métodos Numéricos MA-0320+1Wikipedia, la enciclopedia libre+1Wikipedia, la enciclopedia libre+1Proyecto Métodos Numéricos MA-0320+1

El método de Newton-Raphson se basa en la idea de utilizar la derivada de una función para iterativamente aproximar sus raíces. Aunque es altamente eficiente y converge rápidamente bajo ciertas condiciones, su aplicación requiere que la función sea diferenciable y que se tenga una buena estimación inicial. A lo largo de los años, este método ha sido fundamental en el análisis numérico y ha sido adaptado para resolver una amplia variedad de problemas en matemáticas aplicadas y ciencias de la computación .

## Funciones del Método de Newton-Raphson

El método de Newton-Raphson es uno de los métodos más eficientes y populares para encontrar raíces de funciones no lineales. A través de un proceso iterativo, se aproxima cada vez más al valor de la raíz deseada. Este método se basa en la idea de que una función continua y diferenciable puede ser aproximada localmente por su tangente.


### Concepto del Método
Imaginemos una función $f(x)$ y un punto inicial $x_0$. La idea del método de Newton-Raphson es utilizar la recta tangente a la curva en $x_0$ para encontrar un valor más cercano a la raíz. Esto se hace porque la intersección de esa tangente con el eje $x$ nos da una mejor aproximación de la raíz.

La ecuación de la recta tangente en un punto $x_n$ es:

$$
y = f(x_n) + f'(x_n)(x - x_n)
$$

Para encontrar el cruce con el eje $x$, hacemos $y = 0$:

$$
0 = f(x_n) + f'(x_n)(x - x_n)
$$

Despejando para $x$:

$$
x = x_n - \frac{f(x_n)}{f'(x_n)}
$$

Esta es la fórmula iterativa de Newton-Raphson:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$


### Interpretación Geométrica

La interpretación gráfica del método es bastante intuitiva:

1. Se toma un punto inicial $x_0$.
2. Se calcula el valor de la función $f(x_0)$ y su derivada $f'(x_0)$.
3. Se traza la tangente en ese punto, y donde esa tangente cruza el eje $x$, se obtiene una mejor aproximación a la raíz.
4. Este proceso se repite iterativamente hasta que la diferencia entre dos iteraciones consecutivas sea menor que un error aceptable, o hasta alcanzar un número máximo de iteraciones.


### Condiciones de Convergencia

Es importante mencionar que el método de Newton-Raphson tiene algunas condiciones para garantizar su convergencia:

* La función $f(x)$ debe ser continua y diferenciable en el intervalo que contiene la raíz.
* El valor inicial $x_0$ debe estar razonablemente cerca de la raíz; de lo contrario, el método podría divergir o converger a otra raíz no deseada.
* La derivada de la función, $f'(x)$, no debe ser cero en el intervalo de interés.


### Ventajas y Desventajas del Método

#### Ventajas:

* Convergencia rápida (cuadrática) cuando se está cerca de la solución.
* Requiere pocos pasos para encontrar la raíz con alta precisión.

#### Desventajas:

* No garantiza convergencia si el valor inicial está lejos de la raíz.
* Si $f'(x) = 0$ en algún punto de la iteración, el método se indetermina.
* Necesita el cálculo de la derivada, lo cual no siempre es sencillo.

<br>

## Pasos para Resolver el Método de Newton-Raphson

A continuación, te explico de manera detallada y paso a paso cómo aplicar el método de Newton-Raphson para encontrar la raíz de una función:


### Paso 1: Seleccionar una función $f(x)$

El primer paso es definir la función de la cual queremos encontrar la raíz. Por ejemplo:

$$
f(x) = x^2 - 4x + 3
$$

### Paso 2: Calcular la derivada de la función $f'(x)$

Es necesario calcular la derivada de la función, ya que la fórmula iterativa depende de ella:

$$
f'(x) = 2x - 4
$$


### Paso 3: Establecer un valor inicial $x_0$

Selecciona un valor inicial cercano a la raíz que quieres encontrar. Este valor afecta directamente la rapidez y éxito del método. En nuestro ejemplo, supongamos:

$$
x_0 = 2.5
$$


### Paso 4: Aplicar la fórmula iterativa de Newton-Raphson

La fórmula es la siguiente:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

Para nuestro ejemplo:

$$
x_1 = 2.5 - \frac{(2.5)^2 - 4(2.5) + 3}{2(2.5) - 4}
$$


### Paso 5: Evaluar la convergencia

Después de cada iteración, evaluamos el cambio entre el valor anterior y el nuevo valor:

$$
|x_{n+1} - x_n| < \epsilon
$$

Donde $\epsilon$ es un valor pequeño (por ejemplo, 0.0001) que determina la precisión que deseamos.

### Paso 6: Repetir hasta que se cumpla el criterio de convergencia

El proceso se repite, actualizando el valor de $x_n$ en cada iteración, hasta que la diferencia entre dos iteraciones consecutivas sea menor que el error permitido.

### Paso 7:Presentar el resultado

Una vez alcanzada la convergencia, el valor de $x_n$ se considera una aproximación de la raíz.

<br>

## Ejemplo Resuelto: Método de Newton-Raphson

Vamos a resolver el siguiente ejemplo paso a paso utilizando el método de Newton-Raphson:

#### Problema:
Encuentra la raíz de la función:

$$
f(x) = x^2 - 4x + 3
$$

#### Paso 1: Definimos la función:

$$
f(x) = x^2 - 4x + 3
$$

#### Paso 2: Calculamos su derivada:

$$
f'(x) = 2x - 4
$$

#### Paso 3: Establecemos un valor inicial cercano a la raíz. Para este ejemplo, tomaremos:

$$
x_0 = 2.5
$$


### Iteración 1:

Aplicamos la fórmula iterativa:

$$
x_{1} = x_0 - \frac{f(x_0)}{f'(x_0)}
$$

Sustituimos los valores:

$$
x_{1} = 2.5 - \frac{(2.5)^2 - 4(2.5) + 3}{2(2.5) - 4}
$$

$$
x_{1} = 2.5 - \frac{6.25 - 10 + 3}{5 - 4}
$$

$$
x_{1} = 2.5 - \frac{-0.75}{1}
$$

$$
x_{1} = 3.25
$$

### Iteración 2:

Repetimos el proceso con el nuevo valor:

$$
x_{2} = 3.25 - \frac{(3.25)^2 - 4(3.25) + 3}{2(3.25) - 4}
$$

$$
x_{2} = 3.25 - \frac{10.5625 - 13 + 3}{6.5 - 4}
$$

$$
x_{2} = 3.25 - \frac{0.5625}{2.5}
$$

$$
x_{2} = 3.025
$$

### Iteración 3:

Una iteración más para mejorar la aproximación:

$$
x_{3} = 3.025 - \frac{(3.025)^2 - 4(3.025) + 3}{2(3.025) - 4}
$$

$$
x_{3} = 3.025 - \frac{9.150625 - 12.1 + 3}{6.05 - 4}
$$

$$
x_{3} = 3.025 - \frac{0.050625}{2.05}
$$

$$
x_{3} = 3.0003
$$


#### Resultado Final:

La raíz aproximada es:

$$
x \approx 3.0003
$$

## Ejemplo en Python
```python
import numpy as np
import matplotlib.pyplot as plt

# Definimos la función y su derivada
def f(x):
    return x**2 - 4*x + 3

def f_prime(x):
    return 2*x - 4

# Parámetros de Newton-Raphson
x0 = 2.5  # Valor inicial
tolerance = 1e-5
max_iter = 10

# Listas para graficar
x_values = [x0]
iterations = [0]

# Método de Newton-Raphson
for i in range(1, max_iter + 1):
    x1 = x0 - f(x0) / f_prime(x0)
    x_values.append(x1)
    iterations.append(i)
    if abs(x1 - x0) < tolerance:
        break
    x0 = x1

# Gráfica
x_range = np.linspace(0, 4, 400)
plt.figure(figsize=(8, 5))
plt.plot(x_range, f(x_range), label='$f(x) = x^2 - 4x + 3$', color='blue')
plt.axhline(0, color='gray', linestyle='--')
plt.axvline(0, color='gray', linestyle='--')

# Dibujando los puntos de las iteraciones
for idx, x in enumerate(x_values):
    plt.scatter(x, f(x), color='red')
    plt.text(x, f(x), f"x{idx}", fontsize=8, verticalalignment='bottom')

plt.title("Método de Newton-Raphson")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.grid(True)
plt.legend()
plt.show()

# Resultado final
print(x_values)
```
## Salida
```bash
Raíz aproximada: 3.000000000000001
```
  ## Grafica 
  ![Texto alternativo](/src/assets/images/NewtonRapshon.png)
## Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/o0Pa8UzO62I"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   
¿Cómo se resuelve x elevado a x es 100?  El método de Newton (Canal: Derivando)
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
## Conclusión

El método de Newton-Raphson es uno de los más poderosos para encontrar raíces de funciones debido a su rapidez en la convergencia, especialmente cuando se dispone de una buena estimación inicial. Su aplicación se extiende desde la ingeniería hasta las finanzas, pues permite encontrar soluciones precisas para ecuaciones no lineales con pocas iteraciones, lo que lo hace altamente eficiente.

A pesar de su eficiencia, el método requiere que la función sea diferenciable, y que el valor inicial esté lo suficientemente cerca de la raíz para asegurar una convergencia rápida. Este método es crucial en el análisis de problemas complejos donde la precisión y el tiempo de cálculo son factores importantes, como en el modelado de fenómenos físicos y económicos (Atkinson, 2008).

Atkinson, K. E. (2008). An Introduction to Numerical Analysis (2nd ed.). Wiley.
