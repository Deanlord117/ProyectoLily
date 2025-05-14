---
title: "Runge-Kutta."
description: "Un método numérico utilizado para resolver ecuaciones diferenciales ordinarias. Proporciona una aproximación de la solución mediante una serie de pasos iterativos, mejorando la precisión con respecto a métodos más simples como Euler, utilizando una combinación ponderada de evaluaciones de la función en varios puntos dentro de cada intervalo."

pubDatetime: 2025-05-01T15:00:00Z
author: "Axel Dario Estrada Chavana"
tags: 
  - Metodo
  - Python
  - Grafica
  - Runge-Kutta
---

<figure>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Comparison_of_the_Runge-Kutta_methods_for_the_differential_equation_%28red_is_the_exact_solution%29.svg/640px-Comparison_of_the_Runge-Kutta_methods_for_the_differential_equation_%28red_is_the_exact_solution%29.svg.png"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods">Wikipedia</a>
  </figcaption>
</figure>

## Historia
Método de Euler:
Leonhard Euler desarrolló su método en el siglo XVIII como una de las primeras técnicas para resolver ecuaciones diferenciales ordinarias. Este método utiliza una aproximación lineal para avanzar paso a paso en la solución de la ecuación diferencial, siendo sencillo pero con limitaciones en precisión y estabilidad.

Métodos de Runge-Kutta:
A principios del siglo XX, Carl Runge y Wilhelm Kutta desarrollaron una familia de métodos que mejoran la precisión del método de Euler al considerar múltiples evaluaciones de la función en cada paso. Estos métodos, especialmente el de cuarto orden, se han convertido en herramientas estándar para la resolución numérica de ecuaciones diferenciales ordinarias. Wikipedia

## Funciones Fundamentales del Método de Runge-Kutta

###  Función de la Ecuación Diferencial $f(x, y)$

El método de Runge-Kutta se aplica a ecuaciones diferenciales de la forma:

$$
\frac{dy}{dx} = f(x, y)
$$

donde $f(x, y)$ define la relación entre la variable dependiente $y$ y la independiente $x$.  
Ejemplo:

$$
\frac{dy}{dx} = x + y
$$

Aquí, la función diferencial es:

$$
f(x, y) = x + y.
$$

Esta expresión se evalúa en distintos puntos para estimar la solución.


###  Función para el Cálculo de los Coeficientes de Runge-Kutta

El **método de Runge-Kutta de orden 4** (RK4) utiliza cuatro coeficientes intermedios para calcular la próxima estimación de $y$. Estos coeficientes son:

$$
k_1 = h f(x_n, y_n)
$$

$$
k_2 = h f\left(x_n + \frac{h}{2}, y_n + \frac{k_1}{2} \right)
$$

$$
k_3 = h f\left(x_n + \frac{h}{2}, y_n + \frac{k_2}{2} \right)
$$

$$
k_4 = h f(x_n + h, y_n + k_3)
$$

donde $h$ es el tamaño del paso utilizado para avanzar en la solución.  

Cada coeficiente aproxima la pendiente de la ecuación diferencial en distintos puntos dentro del intervalo.



### Función para el Cálculo del Nuevo Valor de $y$ 

La nueva estimación de $y$ se obtiene mediante la combinación ponderada de los coeficientes calculados:

$$
y_{n+1} = y_n + \frac{1}{6} (k_1 + 2k_2 + 2k_3 + k_4)
$$

Este promedio ponderado mejora la precisión de la aproximación en comparación con otros métodos más básicos.

###  Función de Iteración para Resolver el Problema en un Rango de Valores
Para encontrar la solución en un intervalo, se ejecuta la siguiente iteración:

1. Evaluar $k_1$, $k_2$, $k_3$ y $k_4$ en cada paso.
2. Calcular $y_{n+1}$ con la fórmula de actualización.
3. Repetir el proceso hasta llegar al valor deseado de $x$.

### Función Global: Algoritmo del Método de Runge-Kutta

Aquí tienes el pseudocódigo para aplicar el método:

```pseudo
function runge_kutta(f, x0, y0, h, n):
    for i from 1 to n:
        k1 = h * f(x0, y0)
        k2 = h * f(x0 + h/2, y0 + k1/2)
        k3 = h * f(x0 + h/2, y0 + k2/2)
        k4 = h * f(x0 + h, y0 + k3)
        
        y0 = y0 + (1/6) * (k1 + 2*k2 + 2*k3 + k4)
        x0 = x0 + h
        
    return y0
```

Este código sigue la metodología del **Runge-Kutta de orden 4**, garantizando una aproximación precisa para la solución de ecuaciones diferenciales.

## Pasos para Resolver una Ecuación Diferencial con el Método de Runge-Kutta

El **Método de Runge-Kutta de orden 4 (RK4)** es una técnica numérica que proporciona una aproximación precisa a la solución de ecuaciones diferenciales ordinarias. Aquí te explico cómo aplicarlo paso a paso.

### Paso 1: Definir la ecuación diferencial

Se parte de una ecuación diferencial de primer orden:

$$
\frac{dy}{dx} = f(x, y)
$$

donde $f(x, y)$ es una función que describe la tasa de cambio de $y$ con respecto a $x$.  

Ejemplo:

$$
\frac{dy}{dx} = x + y
$$


### Paso 2: Establecer las condiciones iniciales

Se define un valor inicial para $x$ y $y$:

- $x_0$: Punto inicial en el dominio de la ecuación.
- $y_0$: Valor de la función en $x_0$.
- $h$: Tamaño del paso, que define la distancia entre iteraciones.
- $N$: Número de pasos para alcanzar el valor deseado de $x$.

Ejemplo:  
Si queremos aproximar $y(x)$ en $x = 1.5$, con $x_0 = 1$, $y_0 = 2$ y un tamaño de paso $h = 0.1$, avanzaremos iterativamente hasta llegar al punto deseado.


### Paso 3: Calcular los coeficientes de Runge-Kutta

En cada iteración, se calculan cuatro coeficientes basados en la ecuación diferencial:

#### Calcular $k_1$  
   $$
   k_1 = h f(x_n, y_n)
   $$

#### Calcular $k_2$  
   $$
   k_2 = h f\left(x_n + \frac{h}{2}, y_n + \frac{k_1}{2} \right)
   $$

#### Calcular $k_3$
   $$
   k_3 = h f\left(x_n + \frac{h}{2}, y_n + \frac{k_2}{2} \right)
   $$

#### Calcular $k_4$  
   $$
   k_4 = h f(x_n + h, y_n + k_3)
   $$

Cada coeficiente representa una estimación de la pendiente en distintos puntos del intervalo.

### Paso 4: Calcular el nuevo valor de $y$

El próximo valor de $y$ se obtiene mediante:

$$
y_{n+1} = y_n + \frac{1}{6} (k_1 + 2k_2 + 2k_3 + k_4)
$$

Este promedio ponderado mejora la precisión de la aproximación.



### Paso 5: Actualizar el valor de $x$ y repetir el proceso

El nuevo valor de $x$ se calcula con:

$$
x_{n+1} = x_n + h
$$

Se repiten los cálculos de $k_1$, $k_2$, $k_3$ y $k_4$ hasta alcanzar el número de iteraciones necesarias para llegar al valor deseado de $x$.



### Paso 6: Presentar el resultado final

Después de realizar todas las iteraciones, el valor final de $y$ es la aproximación numérica de la función en el punto deseado.

<br>

### Ejemplo de Aplicación del Método de Runge-Kutta

Supongamos que queremos resolver la siguiente ecuación diferencial usando el **método de Runge-Kutta de orden 4 (RK4)**:

$$
\frac{dy}{dx} = x + y
$$

con la condición inicial:

$$
y(0) = 1
$$

y queremos aproximar el valor de $y$ en $x = 0.2$ usando un paso de $h = 0.1$.



### Paso 1: Calcular los coeficientes de Runge-Kutta

Para la primera iteración con $x_0 = 0$ y $y_0 = 1$:

#### Calcular $k_1$
   $$
   k_1 = h f(x_0, y_0) = 0.1 (0 + 1) = 0.1
   $$

#### Calcular $k_2$
   $$
   k_2 = h f\left(x_0 + \frac{h}{2}, y_0 + \frac{k_1}{2} \right)
   $$
   $$
   = 0.1 f(0.05, 1.05) = 0.1 (0.05 + 1.05) = 0.11
   $$

##### Calcular $k_3$
   $$
   k_3 = h f\left(x_0 + \frac{h}{2}, y_0 + \frac{k_2}{2} \right)
   $$
   $$
   = 0.1 f(0.05, 1.055) = 0.1 (0.05 + 1.055) = 0.1105
   $$

#### Calcular $k_4$
   $$
   k_4 = h f(x_0 + h, y_0 + k_3)
   $$
   $$
   = 0.1 f(0.1, 1.1105) = 0.1 (0.1 + 1.1105) = 0.12105
   $$



### Paso 2: Calcular el nuevo valor de $y$

La aproximación de $y$ en $x = 0.1$ se obtiene con:

$$
y_1 = y_0 + \frac{1}{6} (k_1 + 2k_2 + 2k_3 + k_4)
$$

Sustituyendo los valores:

$$
y_1 = 1 + \frac{1}{6} (0.1 + 2(0.11) + 2(0.1105) + 0.12105)
$$

$$
y_1 = 1 + \frac{1}{6} (0.68205) = 1.113675
$$

Este es el valor aproximado de $y$ en $x = 0.1$.

### Paso 3: Segunda Iteración

Ahora usamos $x_1 = 0.1$ y $y_1 = 1.113675$ para calcular el valor en $x = 0.2$. Siguiendo el mismo procedimiento:

#### Calcular $k_1$
   $$
   k_1 = h f(x_1, y_1) = 0.1 (0.1 + 1.113675) = 0.1213675
   $$

#### Calcular $k_2$
   $$
   k_2 = h f\left(0.15, 1.17435875 \right) = 0.1 (0.15 + 1.17435875) = 0.132435875
   $$

#### Calcular $k_3$
   $$
   k_3 = h f\left(0.15, 1.17989344 \right) = 0.1 (0.15 + 1.17989344) = 0.132989344
   $$

#### Calcular $k_4$
   $$
   k_4 = h f(0.2, 1.24666434) = 0.1 (0.2 + 1.24666434) = 0.144666434
   $$

Usamos la fórmula de actualización:

$$
y_2 = y_1 + \frac{1}{6} (k_1 + 2k_2 + 2k_3 + k_4)
$$

$$
y_2 = 1.113675 + \frac{1}{6} (0.1213675 + 2(0.132435875) + 2(0.132989344) + 0.144666434)
$$

$$
y_2 = 1.113675 + \frac{1}{6} (0.796884372) = 1.24681906
$$

Este es el valor aproximado de $y$ en $x = 0.2$.

Usando el método de **Runge-Kutta de orden 4**, hemos encontrado que la solución aproximada para $y(0.2)$ es:

$$
y(0.2) \approx 1.246819
$$


## Ejemplo en python
```python
import numpy as np
import matplotlib.pyplot as plt

def runge_kutta_4(f, x0, y0, h, n, return_all=False):
    """ 
    Implementa el método de Runge-Kutta de orden 4 para resolver ecuaciones diferenciales.
    
    Parámetros:
    - f: Función que define la EDO dy/dx = f(x, y)
    - x0: Valor inicial de x
    - y0: Valor inicial de y
    - h: Tamaño de paso
    - n: Número de iteraciones
    - return_all: Si es True, devuelve todos los valores de x e y calculados
    
    Retorna:
    - Si return_all=False: Último valor de y
    - Si return_all=True: Arrays de x e y en cada paso
    """
    x = x0
    y = y0
    
    if return_all:
        x_vals = [x0]
        y_vals = [y0]
    
    for _ in range(n):
        k1 = h * f(x, y)
        k2 = h * f(x + h/2, y + k1/2)
        k3 = h * f(x + h/2, y + k2/2)
        k4 = h * f(x + h, y + k3)

        y += (1/6) * (k1 + 2*k2 + 2*k3 + k4)
        x += h
        
        if return_all:
            x_vals.append(x)
            y_vals.append(y)
    
    if return_all:
        return np.array(x_vals), np.array(y_vals)
    else:
        return y

# Definimos la ecuación diferencial dy/dx = x + y
def f(x, y):
    return x + y

# Valores iniciales
x0 = 0    # Valor inicial de x
y0 = 1    # Valor inicial de y
h = 0.1   # Tamaño de paso
x_final = 0.2  # Valor de x donde queremos la solución

# Número de iteraciones necesarias
n = int((x_final - x0) / h)

# Calcular la solución con RK4 (guardando todos los pasos)
x_vals, y_vals = runge_kutta_4(f, x0, y0, h, n, return_all=True)

# Solución exacta para comparación (solución analítica de dy/dx = x + y)
def exact_solution(x):
    return 2 * np.exp(x) - x - 1

# Valores exactos
x_exact = np.linspace(x0, x_final, 100)
y_exact = exact_solution(x_exact)

# Graficación
plt.figure(figsize=(10, 6))
plt.plot(x_exact, y_exact, label='Solución exacta: $y = 2e^x - x - 1$', color='black', linestyle='--', linewidth=1.5)
plt.plot(x_vals, y_vals, 'o-', label=f'Aproximación RK4 (h={h})', color='blue', markersize=6, linewidth=1.5)

# Punto final resaltado
plt.scatter(x_vals[-1], y_vals[-1], color='red', s=100, zorder=5, 
            label=f'Aproximación en $x={x_final}$: {y_vals[-1]:.6f}')

plt.title('Método de Runge-Kutta de Orden 4 para $dy/dx = x + y$')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend()
plt.show()

# Imprimir resultado numérico
print(f"\nAproximación RK4 de y({x_final}) = {y_vals[-1]:.6f}")
print(f"Solución exacta y({x_final}) = {exact_solution(x_final):.6f}")
print(f"Error absoluto = {abs(y_vals[-1] - exact_solution(x_final)):.2e}")
```


## Salida
```bash
Aproximación RK4 de y(0.2) = 1.242805
Solución exacta y(0.2) = 1.242806
Error absoluto = 3.75e-07
```

  ## Grafica 
  ![Texto alternativo](@/assets/images/RungeKutta.png)
 # Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/C4UymmEi3Kw"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   
Runge Kutta Methods | Lecture 50 | Numerical Methods for Engineers
 (Canal: Jeffrey Chasnov)
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
El método de Euler y el método de Runge-Kutta son fundamentales en la resolución numérica de ecuaciones diferenciales ordinarias. El método de Euler es el más simple de los métodos explícitos y proporciona una solución aproximada utilizando un paso constante, aunque con errores que aumentan con el tiempo. El método de Runge-Kutta, por otro lado, mejora significativamente la precisión mediante una serie de pasos intermedios. Ambos métodos son esenciales en la simulación de sistemas dinámicos y en la resolución de problemas de física, ingeniería y biología.

La relevancia de estos métodos radica en su capacidad para modelar de manera eficiente sistemas complejos que no pueden resolverse de manera exacta, como los sistemas de ecuaciones diferenciales que describen fenómenos naturales. El método de Runge-Kutta, en particular, es ampliamente utilizado debido a su alta precisión y su aplicabilidad en la mayoría de los problemas prácticos, donde la simulación numérica de procesos dinámicos es crucial (Atkinson, 2008).

Atkinson, K. E. (2008). An Introduction to Numerical Analysis (2nd ed.). Wiley.