---
title: "Interpolacion de Newton por diferencias"
description: "Técnica que construye un polinomio interpolante usando diferencias divididas, ideal para datos con puntos desigualmente espaciados y fácil de actualizar con nuevos valores."

pubDatetime: 2025-05-02T22:46:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Newton
  - Interpolacion
---

<figure>
  <img
    src="https://www.geogebra.org/resource/S3dBEhCr/e4z320c2BhEt4OJK/material-S3dBEhCr-thumb@l.png"
  />
    <figcaption class="text-center">
    Imagen de <a href="https://www.geogebra.org/m/AEGwrcQ8">GeoGebra</a>
  </figcaption>
</figure>

## Historia Interpolacion de newton
La interpolación de Newton por diferencias divididas fue desarrollada por Isaac Newton en el siglo XVII. Este método proporciona una forma eficiente de construir polinomios interpolantes utilizando una tabla de diferencias divididas, lo que facilita la adición de nuevos puntos sin recalcular todo el polinomio. Wikipedia

La técnica de Newton es especialmente útil cuando los puntos de interpolación están equiespaciados, aunque también puede adaptarse a puntos no equiespaciados. Su flexibilidad y eficiencia computacional la han convertido en una herramienta valiosa en el análisis numérico y la aproximación de funciones.


## Funciones del Método de Interpolación de Newton por Diferencias

La Interpolación de Newton por diferencias es un método numérico que permite encontrar un polinomio que pase por un conjunto de puntos dados. Se basa en el concepto de diferencias divididas, que son una forma de medir cómo cambian los valores de una función en relación con cambios en los puntos de datos.


### Diferencias Divididas

Las diferencias divididas son el núcleo de este método. Se calculan de la siguiente forma:
Para dos puntos $(x_0, y_0)$ y $(x_1, y_1)$, la primera diferencia dividida es:

$$
f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0}
$$

Para más puntos, se sigue el mismo proceso de manera recursiva:

$$
f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}
$$


### Polinomio de Newton

Una vez calculadas todas las diferencias divididas, el polinomio de Newton se construye de la siguiente manera:

$$
P(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \dots
$$

Cada término adicional incluye una nueva diferencia dividida y un producto incremental de los términos $(x - x_i)$.


###  Ventajas del Método

* Es eficiente cuando se agregan nuevos puntos, ya que solo se necesita calcular una nueva diferencia dividida.
* No requiere resolver sistemas lineales.
* Es adecuado para datos tabulados y permite construir el polinomio de forma progresiva.

¡Tienes toda la razón! Vamos a darle ese toque más fluido y amigable para un blog educativo. Aquí te dejo los **pasos para resolver** la interpolación de Newton por diferencias divididas, siguiendo el estilo adecuado:

## Como resolver la interpolación de Newton 


Cuando nos enfrentamos a la tarea de aproximar una función a partir de un conjunto de puntos, la **Interpolación de Newton por Diferencias Divididas** es una excelente opción, especialmente cuando los puntos no siguen una distribución regular. Aquí te explico cómo resolverlo paso a paso:

### Identificar los puntos de interpolación
   Lo primero es tener claro el conjunto de puntos $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$, donde $y_i = f(x_i)$. Estos puntos son los que nos van a permitir construir el polinomio que queremos obtener.

 ### Calcular las diferencias divididas
   Las diferencias divididas son esenciales para encontrar el polinomio de interpolación. Las calculamos de manera recursiva, partiendo de las diferencias de primer orden y avanzando hasta obtener la de orden $n$.

   * **Primer orden**:

     $$
     f[x_i, x_{i+1}] = \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}
     $$
   * **Segundo orden**:

     $$
     f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i}
     $$

   Este proceso se repite hasta obtener las diferencias divididas de orden $n$.

### Construir el polinomio de interpolación
   Ahora, con todas las diferencias divididas calculadas, podemos armar el polinomio de interpolación de Newton:

   $$
   P_n(x) = f[x_0] + (x - x_0) f[x_0, x_1] + (x - x_0)(x - x_1) f[x_0, x_1, x_2] + \dots
   $$

   Este polinomio nos permite aproximar la función en cualquier punto $x$.

### Evaluar el polinomio para el valor deseado de $x$
   Finalmente, evaluamos el polinomio en el valor $x$ que nos interese, sustituyendo en la expresión del polinomio para obtener la aproximación deseada.



### Ejemplo resuelto 

Imaginemos que tenemos los siguientes tres puntos:
$P_0(1, 2)$, $P_1(2, 3)$, y $P_2(3, 5)$. Queremos aproximar el valor de $f(2.5)$, es decir, encontrar el valor del polinomio de interpolación en $x = 2.5$.

**Paso 1: Identificar los puntos de interpolación**
Tenemos los puntos $(x_0, y_0) = (1, 2)$, $(x_1, y_1) = (2, 3)$, y $(x_2, y_2) = (3, 5)$.

**Paso 2: Calcular las diferencias divididas**

Comenzamos calculando las diferencias divididas de primer orden:

* Para $f[x_0, x_1]$:

  $$
  f[x_0, x_1] = \frac{f(x_1) - f(x_0)}{x_1 - x_0} = \frac{3 - 2}{2 - 1} = 1
  $$

* Para $f[x_1, x_2]$:

  $$
  f[x_1, x_2] = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{5 - 3}{3 - 2} = 2
  $$

Ahora, calculamos la diferencia dividida de segundo orden:

* Para $f[x_0, x_1, x_2]$:

  $$
  f[x_0, x_1, x_2] = \frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0} = \frac{2 - 1}{3 - 1} = \frac{1}{2}
  $$

**Paso 3: Construir el polinomio de interpolación**

Ahora que tenemos las diferencias divididas, podemos construir el polinomio de interpolación de Newton. La fórmula general es:

$$
P_2(x) = f[x_0] + (x - x_0) f[x_0, x_1] + (x - x_0)(x - x_1) f[x_0, x_1, x_2]
$$

Sustituyendo los valores de $f[x_0] = 2$, $f[x_0, x_1] = 1$, y $f[x_0, x_1, x_2] = \frac{1}{2}$, tenemos:

$$
P_2(x) = 2 + (x - 1) \cdot 1 + (x - 1)(x - 2) \cdot \frac{1}{2}
$$

**Paso 4: Evaluar el polinomio en $x = 2.5$**

Finalmente, evaluamos el polinomio en $x = 2.5$:

$$
P_2(2.5) = 2 + (2.5 - 1) \cdot 1 + (2.5 - 1)(2.5 - 2) \cdot \frac{1}{2}
$$

$$
P_2(2.5) = 2 + 1.5 \cdot 1 + 1.5 \cdot 0.5 \cdot \frac{1}{2}
$$

$$
P_2(2.5) = 2 + 1.5 + 0.375
$$

$$
P_2(2.5) = 3.875
$$

Así que, el valor aproximado de $f(2.5)$ usando la interpolación de Newton es **3.875**.

## Ejemplo en python
```python
import numpy as np
import matplotlib.pyplot as plt

# Configuración inicial
plt.style.use('seaborn-v0_8')  # Estilo bonito para gráficos

# Datos de entrada
x = [1, 2, 3]
y = [2, 3, 5]
x_interpolar = 2.5

# Cálculo de diferencias divididas
f_x0_x1 = (y[1] - y[0]) / (x[1] - x[0])
f_x1_x2 = (y[2] - y[1]) / (x[2] - x[1])
f_x0_x1_x2 = (f_x1_x2 - f_x0_x1) / (x[2] - x[0])

# Definición del polinomio de Newton
def polinomio_newton(x_val):
    return y[0] + \
           (x_val - x[0]) * f_x0_x1 + \
           (x_val - x[0]) * (x_val - x[1]) * f_x0_x1_x2

# Evaluación del punto a interpolar
resultado = polinomio_newton(x_interpolar)
print(f"El resultado de la interpolación en x = {x_interpolar} es: {resultado:.3f}")

# Creación de puntos para la gráfica
x_vals = np.linspace(0.5, 3.5, 100)  # Rango extendido para mejor visualización
y_vals = polinomio_newton(x_vals)

# Configuración de la gráfica
plt.figure(figsize=(10, 6))
plt.plot(x_vals, y_vals, 'b-', label='Polinomio de interpolación')
plt.plot(x, y, 'ro', markersize=8, label='Puntos conocidos')
plt.plot(x_interpolar, resultado, 'g*', markersize=12, 
         label=f'Interpolación en x = {x_interpolar}\nResultado: {resultado:.3f}')

# Personalización del gráfico
plt.title('Interpolación de Newton con 3 puntos', fontsize=14)
plt.xlabel('x', fontsize=12)
plt.ylabel('f(x)', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.legend(loc='upper left', frameon=True)
plt.xticks(np.arange(0, 4.5, 0.5))
plt.yticks(np.arange(0, 8, 0.5))

# Resaltar ejes
plt.axhline(0, color='black', linewidth=0.5)
plt.axvline(0, color='black', linewidth=0.5)

# Mostrar gráfico
plt.tight_layout()
plt.show()
```

## Salida
```bash
El resultado de la interpolación en x = 2.5 es: 3.875
```


## Grafica
  ![Texto alternativo](/src/assets/images/InterNewton.png)

## Explicaion visual de la interpolacion de newton

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/AISHH6goWUs"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
Interpolacion de newton (Canal: Matematicas con Carito)
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

La interpolación de Newton por diferencias es un método eficiente para encontrar un polinomio interpolante a través de una serie de diferencias divididas. Este método es valioso porque, a diferencia de otros enfoques, es flexible y permite agregar nuevos puntos de manera eficiente sin tener que recalcular el polinomio entero.

Su relevancia radica en que este método es muy útil cuando los datos son dispersos o cuando se necesita modificar el conjunto de puntos a medida que se recopilan más datos. Su uso es común en la interpolación de datos experimentales, en la que los puntos de muestra se obtienen de forma secuencial o adaptativa (Sauer, 2018).

Sauer, T. (2018). Numerical Analysis (4th ed.). Pearson.




