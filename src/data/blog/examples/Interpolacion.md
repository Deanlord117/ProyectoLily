---
title: "Interpolación resolviendo Ax=b"
description: "Método que utiliza sistemas lineales para encontrar el polinomio que pasa por un conjunto de puntos, resolviendo la matriz de coeficientes para obtener los valores del polinomio."
featured: true
pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
---

<figure>
  <img
    src="https://mate.uprh.edu/~pnegron/notas4061/interpolacion/IMG00004.GIF"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://mate.uprh.edu/~pnegron/notas4061/interpolacion/interpolacion.htm">MateUPRH</a>
  </figcaption>
</figure>

## Historia de la interpolacion resolviendo $Ax=b$
La interpolación mediante la resolución del sistema lineal Ax = b es una técnica que implica encontrar un polinomio que pase por un conjunto de puntos dados. Este enfoque se basa en la formulación de un sistema de ecuaciones lineales donde A es la matriz de coeficientes construida a partir de las coordenadas x de los puntos, x es el vector de coeficientes del polinomio y b es el vector de valores y correspondientes.

Aunque no se atribuye a un único autor, este método ha sido fundamental en el desarrollo del álgebra lineal y la interpolación numérica. Su aplicación es esencial en diversas áreas como la ingeniería, la física y la informática, donde se requiere aproximar funciones o datos discretos mediante polinomios.


## Funciones de la interpolacion resolviendo $Ax=b$

### **Interpolación resolviendo $Ax = b$**

La interpolación es una técnica que nos permite estimar valores intermedios de una función a partir de un conjunto de puntos conocidos. Una forma eficiente de abordar este problema es a través de la resolución del sistema lineal $Ax = b$, donde:

* **A** es la matriz de los coeficientes generados a partir de los puntos conocidos.
* **x** es el vector de coeficientes del polinomio interpolante.
* **b** es el vector de valores de la función en esos puntos.


### ✒️ **Construcción del Sistema $Ax = b$**

Dado un conjunto de puntos $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$, la idea es encontrar un polinomio de grado $n$:

$$
P(x) = a_0 + a_1x + a_2x^2 + \dots + a_nx^n
$$

Para determinar los coeficientes $a_0, a_1, a_2, \dots, a_n$, se construye un sistema de ecuaciones:

$$
\begin{aligned}
    a_0 + a_1x_0 + a_2x_0^2 + \dots + a_nx_0^n &= y_0 \\
    a_0 + a_1x_1 + a_2x_1^2 + \dots + a_nx_1^n &= y_1 \\
    &\vdots \\
    a_0 + a_1x_n + a_2x_n^2 + \dots + a_nx_n^n &= y_n
\end{aligned}
$$

Esto se representa en forma matricial como $Ax = b$, donde:

* **A** es la matriz de Vandermonde generada por los puntos $x_i$.
* **x** es el vector de incógnitas $[a_0, a_1, a_2, \dots, a_n]^T$.
* **b** es el vector de valores conocidos $[y_0, y_1, y_2, \dots, y_n]^T$.

### **Resolución del Sistema**

Existen varios métodos para resolver el sistema:

- **Eliminación Gaussiana**: Despeja las incógnitas por reducción de filas.
- **Gauss-Jordan**: Lleva la matriz a su forma reducida escalonada.
- **Descomposición LU**: Divide la matriz en un producto de dos matrices triangulares.
- **Inversa de la matriz**: Si $A$ es invertible, entonces $x = A^{-1}b$.
- **Métodos iterativos**: Como Gauss-Seidel, para sistemas grandes y dispersos.




## Como resolver $Ax = b$ en Interpolación

La resolución de un sistema lineal $Ax = b$ en el contexto de interpolación sigue un procedimiento bien estructurado. 

### **Paso 1: Construcción de la matriz de Vandermonde (A)**

La matriz **A** se forma a partir de los valores $x_i$ de los puntos conocidos, de la siguiente manera:

$$
A = \begin{pmatrix} 
1 & x_0 & x_0^2 & \dots & x_0^n \\ 
1 & x_1 & x_1^2 & \dots & x_1^n \\ 
\vdots & \vdots & \vdots & & \vdots \\ 
1 & x_n & x_n^2 & \dots & x_n^n 
\end{pmatrix}
$$

Cada fila representa un punto del conjunto de datos y cada columna una potencia de $x$.


### **Paso 2: Construcción del vector $b$**

El vector **b** se compone de los valores $y_i$ asociados a cada $x_i$:

$$
b = \begin{pmatrix} 
y_0 \\ 
y_1 \\ 
\vdots \\ 
y_n 
\end{pmatrix}
$$

### **Paso 3: Resolución del sistema**

Para obtener los coeficientes del polinomio interpolante, se resuelve el sistema $Ax = b$. Los métodos más comunes para esto son:

1. **Eliminación Gaussiana:** Reducimos la matriz $A$ y modificamos $b$ hasta obtener una forma escalonada.
2. **Gauss-Jordan:** Llevamos $A$ a la matriz identidad y obtenemos directamente los valores de $x$.
3. **Descomposición LU:** Descomponemos $A$ en $LU$ y resolvemos en dos pasos más rápidos.
4. **Inversa de la matriz:** Si $A$ es invertible, simplemente calculamos $x = A^{-1}b$.


### **Paso 4: Reconstrucción del Polinomio Interpolante**

Una vez obtenidos los coeficientes $a_0, a_1, a_2, \dots, a_n$, se forma el polinomio interpolante:

$$
P(x) = a_0 + a_1x + a_2x^2 + \dots + a_nx^n
$$

### **Paso 5: Evaluación del Polinomio**

Finalmente, puedes evaluar el polinomio para cualquier valor de $x$ dentro del intervalo para predecir su valor aproximado.

##  **Ejemplo: Interpolación Resolviendo $Ax = b$**

Vamos a resolver un ejemplo completo para entender cómo se lleva a cabo el método de interpolación resolviendo un sistema lineal. Supongamos que tenemos los siguientes puntos:

$$
(1, 2), (2, 3), (3, 5)
$$



###  **Paso 1: Construcción de la matriz de Vandermonde (A)**

Para tres puntos, necesitamos un polinomio de grado 2 (un grado menos que el número de puntos). La matriz de Vandermonde se construye con las potencias de cada valor de $x$:

$$
A = \begin{pmatrix} 
1 & 1 & 1^2 \\ 
1 & 2 & 2^2 \\ 
1 & 3 & 3^2 
\end{pmatrix} = 
\begin{pmatrix} 
1 & 1 & 1 \\ 
1 & 2 & 4 \\ 
1 & 3 & 9 
\end{pmatrix}
$$

### **Paso 2: Construcción del vector $b$**

El vector de términos independientes corresponde a los valores de $y$ en los puntos dados:

$$
b = \begin{pmatrix} 
2 \\ 
3 \\ 
5 
\end{pmatrix}
$$


### **Paso 3: Resolución del sistema $Ax = b$**

Ahora, tenemos el sistema de ecuaciones lineales en su forma matricial:

$$
\begin{pmatrix} 
1 & 1 & 1 \\ 
1 & 2 & 4 \\ 
1 & 3 & 9 
\end{pmatrix} 
\begin{pmatrix} 
a_0 \\ 
a_1 \\ 
a_2 
\end{pmatrix} = 
\begin{pmatrix} 
2 \\ 
3 \\ 
5 
\end{pmatrix}
$$

Para resolver este sistema, podemos usar métodos como eliminación Gaussiana o simplemente la inversa de la matriz $A^{-1}$:

$$
x = A^{-1}b
$$

Al resolver, obtenemos los coeficientes:

$$
a_0 = 1, \quad a_1 = 0, \quad a_2 = 1
$$


### **Paso 4: Reconstrucción del Polinomio Interpolante**

Con los coeficientes encontrados, el polinomio interpolante es:

$$
P(x) = 1 + 0x + 1x^2 = 1 + x^2
$$


### **Paso 5: Evaluación del Polinomio**

Podemos evaluar este polinomio para estimar valores intermedios o verificar los puntos dados:

$$
P(1) = 1 + 1^2 = 2, \quad P(2) = 1 + 2^2 = 3, \quad P(3) = 1 + 3^2 = 5
$$

Los valores coinciden con los datos originales, lo que confirma que elz polinomio está correctamente calculado.

## Ejemplo en python

```python
# Reimportar librerías y ejecutar el código anterior
import numpy as np
import matplotlib.pyplot as plt

# Puntos dados
x_points = np.array([1, 2, 3])
y_points = np.array([2, 3, 5])

# Matriz de Vandermonde
A = np.vander(x_points, increasing=True)

# Resolviendo el sistema Ax = b
coefficients = np.linalg.solve(A, y_points)

# Definimos el polinomio con los coeficientes encontrados
def P(x):
    return coefficients[0] + coefficients[1] * x + coefficients[2] * x**2

# Valores para graficar
x_vals = np.linspace(0, 4, 100)
y_vals = P(x_vals)

# Graficar
plt.figure(figsize=(6, 4))
plt.plot(x_vals, y_vals, label="Polinomio Interpolante $P(x) = 1 + x^2$", color='blue')
plt.scatter(x_points, y_points, color='red', label="Puntos dados")
plt.title("Interpolación por Resolución de Ax = b")
plt.xlabel("x")
plt.ylabel("P(x)")
plt.grid(True)
plt.legend()
plt.show()
```

```bash
Coeficientes del polinomio interpolante: [ 2.  -0.5  0.5]
```
## Grafica
  ![Texto alternativo](@/assets/images/interpolacion.png)

## Explicación visual de las reglas de rnterpolacion resolviendo $Ax=b$

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/JN8x_5X7qaU"
      title="Interpolación Polinómica - Método Directo - Ejercicio 1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
Interpolación Polinómica - Método Directo - Ejercicio 1 (Canal: 
Cálculo Numérico y Mucho Más ...)
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

##  **Conclusión**

La interpolación resolviendo Ax=bAx = bAx=b es un enfoque que utiliza sistemas de ecuaciones lineales para determinar los coeficientes de un polinomio interpolante, generalmente en el contexto de interpolación de Lagrange o Newton. Este método es relevante porque permite calcular soluciones exactas de la interpolación de funciones a partir de un conjunto de puntos, lo cual es esencial en el modelado de fenómenos reales.

La importancia de este método radica en que, al resolver sistemas lineales para encontrar el polinomio interpolante, permite una aproximación precisa de funciones en áreas como la ingeniería, la física y la economía, donde la estimación de valores intermedios es crucial (Burden & Faires, 2010).

Burden, R. L., & Faires, J. D. (2010). Numerical Analysis (9th ed.). Brooks/Cole.


