# Court Corner - Proyecto Final React

## Descripción

Court Corner es una tienda en línea para equipos de tenis. Este proyecto está desarrollado con React y utiliza Tailwind CSS para el diseño, Firestore para la base de datos y React Router para la navegación.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para React.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y eficiente.
- **Firebase**: Plataforma para construir aplicaciones web y móviles.
  - **Firestore**: Base de datos NoSQL de Firebase.
- **React Router**: Librería para el manejo de rutas en aplicaciones React.
- **SweetAlert2**: Biblioteca para alertas bonitas y personalizables.
- **Heroicons**: Conjunto de iconos para interfaces de usuario.
- **FontAwesome**: Iconos vectoriales y toolkit.
- **Headless UI**: Componentes completamente accesibles y desprovistos de estilo para React.
- **React Spinners**: Spinners de carga para aplicaciones React.

## Estructura del Proyecto

\```
src/
│
├── assets/                     # Imágenes y otros recursos estáticos
├── components/                 # Componentes reutilizables
│   ├── CartComponent/          # Componente para el carrito de compras (Slide-over)
│   ├── CartWidgetComponent     # Componente para el ícono carrito de compras nav bar
│   ├── HeroSectionComponent/   # Componente para la sección hero 
│   ├── LoaderComponent/        # Componente para el loader
│   ├── NavBarComponent/        # Componente para la barra de navegación
│   └── ProductCardComponent/   # Componente para la tarjeta de productos
├── context/                    # Archivos de contexto (CartContext)
├── hooks/                      # Hooks personalizados (principalmente obtener información base de datos)
├── pages/                      # Páginas de la aplicación
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Categories.jsx
│   ├── ItemDetail.jsx
│   └── Contact.jsx
├── routes/                     # Configuración de rutas (MainRoutes)
├── App.jsx
├── index.jsx
└── index.css
\```

## Instalación

1. **Clonar el repositorio**

   \```
   git clone https://github.com/cristobalhiza/proyectoFinalReact-Hiza/tree/main
   cd proyectoFinalReact-Hiza
   \```

2. **Instalar dependencias**

   \```
   npm install
   \```

3. **Configurar Firebase**

   Crea un archivo \`.env\` en la raíz del proyecto y añade tu configuración de Firebase:

   \```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   \```

4. **Iniciar la aplicación**

   \```
   npm run dev
   \```

## Uso

- **Navegación**: Usa la barra de navegación para acceder a las diferentes secciones del sitio.
- **Carrito de compras**: Agrega productos al carrito, actualiza las cantidades y finaliza la compra.
- **Formulario de contacto**: Completa el formulario de contacto para enviar consultas o sugerencias.

## Scripts Disponibles

- \`npm run dev\`: Inicia la aplicación en modo desarrollo.
- \`npm run build\`: Construye la aplicación para producción.
- \`npm run preview\`: Sirve la aplicación construida para previsualización.
- \`npm run lint\`: Lint de los archivos del proyecto.

## Contribución

1. **Fork el proyecto**
2. **Crea una nueva rama** (\`git checkout -b feature/nueva-funcionalidad\`)
3. **Commit tus cambios** (\`git commit -m 'Agregar nueva funcionalidad'\`)
4. **Push a la rama** (\`git push origin feature/nueva-funcionalidad\`)
5. **Abre un Pull Request**

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo \`LICENSE\` para más detalles.

## Disclaimer de Imágenes

Las imágenes utilizadas en este proyecto han sido recolectadas de internet y no reclamo autoría sobre ellas. Este proyecto es únicamente para fines educacionales y no comerciales.

## Contacto

- **Autor**: Cristobal Hiza Larrondo
- **Email**: cristobalhiza@gmail.com
- **GitHub**: [cristobalhiza](https://github.com/cristobalhiza)