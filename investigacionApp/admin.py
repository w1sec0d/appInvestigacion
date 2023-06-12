from django.apps import apps
from django.contrib import admin

# Obtiene y registra todos los modelos para la vista de admin
models = apps.get_models()

for model in models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass
