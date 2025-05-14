---
title: "Metodo de la Regla Falsa"
description: "También conocido como el método de la bisección modificada, es una técnica iterativa para encontrar raíces de ecuaciones no lineales. Combina las ventajas del método de bisección y la secante, utilizando los valores de los extremos de un intervalo para estimar una mejor aproximación de la raíz."

pubDatetime: 2025-05-10T15:00:00Z
author: "Gael Adrian Alvarez Perez"
tags: 
  - Metodo
  - Python
  - Grafica
  - Regla
---

<figure>
  <img
    src="http://blog.espol.edu.ec/analisisnumerico/files/2017/10/posicionfalsa01_GIF.gif"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://blog.espol.edu.ec/analisisnumerico/posicion-falsa-concepto/">Metodos Numericos Curso con Python</a>
  </figcaption>
</figure>

## Historia
El método de la regla falsa, también conocido como "regula falsi", tiene sus raíces en las matemáticas babilónicas y egipcias, donde se utilizaba para resolver problemas prácticos mediante aproximaciones sucesivas. Durante la Edad Media, matemáticos árabes como Al-Khwarizmi y europeos como Fibonacci emplearon ampliamente este método en sus cálculos. La técnica consiste en interpolar linealmente entre dos puntos para aproximar la raíz de una función, utilizando la información de los extremos del intervalo.

A pesar de su antigüedad, la regla falsa ha mantenido su relevancia en el análisis numérico debido a su eficiencia en ciertos casos. Aunque puede converger más lentamente que otros métodos modernos, su simplicidad y la garantía de convergencia bajo ciertas condiciones la hacen útil en diversas aplicaciones científicas e ingenieriles.

## Funciones del Método de la Regla Falsa

### Función $f(x)$

Esta es la función original de la cual buscamos la raíz, es decir, el valor de $ x $ para el cual:

$$
f(x) = 0.
$$

En nuestro ejemplo:

$$
f(x) = x^2 - 4.
$$

Encontrar la raíz implica resolver $x^2 - 4 = 0 $, lo cual sabemos que tiene soluciones en $ x = -2 $ y $ x = 2 $.


###  Función para Calcular el Punto Intermedio $ c $

El corazón del método de la Regla Falsa es la aproximación por interpolación lineal. La fórmula que nos permite obtener el nuevo estimado $ c $ a partir de dos puntos $ a $ y $ b $ donde $ f(a) $ y $ f(b) $ tienen signos opuestos es:

$$
c = \frac{a\, f(b) - b\, f(a)}{f(b) - f(a)}.
$$

Esta expresión se obtiene al hallar la intersección de la recta que une los puntos $ (a, f(a)) $ y $ (b, f(b)) $ con el eje $ x $. Es la función clave para la iteración en el método.



###  Función para la Actualización del Intervalo

Una vez calculado $c$, se evalúa $ f(c) $ para determinar en qué subintervalo se encuentra la raíz. La decisión se basa en el signo de $ f(c) $:

- **Si $ f(a) \cdot f(c) < 0 $:**  
  La raíz se encuentra en el intervalo $[a, c]$. Se actualiza el extremo derecho: $ b = c $.

- **Si $ f(c) \cdot f(b) < 0 $:**  
  La raíz se encuentra en el intervalo $[c, b]$. Se actualiza el extremo izquierdo: $ a = c $.

Esta función de actualización es esencial para asegurar que, en cada iteración, el intervalo sigue conteniendo un cambio de signo y, por lo tanto, la raíz.

### Función de Verificación del Criterio de Convergencia

Para determinar cuándo se ha obtenido una aproximación suficientemente precisa, se define un criterio de error utilizando un valor pequeño $\epsilon$. El criterio puede ser evaluado de una de las siguientes dos formas:

1. Comparando el valor absoluto de la función en $ c $:

   $$
   |f(c)| < \epsilon
   $$

2. Evaluando la diferencia entre dos aproximaciones consecutivas:

   $$
   |c_{\text{nuevo}} - c_{\text{anterior}}| < \epsilon
   $$

Esta función es la que determina el final del proceso iterativo, garantizando que la aproximación a la raíz es lo suficientemente exacta.



###  Función Global: Pseudocódigo del Método de la Regla Falsa

Integrando todas las funciones anteriores, podemos expresar el método completo mediante el siguiente pseudocódigo:

```pseudo
function falsePosition(f, a, b, epsilon, maxIterations):
    previous_c = a  // O bien, se puede inicializar con cualquier valor válido
    for i from 1 to maxIterations:
        // Calcular el nuevo c utilizando la fórmula de la regla falsa
        c = (a * f(b) - b * f(a)) / (f(b) - f(a))
        
        // Verificar el criterio de convergencia: ya sea por f(c) o diferencia de c
        if |f(c)| < epsilon or |c - previous_c| < epsilon:
            return c
        
        // Actualizar el intervalo según el signo de f(c)
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
        
        previous_c = c
    
    // Retornar la aproximación obtenida tras maxIterations si no se cumple el criterio antes
    return c
```

En este esquema:  
- Se inicia con un intervalo $[a, b]$ que garantice $ f(a) \cdot f(b) < 0 $.  
- Se calcula $ c $con la función para la interpolación lineal.  
- Se comprueba la convergencia y, de no cumplirse, se actualiza el intervalo basándose en el signo de $ f(c) $.  
- Se repite el proceso hasta que la diferencia o el valor absoluto $ |f(c)| $ sea menor que $\epsilon$.


Cada una de estas funciones trabaja en conjunto para aproximar la raíz de la función $f(x) $ de manera eficiente y segura, aprovechando el cambio de signo y la interpolación lineal.

## Pasos para Resolver el Método de la Regla Falsa

A continuación, se explica de manera detallada y estructurada cómo aplicar el método de la Regla Falsa para encontrar la raíz de una función.



### Paso 1: Seleccionar una función $ f(x) $

El primer paso es definir la función de la cual queremos encontrar la raíz. Por ejemplo, consideremos:

$$
f(x) = x^2 - 4
$$

El objetivo es hallar el valor de $ x $ que cumpla  $ f(x)=0 $.


### Paso 2: Escoger un intervalo $[a, b]$

Elige dos valores $ a $ y $ b $ de forma que la función cambie de signo entre ellos, es decir, que se cumpla:

$$
f(a) \cdot f(b) < 0
$$

Esto, según el teorema de Bolzano, garantiza que existe al menos una raíz en el intervalo.

#### Ejemplo: Si tomamos $a = 1 $ y $ b = 3 $:

$$
f(1) = 1^2 - 4 = -3 \quad \text{y} \quad f(3) = 3^2 - 4 = 5
$$

Como $ f(1) \cdot f(3) = -15 < 0 $, se cumple la condición.


### Paso 3: Calcular la aproximación mediante interpolación lineal

Determina la aproximación $c $ usando la fórmula de la Regla Falsa, que se obtiene al encontrar la intersección de la recta que une los puntos $(a, f(a))$ y $((b, f(b))$ con el eje $ x $:

$$
c = \frac{a\, f(b) - b\, f(a)}{f(b) - f(a)}
$$

Este valor $ c $ será la nueva aproximación de la raíz.


### Paso 4: Evaluar la función en el punto $ c $ y actualizar el intervalo

Una vez obtenido $ c $, calcula $ f(c) $ y determina en qué subintervalo se encuentra el cambio de signo:

- **Si** $ f(a) \cdot f(c) < 0 $, la raíz se localiza en el intervalo $[a, c]$.  
- **Si** $ f(c) \cdot f(b) < 0 $, la raíz se encuentra en el intervalo $[c, b]$.

Actualiza el intervalo descartando el extremo que no cumple con la condición de cambio de signo.

### Paso 5: Comprobar el criterio de convergencia

Verifica si la diferencia entre la nueva aproximación y la anterior es menor a un valor preestablecido $\epsilon$ o si el valor absoluto de $f(c)$ es suficientemente pequeño:
$$
|c_{\text{nuevo}} - c_{\text{anterior}}| < \epsilon \quad \text{o} \quad |f(c)| < \epsilon
$$

Si se cumple la condición de convergencia, se detiene el proceso; de lo contrario, se procede con otra iteración.


### Paso 6: Repetir el proceso iterativo

Utiliza el intervalo actualizado y repite los pasos 3 a 5. En cada iteración se obtiene un nuevo $ c $ que se acerca cada vez más a la raíz real de $f(x) $.


### Paso 7: Presentar el resultado

Cuando se cumpla el criterio de convergencia, el valor de $ c $ se considera una buena aproximación de la raíz de la función $ f(x) $. Este resultado se puede exponer como el valor final obtenido mediante el Método de la Regla Falsa.

## Ejemplo Paso a Paso

El **Método de la Regla Falsa** es un algoritmo numérico para encontrar raíces de funciones. Combina ideas de los métodos de **Bisección** y **Secante**, ajustando iterativamente un intervalo donde se sospecha que está la raíz.  

## Problema a Resolver
Encontraremos una raíz de la función:  
$$
f(x) = x^3 - 2x - 5
$$  
en el intervalo $[2, 3]$, con una tolerancia de $0.001$.  

### Verificar el Teorema de Bolzano 
Primero, confirmamos que hay una raíz en el intervalo evaluando $f(a)$ y $f(b)$:  
- $f(2) = (2)^3 - 2(2) - 5 = 8 - 4 - 5 = -1$  
- $f(3) = (3)^3 - 2(3) - 5 = 27 - 6 - 5 = 16$  

Como $f(2) \cdot f(3) = (-1)(16) = -16 < 0$, **hay una raíz en $[2, 3]$**.  

### Fórmula de la Regla Falsa
La estimación de la raíz en cada iteración se calcula con:  
$$
c = b - \frac{f(b)(b - a)}{f(b) - f(a)}
$$  

### Iteración 1
- $a = 2$, $b = 3$  
- $f(a) = -1$, $f(b) = 16$  
- Calculamos $c$:  
$$
c = 3 - \frac{16 \cdot (3 - 2)}{16 - (-1)} = 3 - \frac{16}{17} \approx 2.0588
$$  
- Evaluamos $f(c)$:  
$$
f(2.0588) \approx (2.0588)^3 - 2(2.0588) - 5 \approx -0.3904
$$  
- **Actualización del intervalo**: Como $f(a) \cdot f(c) > 0$ (ambos negativos), la raíz está en $[c, b] = [2.0588, 3]$.  

### Iteración 2
- $a = 2.0588$, $b = 3$  
- $f(a) = -0.3904$, $f(b) = 16$  
- Nueva estimación $c$:  
$$
c = 3 - \frac{16 \cdot (3 - 2.0588)}{16 - (-0.3904)} \approx 3 - \frac{15.0592}{16.3904} \approx 2.0813
$$  
- $f(2.0813) \approx -0.1472$  
- **Actualización**: $f(a) \cdot f(c) > 0$, nuevo intervalo $[2.0813, 3]$.  

### Iteración 3
- $a = 2.0813$, $b = 3$  
- $f(a) = -0.1472$, $f(b) = 16$  
- $c \approx 3 - \frac{16 \cdot (3 - 2.0813)}{16 - (-0.1472)} \approx 2.0896$  
- $f(2.0896) \approx -0.0547$  
- **Actualización**: $[2.0896, 3]$.  

### Iteración 4  
- $a = 2.0896$, $b = 3$  
- $f(a) = -0.0547$, $f(b) = 16$  
- $c \approx 3 - \frac{16 \cdot (3 - 2.0896)}{16 - (-0.0547)} \approx 2.0927$  
- $f(2.0927) \approx -0.0202$  
- **Actualización**: $[2.0927, 3]$.  

### Iteración 5
- $a = 2.0927$, $b = 3$  
- $f(a) = -0.0202$, $f(b) = 16$  
- $c \approx 3 - \frac{16 \cdot (3 - 2.0927)}{16 - (-0.0202)} \approx 2.0937$  
- $f(2.0937) \approx -0.0074$  
- **Error aproximado**: $|2.0937 - 2.0927| \approx 0.001$ (dentro de la tolerancia).  

### Resultado Final
La **raíz aproximada** es $x \approx 2.0937$ con un error menor a $0.001$.  

## Ejemplo en Python
```python
import numpy as np
import matplotlib.pyplot as plt

def regula_falsi(f, a, b, tol, max_iter=100):
    """
    Encuentra una raíz de f en [a, b] usando el Método de la Regla Falsa y grafica el proceso.
    
    Parámetros:
    - f: Función a evaluar.
    - a, b: Extremos del intervalo inicial.
    - tol: Tolerancia deseada.
    - max_iter: Máximo de iteraciones.
    
    Retorna:
    - c: Aproximación de la raíz.
    - history: Lista de diccionarios con datos de cada iteración.
    """
    if f(a) * f(b) >= 0:
        raise ValueError("El intervalo no cumple el Teorema de Bolzano (f(a)*f(b) < 0).")
    
    history = []  # Guardará los datos de cada iteración
    c_prev = b
    
    print("Iteración\t a\t\t b\t\t c\t\t f(c)\t\t Error")
    print("-" * 80)
    
    for iteration in range(max_iter):
        c = b - (f(b) * (b - a)) / (f(b) - f(a))
        error = abs(c - c_prev)
        
        history.append({
            'iteration': iteration + 1,
            'a': a,
            'b': b,
            'c': c,
            'f(c)': f(c),
            'error': error
        })
        
        print(f"{iteration + 1}\t\t {a:.6f}\t {b:.6f}\t {c:.6f}\t {f(c):.6f}\t {error:.6f}")
        
        if abs(f(c)) < 1e-9 or error < tol:
            print("\n¡Convergencia alcanzada!")
            break
        
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
        
        c_prev = c
    
    else:
        print("\n¡Máximo de iteraciones alcanzado!")
    
    return c, history

# Definimos la función f(x) = x^3 - 2x - 5
def f(x):
    return x**3 - 2*x - 5

# Parámetros iniciales
a, b, tol = 2.0, 3.0, 0.001

# Llamamos al método
raiz, history = regula_falsi(f, a, b, tol)

# Resultados
print(f"\nRaíz aproximada: {raiz:.6f}")
print(f"f(raíz) = {f(raiz):.10f}")

# --- Graficación ---
x = np.linspace(1.5, 3.5, 400)
y = f(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', label='$f(x) = x^3 - 2x - 5$')
plt.axhline(0, color='k', linestyle='--', linewidth=0.5)  # Eje x

# Puntos de las iteraciones
for step in history:
    plt.scatter(step['c'], step['f(c)'], color='red', s=50, alpha=0.6)
    plt.text(step['c'], step['f(c)'], f"{step['iteration']}", fontsize=9, ha='right')

# Líneas que conectan las iteraciones
for i in range(1, len(history)):
    plt.plot([history[i-1]['c'], history[i]['c']], 
             [history[i-1]['f(c)'], history[i]['f(c)']], 
             'r--', alpha=0.3)

plt.scatter(raiz, f(raiz), color='green', s=100, label='Raíz aproximada', zorder=5)
plt.title("Método de la Regla Falsa: Aproximación de la Raíz")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.legend()
plt.grid(True, linestyle='--', alpha=0.7)
plt.show()
```
## Salida
```bash
--------------------------------------------------------------------------------
1                2.000000        3.000000        2.058824        -0.390800       0.941176
2                2.058824        3.000000        2.081264        -0.147204       0.022440
3                2.081264        3.000000        2.089639        -0.054677       0.008376
4                2.089639        3.000000        2.092740        -0.020203       0.003100
5                2.092740        3.000000        2.093884        -0.007451       0.001144
6                2.093884        3.000000        2.094305        -0.002746       0.000422

¡Convergencia alcanzada!

Raíz aproximada: 2.094305
f(raíz) = -0.0027456728
```

  ## Grafica 
  ![Texto alternativo](/src/assets/images/ReglaFalsa.png)

  # Explicacion visual
 <div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/1e55zSPuOkM"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
   
Método de la falsa Posición
(Canal: Matemáticas con Carito)
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

El método de la regla falsa, o método de la falsa posición, combina elementos del método de bisección y el método de la secante. Su ventaja principal es que generalmente converge más rápido que el método de bisección, al utilizar un enfoque más dinámico para seleccionar el punto medio del intervalo. Esto lo convierte en una herramienta útil en áreas como la ingeniería y la computación, donde la precisión y la rapidez en los cálculos son esenciales.

Este método es fundamental porque mejora la eficiencia en la búsqueda de raíces al hacer un uso más inteligente de los valores de la función en los extremos del intervalo. Su aplicabilidad se extiende a diversas ramas de la ciencia, donde la rapidez en la resolución de ecuaciones no lineales es crucial (Sauer, 2018).

Sauer, T. (2018). Numerical Analysis (4th ed.). Pearson.
