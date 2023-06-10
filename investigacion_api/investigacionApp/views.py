# Una vista es una clase o funcion en python que recibe una peticion http
# y retorna una respuesta http

from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import Persona
from .serializers import PersonaSerializer


# Vista de persona que usa la clase del framework REST de Django
# "ModelViewSet", que da vistas por defecto para realizar
# CRUD
class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()  # Carga todas las instancias de persona
    serializer_class = PersonaSerializer  # indica el serializador de persona
    # verifica que solo usuarios actualizados vean la vista
    permission_classes = [permissions.IsAuthenticated]


def index(request):
    return render(request, "index.html")
