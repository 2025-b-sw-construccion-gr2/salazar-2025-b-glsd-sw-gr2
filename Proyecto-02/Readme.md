**Equipo:** León Sebastian, Salazar Gregory

**Nombre del proyecto:** EconoMe

**Fecha de entrega:** 31-01-2026
## Introducción
Es un sistema financiero personal. Consiste en una aplicación web que ayuda a los usuarios a gestionar sus finanzas de manera eficiente. Permite manejar movimientos financieros, controlar deudas y préstamos, visualizar y generar resúmenes junto con establecer recordatorios para pagos importantes.


## Arquitectura del Proyecto

### Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| Backend | Java | 21 |
| | Jakarta EE | 6.0 |
| | Hibernate ORM | 6.2.7 |
| | Apache Tomcat | 10.1 |
| | PostgreSQL Driver | 42.7.3 |
| | HikariCP | 5.1.0 |
| Frontend | JSP + JSTL + HTML/CSS/JS | - |
| Testing | JUnit 5 + Mockito + JaCoCo | 5.10.2 / 5.12.0 |
| Build | Maven | 3.9.6 |
| Cloud | Azure App Service (Web App) | - |
| Database | PostgreSQL (Supabase) | 14+ |
| CI/CD | Azure Pipelines | - |
Patrón MVC en Capas



````
Vista (JSP) 
    ↕
Controlador (Servlets)
    ↕
Servicio (Lógica de Negocio)
    ↕
DAO (Acceso a Datos)
    ↕
Persistencia (Hibernate + JPA)
    ↕
Base de Datos (PostgreSQL)
````





### Estrategia de integración: cómo se conectan los módulos

El frontend en JSP + JSTL + HTML/CSS/JS se comunica con el backend en Java 21 mediante Servlets (Jakarta EE 6.0). El backend gestiona la lógica de negocio a través de una capa de Servicios, accede a los datos mediante DAOs (Data Access Objects) con Hibernate ORM, y se conecta a una base de datos PostgreSQL (Supabase) a través de HikariCP. Los Servlets ejecutados en Apache Tomcat 10.1 procesan las solicitudes, aplican la lógica de negocio, y retornan vistas JSP renderizadas. Todo el proyecto se construye con Maven 3.9.6 y se despliega en Azure App Service, con CI/CD automatizado mediante Azure Pipelines.


## Estrategia de Pipelines (CI/CD)
Pipeline de Integración Continua:
Paso 1: Ejecución de lint en cada commit.
Paso 2: Ejecución de pruebas unitarias.
Paso 3: Build automático.
Paso 4: Deploy en entorno de pruebas.
Pipeline de Entrega Continua:
Deploy automático a producción tras aprobación de PR.
Ejemplo de descripción textual: