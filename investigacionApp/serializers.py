# Los serializadores definen como se debe serializar o deserializar
# un objeto, es decir, tomar un objetos como modelos de django y
# convertirlos a formatos mas simples como json. O viceversa (deserealizar)

from rest_framework import serializers

from .models import *


# serializador que usa la clase HyperlinkedModelSerializer
# para serealizar un modelo Django
class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona  # indica el modelo que se serealiza
        fields = '__all__'  # especifica que en la serealizacion esten presentes todos los atributos


class SedeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Sede
        fields = '__all__'


class InfraestructuraSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Infraestructura
        fields = '__all__'


class ProyectoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Proyecto
        fields = '__all__'


class AreagestiondeconocimientoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Areagestiondeconocimiento
        fields = '__all__'


class GrupoInvestigacionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Grupoinvestigacion
        fields = '__all__'


class VicerrectoriaInvestigacionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Vicerrectoriainvestigacion
        fields = '__all__'


class PublicacionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Publicacion
        fields = '__all__'


class FacultadSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Facultad
        fields = '__all__'


class InstitutoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Instituto
        fields = '__all__'


class ConvocatoriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Convocatoria
        fields = '__all__'


class BoletinSiunSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Boletinsiun
        fields = '__all__'
