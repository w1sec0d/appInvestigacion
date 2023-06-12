# Una vista es una clase o funcion en python que recibe una peticion http
# y retorna una respuesta http

import json

from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *

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
            return JsonResponse({'success': True, 'admin': user.is_superuser, 'username': username, 'password': password})
        else:
            return JsonResponse({'success': False, 'admin': True, 'message': 'Invalid credentials', 'username': username, 'password': password})


# Vista de persona que usa la clase del framework REST de Django
# "ModelViewSet", que da vistas por defecto para realizar
# CRUD
class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()  # Carga todas las instancias de persona
    serializer_class = PersonaSerializer  # indica el serializador de persona
    # verifica que solo usuarios actualizados vean la vista
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class SedeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Sede.objects.all()
    serializer_class = SedeSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class InfraestructuraViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Infraestructura.objects.all()
    serializer_class = InfraestructuraSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class ProyectoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class AreagestiondeconocimientoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Areagestiondeconocimiento.objects.all()
    serializer_class = AreagestiondeconocimientoSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class GrupoInvestigacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Grupoinvestigacion.objects.all()
    serializer_class = GrupoInvestigacionSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class VicerrectoriaInvestigacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Vicerrectoriainvestigacion.objects.all()
    serializer_class = VicerrectoriaInvestigacionSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class PublicacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Publicacion.objects.all()
    serializer_class = PublicacionSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class FacultadViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Facultad.objects.all()
    serializer_class = FacultadSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class InstitutoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Instituto.objects.all()
    serializer_class = InstitutoSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class ConvocatoriaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Convocatoria.objects.all()
    serializer_class = ConvocatoriaSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


class BoletinsiunViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Boletinsiun.objects.all()
    serializer_class = BoletinSiunSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [SessionAuthentication]


def index(request):
    return render(request, "index.html")
