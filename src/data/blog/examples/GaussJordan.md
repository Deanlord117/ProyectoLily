---
title: "Metodo Gauss-Jordan"
description: "Variante extendida de la eliminación gaussiana que lleva la matriz a su forma reducida por filas, permitiendo obtener la solución directa del sistema sin sustituciones posteriores."

pubDatetime: 2025-05-06T22:46:00Z
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
    Imagen de <a href="https://totumat.com/2020/11/23/sistemas-de-ecuaciones-lineales-gauss-jordan/">totumant</a>
  </figcaption>
</figure>

## Historia de la serie de Taylor
El método de Gauss-Jordan es una extensión de la eliminación gaussiana, desarrollado por Wilhelm Jordan en el siglo XIX. Este método permite llevar una matriz a su forma reducida por filas, facilitando la obtención de la inversa de una matriz y la solución directa de sistemas de ecuaciones. Wikipedia

Jordan presentó este método en su obra Handbuch der Vermessungskunde, publicada en 1888. La técnica ha sido ampliamente adoptada en la enseñanza de álgebra lineal y en aplicaciones computacionales debido a su eficiencia y claridad en la resolución de sistemas lineales.ms.uky.edu


## Funciones de la serie de Taylor

La eliminación de Gauss-Jordan es un algoritmo fundamental del álgebra lineal, utilizado para resolver sistemas de ecuaciones lineales y hallar la inversa de matrices. Se basa en aplicar operaciones elementales de fila —intercambiar filas, multiplicar una fila por un escalar distinto de cero, o sumar múltiplos de una fila a otra— para transformar una matriz en su forma escalonada reducida (también llamada forma canónica).

Primero, se lleva la matriz a una forma triangular superior mediante el método de Gauss. Luego, Gauss-Jordan continúa hasta obtener una matriz diagonal con unos en la diagonal principal y ceros en el resto de la columna de cada pivote. Esta forma reducida es única, sin importar el orden de operaciones usado.

Es importante no confundir este método con el algoritmo Gauss-Seidel, que es iterativo y se emplea principalmente en análisis numérico para resolver sistemas lineales de gran tamaño, especialmente cuando se busca eficiencia computacional en matrices dispersas.

Con gusto, aquí tienes **todos los pasos detallados** del **método de Gauss-Jordan**, con un enfoque serio y directo, como para incluir en un blog educativo o apunte técnico. Este proceso transforma un sistema de ecuaciones lineales en una forma donde la solución es evidente, sin necesidad de sustituciones posteriores.

## Cómo se hace el metodo Gauss-Jordan


Dado un sistema de ecuaciones lineales, se representa como una **matriz aumentada**:

$$
[A \mid b]
$$

Donde $A$ es la matriz de coeficientes y $b$ es el vector columna de términos independientes.

### 1. **Formar la matriz aumentada**

Construir la matriz que incluye tanto los coeficientes del sistema como la columna de resultados.

### 2. **Seleccionar el pivote**

Comenzar en la primera columna. El pivote es el primer elemento no nulo desde la fila actual hacia abajo. Si el pivote es cero, se intercambia con una fila inferior que tenga un valor distinto de cero en esa columna.

### 3. **Normalizar la fila del pivote**

Convertir el pivote en 1 dividiendo toda la fila entre el valor del pivote:

$$
R_i \leftarrow \frac{R_i}{a_{ii}}
$$

### 4. **Eliminar la variable del resto de filas**

Para cada fila diferente a la fila del pivote, eliminar el valor de la columna correspondiente al pivote:

$$
R_j \leftarrow R_j - a_{ji} \cdot R_i \quad \text{para todo } j \neq i
$$

Esto garantiza que la columna del pivote tenga ceros en todas las filas excepto en la del pivote (donde hay un 1).

### 5. **Repetir el proceso para cada columna**

Moverse a la siguiente columna y repetir los pasos 2 a 4 para los siguientes pivotes (es decir, para las siguientes variables del sistema).

### 6. **Obtener la solución**

Una vez que la matriz de coeficientes ha sido transformada en la **matriz identidad**, el sistema tiene la forma:

$$
\left[\begin{array}{ccc|c}
1 & 0 & 0 & x_1 \\
0 & 1 & 0 & x_2 \\
0 & 0 & 1 & x_3 \\
\end{array}\right]
$$

La solución está directamente en la última columna: $x_1, x_2, x_3$.


## Ejemplo: Resolución de un Sistema de Ecuaciones Lineales mediante el Método de Gauss-Jordan Paso a Paso


$$
\begin{aligned}
3x_1 - 0.1x_2 - 0.2x_3 &= 7.85 \\
0.1x_1 + 7x_2 - 0.3x_3 &= -19.3 \\
0.3x_1 - 0.2x_2 + 10x_3 &= 71.4
\end{aligned}
$$



### **Paso 1: Construir la matriz aumentada**

$$
\left[
\begin{array}{ccc|c}
3 & -0.1 & -0.2 & 7.85 \\
0.1 & 7 & -0.3 & -19.3 \\
0.3 & -0.2 & 10 & 71.4 \\
\end{array}
\right]
$$


### **Paso 2: Normalizar la fila 1 (pivote = 3)**

$$
R_1 \leftarrow \frac{1}{3} R_1
\Rightarrow
\left[
\begin{array}{ccc|c}
1 & -0.0333 & -0.0667 & 2.6167 \\
0.1 & 7 & -0.3 & -19.3 \\
0.3 & -0.2 & 10 & 71.4 \\
\end{array}
\right]
$$


### **Paso 3: Eliminar la variable $x_1$ de las filas 2 y 3**

$$
R_2 \leftarrow R_2 - 0.1 R_1, \quad R_3 \leftarrow R_3 - 0.3 R_1
$$

$$
\left[
\begin{array}{ccc|c}
1 & -0.0333 & -0.0667 & 2.6167 \\
0 & 7.0033 & -0.2933 & -19.5617 \\
0 & -0.1900 & 10.0200 & 70.6150 \\
\end{array}
\right]
$$



### **Paso 4: Normalizar la fila 2 (pivote = 7.0033)**

$$
R_2 \leftarrow \frac{1}{7.0033} R_2
\Rightarrow
\left[
\begin{array}{ccc|c}
1 & -0.0333 & -0.0667 & 2.6167 \\
0 & 1 & -0.0419 & -2.7932 \\
0 & -0.1900 & 10.0200 & 70.6150 \\
\end{array}
\right]
$$



### **Paso 5: Eliminar $x_2$ de filas 1 y 3**

$$
R_1 \leftarrow R_1 + 0.0333 R_2, \quad R_3 \leftarrow R_3 + 0.1900 R_2
$$

$$
\left[
\begin{array}{ccc|c}
1 & 0 & -0.0681 & 2.5236 \\
0 & 1 & -0.0419 & -2.7932 \\
0 & 0 & 10.0120 & 70.0843 \\
\end{array}
\right]
$$

### **Paso 6: Normalizar la fila 3 (pivote = 10.0120)**

$$
R_3 \leftarrow \frac{1}{10.0120} R_3
\Rightarrow
\left[
\begin{array}{ccc|c}
1 & 0 & -0.0681 & 2.5236 \\
0 & 1 & -0.0419 & -2.7932 \\
0 & 0 & 1 & 7.0000 \\
\end{array}
\right]
$$


### **Paso 7: Eliminar $x_3$ de filas 1 y 2**

$$
R_1 \leftarrow R_1 + 0.0681 R_3, \quad R_2 \leftarrow R_2 + 0.0419 R_3
$$

$$
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 3.0000 \\
0 & 1 & 0 & -2.5000 \\
0 & 0 & 1 & 7.0000 \\
\end{array}
\right]
$$



### **Resultado final (forma identidad)**

$$
\begin{aligned}
x_1 &= 3.0000 \\
x_2 &= -2.5000 \\
x_3 &= 7.0000 \\
\end{aligned}
$$

## Implementación en código del Metodo Gauss-Jordan

```python
import numpy as np
import matplotlib.pyplot as plt

# Sistema de ecuaciones:
# 3x1 - 0.1x2 - 0.2x3 = 7.85
# 0.1x1 + 7x2 - 0.3x3 = -19.3
# 0.3x1 - 0.2x2 + 10x3 = 71.4

# Matriz aumentada
A = np.array([
    [3, -0.1, -0.2, 7.85],
    [0.1, 7, -0.3, -19.3],
    [0.3, -0.2, 10, 71.4]
], dtype=float)

# Guardar el estado de la matriz para graficar
states = [A.copy()]

# Método de Gauss-Jordan
n = len(A)
for i in range(n):
    # Normalizar la fila i
    A[i] = A[i] / A[i, i]
    states.append(A.copy())
    
    for j in range(n):
        if i != j:
            A[j] = A[j] - A[j, i] * A[i]
            states.append(A.copy())

# Extraer soluciones
x = A[:, -1]

# Preparar gráfica de evolución del valor de las incógnitas
states_x = [[row[-1] for row in step] for step in states]
states_x = np.array(states_x)

plt.figure(figsize=(10, 6))
for var_index in range(states_x.shape[1]):
    plt.plot(states_x[:, var_index], label=f'$x_{var_index+1}$', marker='o')

plt.title('Evolución de las variables durante Gauss-Jordan')
plt.xlabel('Paso del algoritmo')
plt.ylabel('Valor de la variable')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

print(x)  # Mostrar soluciones finales también

plt.show()
```

```bash
[ 3.  -2.5  7. ]
```


### Grafica


  ![Texto alternativo](/src/assets/images/Gauss-Jordan.png)


## Explicación visual de la serie de Taylor

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/dFmGzr1j6eY"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
Solución de sistemas de 3x3 método de Gauss Jordan | Ejemplo 1 (Canal: Matematicas profe Alex)
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

El método de Gauss-Jordan es una variante del método de eliminación gaussiana, que no solo resuelve el sistema de ecuaciones, sino que también encuentra la inversa de la matriz, lo que lo hace especialmente útil en la resolución de sistemas de ecuaciones simultáneas y en el análisis de matrices invertibles. Este método es ampliamente utilizado en matemáticas y en la programación de algoritmos para la solución de sistemas grandes.

Su relevancia se debe a su capacidad para simplificar el proceso de resolución de sistemas lineales mediante la eliminación completa de variables. En comparación con otros métodos, es especialmente útil cuando se requiere tanto la solución del sistema como la matriz inversa (Strang, 2006).

Strang, G. (2006). Linear Algebra and Its Applications (4th ed.). Brooks/Cole.
