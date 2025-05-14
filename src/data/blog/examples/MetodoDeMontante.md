---
title: "Metodo de Montante"
description: "Un enfoque directo para resolver sistemas de ecuaciones lineales, basado en la matriz aumentada. Consiste en una serie de pasos de eliminación hacia adelante para transformar la matriz en una forma triangular superior, facilitando la solución de las incógnitas."

pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Montante 
---

<figure>
  <img
    src="https://vidauniversitaria.uanl.mx/wp-content/uploads/2019/09/metodo-montante-uanl-rene.jpg"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://metodosnumericos121.wordpress.com/metodo-de-montante/">Vida Universitaria</a>
  </figcaption>
</figure>


## Historia 
El método de Montante, también conocido como método de Bareiss, fue desarrollado por el matemático alemán Erwin Bareiss en 1968. Este algoritmo permite calcular determinantes y resolver sistemas de ecuaciones lineales utilizando solo operaciones enteras, evitando errores de redondeo.

Aunque no es tan ampliamente conocido como otros métodos, el método de Montante es apreciado por su estabilidad numérica y eficiencia en cálculos simbólicos, siendo utilizado en sistemas de álgebra computacional y en contextos donde se requiere precisión exacta.

## Funciones del Método de Montante

El **Método de Montante** es un algoritmo algebraico utilizado para resolver sistemas de ecuaciones lineales mediante una matriz aumentada, sin necesidad de realizar operaciones con fracciones intermedias, lo que minimiza el error numérico y simplifica los cálculos. A continuación, se describen las funciones principales de este método:



#### Transformación de la Matriz Aumentada

El método inicia con una matriz aumentada que representa el sistema de ecuaciones. A través de una secuencia de pasos, se transforma esta matriz en una identidad, lo cual permite encontrar las soluciones del sistema de forma directa.

#### Eliminación de Incógnitas sin Fracciones

Una de las características más destacadas del Método de Montante es que evita la aparición de fracciones durante el proceso de eliminación. Esto se logra utilizando un pivote multiplicativo que normaliza los elementos de la matriz.

####  Uso del Pivote Multiplicativo

En cada iteración, se selecciona un pivote (elemento principal de la diagonal) que permite escalar y modificar el resto de los elementos de la matriz, garantizando que las operaciones sean exactas y sin pérdida de precisión.

#### Actualización de los Elementos de la Matriz

Los elementos de la matriz se actualizan en cada paso usando la siguiente relación:

$$
M_{ij}' = \frac{M_{ij} \cdot P - M_{ik} \cdot M_{kj}}{P_{\text{anterior}}}
$$

Donde:

* $M_{ij}'$ es el nuevo valor en la posición $i, j$.
* $M_{ik}$ y $M_{kj}$ son elementos de la misma fila y columna.
* $P$ es el pivote actual.
* $P_{\text{anterior}}$ es el pivote de la iteración anterior.

#### Verificación y Solución del Sistema

Una vez que la matriz se ha transformado en la identidad, los valores en la columna de resultados representan las soluciones del sistema de ecuaciones.

### Pasos para Resolver un Sistema de Ecuaciones con el Método de Montante

El **Método de Montante** permite resolver sistemas de ecuaciones lineales de forma sistemática y sin fracciones intermedias. A continuación, se detallan los pasos necesarios para aplicar este método correctamente:

####  Construcción de la Matriz Aumentada

Se inicia representando el sistema de ecuaciones lineales en una **matriz aumentada** $[A | B]$, donde $A$ es la matriz de coeficientes y $B$ es el vector de términos independientes.

####  Inicialización del Pivote

El primer pivote ($P$) es el elemento que se encuentra en la posición (1,1) de la matriz. En cada iteración, este pivote se usa para actualizar el resto de los elementos de la matriz.

####  Actualización de los Elementos de la Matriz

Para cada elemento $M_{ij}$ de la matriz, se aplica la siguiente fórmula:

$$
M_{ij}' = \frac{M_{ij} \cdot P - M_{ik} \cdot M_{kj}}{P_{\text{anterior}}}
$$

Donde:

* $P$ es el pivote actual.
* $P_{\text{anterior}}$ es el pivote de la iteración anterior.
* $M_{ik}$ y $M_{kj}$ corresponden a los elementos en la misma fila y columna del pivote.


#### Cambio de Pivote

Una vez actualizados todos los elementos de la matriz, se selecciona un nuevo pivote, que corresponde al siguiente elemento de la diagonal principal.

* Si el pivote es cero, se intercambian filas para evitar errores en el cálculo.


#### Repetición del Proceso

Se repiten los pasos 3 y 4 para cada pivote hasta que la matriz principal se transforme en una **matriz identidad**.



#### Lectura de Resultados

Una vez que la matriz se convierte en identidad, los valores de la columna de resultados representan la solución del sistema de ecuaciones.



### *Ejemplo Método de Montante

Dado el siguiente sistema de ecuaciones lineales:

$$
2x + 3y - z = 5 \\
4x - y + 5z = 6 \\
3x + 2y + 4z = 7
$$

Queremos encontrar los valores de $x, y, z$ aplicando el **Método de Montante**.

### Paso 1: Construcción de la Matriz Aumentada

Primero, construimos la matriz aumentada del sistema, incluyendo el término independiente:

$$
\mathbf{M_0} = 
\begin{pmatrix} 
2 & 3 & -1 & | & 5 \\ 
4 & -1 & 5 & | & 6 \\ 
3 & 2 & 4 & | & 7 
\end{pmatrix}
$$

El pivote inicial ($P_0$) es igual a 1.


### Paso 2: Primer Paso del Método

Aplicamos la fórmula del método de Montante para cada elemento de la matriz:

$$
M_{ij}^{(k)} = \frac{P_{k-1} \cdot M_{ij}^{(k-1)} - M_{ik}^{(k-1)} \cdot M_{kj}^{(k-1)}}{P_{k-1}}
$$

Para el primer pivote $2$, realizamos las operaciones y obtenemos la nueva matriz:

$$
\mathbf{M_1} = 
\begin{pmatrix} 
2 & 3 & -1 & | & 5 \\ 
0 & -7 & 7 & | & -8 \\ 
0 & -5 & 10 & | & -8 
\end{pmatrix}
$$


### Paso 3: Segundo Paso del Método

Ahora el pivote es $-7$, aplicamos nuevamente la fórmula para actualizar la matriz:

$$
\mathbf{M_2} = 
\begin{pmatrix} 
2 & 0 & 2 & | & 1 \\ 
0 & -7 & 7 & | & -8 \\ 
0 & 0 & 35 & | & 40 
\end{pmatrix}
$$


### Paso 4: Tercer Paso del Método

El siguiente pivote es $35$, actualizamos la matriz por última vez:

$$
\mathbf{M_3} = 
\begin{pmatrix} 
70 & 0 & 0 & | & 35 \\ 
0 & -245 & 0 & | & -280 \\ 
0 & 0 & 35 & | & 40 
\end{pmatrix}
$$

Dividimos cada fila por su pivote correspondiente y obtenemos la solución:

$$
x = \frac{35}{70} = 0.5, \quad y = \frac{-280}{-245} = 1.1429, \quad z = \frac{40}{35} = 1.1429
$$


### Resultado Final:

La solución al sistema es:

$$
x = 0.5, \quad y = 1.1429, \quad z = 1.1429
$$


## Ejemplo en python
```python
import numpy as np
import matplotlib.pyplot as plt

# Definición de la matriz aumentada (A|b)
A = np.array([[2, 3, -1],
              [4, -1, 5],
              [3, 2, 4]])

b = np.array([5, 6, 7])

# Inicialización de la matriz aumentada
M = np.hstack((A, b.reshape(-1, 1)))
n = len(b)

# Método de Montante
P = 1  # Pivote inicial
for k in range(n):
    Pk = M[k, k]
    for i in range(n):
        if i != k:
            for j in range(n + 1):
                M[i, j] = (P * M[i, j] - M[i, k] * M[k, j]) / Pk
    P = Pk

# Extracción de la solución
x_sol = M[:, -1] / np.diag(M)
print("Solución del sistema de ecuaciones:")

# Graficar los planos
x = np.linspace(-5, 5, 10)
y = np.linspace(-5, 5, 10)
X, Y = np.meshgrid(x, y)

# Ecuaciones de los planos
Z1 = (5 - 2 * X - 3 * Y) / (-1)
Z2 = (6 - 4 * X + Y) / 5
Z3 = (7 - 3 * X - 2 * Y) / 4

fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(X, Y, Z1, alpha=0.5, rstride=100, cstride=100, color='red', edgecolor='none')
ax.plot_surface(X, Y, Z2, alpha=0.5, rstride=100, cstride=100, color='blue', edgecolor='none')
ax.plot_surface(X, Y, Z3, alpha=0.5, rstride=100, cstride=100, color='green', edgecolor='none')

# Solución encontrada
ax.scatter(*x_sol, color='black', s=50, label='Solución (1.4545, 2.5, 6)')

# Etiquetas y leyendas
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
ax.legend()
plt.show()

x_sol

```

## Salida
```bash
[1.45454545 2.5 6 ]
```
## Grafica
  ![Texto alternativo](/src/assets/images/Montante.png)
  <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/bIZF4uXGd_8"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
    Video explicativo sobre la Interpolación de Lagrange (Canal: Matematicas con Carito)
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
El método de Montante es una variante de la eliminación gaussiana utilizada para resolver sistemas de ecuaciones lineales con un enfoque estructurado. Su importancia radica en que, a diferencia de la eliminación tradicional, este método mantiene la estructura del sistema en todo el proceso, lo que permite obtener la solución de manera más eficiente, especialmente en aplicaciones de programación matemática.

La relevancia del método de Montante es significativa porque proporciona una alternativa más organizada y ordenada a otros métodos más generales, como la eliminación gaussiana. Se utiliza principalmente en la resolución de sistemas de ecuaciones lineales en áreas de ingeniería y ciencias aplicadas, donde la eficiencia computacional es clave (Golub & Van Loan, 2013).

Golub, G. H., & Van Loan, C. F. (2013). Matrix Computations (4th ed.). Johns Hopkins University Press.
