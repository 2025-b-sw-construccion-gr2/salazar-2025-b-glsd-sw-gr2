#### **Equipo:** León Sebastian, Salazar Gregory

#### **Nombre del proyecto:** EconoMe

#### **Fecha de entrega:** 31-01-2026

---

## 1. Introducción
Es un sistema financiero personal. Consiste en una aplicación web que ayuda a los usuarios a gestionar sus finanzas de manera eficiente. Permite manejar movimientos financieros, controlar deudas y préstamos, visualizar y generar resúmenes junto con establecer recordatorios para pagos importantes.

---

## 2. Arquitectura del Proyecto

### 2.1 Stack Tecnológico

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

### 2.2 Estructura en Capas
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

### 2.3 Estrategia de integración: cómo se conectan los módulos

El frontend en JSP + JSTL + HTML/CSS/JS se comunica con el backend en Java 21 mediante Servlets (Jakarta EE 6.0).

El backend gestiona la lógica de negocio a través de una capa de Servicios, accede a los datos mediante DAOs (Data Access Objects) con Hibernate ORM, y se conecta a una base de datos PostgreSQL (Supabase) a través de HikariCP. 

Los Servlets ejecutados en Apache Tomcat 10.1 procesan las solicitudes, aplican la lógica de negocio, y retornan vistas JSP renderizadas. 

Todo el proyecto se construye con Maven 3.9.6 y se despliega en Azure App Service, con CI/CD automatizado mediante Azure Pipelines.

---

## 3. Estrategia de Pipelines (CI/CD)

### Azure DevOps para Java Web App

**Paso 1:** En Azure DevOps, ir a "Organization Settings" -> "Pipelines" -> "Settings" -> "General" -> "Disable creation of classic build pipelines" -> off.

**Paso 2:** Project Settings -> Service Connections → New Service Connection -> Azure Resource Manager -> Autenticar con Azure for Students -> Nombre: "AzureConnection"

**Paso 3:** Pipelines -> New Pipeline -> Seleccionar repo -> Crear azure-pipelines.yml

**Paso 4:** En el portal de azure, App Services → Create → Web App -> Configurar nombre, OS, region, runtime, suscripción, etc.

**Paso 5:** En Azure DevOps, en "Pipelines" -> "Releases"  -> "New pipeline". En "Artifacts", seleccionar el pipeline creado previamente. Luego, agregar un stage de producción y configurar la tarea de despliegue a Azure App Service usando la conexión de servicio creada.

**Notas:** 
Configurar variables de entorno en Azure App Service según sea necesario. 
Con respecto a la Base de datos, configurar la cadena de conexión en las variables de entorno de Azure App Service.

---

## 4. Estrategia de Flujos de Desarrollo
1. Rama Principal (main): Contiene el código estable y listo para producción.
2. Ramas de Características (feature branches): Se crean a partir de la rama principal para desarrollar nuevas funcionalidades o mejoras. Una vez completadas, se integran de nuevo a la rama principal mediante pull requests.

---

## 5. Gestión de Historias de Usuario
Utilizamos Azure DevOps Boards para gestionar las historias de usuario siguiendo la plantilla agile. 

Cada historia sigue el formato: Como [rol], quiero [funcionalidad], para [beneficio].

Cada historia de usuario se crea como User Story (Work Item) en el tablero con:
- Título: Resumen de la funcionalidad
- Descripción: Historia completa + criterios de aceptación
- Assigned to: Miembro del equipo responsable
- Story Points: Estimación de esfuerzo (escala Fibonacci: 1, 2, 3, 5, 8, 13)
- Iteration/Sprint: Sprint de dos semanas al que pertenece
- Tasks: Tareas técnicas específicas vinculadas a la historia

El progreso de cada historia se rastrea mediante el tablero Kanban (To Do -> In Progress -> Code Review -> Done).

Se sigue el ciclo de vida de Scrum: Sprint Planning, Sprint Execution (Daily Scrum), Sprint Review, y Sprint Retrospective.

---

## 6. Estrategia de Revisiones y Aprobaciones
Las revisiones de código se realizan mediante pull requests en Azure DevOps. Cada pull request debe ser revisado y aprobado por al menos un miembro del equipo antes de ser fusionado a la rama principal.

### Descripción
Breve explicación de los cambios realizados.

### Trabajo Item Relacionado
Vincula a User Story o Bug: AB#12345

### Tipo de Cambio
- [ ] Nueva funcionalidad
- [ ] Corrección de bug
- [ ] Refactorización
- [ ] Actualización de documentación

### Checklist de Revisión
- [ ] Pruebas unitarias ejecutadas y exitosas
- [ ] Sin warnings de compilación
- [ ] Documentación actualizada (README, Javadoc)
- [ ] Sin conflictos con rama destino
- [ ] Variables y métodos con nombres descriptivos

### Políticas de Branch
**Rama `main` protegida:**
- Mínimo **1 aprobación** requerida antes de merge
- Build pipeline debe completarse exitosamente
- No se permiten commits directos
- Comentarios de revisión deben resolverse

### Proceso de Revisión
1. Desarrollador crea PR desde feature branch
2. Asigna a revisor(es)
3. Revisor examina cambios y deja comentarios
4. Desarrollador atiende feedback
5. Aprobación final → Merge con squash/merge commit
6. Eliminación de feature branch

---

## 7. Herramientas y Conexiones
| Herramienta | Propósito | Integración |
|-------------|-----------|-------------|
| **Azure DevOps** | Repositorio Git, Boards (Agile), Pipelines CI/CD | Hub central del proyecto |
| **Azure App Service** | Hosting de aplicación Java Web | Desplegado automáticamente vía Release Pipeline |
| **Supabase** | Base de datos PostgreSQL gestionada | Connection string en App Service Configuration |
| **Maven** | Gestión de dependencias y build | Configurado en Build Pipeline |
| **SonarCloud** (opcional) | Análisis de calidad de código | Integrado en Build Pipeline |

### Flujo de Integración
```
Azure Repos (Git) 
    ↓ [Push/PR]
Build Pipeline (CI)
    ↓ [Genera .war + Tests]
Release Pipeline (CD)
    ↓ [Despliega automáticamente]
Azure App Service
    ↓ [Conecta a]
Supabase (PostgreSQL)
````

### Conexiones Configuradas
#### 1. Azure DevOps ↔ Azure Portal

Service Connection tipo Azure Resource Manager
Permite despliegues automáticos a App Service
Autenticación con Azure for Students subscription

#### 2. Azure Repos ↔ Work Items

Commits referencian Work Items: git commit -m "Fixes AB#123: descripción"
PRs se vinculan automáticamente a User Stories
Trazabilidad completa desde código hasta requisito

#### 3. Azure App Service ↔ Supabase

Connection string almacenado en App Service Configuration
Variables de entorno seguras (no en código fuente)
Acceso mediante application.properties o variables de entorno

---

## 8. Conclusiones

### Calidad del Software

Pipelines de CI ejecutan tests automáticamente en cada commit
Estándares de código aplicados mediante checklist y herramientas de análisis estático

### Trazabilidad Completa

Historias de usuario → Tasks → Commits → PRs → Deployments
Cada línea de código es rastreable hasta un requisito de negocio

### Evolución Sostenible

Sprints de 1 semana permiten entregas incrementales y feedback continuo
Retrospectivas generan mejora continua del proceso
Automatización CI/CD reduce errores humanos y acelera entregas
Documentación actualizada facilita onboarding y mantenimiento

### Resultados Esperados

Reducción de bugs en producción mediante testing automatizado
Tiempo de despliegue reducido de horas a minutos
Mayor colaboración mediante revisiones de código
Visibilidad total del progreso para stakeholders vía Azure Boards