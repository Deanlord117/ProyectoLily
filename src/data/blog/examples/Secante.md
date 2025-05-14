---
title: "Metodo de la Secante"
description: "Técnica iterativa para encontrar las raíces de una ecuación no lineal. Es similar al método de Newton-Raphson, pero no requiere el cálculo de derivadas. En lugar de usar la derivada, se utiliza una aproximación lineal entre dos puntos consecutivos para estimar la raíz."

pubDatetime: 2025-05-02T15:00:00Z
author: "Axel Dario Estrada Chavana"
tags: 
  - Metodo
  - Python
  - Grafica
  - Secante
---
<figure>
  <img
    src="https://procesosnumericos2015.weebly.com/uploads/4/6/8/1/46814569/9358150_orig.png"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://procesosnumericos2015.weebly.com/meacutetodo-de-la-secante.htmls">Procesos Numericos</a>
  </figcaption>
</figure>

## Historia
El método de la secante es una modificación del método de Newton-Raphson que no requiere el cálculo de derivadas. Sus orígenes se remontan a técnicas utilizadas en la antigüedad por matemáticos egipcios y babilónicos para resolver ecuaciones lineales mediante aproximaciones sucesivas. En el siglo XVI, matemáticos europeos como Gerolamo Cardano formalizaron métodos similares, y su versión moderna se consolidó en el siglo XIX con el desarrollo del análisis numérico.

Este método utiliza dos aproximaciones iniciales para generar una secante que intersecta la función, proporcionando una nueva aproximación a la raíz. Aunque puede ser menos eficiente que el método de Newton-Raphson en términos de velocidad de convergencia, su ventaja radica en no requerir derivadas, lo que lo hace útil en situaciones donde el cálculo de derivadas es complejo o costoso. El método de la secante ha sido ampliamente utilizado en diversas aplicaciones científicas e ingenieriles debido a su simplicidad y eficacia.

## Funciones Fundamentales del Método de la Secante

El **Método de la Secante** es una técnica numérica para encontrar raíces de funciones sin necesidad de calcular derivadas. Se basa en aproximar la función mediante una línea secante entre dos puntos sucesivos.  

### Función de la Ecuación $f(x)$

El método de la secante busca la raíz de una función:

$$
f(x) = 0
$$

Ejemplo:

$$
f(x) = x^3 - x - 1
$$

Este método aproxima la raíz al construir una secante entre dos valores cercanos.


###  Función para la Fórmula de la Secante

La actualización del valor de $x$ en cada iteración se obtiene mediante:

$$
x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}
$$

Esta expresión usa dos puntos consecutivos $(x_{n-1}, x_n)$ y los valores de la función en ellos para determinar una nueva aproximación de la raíz.


###  Función para la Condición de Paro

El criterio de convergencia del método se puede definir de dos formas:

- Comparando la diferencia entre iteraciones:

   $$
   |x_{n+1} - x_n| < \epsilon
   $$

- Evaluando el valor absoluto de la función:

   $$
   |f(x_{n+1})| < \epsilon
   $$

Si cualquiera de estos criterios se cumple, el proceso de iteración finaliza.

###  Función de Iteración para Aproximar la Raíz*

Se repite el cálculo de $x_{n+1}$ hasta cumplir la condición de convergencia. La actualización sigue la fórmula de la secante y requiere almacenar los valores previos en cada paso.

###  Función Global: Algoritmo del Método de la Secante

Aquí está el **pseudocódigo** para aplicar el método de la secante:

```pseudo
function secante(f, x0, x1, epsilon, maxIterations):
    for i from 1 to maxIterations:
        x2 = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0))

        if |x2 - x1| < epsilon or |f(x2)| < epsilon:
            return x2
        
        x0 = x1
        x1 = x2
    
    return "El método no convergió en maxIterations."
```

Este algoritmo permite encontrar la raíz de una función sin utilizar derivadas, aprovechando el cambio de signo en los valores evaluados.


## Pasos para Resolver una Ecuación con el Método de la Secante

El **Método de la Secante** es una técnica numérica para encontrar la raíz de una función sin necesidad de calcular derivadas. Se basa en la aproximación de la función mediante una línea secante entre dos puntos sucesivos.  

Aquí tienes el procedimiento paso a paso:


### Paso 1: Seleccionar la función $f(x)$

Define la función cuyo valor queremos encontrar en $f(x) = 0$.  

Ejemplo:

$$
f(x) = x^3 - x - 1
$$

El objetivo es hallar la raíz de esta ecuación.



### Paso 2: Escoger dos valores iniciales $x_0$ y $x_1$

El método de la secante utiliza dos aproximaciones iniciales, **$x_0$ y $x_1$**, que deben estar cercanas a la raíz buscada.  

*Ejemplo:* Si sospechamos que la raíz está cerca de 1, podemos tomar:

$$
x_0 = 1 \quad \text{y} \quad x_1 = 1.2
$$


### Paso 3: Aplicar la fórmula de la secante 

Se calcula el siguiente valor de la raíz aproximada mediante la siguiente fórmula:

$$
x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}
$$

Este nuevo valor **$x_{n+1}$** será la nueva aproximación de la raíz.



### Paso 4: Evaluar el criterio de convergencia 

La iteración continúa hasta que se cumpla alguna de estas condiciones:

- La diferencia entre dos aproximaciones consecutivas sea menor que un valor preestablecido **$\epsilon$**:

  $$
  |x_{n+1} - x_n| < \epsilon
  $$

- La función evaluada en el nuevo valor sea suficientemente pequeña:

  $$
  |f(x_{n+1})| < \epsilon
  $$

Si la condición se cumple, la raíz se considera suficientemente precisa.



### Paso 5: Repetir el proceso iterativo  

Si la condición de paro no se cumple, se actualizan los valores:

$$
x_{n-1} = x_n, \quad x_n = x_{n+1}
$$

y se recalcula **$x_{n+1}$** usando la fórmula de la secante, hasta alcanzar la precisión deseada.


### Paso 6: Presentar el resultado final

Cuando se satisface el criterio de convergencia, **$x_{n+1}$** se considera la mejor aproximación de la raíz buscada.
<br>

## Ejemplo de Aplicación del Método de la Secante

Veamos cómo encontrar la raíz de la función:

$$
f(x) = x^3 - x - 1
$$

Usaremos el **Método de la Secante** con los valores iniciales $x_0 = 1$ y $x_1 = 1.2$, un **tamaño de tolerancia** $\epsilon = 0.0001$, y realizaremos iteraciones hasta alcanzar la precisión deseada.


### Paso 1: Evaluar la función en los puntos iniciales

Calculamos los valores de la función en los puntos iniciales:

$$
f(x_0) = (1)^3 - 1 - 1 = -1
$$

$$
f(x_1) = (1.2)^3 - 1.2 - 1 = 0.728
$$


### Paso 2: Aplicar la fórmula de la secante

Ahora usamos la fórmula:

$$
x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}
$$

Sustituyendo los valores:

$$
x_2 = 1.2 - \frac{(0.728) (1.2 - 1)}{0.728 - (-1)}
$$

$$
x_2 = 1.2 - \frac{(0.728)(0.2)}{1.728}
$$

$$
x_2 = 1.2 - \frac{0.1456}{1.728} = 1.1157
$$



### Paso 3: Comprobar la convergencia

Calculamos la diferencia entre la nueva y la anterior aproximación:

$$
|x_2 - x_1| = |1.1157 - 1.2| = 0.0843
$$

Como $0.0843$ es mayor que $\epsilon = 0.0001$, repetimos el proceso con:

- $x_{n-1} = 1.2$
- $x_n = 1.1157$


### Paso 4: Segunda iteración

Calculamos $f(x_2)$:

$$
f(1.1157) = (1.1157)^3 - 1.1157 - 1 = 0.166
$$

Aplicamos la fórmula de la secante:

$$
x_3 = 1.1157 - \frac{(0.166) (1.1157 - 1.2)}{0.166 - 0.728}
$$

$$
x_3 = 1.1157 - \frac{(0.166)(-0.0843)}{-0.562}
$$

$$
x_3 = 1.1157 - \frac{-0.0139878}{-0.562} = 1.0907
$$


### Paso 5: Evaluación final

Continuamos las iteraciones hasta que:

$$
|x_{n+1} - x_n| < \epsilon
$$

Tras varias iteraciones, obtenemos la aproximación final:

$$
x \approx 1.167
$$


## Ejemplo en python

```python
import numpy as np
import matplotlib.pyplot as plt

def secante(f, x0, x1, epsilon, max_iterations):
    """Método de la Secante para encontrar raíces de una función"""
    iteraciones = []
    valores_x = []

    for i in range(max_iterations):
        if abs(x1 - x0) < epsilon:
            break  # Condición de convergencia
        
        x2 = x1 - (f(x1) * (x1 - x0)) / (f(x1) - f(x0))  # Fórmula de la secante
        
        iteraciones.append(i + 1)
        valores_x.append(x2)

        x0, x1 = x1, x2  # Actualizar valores
    
    return valores_x, iteraciones

# Definimos la función f(x)
def f(x):
    return x**3 - x - 1

# Valores iniciales y parámetros
x0 = 1
x1 = 1.2
epsilon = 0.0001
max_iterations = 15

# Ejecutamos el método de la secante
valores_x, iteraciones = secante(f, x0, x1, epsilon, max_iterations)
# Imprimimos los resultados
print("Iteraciones:", iteraciones)
print("Valores de x:", valores_x)

# Graficamos la convergencia
plt.plot(iteraciones, valores_x, marker='o', linestyle='-', color='b', label="Aproximaciones de $x$")
plt.axhline(y=valores_x[-1], color='r', linestyle='--', label=f"Raíz aproximada: {valores_x[-1]:.6f}")
plt.xlabel("Iteraciones")
plt.ylabel("Valor de $x$")
plt.title("Convergencia del Método de la Secante")
plt.legend()
plt.grid(True)
plt.show()
```
## Salida
```bash
Iteraciones: [1, 2, 3, 4, 5]
Valores de x: [1.378787878787879, 1.3181298994992197, 1.3243964608211145, 1.3247199403308894, 1.3247179566504879]
```

  ## Grafica 
  ![Texto alternativo](@/assets/images/Secante.png)

## Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/YOHtIzPmfzE"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   
Secante | Raíces | Métodos Numéricos | Básico

 (Canal: cctmexico)
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
El método de la secante es similar al de Newton-Raphson, pero sin necesidad de calcular la derivada de la función, lo que lo hace útil cuando dicha derivada es difícil de obtener o computacionalmente costosa. Este método es especialmente útil en aplicaciones donde la función es compleja o no tiene una forma sencilla para derivarla.

La ventaja del método de la secante es que utiliza dos aproximaciones sucesivas para mejorar la estimación de la raíz, y aunque no siempre garantiza la convergencia, su velocidad y facilidad de implementación lo convierten en una herramienta valiosa en la resolución numérica de ecuaciones no lineales (Conte & de Boor, 1980).

Conte, S. D., & de Boor, C. (1980). Elementary Numerical Analysis: An Algorithmic Approach (3rd ed.). McGraw-Hill.
