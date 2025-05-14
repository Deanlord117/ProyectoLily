---
title: "Metodo de Bisección"
description: "Técnica numérica clásica para encontrar raíces de ecuaciones, dividiendo un intervalo en mitades sucesivas hasta acercarse a la solución. Ideal por su simplicidad y confiabilidad."
pubDatetime: 2025-05-02T15:00:00Z
author: "Axel Dario Estrada Chavana"
tags:
  - Metodo
  - Python
  - Grafica
  - Biseccion
---

<figure>
  <img
    src="https://blog.espol.edu.ec/analisisnumerico/files/2017/10/biseccion01.png"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://blog.espol.edu.ec/analisisnumerico/biseccion-concepto/">Metodos Numericos</a>
  </figcaption>
</figure>


## Historia del Metodo de biseccíon
El método de bisección es una técnica numérica utilizada para encontrar raíces de funciones continuas. Aunque su origen exacto es difícil de rastrear, se sabe que métodos similares eran conocidos por los matemáticos griegos, como Euclides, quienes utilizaban procedimientos iterativos para resolver ecuaciones cuadráticas.

 La idea fundamental del método de bisección es dividir un intervalo en dos partes y seleccionar el subintervalo donde ocurre un cambio de signo, garantizando la convergencia hacia una raíz.
Este método ha sido valorado por su simplicidad y robustez, ya que no requiere derivadas ni conocimientos avanzados sobre la función en cuestión. A lo largo de los siglos, ha sido una herramienta esencial en el análisis numérico y en la enseñanza de métodos de resolución de ecuaciones no lineales, sirviendo como base para el desarrollo de técnicas más avanzadas.

##  Funciones del Metodo de biseccíon

El **método de bisección** o **corte binario**, también conocido como método de partición de intervalos o de Bolzano, es una técnica de búsqueda incremental que se utiliza para localizar raíces de funciones reales. Este método se basa en el principio de que si una función $f(x)$ es continua en un intervalo $[xl, xu]$ y cambia de signo en los extremos de este intervalo, entonces existe al menos una raíz en dicho intervalo. El algoritmo divide el intervalo en subintervalos sucesivos, evaluando el valor de la función en el punto medio de cada subintervalo, y elige el subintervalo donde ocurre el cambio de signo. Este proceso se repite hasta obtener una aproximación precisa de la raíz.

### Algoritmo del método de bisección:

1. **Selección del intervalo**: Elija los valores iniciales $xl$ y $xu$ tal que $f(xl) \cdot f(xu) < 0$, asegurando que la función cambie de signo en el intervalo.
2. **Aproximación de la raíz**: Calcule el punto medio $xr$ del intervalo, donde $xr = \frac{xl + xu}{2}$.
3. **Evaluación del signo**:

   * Si $f(xl) \cdot f(xr) < 0$, la raíz se encuentra en el subintervalo izquierdo, por lo que se establece $xu = xr$ y se repite el paso 2.
   * Si $f(xl) \cdot f(xr) > 0$, la raíz está en el subintervalo derecho, por lo que se establece $xl = xr$ y se repite el paso 2.
   * Si $f(xl) \cdot f(xr) = 0$, entonces $xr$ es la raíz exacta y el proceso termina.

Este proceso continúa hasta que la diferencia entre $xl$ y $xu$ es suficientemente pequeña, logrando una aproximación precisa de la raíz.

Claro, aquí te dejo un ejemplo paso a paso usando el **método de bisección** para encontrar la raíz de la función $f(x) = x^2 - 4$, es decir, buscar la raíz en el intervalo $[1, 3]$.

### Ejemplo de Método de Bisección para Encontrar la Raíz de $f(x) = x^2 - 4$ en el Intervalo $[1, 3]$

$f(x) = x^2 - 4$

Queremos encontrar la raíz de la ecuación $f(x) = 0$, es decir, donde $x^2 - 4 = 0$, lo cual tiene soluciones $x = 2$ y $x = -2$. Vamos a buscar la raíz en el intervalo $[1, 3]$, donde sabemos que la raíz $x = 2$ está dentro de este intervalo.


Elegimos $x_l = 1$ y $x_u = 3$.

Evaluamos la función en los extremos:

* $f(x_l) = f(1) = 1^2 - 4 = -3$
* $f(x_u) = f(3) = 3^2 - 4 = 5$

Como $f(1) \cdot f(3) = (-3) \cdot 5 = -15 < 0$, sabemos que la raíz está entre $x_l = 1$ y $x_u = 3$.


Calculamos el punto medio $x_r$:

$$
x_r = \frac{x_l + x_u}{2} = \frac{1 + 3}{2} = 2
$$

Evaluamos la función en el punto medio:

* $f(x_r) = f(2) = 2^2 - 4 = 0$


Dado que $f(x_r) = 0$, hemos encontrado que $x_r = 2$ es la raíz exacta.

La raíz de la ecuación $f(x) = x^2 - 4$ en el intervalo $[1, 3]$ es $x = 2$, y hemos terminado el proceso en solo una iteración.

## Implementación en código de Biseccíon 

```python
import matplotlib.pyplot as plt
import numpy as np

def f(x):
    return x**2 - 4

def biseccion_grafica(xl, xu, tol=1e-6, max_iter=100):
    if f(xl) * f(xu) >= 0:
        print("El método de bisección no puede aplicarse: f(xl) y f(xu) deben tener signos opuestos.")
        return None

    xr_list = []  # Para guardar los puntos medios
    for i in range(max_iter):
        xr = (xl + xu) / 2
        fr = f(xr)
        xr_list.append(xr)

        print(f"Iteración {i+1}: xr = {xr}, f(xr) = {fr}")

        if abs(fr) < tol:
            print("Raíz encontrada con la tolerancia deseada.")
            break

        if f(xl) * fr < 0:
            xu = xr
        else:
            xl = xr

    # Gráfica de la función y las aproximaciones
    x_vals = np.linspace(xl - 1, xu + 1, 400)
    y_vals = f(x_vals)

    plt.figure(figsize=(10, 6))
    plt.plot(x_vals, y_vals, label="f(x) = x² - 4", color="blue")
    plt.axhline(0, color='black', linewidth=0.5)
    plt.axvline(0, color='gray', linewidth=0.5)

    # Dibujar cada xr encontrado
    for i, xr in enumerate(xr_list):
        plt.plot(xr, f(xr), 'ro')
        plt.text(xr, f(xr), f"{i+1}", fontsize=8, ha='right')

    plt.title("Método de Bisección aplicado a f(x) = x² - 4")
    plt.xlabel("x")
    plt.ylabel("f(x)")
    plt.grid(True)
    plt.legend()
    plt.show()

    return xr_list[-1]

# Llamada al método
raiz_aprox = biseccion_grafica(1, 3)
print(f"\nRaíz aproximada: {raiz_aprox}")
```
### Salida

```bash
Iteración 1: xr = 2.0, f(xr) = 0.0
Raíz encontrada con la tolerancia deseada.
```

### Grafica


  ![Texto alternativo](@/assets/images/Biseccion.png)

## Explicación visual del Metodo de Biseccíon

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/mdG6gpzE54k"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
    Explicación del Metodo de Biseccíon (Canal: Matematicas con Carito)
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

## Conslusión

El método de bisección es uno de los algoritmos más sencillos y robustos para encontrar raíces de una función continua. Su importancia radica en su simplicidad y en que garantiza la convergencia hacia una raíz, siempre que la función sea continua en el intervalo considerado. Es ampliamente utilizado en problemas de física, economía y ciencias aplicadas donde se requiere una solución aproximada de forma confiable.

La relevancia del método de bisección radica en que es un proceso de búsqueda de raíces de manera iterativa y sistemática, lo que lo hace adecuado para la resolución de ecuaciones que no tienen una solución algebraica directa. Además, es fácil de implementar en una computadora, lo que lo convierte en una opción popular en el análisis numérico de ecuaciones (Burden & Faires, 2010).

Burden, R. L., & Faires, J. D. (2010). Numerical Analysis (9th ed.). Brooks/Cole.
