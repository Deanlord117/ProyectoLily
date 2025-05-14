export default {
    title: 'Documentación de Proyecto', // Título que aparecerá en la página
    projectLink: 'https://github.com/tu-proyecto',  // Enlace al repositorio del proyecto
    docsRepositoryBase: 'https://github.com/tu-proyecto/tree/main',  // Enlace a la carpeta de documentación en GitHub
    logo: (
      <span>Documentación</span>
    ),
    search: true,  // Activar búsqueda en la documentación
    sidebar: {
      forcedNavOrder: ['/docs/api'],  // Forzar que la navegación sea por esta ruta
    }
  };
  