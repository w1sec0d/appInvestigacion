from django.urls import include, path
from rest_framework import routers

from .investigacionApp import views

router = routers.DefaultRouter()
router.register(r'Personas', views.PersonaViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", views.index, name="index"),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
