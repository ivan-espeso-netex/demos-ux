# Despliegue GitHub Pages

Proyecto preparado para publicar en `https://ivan-espeso-netex.github.io/demos-ux/`.

Pasos:

1. Copia estos archivos en tu carpeta local `evaluaciones-app`, reemplazando los existentes.
2. En GitHub Desktop, haz commit de todos los cambios.
3. Pulsa **Push origin**.
4. En GitHub, ve a **Settings → Pages** y confirma que Source está en **GitHub Actions**.
5. Revisa la pestaña **Actions** hasta que el workflow `Deploy demos-ux` termine en verde.

La librería `@netexknowledge/ux-admin-components` se incluye como dependencia local en `packages/ux-admin-components`, para que GitHub Actions pueda compilar sin depender de tu ordenador.
