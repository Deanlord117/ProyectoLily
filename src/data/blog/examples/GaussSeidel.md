---
title: "Metodo de Gauss-Seidel"
description: "Técnica iterativa para resolver sistemas lineales, que mejora progresivamente la solución al usar los valores más recientes en cada paso. Eficiente en matrices grandes y dispersas."

pubDatetime: 2025-05-03T22:46:00Z
author: "Gael Adrian Alvarez Perez"
tags: 
  - Metodo
  - Python
  - Grafica
  - Gauss
---

<figure>
  <img
    src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1974/production/_103061560_gettyimages-464452373.jpg.webp"
  />
    <figcaption class="text-center">
    Imagen de <a href="http://bbc.com/mundo/noticias-45207968">BBC</a>
  </figcaption>
</figure>


## HISTORIA DE GAUSS SEIDEL
El método de Gauss-Seidel es una mejora del método de Jacobi y fue desarrollado por los matemáticos alemanes Carl Friedrich Gauss (1777–1855) y Philipp Ludwig von Seidel (1821–1896). Este método iterativo se utiliza para resolver sistemas de ecuaciones lineales y se caracteriza por utilizar inmediatamente los valores actualizados de las variables en cada iteración, lo que generalmente conduce a una convergencia más rápida. BYJU'S+1Wikipedia+1Wikipedia

Introducido en el siglo XIX, el método de Gauss-Seidel ha sido ampliamente adoptado en la solución de sistemas lineales, especialmente en problemas de ingeniería y física donde las matrices involucradas son grandes y dispersas. Su eficiencia y facilidad de implementación lo han convertido en una herramienta estándar en métodos numéricos y análisis computacional.

## Funciones del Método de Gauss-Seidel

El método de Gauss-Seidel es un algoritmo iterativo para resolver sistemas de ecuaciones lineales de la forma:

$$
A\vec{x} = \vec{b}
$$

A diferencia de los métodos directos, Gauss-Seidel parte de una **estimación inicial** y refina la solución progresivamente. Su función base se construye a partir de una reformulación de cada ecuación del sistema, aislando una variable a la vez.



#### Aproximación iterativa por componentes

Cada componente $x_i$ se actualiza usando la fórmula:

$$
x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right)
$$

Donde:

* $x_i^{(k+1)}$ es la nueva estimación del valor de la variable $x_i$ en la iteración $k+1$.
* $a_{ij}$ son los coeficientes de la matriz $A$.
* $b_i$ es el término independiente correspondiente a la ecuación $i$.
* Se usan los **valores ya actualizados** de $x_j$ en la iteración $k+1$ para $j < i$, y los **anteriores** $x_j^{(k)}$ para $j > i$.


#### Función de error (criterio de convergencia)

Una función típica para verificar la convergencia es:

$$
\| \vec{x}^{(k+1)} - \vec{x}^{(k)} \| < \varepsilon
$$

Donde $\varepsilon$ es la tolerancia deseada, y $\| \cdot \|$ puede ser la norma infinita (el mayor cambio entre componentes), o la norma euclidiana.

#### Condición para garantizar convergencia

Una propiedad importante para garantizar la convergencia del método es que la matriz $A$ sea **diagonalmente dominante**, es decir:

$$
|a_{ii}| > \sum_{j \ne i} |a_{ij}| \quad \text{para todo } i
$$

Si se cumple esta condición, el método está garantizado a converger para cualquier estimación inicial.

## Cómo se hace el metodo Gauss-Seidel


#### 1. **Escribir el sistema de ecuaciones lineales**

El sistema debe estar en la forma:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\vdots \\
a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nn}x_n = b_n
\end{cases}
$$


#### 2. **Aislar cada variable en su ecuación**

Despeja cada variable $x_i$ de su respectiva ecuación:

$$
x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j \ne i} a_{ij}x_j \right)
$$


#### 3. **Establecer una estimación inicial**

Elige un vector inicial $\vec{x}^{(0)} = [x_1^{(0)}, x_2^{(0)}, \dots, x_n^{(0)}]$. Generalmente se puede usar el vector cero o cualquier otra aproximación razonable.


#### 4. **Actualizar cada variable usando las más recientes**

Para cada iteración $k$, calcula cada variable $x_i^{(k+1)}$ en orden usando:

$$
x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right)
$$

Esto significa que **cada valor actualizado se usa inmediatamente** en el mismo paso.


#### 5. **Verificar el criterio de convergencia**

Después de cada iteración, compara:

$$
\| \vec{x}^{(k+1)} - \vec{x}^{(k)} \| < \varepsilon
$$

Si se cumple para una tolerancia $\varepsilon$ previamente fijada (por ejemplo, $10^{-5}$), se detiene el proceso. De lo contrario, se continúa iterando.


#### 6. **Repetir hasta converger**

Continúa con las iteraciones hasta cumplir el criterio de convergencia o alcanzar un número máximo de iteraciones.


#### Nota técnica

Para que el método converja, es recomendable que la matriz de coeficientes sea **diagonalmente dominante** o **simétrica positiva definida**.


Perfecto. Aquí tienes un ejemplo **escrito completamente**, utilizando el método de **Gauss-Seidel**, paso por paso y con formato matemático claro y directo.

##  Ejemplo: Resolviendo un sistema con Gauss-Seidel

Resolvamos el siguiente sistema de ecuaciones:

$$
\begin{cases}
10x_1 + 2x_2 + x_3 = 9 \\
2x_1 + 20x_2 - 2x_3 = -44 \\
-2x_1 + 3x_2 + 10x_3 = 22
\end{cases}
$$


#### Paso 1: Despejamos cada incógnita

$$
\begin{aligned}
x_1 &= \frac{1}{10}(9 - 2x_2 - x_3) \\
x_2 &= \frac{1}{20}(-44 - 2x_1 + 2x_3) \\
x_3 &= \frac{1}{10}(22 + 2x_1 - 3x_2)
\end{aligned}
$$



#### Paso 2: Estimación inicial

Supongamos:

$$
x_1^{(0)} = 0,\quad x_2^{(0)} = 0,\quad x_3^{(0)} = 0
$$

#### Paso 3: Primera iteración

$$
\begin{aligned}
x_1^{(1)} &= \frac{1}{10}(9 - 2(0) - 0) = 0.9 \\
x_2^{(1)} &= \frac{1}{20}(-44 - 2(0.9) + 2(0)) = \frac{-44 - 1.8}{20} = -2.29 \\
x_3^{(1)} &= \frac{1}{10}(22 + 2(0.9) - 3(-2.29)) = \frac{22 + 1.8 + 6.87}{10} = 3.07
\end{aligned}
$$


#### Paso 4: Segunda iteración

$$
\begin{aligned}
x_1^{(2)} &= \frac{1}{10}(9 - 2(-2.29) - 3.07) = \frac{9 + 4.58 - 3.07}{10} = 1.051 \\
x_2^{(2)} &= \frac{1}{20}(-44 - 2(1.051) + 2(3.07)) = \frac{-44 - 2.102 + 6.14}{20} = -2.298 \\
x_3^{(2)} &= \frac{1}{10}(22 + 2(1.051) - 3(-2.298)) = \frac{22 + 2.102 + 6.894}{10} = 3.100
\end{aligned}
$$


Puedes seguir iterando hasta que la diferencia entre los vectores $\vec{x}^{(k+1)}$ y $\vec{x}^{(k)}$ sea menor que una tolerancia establecida, por ejemplo, $\varepsilon = 10^{-4}$.

## Ejemplo en python

```python
import numpy as np
import matplotlib.pyplot as plt

# Sistema de ecuaciones:
# 10x1 + 2x2 + x3 = 9
# 2x1 + 20x2 - 2x3 = -44
# -2x1 + 3x2 + 10x3 = 22

# Coeficientes
A = np.array([[10, 2, 1],
              [2, 20, -2],
              [-2, 3, 10]], dtype=float)

# Vector de constantes
b = np.array([9, -44, 22], dtype=float)

# Estimación inicial
x = np.zeros_like(b)

# Tolerancia y máximo de iteraciones
tol = 1e-4
max_iter = 25

# Lista para almacenar la evolución de las soluciones
x_hist = [x.copy()]

for _ in range(max_iter):
    x_new = np.copy(x)
    for i in range(A.shape[0]):
        s1 = sum(A[i][j] * x_new[j] for j in range(i))
        s2 = sum(A[i][j] * x[j] for j in range(i + 1, A.shape[1]))
        x_new[i] = (b[i] - s1 - s2) / A[i][i]
    x_hist.append(x_new.copy())
    if np.linalg.norm(x_new - x, ord=np.inf) < tol:
        break
    x = x_new

# Convertimos la historia en un array para graficar
x_hist = np.array(x_hist)

# Gráfica
plt.figure(figsize=(10, 6))
plt.plot(x_hist[:, 0], label='x1')
plt.plot(x_hist[:, 1], label='x2')
plt.plot(x_hist[:, 2], label='x3')
plt.xlabel('Iteración')
plt.ylabel('Valor de x')
plt.title('Convergencia del método de Gauss-Seidel')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

```
## Salida
```bash
[ 1.0000003  -1.99999973  2.99999998]
```

## Grafica
  ![Texto alternativo](/src/assets/images/Seidel.png)

## Explicación visual del Metodo de Gauss Seidel

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/HLciIeXcIhc"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
Ejemplo del método de Gauss-Seidel (Canal: Tarefa)
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

Claro, aquí te va una conclusión corta, directa y con flow tradicional:


## Conclusión:
**Conclusión del método de Gauss-Seidel**

El método de Gauss-Seidel es otro algoritmo iterativo utilizado para resolver sistemas lineales, pero a diferencia de Jacobi, mejora la velocidad de convergencia al actualizar las soluciones inmediatamente después de calcularlas. Este método es ampliamente utilizado en aplicaciones de ingeniería, física y matemáticas, donde los sistemas de ecuaciones lineales aparecen con frecuencia.

La relevancia del método de Gauss-Seidel es que, a pesar de su simplicidad, ofrece una convergencia más rápida que el método de Jacobi en muchos casos, especialmente en sistemas de ecuaciones con matrices diagonales dominantes. Su uso es crucial en la resolución de grandes sistemas de ecuaciones lineales que se encuentran en simulaciones numéricas y modelado de fenómenos físicos (Conte & de Boor, 1980).

Conte, S. D., & de Boor, C. (1980). Elementary Numerical Analysis: An Algorithmic Approach (3rd ed.). McGraw-Hill.



