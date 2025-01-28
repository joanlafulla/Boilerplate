# Boilerplate
Este es mi boilerplate particular para iniciar cualquier proyecto estático.
¿Qué incluye?

<ol>
  <li>Compilación de SASS</li>
  <li>Clean and minified CSS</li>
  <li>Minify Javascript</li>
  <li>BrowserSync</li>
</ol>

Para iniciar el proyecto seguir los siguientes pasos:

Bajarse el proyecto a local (.zip).
A continuación nos movemos por la terminal hasta la raiz del proyecto y ejecutamos...


```
gulp watch
```

### Añadir el proyecto a Github

1. Añadir el proyecto a Git:
```
git init
```

2. Crear el nuevo repositorio en Github.
3. Vincular el nuevo repositorio al proyecto.
```
git remote add origin REMOTE-URL
```
4. Para comprobar que todo está OK:
```
git remote -v
```
5. Hacer un push a la rama main de Github:
```
git push -u origin main
```
