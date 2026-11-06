# ✅ YourTask — Frontend
 
Aplicación web construida con **React**, **TypeScript** y **Tailwind CSS** para gestionar proyectos y tareas en equipo. Consume la API REST de YourTask e incluye autenticación con confirmación de cuenta por correo, un tablero de tareas por estado con la funcionalidad de arrastrar y soltar, colaboradores y notas. El estado del servidor se gestiona con **TanStack Query**, los formularios con **React Hook Form** y las respuestas de la API se validan con **Zod**.
 
## 🌐 Demo
 
🔗 [https://yourtask-andresmdevco.vercel.app/](https://yourtask-andresmdevco.vercel.app/)
 
La API que consume esta aplicación está en el repositorio del backend:
 
🔗 [https://github.com/andresmdevco/yourtask-backend](https://github.com/andresmdevco/yourtask-backend)
 
## 🛠️ Tecnologías Utilizadas
 
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
 
- **Tailwind CSS 4**
- **React Router** — enrutamiento con layouts anidados (`AppLayout`, `AuthLayout` y `ProfileLayout`)
- **TanStack Query** — consultas y mutaciones con caché, invalidación y actualización de datos
- **React Hook Form** — manejo y validación de formularios
- **Zod** — validación en tiempo de ejecución de las respuestas de la API
- **Axios** — cliente HTTP, con un interceptor que agrega el token JWT a cada petición
- **dnd-kit** — arrastrar y soltar tareas entre las columnas de estado
- **Headless UI** — modales, menús desplegables y popover accesibles
- **Heroicons** — iconografía de la interfaz
- **react-toastify** — notificaciones de éxito y error
- **Chakra UI PinInput** — campo para ingresar el código de 6 dígitos
- **@tailwindcss/forms** — estilos base para los campos de formulario
## ✨ Características
 
- 🔐 Registro de usuarios con confirmación de cuenta mediante un código de 6 dígitos enviado por correo.
- 📨 Solicitud de un nuevo código de confirmación cuando el anterior expira.
- 🔑 Inicio y cierre de sesión con JWT.
- 🔄 Recuperación de contraseña: solicitud del código, validación y definición de la nueva contraseña.
- 🛡️ Rutas protegidas: sin sesión activa, la aplicación redirige al inicio de sesión.
- 📁 Panel con los proyectos del usuario, indicando si es Manager o Colaborador en cada uno.
- ✏️ Creación, edición y eliminación de proyectos. Solo el Manager puede editarlos o eliminarlos, y la eliminación se confirma con la contraseña.
- 🗂️ Tablero de tareas agrupadas en cinco estados: Pendiente, En Espera, En Progreso, En Revisión y Completado.
- 🖱️ Cambio de estado de las tareas arrastrándolas entre columnas.
- 🪟 Modales para crear, editar y consultar tareas, controlados mediante parámetros de la URL.
- 🕓 Historial de cambios de estado de cada tarea, con el usuario que realizó cada cambio.
- 📝 Notas dentro de las tareas, que solo puede eliminar su autor.
- 👥 Gestión del equipo: búsqueda de usuarios por correo, y adición o eliminación de colaboradores.
- 👤 Perfil de usuario: actualización del nombre y el correo, y cambio de contraseña.
- ✅ Validación de formularios y de las respuestas de la API.
- 🚫 Página de "Página No Encontrada".
- 📱 Diseño responsive con Tailwind CSS.
## 📂 Archivos principales
 
**Configuración y base (`src`)**
 
| Archivo | Descripción |
|---|---|
| `main.tsx` | Punto de entrada. Configura `QueryClientProvider` y las Devtools de TanStack Query |
| `router.tsx` | Define las rutas de la aplicación: vistas protegidas dentro de `AppLayout` y `ProfileLayout`, vistas de autenticación dentro de `AuthLayout` y la página 404 |
| `lib/axios.ts` | Instancia de Axios con la URL base de la API (`VITE_API_URL`) y un interceptor que adjunta el token guardado en `localStorage` |
| `hooks/useAuth.ts` | Hook que consulta el usuario autenticado con TanStack Query |
| `types/index.ts` | Esquemas de Zod y tipos inferidos: usuarios, tareas, notas, proyectos, equipo y formularios |
| `locales/es.ts` | Traducciones al español de los estados de las tareas |
| `utils/policies.ts` | Función `isManager`, que indica si el usuario es el administrador del proyecto |
| `utils/utils.ts` | Función `formatDate`, que da formato a las fechas mostradas |
| `../vercel.json` | Reescritura de rutas para que el enrutamiento del lado del cliente funcione en Vercel |
 
**Capa de API (`src/api`)**
 
| Archivo | Descripción |
|---|---|
| `AuthAPI.ts` | Registro, confirmación de cuenta, nuevo código, inicio de sesión, recuperación de contraseña, usuario autenticado y verificación de contraseña |
| `ProjectAPI.ts` | Crear, listar, obtener, actualizar y eliminar proyectos |
| `TaskAPI.ts` | Crear, obtener, actualizar y eliminar tareas, y cambiar su estado |
| `TeamAPI.ts` | Buscar usuarios por correo, listar el equipo, y agregar o quitar colaboradores |
| `NoteAPI.ts` | Crear y eliminar notas de una tarea |
| `ProfileAPI.ts` | Actualizar el perfil y cambiar la contraseña |
 
**Layouts (`src/layouts`)**
 
| Archivo | Descripción |
|---|---|
| `AppLayout.tsx` | Layout de las vistas protegidas. Verifica la sesión con `useAuth` y redirige al inicio de sesión si falla. Incluye encabezado, menú, pie de página y notificaciones |
| `AuthLayout.tsx` | Layout de las vistas de autenticación, con el logotipo y las notificaciones |
| `ProfileLayout.tsx` | Layout de las vistas de perfil, con las pestañas de navegación |
 
**Vistas (`src/views`)**
 
| Archivo | Descripción |
|---|---|
| `DashboardView.tsx` | Lista de proyectos del usuario, con su rol y un menú de opciones según los permisos |
| `projects/CreateProjectView.tsx` | Formulario de creación de proyecto |
| `projects/EditProjectView.tsx` | Obtiene el proyecto por `id` y muestra el formulario de edición |
| `projects/ProjectDetailsView.tsx` | Detalle del proyecto con el tablero de tareas y los modales de tareas |
| `projects/ProjectTeamView.tsx` | Lista de colaboradores del proyecto, con opciones para agregar y eliminar |
| `auth/` | Vistas de autenticación: `LoginView`, `RegisterView`, `ConfirmAccountView`, `RequestNewCodeView`, `ForgotPasswordView` y `NewPasswordView` |
| `profile/ProfileView.tsx` y `profile/ChangePasswordView.tsx` | Edición del perfil y cambio de contraseña |
| `404/NotFound.tsx` | Página para las rutas inexistentes |
 
**Componentes (`src/components`)**
 
| Archivo | Descripción |
|---|---|
| `NavMenu.tsx` | Menú del usuario con enlaces al perfil y a los proyectos, y el cierre de sesión (elimina el token y limpia la caché) |
| `ErrorMessage.tsx` y `Logo.tsx` | Componentes reutilizables para mostrar errores de validación y el logotipo |
| `auth/NewPasswordToken.tsx` | Campo de código de 6 dígitos que valida el código de recuperación al completarse |
| `auth/NewPasswordForm.tsx` | Formulario para definir la nueva contraseña una vez validado el código |
| `projects/ProjectForm.tsx` | Campos del formulario de proyecto, compartidos por la creación y la edición |
| `projects/EditProjectForm.tsx` | Formulario de edición con los datos del proyecto precargados |
| `projects/DeleteProjectModal.tsx` | Modal que verifica la contraseña del usuario antes de eliminar el proyecto |
| `tasks/TaskList.tsx` | Agrupa las tareas por estado y gestiona el arrastrar y soltar con `DndContext` |
| `tasks/TaskCard.tsx` | Tarjeta de una tarea, arrastrable, con su menú de opciones |
| `tasks/DropTask.tsx` | Zona donde se pueden soltar las tareas en cada columna |
| `tasks/TaskForm.tsx` | Campos del formulario de tarea, compartidos por la creación y la edición |
| `tasks/AddTaskModal.tsx` | Modal de creación de tarea |
| `tasks/EditTaskData.tsx` y `tasks/EditTaskModal.tsx` | Obtienen la tarea a editar y la muestran en un modal con sus datos precargados |
| `tasks/TaskModalDetails.tsx` | Modal con el detalle de la tarea: fechas, descripción, historial de cambios, selector de estado y notas |
| `notes/` | `NotesPanel`, `AddNoteForm` y `NoteDetail`: listado, creación y eliminación de notas |
| `team/` | `AddMemberModal`, `AddMemberForm` y `SearchResult`: búsqueda de usuarios por correo y adición al proyecto |
| `profile/` | `ProfileForm` y `Tabs`: formulario del perfil y navegación entre sus pestañas |
 
## 🧠 Cómo funciona
 
**Autenticación**
1. En `RegisterView`, el formulario valida el correo, el nombre y la contraseña (mínimo 8 caracteres y que ambas coincidan) y llama a `createAccount`. La API envía el código de confirmación al correo.
2. `ConfirmAccountView` muestra el campo de 6 dígitos. Al completarse el código, se llama automáticamente a `confirmAccount`. Si el código expiró, se puede pedir uno nuevo en `RequestNewCodeView`.
3. En `LoginView`, `authenticateUser` guarda el JWT en `localStorage` con la clave `AUTH_TOKEN` y navega al panel de proyectos.
4. El interceptor de `lib/axios.ts` agrega el encabezado `Authorization: Bearer <token>` a cada petición.
5. `AppLayout` obtiene el usuario con `useAuth`. Mientras carga muestra "Cargando...", si falla redirige a `/auth/login` y si tiene datos renderiza la aplicación.
6. Para recuperar la contraseña, `ForgotPasswordView` solicita el código. `NewPasswordView` primero valida el código con `NewPasswordToken` y, una vez válido, muestra `NewPasswordForm` para definir la nueva contraseña.
7. Al cerrar sesión, `NavMenu` elimina el token y las consultas `user` y `projects` de la caché, y redirige al inicio de sesión.
**Proyectos**
8. `DashboardView` obtiene los proyectos con `useQuery` y valida la respuesta con Zod. Cada proyecto muestra una etiqueta de Manager o Colaborador según `isManager`, y las opciones de editar y eliminar solo aparecen para el Manager.
9. `CreateProjectView` y `EditProjectForm` reutilizan `ProjectForm`. Al guardar, la mutación invalida las consultas afectadas y navega al panel.
10. Al elegir "Eliminar Proyecto", se agrega `?deleteProject=<id>` a la URL. `DeleteProjectModal` detecta el parámetro, abre el modal y pide la contraseña. Si `checkPassword` la valida, se llama a `deleteProject`.
 
**Tareas**

11. `ProjectDetailsView` obtiene el proyecto con sus tareas. Si el usuario es el Manager, muestra los botones "Agregar Tarea" y "Colaboradores".
12. `TaskList` agrupa las tareas en cinco columnas, una por estado. Cada `TaskCard` es arrastrable y cada columna tiene una zona `DropTask` donde soltarla.
13. Al soltar una tarea en otra columna, `handleDragEnd` llama a `updateStatus` y actualiza la caché con `setQueryData`, de modo que el cambio se ve de inmediato.
14. Los modales de tareas se controlan con parámetros de la URL: `?newTask=true`, `?editTask=<id>` y `?viewTask=<id>`. Cada modal lee el parámetro con `URLSearchParams` y se abre mientras exista. Al cerrarse, se limpia la URL.
15. `TaskModalDetails` muestra las fechas, la descripción, el historial de cambios de estado, un selector para cambiar el estado y el panel de notas.
 
**Equipo y notas**

16. En `ProjectTeamView`, "Agregar Colaborador" abre el modal con `?addMember=true`. `AddMemberForm` busca al usuario por correo con `findUserByEmail` y `SearchResult` permite agregarlo con `addUserToProject`.
17. Al eliminar a un colaborador se llama a `removeUserFromProject` y se invalida la consulta `projectTeam` para actualizar la lista.
18. `AddNoteForm` crea las notas de una tarea. `NoteDetail` muestra el autor y la fecha, y el botón de eliminar solo aparece si el usuario autenticado es el autor. Ambos invalidan la consulta de la tarea.
 
**Perfil**
19. `ProfileLayout` muestra las pestañas "Mi Cuenta" y "Cambiar Password". `ProfileForm` carga los datos del usuario y los actualiza con `updateProfile`. `ChangePasswordView` cambia la contraseña pidiendo la actual.
 
## 📚 Conceptos aplicados
 
- Manejo del estado del servidor con **TanStack Query**: `useQuery`, `useMutation`, `invalidateQueries`, `setQueryData`, claves de consulta con parámetros y consultas condicionales con `enabled`.
- Capa de API (`api/`) separada de las vistas, que propaga el mensaje de error del backend hacia las notificaciones.
- **Interceptor de Axios** para enviar el token JWT en cada petición.
- Validación de esquemas en tiempo de ejecución con **Zod** (`safeParse`, `pick`, `extend`) y tipos inferidos con `z.infer`.
- Formularios con **React Hook Form**: `register`, `handleSubmit`, `useWatch`, `reset`, y validaciones con `required`, `pattern`, `minLength` y `validate`.
- Rutas protegidas con layouts anidados (`Outlet`) y redirección según el estado de la sesión.
- Modales controlados por parámetros de la URL (`useLocation`, `useNavigate` y `URLSearchParams`).
- **Arrastrar y soltar** con dnd-kit (`useDraggable`, `useDroppable` y `DndContext`).
- Actualización inmediata de la caché al cambiar el estado de una tarea, sin esperar la respuesta de la API.
- Control de permisos en la interfaz según el rol del usuario en el proyecto (Manager o Colaborador).
- Componentes accesibles con **Headless UI** (`Dialog`, `Menu`, `Popover` y `Transition`).
- Componentes reutilizables con props tipadas, como los formularios de proyecto y tarea, que reciben `register` y `errors`.
- Estado derivado con `useMemo`.
- Configuración de reescritura de rutas (`vercel.json`) para el enrutamiento del lado del cliente.
- Variables de entorno con Vite (`import.meta.env.VITE_API_URL`).
## 🚀 Cómo ejecutar el proyecto
 
1. Clonar el repositorio:
```bash
   git clone https://github.com/andresmdevco/yourtask-frontend.git
   cd yourtask-frontend
```
2. Instalar las dependencias:
```bash
   npm install
```
3. Crear un archivo `.env.local` en la raíz del proyecto con la URL de la API:
```bash
   VITE_API_URL=http://localhost:4000/api
```
4. Ejecutar el proyecto en modo desarrollo:
```bash
   npm run dev
```
5. Abrir [http://localhost:5173](http://localhost:5173) en el navegador

> La aplicación necesita el backend en ejecución. Sigue las instrucciones del repositorio [yourtask-backend](https://github.com/andresmdevco/yourtask-backend) y configura su variable `FRONTEND_URL` con `http://localhost:5173`. La URL de `VITE_API_URL` debe incluir el prefijo `/api`.