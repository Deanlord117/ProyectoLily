---
title: "Metodo de Jacobi"
description: "Un método iterativo para resolver sistemas de ecuaciones lineales, donde cada incógnita se actualiza de forma independiente usando los valores de la ecuación en la iteración anterior. Es útil cuando se trabaja con grandes sistemas dispersos."

pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Jacibu
---


<figure>
  <img
    src="https://i.ytimg.com/vi/FjxQiqHXVJI/maxresdefault.jpg"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://www.youtube.com/watch?v=FjxQiqHXVJI">Eddy Vega Escobar</a>
  </figcaption>
</figure>




## Historia
El método de Jacobi, también conocido como método de iteración de Jacobi, fue introducido por el matemático alemán Carl Gustav Jacob Jacobi (1804–1851). Este algoritmo iterativo se utiliza para resolver sistemas de ecuaciones lineales, especialmente aquellos con matrices estrictamente diagonalmente dominantes. Jacobi desarrolló este método como una versión simplificada de su transformación para la diagonalización de matrices. Su enfoque consistía en resolver cada ecuación para una variable específica y luego iterar este proceso hasta alcanzar la convergencia. BYJU'S+1Wikipedia+1Wikipedia+1Wikipedia+1Wikipedia

El método de Jacobi fue una de las primeras técnicas iterativas propuestas para la resolución de sistemas lineales, marcando un hito en el desarrollo del álgebra lineal numérica. Aunque su convergencia puede ser lenta en comparación con otros métodos, su simplicidad y facilidad de implementación lo han mantenido como una herramienta educativa y práctica en diversas aplicaciones científicas y de ingeniería.



## Las Funciones del Método de Jacobi para Resolver Sistemas de Ecuaciones Lineales

El **método de Jacobi** es uno de los algoritmos más populares cuando se trata de resolver sistemas de ecuaciones lineales de manera iterativa. Este método es especialmente útil cuando tenemos sistemas grandes y no podemos aplicar métodos directos de resolución. A continuación, desglosamos las funciones clave que intervienen en este proceso para comprender mejor cómo funciona y cómo implementarlo de manera efectiva.

### Descomposición de la Matriz $A$

La primera función clave en el método de Jacobi es la descomposición de la matriz $A$ en dos partes: la matriz diagonal $D$ y el resto $R$ (los elementos no diagonales).

La idea es separar los coeficientes de la diagonal principal de la matriz $A$ para facilitar la iteración. De esta manera, podemos escribir la matriz $A$ como:

$$
A = D + R
$$

* **$D$** es la matriz diagonal, que contiene solo los elementos $a_{ii}$ de la matriz $A$.
* **$R$** es el resto de la matriz $A$, que contiene los elementos no diagonales.

La función que realiza esta descomposición es crucial, ya que nos permite trabajar con la matriz $D$ de manera independiente durante las iteraciones.

### La Ecuación de Actualización de Jacobi

La función principal del método de Jacobi es la ecuación iterativa, que se usa para actualizar cada uno de los valores de las incógnitas en cada iteración. La fórmula para actualizar el valor de la incógnita $x_i$ es:

$$
x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j^{(k)} \right)
$$

Aquí, cada componente $x_i^{(k+1)}$ es actualizado usando los valores $x_j^{(k)}$ de la iteración anterior. El término $a_{ii}$ es el coeficiente diagonal de la matriz $A$, y $b_i$ es el término independiente de la ecuación.

#### ¿Qué hace esta función?

* Actualiza las incógnitas usando los valores anteriores.
* Cada incógnita depende de todas las demás, pero usando los valores más recientes de las iteraciones anteriores.

Esta función es la base de las iteraciones del método de Jacobi, y es clave para que las soluciones converjan hacia el valor correcto.

### Cálculo del Residuo
Otra función esencial en el método de Jacobi es el cálculo del **residuo**. Este residuo mide qué tan cerca estamos de la solución exacta. El residuo se calcula como la diferencia entre la matriz multiplicada por el vector de soluciones aproximadas $\mathbf{x}^{(k)}$ y el vector $\mathbf{b}$:

$$
r^{(k)} = \| A \mathbf{x}^{(k)} - \mathbf{b} \|
$$

Este residuo nos permite determinar si hemos alcanzado una solución suficientemente precisa o si debemos continuar iterando.

#### ¿Por qué es importante esta función?

* Nos indica cuán lejos estamos de la solución exacta.
* Permite aplicar el **criterio de convergencia**, lo que nos dice cuándo detener las iteraciones. Si el residuo es lo suficientemente pequeño, podemos considerar que hemos encontrado la solución.

### Criterio de Convergencia

El criterio de convergencia es una función que evalúa si la diferencia entre las soluciones sucesivas es suficientemente pequeña como para detener las iteraciones. Generalmente, esto se basa en el residuo, y si $r^{(k)}$ es menor que un umbral de tolerancia, se considera que el proceso ha convergido.

Por ejemplo, si el residuo es menor que $10^{-6}$, significa que la solución es precisa y podemos detenernos. Esta función de convergencia asegura que el algoritmo no continúe innecesariamente cuando ya hemos alcanzado una aproximación aceptable.

### Inicialización del Vector de Soluciones $\mathbf{x}^{(0)}$

Antes de comenzar las iteraciones, necesitamos inicializar el vector $\mathbf{x}^{(0)}$, que contiene los valores iniciales de las incógnitas. Esta función simplemente establece los valores iniciales, que por lo general se asignan a ceros:

$$
\mathbf{x}^{(0)} = [0, 0, 0]
$$

La calidad de esta inicialización no es crítica, pero las soluciones iterativas tienden a converger más rápido si las inicializaciones son razonables.

#### ¿Por qué es importante?

* Define los valores iniciales de las incógnitas.
* Asegura que las iteraciones comiencen con valores válidos y permita calcular los residuales correctamente.

### Iteración del Método de Jacobi

Finalmente, la iteración en sí misma es la función que orquesta todo el proceso. Aquí se repiten las funciones de actualización de las incógnitas y el cálculo del residuo hasta que se cumpla el criterio de convergencia.

Este es el ciclo iterativo:

1. **Actualiza** $\mathbf{x}^{(k+1)}$ usando la ecuación de Jacobi.
2. **Calcula** el residuo $r^{(k)}$.
3. **Verifica** si el residuo es menor que el umbral de tolerancia.
4. **Repite** hasta que la convergencia sea alcanzada.

Este ciclo asegura que el sistema de ecuaciones se resuelva de manera iterativa, mejorando cada vez la precisión de las soluciones.


¡Lo entiendo, vamos a hacerlo de nuevo! Te voy a guiar a través de un ejemplo paso a paso utilizando el **método de Jacobi** con **cuatro iteraciones** bien explicadas, para que puedas ver cómo avanza el proceso con más claridad. Aquí va:

---

## Ejemplo con Cuatro Iteraciones

Imagina que tenemos el siguiente sistema de ecuaciones lineales:

$$
\begin{aligned}
3x + y - 2z &= 1 \\
2x - 2y + 4z &= -2 \\
-x + \frac{1}{2}y - z &= 0
\end{aligned}
$$

Queremos resolverlo utilizando el **método de Jacobi** paso a paso. Vamos a hacerlo con **cuatro iteraciones** para que veas cómo evoluciona la aproximación.

#### Paso 1: Plantea el Sistema y Descompón la Matriz

El sistema lo escribimos en forma de matriz $A$ y vector $\mathbf{b}$:

$$
A = \begin{bmatrix}
3 & 1 & -2 \\
2 & -2 & 4 \\
-1 & \frac{1}{2} & -1
\end{bmatrix}
\quad \text{y} \quad
\mathbf{b} = \begin{bmatrix}
1 \\
-2 \\
0
\end{bmatrix}
$$

Descomponemos la matriz $A$ en dos partes: la diagonal $D$ y el resto $R$.

* La **matriz diagonal $D$** es:

$$
D = \begin{bmatrix}
3 & 0 & 0 \\
0 & -2 & 0 \\
0 & 0 & -1
\end{bmatrix}
$$

* El resto $R$ es la matriz sin la diagonal:

$$
R = \begin{bmatrix}
0 & 1 & -2 \\
2 & 0 & 4 \\
-1 & \frac{1}{2} & 0
\end{bmatrix}
$$

#### Paso 2: Inicializa el Vector de Soluciones

Ahora, inicializamos el vector de soluciones $\mathbf{x}^{(0)}$. Como siempre en Jacobi, comenzamos con un vector de ceros:

$$
\mathbf{x}^{(0)} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

#### Paso 3: Aplica la Fórmula de Jacobi

La fórmula de Jacobi para cada incógnita $x_i$ es:

$$
x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij} x_j^{(k)} \right)
$$

Empezamos con la primera iteración, usando los valores iniciales $x_1^{(0)} = 0$, $x_2^{(0)} = 0$, y $x_3^{(0)} = 0$.

#### Iteración 1

1. **Calcular $x_1^{(1)}$:**

   $$
   x_1^{(1)} = \frac{1}{3} \left( 1 - (1 \cdot 0 + (-2) \cdot 0) \right) = \frac{1}{3} \times 1 = \frac{1}{3}
   $$

2. **Calcular $x_2^{(1)}$:**

   $$
   x_2^{(1)} = \frac{1}{-2} \left( -2 - (2 \cdot 0 + 4 \cdot 0) \right) = \frac{1}{-2} \times (-2) = 1
   $$

3. **Calcular $x_3^{(1)}$:**

   $$
   x_3^{(1)} = \frac{1}{-1} \left( 0 - (-1 \cdot 0 + \frac{1}{2} \cdot 0) \right) = \frac{1}{-1} \times 0 = 0
   $$

Después de la **primera iteración**, tenemos:

$$
\mathbf{x}^{(1)} = \begin{bmatrix}
\frac{1}{3} \\
1 \\
0
\end{bmatrix}
$$

#### Iteración 2

Ahora usamos los valores de $\mathbf{x}^{(1)}$ para calcular $\mathbf{x}^{(2)}$:

1. **Calcular $x_1^{(2)}$:**

   $$
   x_1^{(2)} = \frac{1}{3} \left( 1 - (1 \cdot 1 + (-2) \cdot 0) \right) = \frac{1}{3} \left( 1 - 1 \right) = 0
   $$

2. **Calcular $x_2^{(2)}$:**

   $$
   x_2^{(2)} = \frac{1}{-2} \left( -2 - (2 \cdot \frac{1}{3} + 4 \cdot 0) \right) = \frac{1}{-2} \left( -2 - \frac{2}{3} \right) = \frac{1}{-2} \times \left( -\frac{8}{3} \right) = \frac{4}{3}
   $$

3. **Calcular $x_3^{(2)}$:**

   $$
   x_3^{(2)} = \frac{1}{-1} \left( 0 - (-1 \cdot \frac{1}{3} + \frac{1}{2} \cdot 1) \right) = \frac{1}{-1} \left( 0 + \frac{1}{3} - \frac{1}{2} \right)
   $$

   $$
   x_3^{(2)} = \frac{1}{-1} \times \left( -\frac{1}{6} \right) = \frac{1}{6}
   $$

Después de la **segunda iteración**, tenemos:

$$
\mathbf{x}^{(2)} = \begin{bmatrix}
0 \\
\frac{4}{3} \\
\frac{1}{6}
\end{bmatrix}
$$

#### Iteración 3

Usamos $\mathbf{x}^{(2)}$ para calcular $\mathbf{x}^{(3)}$:

1. **Calcular $x_1^{(3)}$:**

   $$
   x_1^{(3)} = \frac{1}{3} \left( 1 - (1 \cdot \frac{4}{3} + (-2) \cdot \frac{1}{6}) \right) = \frac{1}{3} \left( 1 - \frac{4}{3} + \frac{1}{3} \right) = \frac{1}{3} \times \left( -\frac{2}{3} \right) = -\frac{2}{9}
   $$

2. **Calcular $x_2^{(3)}$:**

   $$
   x_2^{(3)} = \frac{1}{-2} \left( -2 - (2 \cdot 0 + 4 \cdot \frac{1}{6}) \right) = \frac{1}{-2} \left( -2 - \frac{2}{3} \right) = \frac{1}{-2} \times \left( -\frac{8}{3} \right) = \frac{4}{3}
   $$

3. **Calcular $x_3^{(3)}$:**

   $$
   x_3^{(3)} = \frac{1}{-1} \left( 0 - (-1 \cdot \frac{4}{3} + \frac{1}{2} \cdot \frac{4}{3}) \right) = \frac{1}{-1} \times \left( \frac{4}{3} - \frac{2}{3} \right) = \frac{2}{3}
   $$

Después de la **tercera iteración**, tenemos:

$$
\mathbf{x}^{(3)} = \begin{bmatrix}
-\frac{2}{9} \\
\frac{4}{3} \\
\frac{2}{3}
\end{bmatrix}
$$

#### Iteración 4

Por último, usamos $\mathbf{x}^{(3)}$ para calcular $\mathbf{x}^{(4)}$:

1. **Calcular $x_1^{(4)}$:**

   $$
   x_1^{(4)} = \frac{1}{3} \left( 1 - (1 \cdot \frac{4}{3} + (-2) \cdot \frac{2}{3}) \right) = \frac{1}{3} \left( 1 - \frac{4}{3} + \frac{4}{3} \right) = \frac{1}{3} \times 1 = \frac{1}{3}
   $$

2. **Calcular $x_2^{(4)}$:**

   $$
   x_2^{(4)} = \frac{1}{-2} \left( -2 - (2 \cdot -\frac{2}{9} + 4 \cdot \frac{2}{3}) \right) = \frac{1}{-2} \left( -2 + \frac{4}{9} - \frac{8}{3} \right) = \frac{1}{-2} \times \left( -\frac{50}{9} \right) = \frac{25}{9}
   $$

3. **Calcular $x_3^{(4)}$:**

   $$
   x_3^{(4)} = \frac{1}{-1} \left( 0 - (-1 \cdot \frac{4}{3} + \frac{1}{2} \cdot \frac{4}{3}) \right) = \frac{1}{-1} \times \left( \frac{4}{3} - \frac{2}{3} \right) = \frac{2}{3}
   $$




Después de la **cuarta iteración**, tenemos:

$$
\mathbf{x}^{(4)} = \begin{bmatrix}
\frac{1}{3} \\
\frac{25}{9} \\
\frac{2}{3}
\end{bmatrix}
$$


```python
import numpy as np
import matplotlib.pyplot as plt

# Definimos el sistema de ecuaciones en forma de matriz A y vector b
A = np.array([[3, 1, -2],
              [2, -2, 4],
              [-1, 1/2, -1]])

b = np.array([1, -2, 0])

# Definimos el número de iteraciones
iterations = 4

# Inicializamos el vector de soluciones con ceros
x = np.zeros_like(b, dtype=np.float64)

# Guardamos las soluciones de cada iteración para graficarlas
x_values = []

# Método de Jacobi
for k in range(iterations):
    x_new = np.copy(x)  # Copiar el valor de x para la nueva iteración

    # Calculamos cada valor de x_i para la iteración k
    for i in range(len(A)):
        sum_terms = np.dot(A[i], x) - A[i][i] * x[i]
        x_new[i] = (b[i] - sum_terms) / A[i][i]

    x = np.copy(x_new)  # Actualizamos x para la siguiente iteración
    x_values.append(x.copy())  # Guardamos el valor de x en esta iteración

    # Imprimimos los resultados en consola
    print(f"Iteración {k + 1}: x = {x}")

# Graficamos las soluciones en función de las iteraciones
x_values = np.array(x_values)

plt.figure(figsize=(10, 6))
for i in range(len(b)):
    plt.plot(range(1, iterations + 1), x_values[:, i], label=f"x{i + 1}")
plt.title("Convergencia del Método de Jacobi")
plt.xlabel("Iteraciones")
plt.ylabel("Valor de las incógnitas")
plt.legend()
plt.grid(True)
plt.show()
```

```bash
Iteración 1: x = [ 0.33333333  1.         -0.        ]
Iteración 2: x = [0.         1.33333333 0.16666667]
Iteración 3: x = [3.70074342e-17 1.33333333e+00 6.66666667e-01]
Iteración 4: x = [0.33333333 2.33333333 0.66666667]
```

## Grafica
  ![Texto alternativo](/src/assets/images/jacobi.png)

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/Q6BdR45uo7I"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
 Matriz inversa método del adjunto - cofactores | Ejemplo 1 (Canal: Matemáticas profe Alex)
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
El método de Jacobi es un método iterativo utilizado para resolver sistemas de ecuaciones lineales, especialmente cuando la matriz del sistema es diagonalmente dominante. La simplicidad de este algoritmo es una de sus características más destacadas, ya que solo requiere cálculos sencillos y es fácil de implementar, lo que lo convierte en una excelente opción para sistemas grandes y dispersos.

Su relevancia radica en que, aunque no es el método más eficiente en términos de velocidad de convergencia, su sencillez y la facilidad con la que se puede aplicar a sistemas grandes y dispersos lo hacen un paso crucial en la teoría de métodos iterativos. Se utiliza comúnmente en la simulación de sistemas físicos y en modelos computacionales en los que las matrices son grandes y complejas (Saad, 2003).

Saad, Y. (2003). Iterative Methods for Sparse Linear Systems (2nd ed.). Society for Industrial and Applied Mathematics (SIAM).
