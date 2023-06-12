# Los serializadores definen como se debe serializar o deserializar
# un objeto, es decir, tomar un objetos como modelos de django y
# convertirlos a formatos mas simples como json. O viceversa (deserealizar)

from rest_framework import serializers

from .models import Persona


# serializador que usa la clase HyperlinkedModelSerializer
# para serealizar un modelo Django
class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona  # indica el modelo que se serealiza
        fields = '__all__'  # especifica que en la serealizacion esten presentes todos los atributos
