# Implementa un backend personalizado para hacer login con la
# tabla personas de mysql

from django.contrib.auth.backends import \
    BaseBackend  # Implementa el login base de Django
from django.contrib.auth.models import \
    User  # Implementa clase usuario de django

from .models import Persona


class MySQLBackend(BaseBackend):

    # Verifica si un Usuario de django con el username dado existe, si no existe y es valido lo crea
    def authenticate(self, request, username=None, password=None):
        try:
            # obtiene la persona con el username dado
            mysql_user = Persona.objects.get(idpersona=username)

            # Usa el metodo check_password del modelo persona para verificar si la contraseña es correcta
            if mysql_user.check_password(password):
                try:
                    user = User.objects.get(username=username)
                except User.DoesNotExist:
                    user = User.objects.create_user(
                        username=username, password=password)
                # retorna el usuario unicamente si las contraseñas coinciden
                return user

        # Si no coinciden retorna valor nulo y el login es insatisfactorio
        except Persona.DoesNotExist:
            return None

    # obtiene un usuario con el id dado
    def get_user(self, user_id):
        try:
            return User.objects.get(username=user_id)
        except User.DoesNotExist:
            return None
