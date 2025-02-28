# Todo List App

Esta es una aplicación de gestión de tareas creada en React, que se sincroniza en tiempo real con una API REST. Te permite agregar, ver, actualizar, eliminar tareas y administrar usuarios de forma dinámica.

##Características

- **Gestión de usuarios**: crea o cambia usuarios de forma dinámica.
- **Agregar tareas**: crea nuevas tareas y sincronízalas automáticamente con el backend.
- **Actualizar tareas**: cambia el estado de una tarea entre completada y pendiente.
- **Eliminar tareas**: elimina tareas individuales o borra toda la lista.
- **Sincronización en tiempo real**: mantiene las tareas sincronizadas con la API.
- **Interfaz moderna**: utiliza Bootstrap para un diseño limpio y responsivo.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JulioRom/todo-api-react
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd todo-api-react
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:3000` para ver la aplicación en acción.

## Configuración de la API

La aplicación está configurada para interactuar con la API REST proporcionada en `https://playground.4geeks.com/todo`. Asegúrate de que la API esté funcionando correctamente para que la aplicación pueda sincronizar los datos.    

## Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── InputField.jsx      # Componente para agregar nuevas tareas
│   ├── TaskItem.jsx        # Componente para cada tarea individual
│   ├── TaskList.jsx        # Componente para la lista de tareas
│   └── Todo.jsx            # Componente principal de la aplicación
├── service/
│   └── api.js              # Funciones para interactuar con la API
├── styles/
│   └── index.css           # Estilos personalizados
└── main.jsx                  # Configuración principal
```

## Uso

### Crear o cambiar usuario
1. Ingrese un nombre de usuario en el campo de entrada.
2. Haga clic en `Establecer usuario` para crear o cambiar usuarios.

### Agregar una tarea
1. Escriba una tarea en el campo de entrada.
2. Presione `Enter` para agregarla a la lista y sincronizarla con la API.

### Actualizar una tarea
1. Haga clic en el botón para alternar el estado de la tarea entre "Completada" y "Pendiente".

### Eliminar una tarea
1. Haga clic en el botón eliminar (`✖`) para eliminar una tarea específica.

### Borrar todas las tareas
1. Presione el botón `Borrar todas las tareas` para eliminar todas las tareas.

## Tecnologías utilizadas

- **React**: para crear la interfaz de usuario.
- **Bootstrap**: para el estilo y el diseño responsivo.
- **REST API**: Para sincronización de datos en tiempo real.

## Próximas mejoras

- **Filtros**: Agregar opciones para filtrar tareas completadas y pendientes.
- **Autenticación**: Incorporar autenticación de usuarios.
- **Notificaciones**: Mostrar alertas al finalizar como agregar acciones o eliminar tareas.

## Autor

- **Desarrollado por JulioRom**
- **Contacto:** [julioandrescampos@gmail.com](correo a:julioandrescampos@gmail.com)
- **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.