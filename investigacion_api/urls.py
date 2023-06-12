from django.contrib import admin
from django.urls import include, path
from investigacionApp import views
from rest_framework import routers

# Genera automaticamante las rutas para Personas
router = routers.DefaultRouter()
router.register(r'Personas', views.PersonaViewSet)
router.register(r'Sede', views.SedeViewSet)
router.register(r'Proyecto', views.ProyectoViewSet)
router.register(r'Areagestiondeconocimiento',
                views.AreagestiondeconocimientoViewSet)
router.register(r'Grupoinvestigacion', views.GrupoInvestigacionViewSet)
router.register(r'Vicerrectoriainvestigacion',
                views.VicerrectoriaInvestigacionViewSet)
router.register(r'Publicacion', views.PublicacionViewSet)
router.register(r'Facultad', views.FacultadViewSet)
router.register(r'Instituto', views.InstitutoViewSet)
router.register(r'Convocatoria', views.ConvocatoriaViewSet)
router.register(r'BoletinSiun', views.BoletinsiunViewSet)

urlpatterns = [
    # asocia la raiz del proyecto con el index.html
    path("", views.index, name="index"),
    # asocia las rutas creadas previamente por el enroutador Router
    path('', include(router.urls)),
    # incluye rutas de autenticacion de usuario de Django
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls),
    path('custom-login/', views.custom_login, name='custom_login'),

]
