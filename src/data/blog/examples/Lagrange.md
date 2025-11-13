---
title: "Interpolación de Lagrange"
description: "Técnica que utiliza polinomios de Lagrange para aproximar una función que pasa exactamente por un conjunto de puntos dados. Es ideal para datos igualmente distribuidos y fácil de aplicar sin necesidad de resolver sistemas de ecuaciones."
pubDatetime: 2025-05-03T21:30:00Z
author: "Adrian Rodriguez Arzola"
featured: true
tags:
  - Metodo
  - Python
  - Grafica
  - Lagrange
---

<figure>
  <img
    src="https://astrosigma.com/images/biografias/Joseph-Louis-Lagrange-600x400.jpg"
    alt="Retrato de Joseph-Louis Lagrange"
  />
  <figcaption class="text-center">
    Imagen de <a href="https://astrosigma.com/joseph-louis-lagrange/">Astrosigma</a>
  </figcaption>
</figure>

## Historia de la interpolación de Lagrange

La interpolación de Lagrange fue publicada por Joseph-Louis Lagrange en 1795, aunque Edward Waring ya había descubierto el método en 1779 y Leonhard Euler presentó una fórmula relacionada en 1783. Este método proporciona una expresión explícita para el polinomio interpolante que pasa por un conjunto de puntos dados.

A pesar de su elegancia teórica, la interpolación de Lagrange puede ser computacionalmente ineficiente para grandes conjuntos de datos, ya que requiere recalcular todo el polinomio al agregar nuevos puntos. Sin embargo, sigue siendo una herramienta fundamental en la teoría de la interpolación.

## Funciones de la interpolación de Lagrange

La función principal de la interpolación de Lagrange es **aproximar valores intermedios** de una función dados ciertos puntos discretos:

- Aproximar valores: encuentra un polinomio que pase por todos los puntos dados.  
- Interpolación: predice valores entre los puntos conocidos.  
- Simplicidad: no necesita resolver sistemas de ecuaciones.  

## Cómo se hace la Interpolación de Lagrange

El **polinomio de interpolación de Lagrange** se representa así:

```

P(x) = Σ [ yᵢ * Lᵢ(x) ]
Lᵢ(x) = Π [ (x - xⱼ) / (xᵢ - xⱼ) ]   , j ≠ i

```

### Ejemplo: caso lineal con tres puntos

Dado el conjunto de puntos (0,1), (1,3) y (2,0), se busca el polinomio P(x).

Se obtiene:

```

L₀(x) = ½(x² - 3x + 2)
L₁(x) = -(x² - 2x)
L₂(x) = ½(x² - x)

```

Sustituyendo:

```

P(x) = 1·L₀(x) + 3·L₁(x) + 0·L₂(x)
P(x) = ½x² - 3/2x + 1 - 3x² + 6x
P(x) = -5/2x² + 9/2x + 1

```

Resultado final:

```

P(x) = -2.5x² + 4.5x + 1

````

## Implementación en Python

```python
import numpy as np
import sympy as sym
import matplotlib.pyplot as plt

xi = np.array([0, 1, 2])
fi = np.array([1, 3, 0])

n = len(xi)
x = sym.Symbol('x')
polinomio = 0

for i in range(n):
    numerador = 1
    denominador = 1
    for j in range(n):
        if j != i:
            numerador *= (x - xi[j])
            denominador *= (xi[i] - xi[j])
    terminoLi = numerador / denominador
    polinomio += terminoLi * fi[i]

polisimple = polinomio.expand()
px = sym.lambdify(x, polisimple)

print('Polinomio de Lagrange:')
print(polisimple)

a, b = np.min(xi), np.max(xi)
pxi = np.linspace(a, b)
pfi = px(pxi)

plt.plot(xi, fi, 'o', label='Puntos')
plt.plot(pxi, pfi, label='Polinomio')
plt.legend()
plt.xlabel('xi')
plt.ylabel('fi')
plt.title('Interpolación de Lagrange')
plt.show()
````

### Salida esperada

```
Polinomio de Lagrange:
-5*x**2/2 + 9*x/2 + 1
```

### Gráfica

![Polinomio de Lagrange](@/assets/images/Lagrange.png)

## Explicación visual

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/CeYKhxfmneI"
      title="Explicación de Interpolación de Lagrange"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
    Video: Matematicas con Carito — Interpolación de Lagrange
  </figcaption>
</div>

```html
<style>
  .video-wrapper {
    max-width: 800px;
    margin: 2rem auto;
    border: 3px solid #8e3b46;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
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
```

## Conclusión

La interpolación de Lagrange es uno de los métodos más elegantes y didácticos para construir polinomios que pasen por un conjunto de puntos dados.
Su principal virtud radica en evitar la resolución de sistemas de ecuaciones, lo que facilita su implementación tanto a mano como por computadora.
Se usa ampliamente en simulaciones físicas, ajuste de datos experimentales y problemas de ingeniería donde se requiere precisión en valores intermedios.

**Referencia:**
Atkinson, K. E. (2008). *An Introduction to Numerical Analysis* (2nd ed.). Wiley.

```

---

✅ **Cambios hechos:**
- Arreglé la indentación del bloque YAML.  
- Convertí todas las ecuaciones en bloques de texto o código (Astro no se rompe).  
- Metí el `<style>` dentro de un bloque HTML separado para que no trabe el parser.  
- Revisé los acentos, etiquetas y cierres `<div>` y `<figure>`.

¿Quieres que te devuelva una versión *con KaTeX activo* (para mostrar las fórmulas matemáticas reales en vez de texto)?
```
