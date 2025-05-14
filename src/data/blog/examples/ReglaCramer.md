---
title: "Regla de Cramer"
description: "Método utilizado para resolver sistemas de ecuaciones lineales con el mismo número de ecuaciones que de incógnitas, utilizando determinantes. Cada incógnita se calcula como el cociente entre el determinante de una matriz modificada y el determinante de la matriz de coeficientes."

pubDatetime: 2025-05-11T22:46:00Z
author: "Gael Adrian Alvarez Perez"
tags: 
  - Metodo
  - Python
  - Grafica
  - Regla
---
<figure>
  <img
    src="https://glossary.wein.plus/uploads/editor/images/6739/Cramer%20Gabriel.jpg"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://glossary.wein.plus/cramer-gabriel-2">Wein.Plus</a>
  </figcaption>
</figure>

## Historia
La regla de Cramer fue formulada por el matemático suizo Gabriel Cramer en 1750. Este método proporciona una solución explícita para sistemas de ecuaciones lineales utilizando determinantes. Wikipedia

Aunque elegante y teóricamente significativa, la regla de Cramer es computacionalmente ineficiente para sistemas grandes debido al cálculo de múltiples determinantes. Sin embargo, sigue siendo una herramienta valiosa en la enseñanza de álgebra lineal y en la comprensión de la relación entre sistemas de ecuaciones y determinantes.


## Funciones Fundamentales de la Regla de Cramer

###  Función de la Matriz de Coeficientes $A$

La matriz $A$ contiene los coeficientes de las variables en cada ecuación del sistema. En un sistema de $n$ ecuaciones con $n$ incógnitas, se representa como:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{pmatrix}
$$

El determinante de $A$, denotado como $D = \det(A)$, es fundamental para determinar la existencia de solución única. Si $D = 0$, el sistema no tiene solución única.

### Función del Vector de Términos Independientes $b$

El vector $b$ recoge los términos independientes (constantes) de cada ecuación y se expresa de la siguiente forma:

$$
b = \begin{pmatrix}
b_1 \\
b_2 \\
\vdots \\
b_n
\end{pmatrix}
$$

Este vector es utilizado para construir las matrices auxiliares que permiten determinar las soluciones.

### Función para el Cálculo del Determinante de la Matriz $A

Antes de aplicar la Regla de Cramer, es esencial calcular el determinante de la matriz de coeficientes:

$$
D = \det(A)
$$

Este valor confirma que el sistema tiene una solución única siempre que $D \neq 0$.


### Función para la Construcción de las Matrices $A_i$

Para cada variable $x_i$, se forma una matriz $A_i$ que se obtiene reemplazando la $i$-ésima columna de $A$ por el vector $b$. La construcción de la matriz $A_i$ se resume en:

$$
A_i = [a_1, \dots, b, \dots, a_n]
$$

donde el vector $b$ ocupa la posición de la $i$-ésima columna.

### Función para el Cálculo de los Determinantes $D_i$

Una vez obtenida la matriz $A_i$, se calcula su determinante:

$$
D_i = \det(A_i)
$$

Este determinante se utiliza para determinar el valor de la variable $x_i$.

### 6. Función para Obtener la Solución del Sistema

La solución para cada variable $x_i$ se obtiene mediante la fórmula:

$$
x_i = \frac{D_i}{D}
$$

Al aplicar esta fórmula para cada $i$ (de $1$ a $n$), se obtiene la solución completa del sistema:

$$
x = \left( \frac{D_1}{D}, \frac{D_2}{D}, \dots, \frac{D_n}{D} \right)
$$

### Función Global: Algoritmo de la Regla de Cramer

Integrando todas las funciones anteriores, se puede expresar el método mediante el siguiente pseudocódigo:

```pseudo
function cramer(A, b, n):
    D = det(A)
    if D == 0:
        return "El sistema no tiene solución única."
    x = vector de tamaño n
    for i from 1 to n:
        A_i = sustituir la columna i de A por b
        D_i = det(A_i)
        x[i] = D_i / D
    return x
```

Este algoritmo permite, paso a paso, transformar el sistema de ecuaciones en el cálculo de determinantes, proporcionando de forma directa las soluciones de cada incógnita.
<br>

## Pasos para Resolver un Sistema de Ecuaciones con la Regla de Cramer

### Paso 1: Definir el Sistema de Ecuaciones

Escribe el sistema en su forma estándar. Por ejemplo, para un sistema de $n$ ecuaciones con $n$ incógnitas:

- $a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1$  
- $a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2$  
- $\vdots$  
- $a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n$

Este formato permite identificar claramente cada coeficiente y término independiente.

### Paso 2: Construir la Matriz de Coeficientes $A$ y el Vector de Términos Independientes $b$

Representa el sistema en forma matricial:

- La matriz de coeficientes es  
  $$
  A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} \end{pmatrix}
  $$

El vector de términos independientes es  
  $$
  b = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}
  $$

Esta representación es fundamental para aplicar el método de Cramer.


### Paso 3: Calcular el Determinante $D$ de la Matriz $A$

Determina el valor del determinante:

$$
D = \det(A)
$$

Verifica que $D \neq 0$. Si $D = 0$, el sistema no tiene solución única y la Regla de Cramer no es aplicable.


### Paso 4: Construir las Matrices $A_i$

Para cada variable $x_i$, genera la matriz $A_i$ sustituyendo la $i$-ésima columna de $A$ por el vector $b$. Es decir, para cada $i$:

$$
A_i = \big[ a_1, \dots, b, \dots, a_n \big]
$$

donde el vector $b$ reemplaza la columna correspondiente a $x_i$.

### Paso 5: Calcular los Determinantes $D_i$

Calcula el determinante de cada matriz $A_i$:

 $$
 D_i = \det(A_i)
 $$

Este paso se realiza para cada variable del sistema.


### Paso 6: Hallar la Solución del Sistema

Utiliza la fórmula de Cramer para obtener cada variable:

 $$
 x_i = \frac{D_i}{D}
 $$

Realiza este cálculo para $i = 1, 2, \ldots , n$, obteniendo así la solución completa del sistema.



### Paso 7: Presentar el Resultado

Organiza la solución en forma de vector:

$$
 x = \begin{pmatrix} \frac{D_1}{D} \\ \frac{D_2}{D} \\ \vdots \\ \frac{D_n}{D} \end{pmatrix}
$$ 

Este vector representa la solución exacta del sistema, siempre que se cumpla que $D \neq 0$.
<br>
 ## Ejemplo de Aplicación de la Regla de Cramer

Veamos cómo resolver un sistema de ecuaciones lineales utilizando la Regla de Cramer. Consideremos el siguiente sistema de ecuaciones:

$$
2x + 3y = 5
$$

$$
4x - y = 6
$$

### Paso 1: Construcción de la Matriz de Coeficientes $A$ y el Vector $b$

La matriz de coeficientes $A$ es:

$$
A = \begin{pmatrix} 2 & 3 \\ 4 & -1 \end{pmatrix}
$$

El vector de términos independientes es:

$$
b = \begin{pmatrix} 5 \\ 6 \end{pmatrix}
$$


### Paso 2: Cálculo del Determinante $D$

Calculamos el determinante de $A$:

$$
D = \begin{vmatrix} 2 & 3 \\ 4 & -1 \end{vmatrix}
= (2 \cdot (-1)) - (3 \cdot 4)
= -2 - 12 = -14
$$

Como $D \neq 0$, el sistema tiene solución única.


### Paso 3: Construcción de las Matrices $A_x$ y $A_y$

La matriz $A_x$ se forma sustituyendo la primera columna de $A$ con el vector $b$:

$$
A_x = \begin{pmatrix} 5 & 3 \\ 6 & -1 \end{pmatrix}
$$

La matriz $A_y$ se forma sustituyendo la segunda columna de $A$ con el vector $b$:

$$
A_y = \begin{pmatrix} 2 & 5 \\ 4 & 6 \end{pmatrix}
$$


### Paso 4: Cálculo de los Determinantes $D_x$ y $D_y$

Calculamos $D_x$:

$$
D_x = \begin{vmatrix} 5 & 3 \\ 6 & -1 \end{vmatrix}
= (5 \cdot (-1)) - (3 \cdot 6)
= -5 - 18 = -23
$$

Calculamos $D_y$:

$$
D_y = \begin{vmatrix} 2 & 5 \\ 4 & 6 \end{vmatrix}
= (2 \cdot 6) - (5 \cdot 4)
= 12 - 20 = -8
$$


### Paso 5: Cálculo de las Soluciones $x$ y $y$

Aplicamos la Regla de Cramer:

$$
x = \frac{D_x}{D} = \frac{-23}{-14} \approx 1.64
$$

$$
y = \frac{D_y}{D} = \frac{-8}{-14} \approx 0.57
$$

### Paso 6: Presentación del Resultado

La solución del sistema es:

$$
(x, y) \approx (1.64, 0.57)
$$

Esto significa que la intersección de las dos ecuaciones se encuentra en el punto $(1.64, 0.57)$.

## Ejemplo en python
```python
import numpy as np
import matplotlib.pyplot as plt

def cramer_method(A, b):
    """Resuelve un sistema de ecuaciones lineales usando la Regla de Cramer"""
    D = np.linalg.det(A)  # Determinante de la matriz de coeficientes

    if D == 0:
        return "El sistema no tiene solución única."

    n = A.shape[0]  # Número de ecuaciones
    x = np.zeros(n)  # Vector solución

    for i in range(n):
        Ai = A.copy()  # Copia de la matriz A
        Ai[:, i] = b  # Sustitución de la columna i por el vector b
        Di = np.linalg.det(Ai)  # Determinante de la nueva matriz
        x[i] = Di / D  # Aplicación de la Regla de Cramer

    return x

# Definimos la matriz de coeficientes y el vector de términos independientes
A = np.array([[2, 3], [4, -1]], dtype=float)
b = np.array([5, 6], dtype=float)

# Calculamos la solución
solution = cramer_method(A, b)
print("Solución del sistema:", solution)

# Graficación
x_vals = np.linspace(-2, 5, 400)

# Despejamos y de cada ecuación para graficar
# Ecuación 1: 2x + 3y = 5 → y = (5 - 2x)/3
y1 = (b[0] - A[0, 0] * x_vals) / A[0, 1]
# Ecuación 2: 4x - y = 6 → y = 4x - 6
y2 = (b[1] - A[1, 0] * x_vals) / A[1, 1]

plt.figure(figsize=(8, 6))
plt.plot(x_vals, y1, label=f'{A[0, 0]}x + {A[0, 1]}y = {b[0]}', color='blue')
plt.plot(x_vals, y2, label=f'{A[1, 0]}x + {A[1, 1]}y = {b[1]}', color='red')
plt.scatter(solution[0], solution[1], color='green', s=100, label=f'Solución ({solution[0]:.2f}, {solution[1]:.2f})')

plt.title('Sistema de Ecuaciones Lineales - Regla de Cramer')
plt.xlabel('x')
plt.ylabel('y')
plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(0, color='black', linewidth=0.5)
plt.grid(color='gray', linestyle='--', linewidth=0.5)
plt.legend()
plt.xlim(-1, 3)
plt.ylim(-2, 4)
plt.show()
```
## Salida
```bash
Solución del sistema: [1.64285714 0.57142857]
```
  ## Grafica 
  ![Texto alternativo](@/assets/images/reglacramer.png)


  # Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/8Vx3KQj7bd0"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   
Solución de un sistema de 3x3 | Determinantes- Cramer 1
 (Canal: Matemáticas profe Alex)
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
La regla de Cramer es un método de resolución de sistemas de ecuaciones lineales que utiliza determinantes de matrices para encontrar las soluciones. Este método es importante porque proporciona una fórmula explícita para las incógnitas en un sistema lineal, lo que lo hace útil en el caso de sistemas pequeños y medianos, especialmente en problemas de geometría y física.

Su relevancia es notable en el sentido de que, aunque es computacionalmente intensivo para sistemas grandes, sigue siendo una herramienta clave en el análisis simbólico y en aplicaciones donde se busca una solución exacta y no aproximada. Su utilidad radica también en la facilidad para implementarlo en situaciones donde se requiere obtener soluciones rápidas (Axler, 2015).

Axler, S. (2015). Linear Algebra Done Right (3rd ed.). Springer.
