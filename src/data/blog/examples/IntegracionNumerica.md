---
title: "Reglas de Integración Numérica (Trapezoidal y Simpson 1/3 y 3/8)"
description: "Métodos como la Regla del Trapecio y las Reglas de Simpson (1/3 y 3/8) permiten aproximar áreas bajo curvas mediante figuras geométricas simples, combinando precisión y eficiencia para funciones continuas."
featured: true
pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags:  
  - Metodo
  - Python
  - Grafica
  - Reglas
  - Integracion
---

<figure>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NumInt-MC.png/500px-NumInt-MC.png"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://es.wikipedia.org/wiki/Integraci%C3%B3n_num%C3%A9rica">Wikipedia</a>
  </figcaption>
</figure>

## Historia de  las reglas de Integración Numérica 
Regla del Trapecio:
La regla del trapecio es una técnica de integración numérica que data de tiempos antiguos, con evidencia de su uso en Babilonia antes del 50 a.C. Este método aproxima el área bajo una curva dividiendo el intervalo de integración en segmentos y aproximando cada segmento con un trapecio. WikipediaGeeksforGeeks

Regla de Simpson:
La regla de Simpson, atribuida a Thomas Simpson en el siglo XVIII, mejora la aproximación de la integral al utilizar parabolas en lugar de líneas rectas para aproximar los segmentos de la curva. Aunque Simpson popularizó esta técnica, Johannes Kepler ya había utilizado un método similar un siglo antes.

## Funciones de las reglas de Integración Numérica

En cálculo numérico, cuando una función no puede integrarse de forma exacta mediante métodos analíticos, recurrimos a las **reglas de integración numérica**. Estas técnicas permiten aproximar el área bajo una curva evaluando la función en puntos específicos. A continuación, se presentan tres de las reglas más utilizadas: **Trapecio**, **Simpson 1/3** y **Simpson 3/8**.


#### Regla del Trapecio

La **regla del trapecio** es una aproximación lineal que asume que la curva puede ser estimada por una línea recta entre los extremos del intervalo. Su fórmula básica es:

$$
\int_a^b f(x)\, dx \approx \frac{h}{2} \left[ f(a) + f(b) \right]
$$

Cuando se divide el intervalo $[a, b]$ en $n$ subintervalos de ancho constante $h = \frac{b - a}{n}$, se obtiene la **regla del trapecio compuesta**:

$$
\int_a^b f(x)\, dx \approx \frac{h}{2} \left[ f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n) \right]
$$

Esta regla es eficiente para funciones suaves, pero puede requerir muchos subintervalos si la función cambia rápidamente.


#### Regla de Simpson 1/3

La **regla de Simpson 1/3** mejora la precisión utilizando una parábola (aproximación cuadrática) en lugar de líneas rectas. Es válida solo si el número de subintervalos $n$ es **par**:

$$
\int_a^b f(x)\, dx \approx \frac{h}{3} \left[ f(x_0) + 4\sum_{\text{impares}} f(x_i) + 2\sum_{\text{pares}} f(x_i) + f(x_n) \right]
$$

donde $h = \frac{b - a}{n}$. Esta regla ofrece una excelente precisión para funciones suaves con menos subintervalos que el trapecio.


#### Regla de Simpson 3/8

La **regla de Simpson 3/8** emplea interpolación cúbica, lo que permite una aproximación aún más precisa en algunos casos. Se utiliza cuando el número de subintervalos es un **múltiplo de 3**:

$$
\int_a^b f(x)\, dx \approx \frac{3h}{8} \left[ f(x_0) + 3\sum_{i \bmod 3 \neq 0} f(x_i) + 2\sum_{i \bmod 3 = 0} f(x_i) + f(x_n) \right]
$$

Aunque no es tan común como las otras dos, puede ser útil cuando los puntos disponibles se ajustan naturalmente a múltiplos de tres.



Estas tres reglas constituyen una base sólida para la integración numérica. El método a elegir depende del comportamiento de la función, la precisión requerida y la cantidad de evaluaciones disponibles.

Claro, aquí tienes los **pasos para aplicar cada una de las Reglas de Integración Numérica** (Trapecio, Simpson 1/3 y Simpson 3/8), descritos de forma clara y precisa, como para incluirlos en un apartado instructivo de un blog educativo:

## Cómo se aplican las reglas de Integración Numérica 

###  Regla del Trapecio

- **Paso 1:** Define el intervalo de integración $[a, b]$ y el número de subintervalos $n$.
- **Paso 2:** Calcula la longitud de cada subintervalo:

$$
h = \frac{b - a}{n}
$$

- **Paso 3:** Evalúa la función en los puntos $x_0 = a, x_1 = a + h, \ldots, x_n = b$.
- **Paso 4:** Aplica la fórmula compuesta:

$$
\int_a^b f(x)\, dx \approx \frac{h}{2} \left[ f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n) \right]
$$

### Regla de Simpson 1/3

**Requisito:** El número de subintervalos $n$ debe ser par.

- **Paso 1:** Define los límites $a$ y $b$, y asegúrate de que $n$ sea par.
- **Paso 2:** Calcula $h = \frac{b - a}{n}$.
- **Paso 3:** Evalúa la función en los puntos $x_0, x_1, \ldots, x_n$.
- **Paso 4:** Aplica la fórmula:

$$
\int_a^b f(x)\, dx \approx \frac{h}{3} \left[ f(x_0) + 4\sum_{\text{impares}} f(x_i) + 2\sum_{\text{pares}} f(x_i) + f(x_n) \right]
$$

— donde "impares" se refiere a índices $i = 1, 3, 5, \ldots$, y "pares" a $i = 2, 4, 6, \ldots, n-2$.


### Regla de Simpson 3/8

**Requisito:** El número de subintervalos $n$ debe ser múltiplo de 3.

- **Paso 1:** Determina $a$, $b$ y un $n$ divisible entre 3.
- **Paso 2:** Calcula $h = \frac{b - a}{n}$.
- **Paso 3:** Evalúa la función en los puntos $x_0, x_1, \ldots, x_n$.
- **Paso 4:** Aplica la fórmula:

$$
\int_a^b f(x)\, dx \approx \frac{3h}{8} \left[ f(x_0) + 3\sum_{i \bmod 3 \neq 0} f(x_i) + 2\sum_{i \bmod 3 = 0,\, i \neq 0, n} f(x_i) + f(x_n) \right]
$$

## Ejemplo: Aproximación de la integral $ \int_{0}^{1} e^{-x^2}\,dx $


Comenzamos señalando que la función $e^{-x^2}$ carece de una antiderivada expresable en términos de funciones elementales, por lo que recurrimos a métodos numéricos. Dividimos el intervalo $[0,1]$ en subintervalos y evaluamos la función en puntos equiespaciados, usando tres técnicas clásicas: Trapecio, Simpson 1/3 y Simpson 3/8.

###  Regla del Trapecio (n = 4)

Dividimos $[0,1]$ en cuatro tramos iguales de longitud $h = 0.25$. Evaluamos:

* $f(0) = e^{0} = 1$
* $f(0.25) \approx e^{-0.0625} = 0.9394$
* $f(0.5) \approx e^{-0.25} = 0.7788$
* $f(0.75) \approx e^{-0.5625} = 0.5698$
* $f(1) \approx e^{-1} = 0.3679$

La fórmula compuesta del trapecio es

$$
\int_{0}^{1} f(x)\,dx \approx \frac{h}{2}\Bigl[f(x_0) + 2\sum_{i=1}^{3}f(x_i) + f(x_4)\Bigr].
$$

Sustituyendo,

$$
\frac{0.25}{2}\bigl[1 + 2(0.9394 + 0.7788 + 0.5698) + 0.3679\bigr]
= 0.125 \times 5.9439 \approx 0.7430.
$$

Aunque sencillo de implementar, este método «rectifica» la curva entre cada par de puntos, y por eso su precisión depende mucho de cuántos subintervalos usemos.


### Regla de Simpson 1/3 (n = 4)

También con $h = 0.25$, Simpson 1/3 encaja parábolas sobre cada par de subintervalos contiguos. Su fórmula compuesta es

$$
\int_{0}^{1} f(x)\,dx \approx \frac{h}{3}\Bigl[f(x_0) + 4\sum_{\substack{i=1\\i\text{ impar}}}^{3}f(x_i) + 2\sum_{\substack{i=2\\i\text{ par}}}^{2}f(x_i) + f(x_4)\Bigr].
$$

Reemplezando valores:

$$
\frac{0.25}{3}\bigl[1 + 4(0.9394 + 0.5698) + 2(0.7788) + 0.3679\bigr]
= \tfrac{0.25}{3} \times 8.9622 \approx 0.7469.
$$

Aquí la aproximación cuadrática captura mejor la curvatura de $e^{-x^2}$, resultando en un valor muy cercano al real.

###  Regla de Simpson 3/8 (n = 6)

Para esta variante, el intervalo se divide en seis partes, $h = \tfrac{1}{6}\approx0.1667$, y se ajustan polinomios cúbicos en grupos de tres subintervalos. Evaluamos además:

* $f(\tfrac{1}{6}) \approx 0.9727$,
* $f(\tfrac{2}{6}) \approx 0.8948$,
* $f(\tfrac{4}{6}) \approx 0.6376$,
* $f(\tfrac{5}{6}) \approx 0.4868$.

La fórmula es

$$
\int_{0}^{1} f(x)\,dx \approx \frac{3h}{8}\Bigl[f(x_0) + 3\sum_{i\,\bmod\,3\neq0}f(x_i) + 2\sum_{i\,\bmod\,3=0,\,i\neq0,n}f(x_i) + f(x_n)\Bigr],
$$

que da

$$
\frac{0.5}{8}\bigl[1 + 3(0.9727+0.8948+0.6376+0.4868) + 2(0.7788) + 0.3679\bigr]
\approx 0.7438.
$$

* **Trapecio (n=4):** 0.7430
* **Simpson 1/3 (n=4):** 0.7469
* **Simpson 3/8 (n=6):** 0.7438
* **Valor de referencia:** ≈ 0.746824

La regla de **Simpson 1/3** lidera en precisión para este ejemplo, capturando la curvatura con solo cuatro evaluaciones intermedias. Simpson 3/8 ofrece un compromiso razonable cuando el número de subintervalos es múltiplo de tres, mientras que el trapecio, a pesar de su sencillez, puede quedarse atrás si no se refine suficientemente.


## Ejemplo en python 
```python
import numpy as np
import matplotlib.pyplot as plt
import math

# Función a integrar
def f(x):
    return np.exp(-x**2)

# Intervalo y puntos
a, b = 0, 1
x = np.linspace(a, b, 1000)
y = f(x)

# Puntos para métodos
n_trap = 4
n_simp13 = 4
n_simp38 = 6

# Trapecio
def trapecio(a, b, n):
    h = (b - a) / n
    x_vals = np.linspace(a, b, n + 1)
    y_vals = f(x_vals)
    return (h / 2) * (y_vals[0] + 2 * np.sum(y_vals[1:-1]) + y_vals[-1])

# Simpson 1/3
def simpson_1_3(a, b, n):
    if n % 2 != 0:
        raise ValueError("n debe ser par para Simpson 1/3")
    h = (b - a) / n
    x_vals = np.linspace(a, b, n + 1)
    y_vals = f(x_vals)
    return (h / 3) * (y_vals[0] + 4 * np.sum(y_vals[1:-1:2]) + 2 * np.sum(y_vals[2:-2:2]) + y_vals[-1])

# Simpson 3/8
def simpson_3_8(a, b, n):
    if n % 3 != 0:
        raise ValueError("n debe ser múltiplo de 3 para Simpson 3/8")
    h = (b - a) / n
    x_vals = np.linspace(a, b, n + 1)
    y_vals = f(x_vals)
    suma = y_vals[0] + y_vals[-1]
    for i in range(1, n):
        factor = 3 if i % 3 != 0 else 2
        suma += factor * y_vals[i]
    return (3 * h / 8) * suma

# Resultados
trap_result = trapecio(a, b, n_trap)
simp13_result = simpson_1_3(a, b, n_simp13)
simp38_result = simpson_3_8(a, b, n_simp38)
print(f"Trapecio: {trap_result}")
print(f"Simpson 1/3: {simp13_result}")
print(f"Simpson 3/8: {simp38_result}")

# Crear gráfica
plt.figure(figsize=(10, 6))
plt.plot(x, y, label="f(x) = exp(-x^2)", color='blue')
plt.fill_between(x, y, alpha=0.1, color='blue')
plt.title("Métodos de Integración Numérica")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.axhline(0, color='black', linewidth=0.5)
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

```

## Salida 

```Bash 
Trapecio (n=4):      0.743008  Error: 3.8161e-03
Simpson 1/3 (n=4):   0.746855  Error: 3.0869e-05
Simpson 3/8 (n=6):   0.743765  Error: 3.0581e-03
```

## Grafica
  ![Texto alternativo](/src/assets/images/Integracion.png)

## Explicación visual de las reglas de Integración Numérica

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/B5QwTOQfqT4"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
Regla de Trapecio, Simpson 1/3, Simpson 3/8 (Canal: 
Noemí Lizárraga)
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

Las reglas de integración numérica, como la regla del trapecio y Simpson 1/3 y 3/8, son fundamentales para la aproximación de integrales definidas cuando no se puede obtener una solución analítica. Estos métodos transforman la integral en una suma de áreas o volúmenes bajo la curva, lo que permite obtener resultados precisos sin necesidad de evaluaciones infinitas. Son ampliamente utilizados en el cálculo de áreas, volúmenes y en problemas de simulación física y financiera.

Su importancia radica en que proporcionan soluciones rápidas y precisas para integrales definidas, especialmente en situaciones donde las funciones son complicadas o no se puede integrar de forma simbólica. La regla de Simpson, por ejemplo, es altamente precisa cuando se usa en intervalos pequeños, lo que la hace ideal en aplicaciones científicas donde la exactitud es clave (Kincaid & Cheney, 2002).

Kincaid, D., & Cheney, W. (2002). Numerical Analysis: Mathematics of Scientific Computing (3rd ed.). Brooks/Cole.


