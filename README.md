
# Ejemplo usando Loopback y VueJS
Permite archivar libros deseados (wishlist) de los expuestos por la [API openlibrary](https://openlibrary.org/developers/api).

Los siguientes modelos han sido definidos en Loopback:
- openlibrary: se conecta a la rest api de openlibrary [Search](https://openlibrary.org/dev/docs/api/search).
- wishlist: datastore local on los libros escogidos.

La búsqueda de los libros se realiza mediante el cliente desarrollado en [VueJS](https://vuejs.org/), [Vuex](https://vuex.vuejs.org/en/intro.html), [Vuetify](https://vuetifyjs.com/). Los libros seleccionados se muestran en el panel derecho, oculto para resoluciones bajas.
