---
title: "Metodo de la inversa"
description: "Técnica para resolver sistemas lineales usando la matriz inversa de los coeficientes. Útil cuando se requiere resolver varios sistemas con la misma matriz"

pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Inversa
---

<figure>
  <img
    src="https://totumat.com/wp-content/uploads/2020/06/9-10-matriz-inversa-cramer.png?w=810"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://totumat.com/2020/06/27/matriz-inversa-regla-de-cramer/">totumat</a>
  </figcaption>
</figure>


## Historia 
El método de la inversa consiste en encontrar la matriz inversa de la matriz de coeficientes de un sistema de ecuaciones lineales para resolver dicho sistema. Este enfoque se basa en conceptos fundamentales del álgebra lineal desarrollados en el siglo XIX.

Aunque no se atribuye a un único autor, el desarrollo y formalización de la teoría de matrices y sus propiedades, incluida la inversa, fueron impulsados por matemáticos como Arthur Cayley y James Joseph Sylvester. El método es especialmente útil cuando se requiere resolver múltiples sistemas con la misma matriz de coeficientes.

## Funciones del Método de la Inversa

El método de la inversa es una técnica utilizada para resolver sistemas de ecuaciones lineales de la forma $Ax = b$, donde $A$ es una matriz cuadrada, $x$ es el vector de incógnitas y $b$ es el vector de términos independientes. Este método se fundamenta en la propiedad de que, si existe una matriz inversa de $A$, entonces la solución del sistema se obtiene multiplicando dicha inversa por el vector $b$:

$$
x = A^{-1}b
$$


###  Matriz Inversa

La matriz inversa de $A$, denotada como $A^{-1}$, es aquella que cumple con la propiedad:

$$
A A^{-1} = A^{-1}A = I
$$

Donde $I$ es la matriz identidad del mismo tamaño que $A$.


###  Condiciones para Existencia

Para que una matriz $A$ sea invertible:

* Debe ser cuadrada ($n \times n$).
* Su determinante ($\det(A)$) debe ser diferente de cero.

Si alguna de estas condiciones no se cumple, el método de la inversa no es aplicable.

### Ventajas y Desventajas

#### Ventajas:

* Permite encontrar la solución de un sistema en un solo paso.
* Es útil para entender el comportamiento del sistema lineal.

#### Desventajas:

* Computacionalmente costoso para matrices grandes.
* Si la matriz es mal condicionada, la solución puede ser inexacta.

## Pasos para Resolver un Sistema de Ecuaciones con el Método de la Inversa

A continuación, se describen los pasos necesarios para resolver un sistema de ecuaciones lineales $Ax = b$ utilizando el método de la inversa:


### Verificar que la Matriz $A$ es Invertible

* Antes de proceder, es fundamental comprobar que $A$ sea cuadrada ($n \times n$) y que su determinante sea distinto de cero ($\det(A) \neq 0$).
* Si el determinante es cero, el sistema no tiene solución única y el método no es aplicable.


###  Calcular la Matriz Inversa $A^{-1}$

* Si se verifica que $A$ es invertible, el siguiente paso es encontrar su inversa.
* Existen distintos métodos para calcular $A^{-1}$, como:

  * **Método de Gauss-Jordan**
  * **Método de Cofactores**
  * **Descomposición LU**



###  Multiplicar la Inversa por el Vector de Términos Independientes

* Una vez que tenemos la matriz inversa, se multiplica por el vector $b$:

$$
x = A^{-1}b
$$



### Interpretar los Resultados

* El resultado obtenido es el vector solución del sistema, que contiene los valores de cada incógnita.
* Si la matriz está mal condicionada (número de condición alto), la solución puede ser inexacta.





## Ejemplo Resuelto — Método de la Inversa para un Sistema 3x3

Vamos a resolver el siguiente sistema de ecuaciones lineales utilizando el **método de la inversa**:

$$
2x_1 + 3x_2 + x_3 = 1
$$

$$
4x_1 + x_2 + 2x_3 = 2
$$

$$
3x_1 + 2x_2 + 3x_3 = 3
$$



### Representación en Forma Matricial

Primero, representamos el sistema en forma matricial:

$$
A = \begin{pmatrix} 
2 & 3 & 1 \\ 
4 & 1 & 2 \\ 
3 & 2 & 3 
\end{pmatrix}, \quad 
x = \begin{pmatrix} 
x_1 \\ 
x_2 \\ 
x_3 
\end{pmatrix}, \quad 
b = \begin{pmatrix} 
1 \\ 
2 \\ 
3 
\end{pmatrix}
$$


### Calcular el Determinante de $A$

Para saber si la matriz es invertible, calculamos su determinante:

$$
\det(A) = 2 \cdot \det\begin{vmatrix} 1 & 2 \\ 2 & 3 \end{vmatrix} - 3 \cdot \det\begin{vmatrix} 4 & 2 \\ 3 & 3 \end{vmatrix} + 1 \cdot \det\begin{vmatrix} 4 & 1 \\ 3 & 2 \end{vmatrix}
$$

Calculamos los determinantes menores:

$$
= 2 \cdot (1 \cdot 3 - 2 \cdot 2) - 3 \cdot (4 \cdot 3 - 2 \cdot 3) + 1 \cdot (4 \cdot 2 - 1 \cdot 3)
$$

$$
= 2 \cdot (3 - 4) - 3 \cdot (12 - 6) + 1 \cdot (8 - 3)
$$

$$
= 2(-1) - 3(6) + 5 = -2 - 18 + 5 = -15
$$

Como el determinante es diferente de cero, la matriz es invertible.


### Calcular la Matriz Adjunto y la Inversa

La matriz adjunta se calcula determinando los cofactores de cada elemento, y luego transponiéndolos.

La inversa de $A$ se calcula como:

$$
A^{-1} = \frac{1}{\det(A)} \cdot \operatorname{Adj}(A)
$$

Tras realizar los cálculos, la inversa queda de la forma:

$$
A^{-1} = \frac{1}{-15} \cdot \begin{pmatrix} 
3 & -4 & 1 \\ 
-12 & 6 & 6 \\ 
5 & -2 & -7 
\end{pmatrix}
$$



###  Multiplicar la Inversa por el Vector $b$

Ahora multiplicamos $A^{-1}$ por el vector $b$:

$$
x = A^{-1}b = \frac{1}{-15} \cdot \begin{pmatrix} 
3 & -4 & 1 \\ 
-12 & 6 & 6 \\ 
5 & -2 & -7 
\end{pmatrix} \cdot \begin{pmatrix} 
1 \\ 
2 \\ 
3 
\end{pmatrix}
$$

Realizamos la multiplicación de matrices:

$$
x = \frac{1}{-15} \cdot \begin{pmatrix} 
3(1) + (-4)(2) + 1(3) \\ 
-12(1) + 6(2) + 6(3) \\ 
5(1) + (-2)(2) + (-7)(3) 
\end{pmatrix}
$$

$$
x = \frac{1}{-15} \cdot \begin{pmatrix} 
3 - 8 + 3 \\ 
-12 + 12 + 18 \\ 
5 - 4 - 21 
\end{pmatrix}
$$

$$
x = \frac{1}{-15} \cdot \begin{pmatrix} 
-2 \\ 
18 \\ 
-20 
\end{pmatrix}
$$


###  Solución Final

Simplificamos cada elemento:

$$
x_1 = \frac{-2}{-15} = \frac{2}{15}, \quad x_2 = \frac{18}{-15} = -\frac{6}{5}, \quad x_3 = \frac{-20}{-15} = \frac{4}{3}
$$



La solución al sistema es:

$$
x = \begin{pmatrix} 
\frac{2}{15} \\ 
-\frac{6}{5} \\ 
\frac{4}{3} 
\end{pmatrix}
$$

## Ejemplo en python

```python
import numpy as np
import matplotlib.pyplot as plt

# Definición de la matriz A y el vector b
A = np.array([[2, 3, 1],
              [4, 1, 2],
              [3, 2, 3]])

b = np.array([1, 2, 3])

# Verificar si la matriz es invertible
det_A = np.linalg.det(A)
if det_A == 0:
    print("La matriz no es invertible.")
else:
    # Cálculo de la inversa
    A_inv = np.linalg.inv(A)

    # Solución del sistema x = A^-1 * b
    x = np.dot(A_inv, b)

    print("Solución del sistema:")
    print(f"x1 = {x[0]:.4f}")
    print(f"x2 = {x[1]:.4f}")
    print(f"x3 = {x[2]:.4f}")

    # Visualización gráfica de los resultados
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    # Puntos de la solución
    ax.scatter(x[0], x[1], x[2], color='red', label='Solución', s=100)

    # Gráfica de las ecuaciones como planos
    xx, yy = np.meshgrid(range(-10, 10), range(-10, 10))

    # Planos de las ecuaciones
    z1 = (1 - 2 * xx - 3 * yy) / 1
    z2 = (2 - 4 * xx - 1 * yy) / 2
    z3 = (3 - 3 * xx - 2 * yy) / 3

    ax.plot_surface(xx, yy, z1, alpha=0.5, color='blue', label="Ecuación 1")
    ax.plot_surface(xx, yy, z2, alpha=0.5, color='green', label="Ecuación 2")
    ax.plot_surface(xx, yy, z3, alpha=0.5, color='yellow', label="Ecuación 3")

    # Configuración de la gráfica
    ax.set_title("Solución del Sistema 3x3 - Método de la Inversa")
    ax.set_xlabel("x1")
    ax.set_ylabel("x2")
    ax.set_zlabel("x3")
    ax.legend()

    plt.show()
```
## Salida
```bash
Solución del sistema:
x1 = 0.0000
x2 = 0.0000
x3 = 1.0000
```

## Grafica
  ![Texto alternativo](@/assets/images/inversa.png)

## Explicacion visual del metodo de la inversa

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/ZDiZUrfG_MI"
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

El método de la inversa se utiliza para resolver sistemas de ecuaciones lineales mediante el cálculo de la inversa de una matriz, lo cual es útil cuando se tienen matrices cuadradas no singulares. Este enfoque es importante porque transforma el problema de encontrar una solución en un simple producto de matrices, lo cual es particularmente útil en problemas de álgebra lineal que involucran sistemas grandes o complejos.

La relevancia del método de la inversa radica en su versatilidad y su conexión con otras técnicas avanzadas de álgebra matricial, como la descomposición LU. Este método es ampliamente utilizado en aplicaciones que requieren la resolución de sistemas lineales de manera directa, como en ingeniería y física computacional (Horn & Johnson, 2013).

Horn, R. A., & Johnson, C. R. (2013). Matrix Analysis (2nd ed.). Cambridge University Press.


