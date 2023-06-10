from django.urls import include, path
from rest_framework import routers

from .investigacionApp import views

# Genera automaticamante las rutas para Personas
router = routers.DefaultRouter()
router.register(r'Personas', views.PersonaViewSet)

urlpatterns = [
    # asocia la raiz del proyecto con el index.html
    path("", views.index, name="index"),
    # asocia las rutas creadas previamente por el enroutador Router
    path('', include(router.urls)),
    # incluye rutas de autenticacion de usuario de Django
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
