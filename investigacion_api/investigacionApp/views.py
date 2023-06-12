# Una vista es una clase o funcion en python que recibe una peticion http
# y retorna una respuesta http

from django.contrib.auth import login
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from rest_framework import permissions, viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Persona
from .serializers import PersonaSerializer


# Vista de persona que usa la clase del framework REST de Django
# "ModelViewSet", que da vistas por defecto para realizar
# CRUD
class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()  # Carga todas las instancias de persona
    serializer_class = PersonaSerializer  # indica el serializador de persona
    # verifica que solo usuarios actualizados vean la vista
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


def index(request):
    return render(request, "index.html")
