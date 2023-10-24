# PruebaFrontend - MarketplaceJV de Compras

## Descripción

Esta es una aplicación web de compras que te permite explorar y comprar productos en línea. La aplicación utiliza React para construir la interfaz de usuario y gestionar el carrito de compras.


## Requisitos Funcionales
## 1 
Mostrar la información de productos y detalles de producto: La aplicación muestra información de productos en la página principal y permite a los usuarios ver detalles de un producto cuando hacen clic en él.

## 2
Calcular el Valor Total y el valor del IVA: La aplicación permite calcular el valor total de los productos en el carrito, incluyendo el IVA del 19%. También almacena este valor en el almacenamiento local.

## 3
Consumir la API externa y agregar productos: La aplicación consume la API externa proporcionada y agrega al menos los 10 primeros productos encontrados en ella.

## 4
Ver más detalles de un producto: Los usuarios pueden ver más detalles de un producto al hacer clic en el botón "Ver más".
## Url del despliegue

![Url] (https://prueba-frontend-gray.vercel.app/)

## Capturas de Pantalla
## Almacenamiento Local Storage
![Captura de pantalla 4](./src/assets/captura5.png)


## Responsive
La aplicación se ha diseñado teniendo en cuenta la responsividad en diferentes dispositivos, lo que garantiza una experiencia de usuario óptima en teléfonos celulares, tabletas y computadoras.

![Captura de pantalla 6](./src/assets/Captura6.png)
![Captura de pantalla 7](./src/assets/Captura7.png)

## Características

- Visualización de productos.
- Páginas de detalles de productos.
- Agregar productos al carrito.
- Modificación de la cantidad de productos en el carrito.
- Eliminación de productos del carrito.
- Cálculo de totales con y sin IVA.
- Guardar el carrito en el almacenamiento local del navegador.
- Visualización de productos recomendados.
- Mensajes emergentes de confirmación al agregar productos al carrito.

## Componentes

### `App`

- **Propósito:** El componente raíz de la aplicación que configura la navegación y proporciona el contexto global del carrito de compras.
- **Tecnologías utilizadas:** React, React Router.

### `Header`

- **Propósito:** La barra de navegación superior que muestra el título de la aplicación y un ícono de carrito de compras.
- **Tecnologías utilizadas:** HTML, CSS.

### `Home`

- **Propósito:** La página principal de la aplicación que muestra una lista de productos disponibles para comprar.
- **Tecnologías utilizadas:** React, API para obtener datos de productos.
![Captura de pantalla 1](./src/assets/image.png)

### `ProductDetails`

- **Propósito:** La página de detalles de un producto que muestra información detallada y permite agregar el producto al carrito.
- **Tecnologías utilizadas:** React, Axios para realizar solicitudes a la API, React Router para la navegación.
![Captura de pantalla 4](./src/assets/captura4.png)

### `ProductCart`

- **Propósito:** El carrito de compras que muestra los productos agregados y permite realizar acciones como agregar, eliminar o modificar la cantidad de productos.
- **Tecnologías utilizadas:** React, Context API para administrar el estado global del carrito.
![Captura de pantalla 3](./src/assets/captura3.png)

### `Recomendations`

- **Propósito:** Muestra una lista de los 10 productos más económicos recomendados para el usuario.
- **Tecnologías utilizadas:** React, Axios para obtener datos de productos.

![Captura de pantalla 2](./src/assets/Captura2.png)


## Por qué se utilizó cada tecnología

- **React:** Se utilizó para construir la interfaz de usuario de la aplicación de manera eficiente y modular.
- **React Router:** Se utilizó para gestionar la navegación y permitir a los usuarios acceder a diferentes páginas de la aplicación.
- **Context API:** Se utilizó para gestionar el estado global del carrito de compras y permitir que múltiples componentes accedan y actualicen ese estado de manera sencilla.
- **Axios:** Se utilizó para realizar solicitudes HTTP y obtener datos de la API externa.

## Instalación

1. Clona este repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.

¡Disfruta comprando en nuestra aplicación!
