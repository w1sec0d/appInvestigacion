# Una vista es una clase o funcion en python que recibe una peticion http
# y retorna una respuesta http

import json

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import (csrf_exempt, csrf_protect,
                                          ensure_csrf_cookie)
from django.views.decorators.http import require_POST
from rest_framework import permissions, viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Persona
from .serializers import PersonaSerializer

# Vista personalizada para manejar el login. Es re recibe un json de react
# y autentica en el sistema de django. Retorna success si la respuesta
# fue satisfactoria


@csrf_exempt
def custom_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get("usuario")
        password = data.get("clave")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid credentials', 'username': username, 'password': password})


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
