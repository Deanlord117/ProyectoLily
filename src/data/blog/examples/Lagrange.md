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
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://astrosigma.com/joseph-louis-lagrange/">Astrosigma</a>
  </figcaption>
</figure>

## Historia de la interpolación de Lagrange
La interpolación de Lagrange fue publicada por Joseph-Louis Lagrange en 1795, aunque Edward Waring ya había descubierto el método en 1779 y Leonhard Euler presentó una fórmula relacionada en 1783. Este método proporciona una expresión explícita para el polinomio interpolante que pasa por un conjunto de puntos dados. Wikipedia

A pesar de su elegancia teórica, la interpolación de Lagrange puede ser computacionalmente ineficiente para grandes conjuntos de datos debido a la necesidad de recalcular todo el polinomio al agregar nuevos puntos. Sin embargo, sigue siendo una herramienta fundamental en la teoría de la interpolación y en aplicaciones donde se requiere una formulación explícita del polinomio interpolante.


## Funciones de la interpolación de Lagrange

La función principal de la interpolación de Lagrange es aproximar o estimación de valores de una función en puntos intermedios, dados un conjunto de puntos discretos.
- Aproximar valores: Encuentra un polinomio que pase por todos los puntos dados.
- Interpolación: Predice valores entre los puntos conocidos.
- Simplicidad: No necesita resolver sistemas de ecuaciones.

## Cómo se hace la Interpolación de Lagrange

El **_polinomio de interpolación de Lagrange_** es simplemente una reformulación del polinomio de Newton que evita el cálculo de las diferencias divididas, y se representa de
manera concisa **como**

$$
P(x) = \sum_{i=0}^{n-1} y_i \cdot \ell_i(x)
$$

donde

$$
\ell_i(x) = \prod_{\substack{i = 0 \\ j \ne i}}^{n-1} \frac{x - x_i}{x_j - x_i}
$$

donde $\prod$ designa el “producto de”. Por ejemplo, la versión lineal $(n = 1)$ es

$$
f_1(x) = \frac{x - x_1}{x_0 - x_1} \cdot f_0(x) = \frac{x - x_0}{x_1 - x_0}
$$

y la versión de segundo grado es

$$
f_2(x) = \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)} \cdot  f(x_0) + \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)} \cdot f(x_1) 
$$
$$
+ \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)} \cdot f(x_2)
$$

<br>

La ecuación se obtiene de manera directa del polinomio de Newton. Sin embargo, el razonamiento detrás de la formulación de Lagrange se comprende directamente al darse cuenta de que cada término $\ell_i(x)$ será $1$ en $x = xi$ y $0$ en todos
los otros puntos. De esta forma, cada producto $\ell_i(x)$ $f(x_i)$ toma el valor de
$f(x_i)$ en el punto $x_i$. En consecuencia, la sumatoria de todos los productos en la ecuación
es el único polinomio de n-ésimo grado que pasa exactamente a través de todos
los $n + 1$ puntos, que se tienen como datos.

### Ejemplo: Interpolación de Lagrange caso lineal con tres puntos

Dado el conjunto de puntos: $(0,1)$, $(1,3)$ y $(2,0)$, hallamos el polinomio $P(x)$ que los interpola.

La fórmula general es:


$$
P(x) = \sum_{i=0}^{n-1} y_i \cdot \ell_i(x)
$$


donde cada $\ell_i(x)$ es:

$$
\ell_i(x) = \prod_{\substack{i = 0 \\ j \ne i}}^{n-1} \frac{x - x_i}{x_j - x_i}
$$

Calculamos cada $\ell_i(x)$:

Iteracion #1     $i=0$, $j=1,2$

$$
\ell_0(x) = \frac{(x - 1)(x - 2)}{(0 - 1)(0 - 2)} 
= \frac{1}{2}(x^2-3x+2)
$$

Iteracion #2     $i=1$, $j=0,2$

$$
\ell_1(x) = \frac{(x - 0)(x - 2)}{(1 - 0)(1 - 2)}
 = \frac{x(x - 2)}{-1} = -(x^2 - 2x)
$$

Iteracion #3     $i=2$, $j=0,1$

$$
\ell_2(x) = \frac{(x - 0)(x - 1)}{(2 - 0)(2 - 1)} = \frac{1}{2}(x^2-x)
$$

Sustituimos en $P(x)$:

$$
P(x) = 1 \cdot \frac{1}{2}(x^2-3x+2) + 3 \cdot [-(x^2 - 2x)] + 0 \cdot \frac{1}{2}(x^2-x)
$$


Desarrollamos:

$$
P(x) = \frac{1}{2}x^2-\frac{3}{2}x + 1 - 3x^2 +6x 
$$


Sumamos los términos:

$$
P(x) = -\frac{5}{2}x^2 + \frac{9}{2}x + 1
$$


Resultado final


$$
P(x) = -\frac{5}{2}x^2 + \frac{9}{2}x + 1
$$

## Implementación en código de la Interpolación de Lagrange

```python
import numpy as np
import sympy as sym
import matplotlib.pyplot as plt

#creamos los puntos xi y fi
xi=[0,1,2]
fi=[1,3,0]
#convertimos a array
#Esto se hace para hacer calculos mas rapidos, aparte de que soporta sumas vectorizadas
#lo hace compatible con numpy, matplotlib y sympy
xi = np.array(xi)
fi = np.array(fi)

n= len(xi) #nos devuelve el tamaño del array
x = sym.Symbol('x') #Declara una variable simbolica, en este caso x
polinomio = 0
for i in range(0,n,1):#Ciclo for que va desde 0 hasta n-1 de uno en uno
    numerador=1
    denominador=1
    for j in range(0,n,1):#Ciclo for que va desde 0 hasta n-1 de uno en uno
        if (j!=i):
            numerador=numerador*(x-xi[j])#Calcula el numerador
            print(f"({x}-{xi[j]})",end="*")#Imprime el numerador
            denominador=denominador*(xi[i]-xi[j])#Calcula el denominador
            print(f"({xi[i]}-{xi[j]})",end="*")#Imprime el denominador
    terminoLi=numerador/denominador#Calcula el termino de Lagrange
    print(f"L({i})= {terminoLi}")#Imprime el termino de Lagrange
    polinomio=polinomio+terminoLi*fi[i]#Calcula el polinomio de Lagrange
   


polisimple = polinomio.expand()#Simplifica el polinomio

px= sym.lambdify(x,polisimple)#Convierte el polinomio a una funcion que se puede evaluar

print('    valores de fi: ',fi)
print('    valores de xi: ',xi)
print('Polinomio de Lagrange: ')
print(polisimple)


a = np.min(xi)#Calcula el minimo de xi
b = np.max(xi)#Calcula el maximo de xi
pxi = np.linspace(a,b)#Crea un array de puntos equidistantes
pfi = px(pxi)#Evalua el polinomio en los puntos equidistantes

plt.plot(xi,fi,'o', label = 'Puntos')#Grafica los puntos, 'o' es para que los grafique como puntos y crea un etiqueta que indica que son los puntos
plt.plot(pxi,pfi, label = 'Polinomio')#Grafica el polinomio, crea una etiqueta que indica que es el polinomio
plt.legend()#Muestra la leyenda
plt.xlabel('xi')#Etiqueta el eje x
plt.ylabel('fi')#Etiqueta el eje y
plt.title('Interpolación Lagrange')#Pone un titulo a la grafica
plt.show()#Muestra la grafica
```
### Salida

```bash

(x-1)*(0-1)*(x-2)*(0-2)*L(0)= (x - 2)*(x - 1)/2
(x-0)*(1-0)*(x-2)*(1-2)*L(1)= -x*(x - 2)
(x-0)*(2-0)*(x-1)*(2-1)*L(2)= x*(x - 1)/2
    valores de fi:  [1 3 0]
    valores de xi:  [0 1 2]
Polinomio de Lagrange: 
-5*x**2/2 + 9*x/2 + 1


```

### Grafica


  ![Texto alternativo](@/assets/images/Lagrange.png)


## Explicación visual de la Interpolación de Lagrange

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/CeYKhxfmneI"
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
La interpolación de Lagrange es uno de los métodos más conocidos para la interpolación de funciones a través de un conjunto de puntos dados. Se basa en la construcción de un polinomio que pase por todos los puntos de datos, y su importancia radica en que proporciona una aproximación exacta cuando se tiene un número finito de puntos de muestra. Es ampliamente utilizada en problemas de ajuste de curvas y en la resolución de problemas de aproximación en diversas ramas de la ciencia y la ingeniería.

Este método es relevante porque, a diferencia de otras técnicas de interpolación, no requiere resolver un sistema de ecuaciones lineales, lo que simplifica su implementación y hace que sea más accesible en cálculos manuales o computacionales. Su uso es esencial en la simulación de fenómenos físicos, la estimación de valores intermedios y el ajuste de datos experimentales (Atkinson, 2008).

Atkinson, K. E. (2008). An Introduction to Numerical Analysis (2nd ed.). Wiley.
