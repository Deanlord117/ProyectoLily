---
title: "Eliminacion gaussinana"
description: "Procedimiento sistemático para resolver sistemas de ecuaciones lineales, transformando la matriz en una forma escalonada mediante operaciones elementales. Preciso y fundamental en álgebra lineal."

pubDatetime: 2025-05-08T22:46:00Z
author: "Gael Adrian Alvarez Perez"
tags:
  - Metodo
  - Python
  - Grafica
  - Gauss
---


<figure>
  <img
    src="https://totumat.com/wp-content/uploads/2020/11/9-17-sistemas-de-ecuaciones-gauss-jordan.png?w=810"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://totumat.com/tag/metodo-de-eliminacion-gaussiana/">totuman</a>
  </figcaption>
</figure>

## Historia de la Eliminacion Guassiana
La eliminación gaussiana es un procedimiento algorítmico para resolver sistemas de ecuaciones lineales. Aunque el método es atribuido a Carl Friedrich Gauss, sus raíces se remontan a la antigua China, específicamente al texto matemático Los Nueve Capítulos sobre el Arte Matemático, compilado alrededor del siglo I a.C. En este texto, se describen procedimientos similares para resolver sistemas de ecuaciones lineales. ScienceDirect

Gauss formalizó y popularizó el método en el siglo XIX, aplicándolo en sus trabajos de astronomía y geodesia. Su enfoque sistemático permitió resolver sistemas de ecuaciones de gran tamaño, siendo fundamental para el desarrollo de la matemática computacional.


### Funciones de la Eliminacion Gaussiana

La eliminación gaussiana puede verse no solo como un algoritmo, sino como una serie de transformaciones que preservan la solución del sistema, pero lo reescriben de una forma más manejable. A nivel teórico, se pueden identificar estas "funciones" o ideas clave:

 **Invarianza de soluciones bajo transformaciones lineales**

$$
f([A | \vec{b}]) \rightarrow [A' | \vec{b}']
$$

Esta función representa el principio de que aplicar operaciones elementales sobre las filas del sistema no cambia su solución. Es decir:

$$
\text{Si } A \vec{x} = \vec{b} \Rightarrow A' \vec{x} = \vec{b}'
$$

donde $A'$ y $\vec{b}'$ son el resultado de aplicar transformaciones que son **equivalencias de fila**.

**Triangulación como reducción de complejidad**

$$
g(A) \rightarrow U
$$

Aquí, la matriz $A$ se transforma en una matriz triangular superior $U$, lo cual reduce la complejidad del sistema de $O(n^3)$ (resolviendo un sistema general) a una serie de sustituciones simples.


 **Supresión de dependencias lineales**

Cada paso de eliminación busca eliminar una variable de una ecuación, reflejando la idea de que las variables están **linealmente relacionadas**. Así:

$$
x_j \text{ se elimina de la ecuación } i \Rightarrow \text{proyección de la ecuación en un subespacio de menor dimensión}
$$


 **Equilibrio estructural del sistema**

El método asegura que si el sistema tiene solución, esta será única si el rango de $A$ es máximo, y la matriz no es singular. Es decir:

$$
\text{Si } \det(A) \neq 0 \Rightarrow \text{solución única}
$$


**Función de sustitución hacia atrás como reconstrucción**

$$
x_i = h(b'_i, a'_{ij}, x_{i+1}, x_{i+2}, \dots, x_n)
$$

La sustitución hacia atrás es una función acumulativa que reconstituye el vector solución desde la última ecuación hacia la primera. Cada valor de $x_i$ depende de los ya obtenidos:

**Perspectiva geométrica**

Cada ecuación es un hiperplano. La eliminación gaussiana busca la **intersección única** de esos hiperplanos:

$$
\bigcap_{i=1}^n H_i = \{ \vec{x} \}
$$

donde cada $H_i$ es el conjunto solución de una ecuación lineal. 


Perfecto. Aquí tienes una versión más seria, clara y enfocada exclusivamente en el **proceso de la eliminación gaussiana**, tal como aparecería en un blog educativo con un tono formal y técnico:



## Cómo se hace la Eliminacion Gaussiana

La eliminación gaussiana es un método algorítmico utilizado para resolver sistemas de ecuaciones lineales. Consiste en aplicar una serie de operaciones elementales sobre las filas de una matriz aumentada hasta obtener una forma escalonada, desde la cual se puede encontrar la solución mediante sustitución hacia atrás.

A continuación, se describe el procedimiento paso a paso.


####  Representación matricial

Dado un sistema de $n$ ecuaciones con $n$ incógnitas:

$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
\vdots \\
a_{n1}x_1 + a_{n2}x_2 + \cdots + a_{nn}x_n &= b_n
\end{aligned}
$$

Se construye la **matriz aumentada** del sistema:

$$
[A | \vec{b}] = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} & | & b_1 \\
a_{21} & a_{22} & \cdots & a_{2n} & | & b_2 \\
\vdots & \vdots & \ddots & \vdots & | & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn} & | & b_n \\
\end{bmatrix}
$$



####  Reducción a forma escalonada

El objetivo es transformar la matriz aumentada en una **forma triangular superior** (o forma escalonada por filas). Para ello, se realizan operaciones elementales sobre las filas:

* Intercambio de dos filas.
* Multiplicación de una fila por un número distinto de cero.
* Suma de un múltiplo de una fila a otra fila.

#### Para cada columna $j = 1$ hasta $n-1$:

* **Seleccionar un pivote**: Si $a_{jj} = 0$, se intercambian filas para colocar un valor distinto de cero en la posición $(j,j)$.
* **Eliminar los coeficientes por debajo del pivote**:
   Para cada fila $i > j$, se calcula el multiplicador:

   $$
   m_{ij} = \frac{a_{ij}}{a_{jj}}
   $$

   Luego, se actualiza la fila $i$:

   $$
   F_i \leftarrow F_i - m_{ij} \cdot F_j
   $$

Esto se repite hasta que todos los elementos debajo de la diagonal principal sean cero.

####  Sustitución hacia atrás

Una vez que la matriz se encuentra en forma triangular superior, se procede a resolver el sistema mediante **sustitución hacia atrás**, empezando desde la última ecuación:

$$
x_n = \frac{b_n'}{a_{nn}'}
$$

Luego, para $i = n-1, n-2, \dots, 1$:

$$
x_i = \frac{1}{a_{ii}'} \left( b_i' - \sum_{j=i+1}^{n} a_{ij}' x_j \right)
$$

Cada variable se resuelve utilizando los valores ya calculados de las variables posteriores.


#### Consideraciones especiales

Durante el proceso pueden surgir los siguientes casos:

* **Fila inconsistente**:

  $$
  0\quad 0\quad \cdots \quad 0 \quad | \quad c \quad (c \neq 0)
  $$

  El sistema no tiene solución (inconsistente).

* **Fila completamente nula**:

  $$
  0\quad 0\quad \cdots \quad 0 \quad | \quad 0
  $$

  El sistema tiene infinitas soluciones (dependencia lineal entre ecuaciones).

* **Todos los pivotes distintos de cero**:
  El sistema tiene una única solución.


### Ejemplo: Resolución de un Sistema de Ecuaciones Lineales mediante Eliminación Gaussiana

Consideremos el siguiente sistema de ecuaciones:

$$
\begin{aligned}
x + 2y - z &= 8 \\
2x + y + 3z &= 7 \\
3x - y + 2z &= 5
\end{aligned}
$$

Este sistema lo representamos con su **matriz aumentada**:

$$
\left[
\begin{array}{ccc|c}
1 & 2 & -1 & 8 \\
2 & 1 & 3 & 7 \\
3 & -1 & 2 & 5
\end{array}
\right]
$$



### *Paso 1: Reducción a forma triangular*

#### **Primera columna:**

El primer elemento $a_{11} = 1$ es nuestro **pivote**. Ahora eliminamos los elementos debajo de él.

  **Para la fila 2 ($i = 2$), calculamos el multiplicador:**

$$
m_{21} = \frac{a_{21}}{a_{11}} = \frac{2}{1} = 2
$$

Restamos 2 veces la fila 1 de la fila 2:

$$
F_2 \leftarrow F_2 - 2F_1
$$

Esto da como resultado:

$$
\left[
\begin{array}{ccc|c}
1 & 2 & -1 & 8 \\
0 & -3 & 5 & -9 \\
3 & -1 & 2 & 5
\end{array}
\right]
$$

**Para la fila 3 ($i = 3$), calculamos el multiplicador:**

$$
m_{31} = \frac{a_{31}}{a_{11}} = \frac{3}{1} = 3
$$

Restamos 3 veces la fila 1 de la fila 3:

$$
F_3 \leftarrow F_3 - 3F_1
$$

Esto da como resultado:

$$
\left[
\begin{array}{ccc|c}
1 & 2 & -1 & 8 \\
0 & -3 & 5 & -9 \\
0 & -7 & 5 & -19
\end{array}
\right]
$$

#### **Segunda columna:**

El siguiente pivote es $a_{22} = -3$. Ahora, eliminamos el elemento debajo de él.

**Para la fila 3 ($i = 3$), calculamos el multiplicador:**

$$
m_{32} = \frac{a_{32}}{a_{22}} = \frac{-7}{-3} = \frac{7}{3}
$$

Restamos $\frac{7}{3}$ veces la fila 2 de la fila 3:

$$
F_3 \leftarrow F_3 - \left(\frac{7}{3}\right)F_2
$$

Esto da como resultado:

$$
\left[
\begin{array}{ccc|c}
1 & 2 & -1 & 8 \\
0 & -3 & 5 & -9 \\
0 & 0 & -\frac{10}{3} & -\frac{47}{3}
\end{array}
\right]
$$


### **Paso 2: Sustitución hacia atrás**

Ya que la matriz está en forma triangular superior, podemos resolver el sistema.

**De la tercera fila:**

$$
-\frac{10}{3}z = -\frac{47}{3}
$$

Despejamos $z$:

$$
z = \frac{47}{10}
$$

**De la segunda fila:**

$$
-3y + 5z = -9
$$

Sustituimos $z = \frac{47}{10}$:

$$
-3y + 5\left(\frac{47}{10}\right) = -9
$$

$$
-3y + \frac{235}{10} = -9
$$

Multiplicamos por 10 para eliminar fracciones:

$$
-30y + 235 = -90
$$

Despejamos $y$:

$$
-30y = -90 - 235
$$

$$
-30y = -325
$$

$$
y = \frac{325}{30} = \frac{65}{6}
$$

**De la primera fila:**

$$
x + 2y - z = 8
$$

Sustituimos $y = \frac{65}{6}$ y $z = \frac{47}{10}$:

$$
x + 2\left(\frac{65}{6}\right) - \frac{47}{10} = 8
$$

Multiplicamos por 30 para eliminar fracciones:

$$
30x + 2(65)(5) - 47(3) = 240
$$

Simplificamos:

$$
30x + 650 - 141 = 240
$$

$$
30x + 509 = 240
$$

Despejamos $x$:

$$
30x = 240 - 509
$$

$$
30x = -269
$$

$$
x = \frac{-269}{30}
$$



### **Solución Final**

El sistema tiene la siguiente solución:

$$
x = \frac{-269}{30}, \quad y = \frac{65}{6}, \quad z = \frac{47}{10}
$$

## Implementación en código de la Eliminacion Gaussiana

```python
import numpy as np
import matplotlib.pyplot as plt

# Sistema de ecuaciones
A = np.array([[1, 2, -1],
              [2, 1, 3],
              [3, -1, 2]])

b = np.array([8, 7, 5])

# Corregir el tipo de datos de la matriz aumentada a float
def gaussian_elimination(A, b):
    n = len(b)
    Augmented_matrix = np.hstack([A, b.reshape(-1, 1)]).astype(float)  # Convertir a float

    # Paso 1: Reducción a forma triangular superior
    for i in range(n):
        # Hacer el pivote igual a 1
        if Augmented_matrix[i, i] == 0:
            Augmented_matrix[[i, i+1]] = Augmented_matrix[[i+1, i]]  # Intercambio de filas
        for j in range(i+1, n):
            factor = Augmented_matrix[j, i] / Augmented_matrix[i, i]
            Augmented_matrix[j] -= factor * Augmented_matrix[i]

    # Paso 2: Sustitución hacia atrás
    x = np.zeros(n)
    for i in range(n-1, -1, -1):
        x[i] = (Augmented_matrix[i, -1] - np.dot(Augmented_matrix[i, i+1:n], x[i+1:])) / Augmented_matrix[i, i]
    
    return x

# Resolver el sistema
solution = gaussian_elimination(A, b)

# Resultados
x, y, z = solution
print("Solución del sistema de ecuaciones:")
print(f"x = {x}")
print(f"y = {y}")
print(f"z = {z}")

# Graficar las tres ecuaciones
x_vals = np.linspace(-10, 10, 400)
y_vals = np.linspace(-10, 10, 400)
X, Y = np.meshgrid(x_vals, y_vals)
Z1 = 8 - X - 2*Y
Z2 = (7 - 2*X - Y) / 3
Z3 = (5 - 3*X + Y) / 2

fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(X, Y, Z1, color='blue', alpha=0.6, rstride=100, cstride=100)
ax.plot_surface(X, Y, Z2, color='red', alpha=0.6, rstride=100, cstride=100)
ax.plot_surface(X, Y, Z3, color='green', alpha=0.6, rstride=100, cstride=100)

# Puntos de intersección
ax.scatter(x, y, z, color='black', s=100, label='Solución')

ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
ax.set_title('Sistema de Ecuaciones Lineales y su Solución')
ax.legend()

plt.show()

```
### Salida


```bash
Solución del sistema de ecuaciones:
x = 2.7
y = 2.5
z = -0.29999999999999993
```


### Grafica


  ![Texto alternativo](@/assets/images/EliminacionGaussiana.png)

## Explicación visual de la serie de Taylor

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/MsJLRnO2RVA"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   Sistema de ecuaciones de 3x3: Método de eliminación Gaussiana (Canal: Óscar Intriago Cedeño)
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


### Conclusión

La eliminación gaussiana es un método esencial en álgebra lineal para resolver sistemas de ecuaciones lineales. Su importancia radica en su capacidad para transformar cualquier sistema lineal en una forma más sencilla que permita encontrar la solución con mayor facilidad. Es ampliamente utilizado en campos como la ingeniería estructural, la física computacional y la economía, donde los sistemas de ecuaciones son comunes.

El método de eliminación gaussiana es fundamental porque es el punto de partida para otros algoritmos más complejos en álgebra lineal, como la factorización LU. La capacidad para resolver sistemas de ecuaciones de manera sistemática y eficiente lo convierte en una herramienta imprescindible en el análisis de problemas multidimensionales (Lay, 2003).

Lay, D. C. (2003). Linear Algebra and Its Applications (3rd ed.). Addison-Wesley.











