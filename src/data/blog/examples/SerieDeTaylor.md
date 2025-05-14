---
title: "Serie de Talyor"
description: "Expansión de una función en una suma infinita de términos calculados a partir de sus derivadas en un solo punto. Es útil para aproximar funciones complicadas mediante polinomios, proporcionando una representación de la función en términos de potencias de la diferencia entre la variable y el punto de expansión."
featured: true
pubDatetime: 2025-05-02T15:00:00Z
author: "Adrian Rodriguez Arzola"
tags: 
  - Metodo
  - Python
  - Grafica
  - Serie
  - Taylor
---

<figure>
  <img
    src="https://ecuacionesdiferencialesaplicaciones.com/wp-content/uploads/2021/06/banner_curso2.png"
    alt="Grafica de la serie de taylor"
  />
    <figcaption class="text-center">
    Imagen de <a href="http://ecuacionesdiferencialesaplicaciones.com/comprar/series-de-taylor-y-aplicaciones-en-ingenieria-y-ciencias-con-sagemath">Ecuaciones diferenciales</a>
  </figcaption>
</figure>

## Historia de la serie de Taylor
Método de la Serie de Taylor
El método de la serie de Taylor fue introducido por el matemático inglés Brook Taylor en su obra Methodus Incrementorum Directa et Inversa publicada en 1715. En esta obra, Taylor desarrolló una nueva rama de las matemáticas conocida como cálculo de las diferencias finitas, donde estudió los cambios de variable y presentó el desarrollo en serie de una función de una variable. Este método permitió determinar ecuaciones diferenciales que explican fenómenos físicos, como el movimiento de una cuerda vibrante y la trayectoria de un rayo de luz al atravesar un medio heterogéneo como la atmósfera .RTVE

La importancia del teorema de Taylor radica en su capacidad para reducir cálculos complejos de funciones a operaciones aritméticas elementales, como sumas y multiplicaciones. Aunque fue desarrollado en el siglo XVIII, su relevancia se mantuvo y fue destacada posteriormente por matemáticos como Joseph-Louis Lagrange, quien reconoció su utilidad en el desarrollo del cálculo diferencial. La serie de Taylor se ha convertido en una herramienta fundamental en análisis numérico y en diversas aplicaciones científicas e ingenieriles .RTVE


## Funciones de la serie de Taylor

El teorema de Taylor y su fórmula, la serie de Taylor, es de gran valor
en el estudio de los métodos numéricos. En esencia, la serie de Taylor proporciona un
medio para predecir el valor de una función en un punto en términos del valor de la
función y sus derivadas en otro punto. En particular, el teorema establece que cualquier función suave puede aproximarse por un polinomio.

Una buena manera de comprender la serie de Taylor consiste en construirla término
por término. Por ejemplo, el primer término de la serie es:

$$
f(x_{i+1}) \cong f(x_i)
$$

Esta relación, llamada la aproximación de orden cero, indica que el valor de f en el
nuevo punto es el mismo que su valor en el punto anterior. Tal resultado tiene un sentido
intuitivo, ya que si $xi$ y $xi+1$ están muy próximas entre sí, entonces es muy probable que el nuevo valor sea similar al anterior.
La ecuación ofrece una estimación perfecta si la función que se va a aproximar
es, de hecho, una constante. Sin embargo, si la función cambia en el intervalo, entonces
se requieren los términos adicionales de la serie de Taylor, para obtener una mejor
aproximación. Por ejemplo, la aproximación de primer orden se obtiene sumando otro
término para obtener:

$$
f(x_{i+1}) \cong f'(x_i) +f(x_i) \cdot (x_{i+1}-x_i)
$$


## Cómo se hace la Serie de Taylor

#### **Teorema de Taylor**

Sea $f(x)$ una función real cuyas derivadas hasta orden $n+1$ existen y son continuas en un intervalo que contiene a los puntos $a$ y $x$. Entonces, $f(x)$ puede expresarse como:

$$
f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x - a)^n + R_n(x)
$$

Esta expresión se denomina **expansión de Taylor** de orden $n$ de la función $f$ centrada en $a$. El término $R_n(x)$ representa el **residuo** o **error de truncamiento**, es decir, la diferencia entre el valor exacto de la función y su aproximación polinómica.


#### **Formas del residuo $R_n(x)$**

1. **Forma integral (residuo de Cauchy):**

$$
R_n(x) = \frac{1}{n!} \int_a^x f^{(n+1)}(t)(x - t)^n dt
$$

Esta forma expresa el error como una integral que depende de la derivada de orden $n+1$ de $f$.

2. **Forma de Lagrange (usando el teorema del valor medio para integrales):**

$$
R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}
$$

donde $\xi$ es un punto intermedio entre $a$ y $x$. Esta expresión proporciona una estimación más directa del error, basada en el comportamiento de la derivada de orden $n+1$.


#### **Importancia del Teorema**

El Teorema de Taylor permite aproximar funciones suaves (es decir, derivables y continuas) mediante polinomios. Esta técnica es fundamental en:

* Análisis numérico (para estimar errores).
* Métodos de solución de ecuaciones diferenciales.
* Simulación computacional.
* Desarrollo de algoritmos en cálculo científico.


En contextos computacionales, es frecuente usar la forma:

$$
f(x_{i+1}) = f(x_i) + f'(x_i)h + \frac{f''(x_i)}{2!}h^2 + \cdots + \frac{f^{(n)}(x_i)}{n!}h^n + R_n
$$

donde:

* $h$ representa el **incremento** o **tamaño de paso**.
* $R_n$ es el error asociado a la aproximación de orden $n$.


### Ejemplo: Aproximar $f(x) = e^x$ cerca de $x = 0$ usando el polinomio de Taylor de orden 3

Queremos aproximar $f(x) = e^x$ alrededor de $a = 0$, evaluando en un punto cercano, por ejemplo $x = 0.5$, usando un polinomio de tercer orden.


Sabemos que:

$$
f(x) = e^x \Rightarrow f^{(n)}(x) = e^x \quad \text{para todo } n
$$

Entonces, evaluadas en $a = 0$:

$$
f(0) = 1, \quad f'(0) = 1, \quad f''(0) = 1, \quad f^{(3)}(0) = 1
$$


Usamos la fórmula general:

$$
P_3(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f^{(3)}(a)}{3!}(x - a)^3
$$

Sustituimos $a = 0$:

$$
P_3(x) = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}
$$


$$
P_3(0.5) = 1 + 0.5 + \frac{(0.5)^2}{2} + \frac{(0.5)^3}{6}
= 1 + 0.5 + 0.125 + 0.02083 \approx 1.64583
$$

Sabemos que:

$$
e^{0.5} \approx 1.64872
$$

Entonces el **error de truncamiento** es:

$$
|f(x) - P_3(x)| = |1.64872 - 1.64583| \approx 0.00289
$$

Usamos la forma de Lagrange del residuo para estimar el error máximo

$$
R_3(x) = \frac{f^{(4)}(\xi)}{4!}(x - a)^4 = \frac{e^\xi}{24}(0.5)^4
$$

Como $\xi \in (0, 0.5)$, el valor máximo de $e^\xi$ en ese intervalo es $e^{0.5} \approx 1.64872$. Entonces:

$$
|R_3(0.5)| \leq \frac{1.64872}{24}(0.0625) \approx 0.00429
$$

Esto confirma que el error real (0.00289) está dentro del límite estimado.


## Implementación en código de la Serie de Taylor

```python
import math

# Definimos la función original
def f(x):
    return math.exp(x)

# Punto alrededor del cual se expande (a = 0)
a = 0

# Punto donde queremos evaluar (x = 0.5)
x = 0.5

# Cálculo del polinomio de Taylor de orden 3
def taylor_exp_order3(x, a):
    term0 = f(a)
    term1 = f(a) * (x - a)
    term2 = f(a) * (x - a)**2 / math.factorial(2)
    term3 = f(a) * (x - a)**3 / math.factorial(3)
    return term0 + term1 + term2 + term3

# Evaluar la aproximación y el valor real
approx = taylor_exp_order3(x, a)
exact = f(x)
error = abs(exact - approx)

# Estimar el residuo con la forma de Lagrange
# Usamos el máximo valor posible de f^{(4)} en [0, 0.5] → e^0.5
residuo_max = math.exp(0.5) * (x - a)**4 / math.factorial(4)

# Mostrar resultados
print(f"Valor exacto de e^{x}      : {exact}")
print(f"Aproximación con Taylor orden 3: {approx}")
print(f"Error real                   : {error}")
print(f"Error estimado (residuo)     : {residuo_max}")

```
### Salida

```bash
Valor exacto de e^0.5      : 1.6487212707001282
Aproximación con Taylor orden 3: 1.6458333333333333
Error real                   : 0.002887937366794871
Error estimado (residuo)     : 0.004288337295208584
```

### Grafica


  ![Texto alternativo](@/assets/images/SerieTaylor.png)


## Explicación visual de la serie de Taylor

<div class="video-wrapper">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/S-KnzKQC408"
      title="Explicación de Series de Taylor"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <figcaption class="text-center">
    Explicación de Series de Taylor (Canal: Cal Math)
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
El método de la Serie de Taylor es fundamental en análisis numérico debido a su capacidad para aproximar funciones complejas con polinomios. Este método tiene un amplio rango de aplicaciones, especialmente en física e ingeniería, ya que permite modelar fenómenos continuos de forma eficiente y precisa. La expansión en series de Taylor ofrece una representación matemática que facilita el cálculo de soluciones en problemas donde los métodos exactos son impracticables.

El uso de este método sigue siendo relevante porque permite aproximar valores de funciones de manera directa y efectiva, sin necesidad de recurrir a algoritmos más complicados. Se usa comúnmente en la simulación de sistemas dinámicos y el análisis de errores en métodos numéricos, lo que lo convierte en una herramienta esencial para la resolución de ecuaciones diferenciales y otros problemas complejos (Kincaid & Cheney, 2002).

Kincaid, D., & Cheney, W. (2002). Numerical Analysis: Mathematics of Scientific Computing (3rd ed.). Brooks/Cole.
