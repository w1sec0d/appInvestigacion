# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

#  En Django, un modelo es una clase de Python que define la estructura
#  y el comportamiento de los datos almacenados en una base de datos.
from django.db import models


class Areagestiondeconocimiento(models.Model):
    idareagestiondeconocimiento = models.IntegerField(
        db_column='idAreaGestionDeConocimiento', primary_key=True)  # Field name made lowercase.
    nombre = models.CharField(max_length=60)
    # Field name made lowercase.
    fechadecreacion = models.DateField(db_column='fechaDeCreacion')

    class Meta:
        managed = False
        db_table = 'areagestiondeconocimiento'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Boletinsiun(models.Model):
    # Field name made lowercase.
    idboletinsiun = models.IntegerField(
        db_column='idBoletinSIUN', primary_key=True)
    # Field name made lowercase.
    fechalanzamiento = models.DateField(db_column='fechaLanzamiento')

    class Meta:
        managed = False
        db_table = 'boletinsiun'


class Comite(models.Model):
    # Field name made lowercase.
    idcomite = models.IntegerField(db_column='idComite', primary_key=True)
    nombre = models.CharField(max_length=60)
    telefono = models.CharField(max_length=15)
    correo = models.CharField(max_length=60)
    idvicerrectoriainvestigacion = models.ForeignKey(
        'Vicerrectoriainvestigacion', models.DO_NOTHING, db_column='idVicerrectoriaInvestigacion')  # Field name made lowercase.
    # Field name made lowercase.
    numerodeintegrantes = models.IntegerField(db_column='numeroDeIntegrantes')

    class Meta:
        managed = False
        db_table = 'comite'


class Convocatoria(models.Model):
    # Field name made lowercase.
    idconvocatoria = models.IntegerField(
        db_column='idConvocatoria', primary_key=True)
    nombre = models.CharField(max_length=100)
    # Field name made lowercase.
    fechadeinicio = models.DateField(db_column='fechaDeInicio')
    # Field name made lowercase.
    fechalimite = models.DateField(db_column='fechaLimite')
    cupos = models.IntegerField()
    requisitos = models.TextField()
    tipo = models.CharField(max_length=20)
    descripcion = models.TextField()
    presupuesto = models.IntegerField(blank=True, null=True)
    idvicerrectoriainvestigacion = models.ForeignKey(
        'Vicerrectoriainvestigacion', models.DO_NOTHING, db_column='idVicerrectoriaInvestigacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'convocatoria'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey(
        'DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Facultad(models.Model):
    # Field name made lowercase.
    idfacultad = models.IntegerField(db_column='idFacultad', primary_key=True)
    nombre = models.CharField(max_length=60)
    # Field name made lowercase.
    numerodeestudiantes = models.IntegerField(db_column='numeroDeEstudiantes')
    # Field name made lowercase.
    numerodedocentes = models.IntegerField(db_column='numeroDeDocentes')
    # Field name made lowercase.
    presupuestoneto = models.IntegerField(db_column='presupuestoNeto')
    # Field name made lowercase.
    idsede = models.ForeignKey('Sede', models.DO_NOTHING, db_column='idSede')

    class Meta:
        managed = False
        db_table = 'facultad'


class Grupoinvestigacion(models.Model):
    # Field name made lowercase.
    idgrupoinvestigacion = models.IntegerField(
        db_column='idGrupoInvestigacion', primary_key=True)
    nombre = models.CharField(max_length=80)
    # Field name made lowercase.
    numerodeintegrantes = models.IntegerField(db_column='numeroDeIntegrantes')
    # Field name made lowercase.
    fechadecreacion = models.DateField(db_column='fechaDeCreacion')
    tema = models.CharField(max_length=45)
    numerodepublicaciones = models.SmallIntegerField(
        db_column='numeroDePublicaciones', blank=True, null=True)  # Field name made lowercase.
    categoria = models.CharField(max_length=45)
    # Field name made lowercase.
    idfacultad = models.ForeignKey(
        Facultad, models.DO_NOTHING, db_column='idFacultad')
    idareagestiondeconocimiento = models.ForeignKey(
        Areagestiondeconocimiento, models.DO_NOTHING, db_column='idAreaGestionDeConocimiento')  # Field name made lowercase.
    idvicerrectoriainvestigacion = models.ForeignKey(
        'Vicerrectoriainvestigacion', models.DO_NOTHING, db_column='idVicerrectoriaInvestigacion')  # Field name made lowercase.
    # Field name made lowercase.
    idinstituto = models.ForeignKey(
        'Instituto', models.DO_NOTHING, db_column='idInstituto', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'grupoinvestigacion'


class Infraestructura(models.Model):
    # Field name made lowercase.
    idinfraestructura = models.IntegerField(
        db_column='idInfraestructura', primary_key=True)
    nombre = models.CharField(max_length=45)
    tipo = models.CharField(max_length=45)
    # Field name made lowercase.
    idfacultad = models.ForeignKey(
        Facultad, models.DO_NOTHING, db_column='idFacultad')
    idareagestiondeconocimiento = models.ForeignKey(
        Areagestiondeconocimiento, models.DO_NOTHING, db_column='idAreaGestionDeConocimiento')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'infraestructura'


class Instituto(models.Model):
    # Field name made lowercase.
    idinstituto = models.IntegerField(
        db_column='idInstituto', primary_key=True)
    nombre = models.CharField(max_length=80)
    # Field name made lowercase.
    fechadecreacion = models.DateField(db_column='fechaDeCreacion')
    # Field name made lowercase.
    numerodegrupos = models.IntegerField(db_column='numeroDeGrupos')

    class Meta:
        managed = False
        db_table = 'instituto'


class Integrantecomite(models.Model):
    # Field name made lowercase. The composite primary key (idComite, idIntegranteVicerrectoria) found, that is not supported. The first column is selected.
    idcomite = models.OneToOneField(
        Comite, models.DO_NOTHING, db_column='idComite', primary_key=True)
    # Field name made lowercase.
    idintegrantevicerrectoria = models.ForeignKey(
        'Integrantevicerrectoria', models.DO_NOTHING, db_column='idIntegranteVicerrectoria')
    rol = models.CharField(max_length=45, blank=True, null=True)
    # Field name made lowercase.
    fechadeingreso = models.DateField(db_column='fechaDeIngreso')

    class Meta:
        managed = False
        db_table = 'integrantecomite'
        unique_together = (('idcomite', 'idintegrantevicerrectoria'),)


class Integrantegrupo(models.Model):
    # Field name made lowercase. The composite primary key (idGrupoInvestigacion, idPersona) found, that is not supported. The first column is selected.
    idgrupoinvestigacion = models.OneToOneField(
        Grupoinvestigacion, models.DO_NOTHING, db_column='idGrupoInvestigacion', primary_key=True)
    # Field name made lowercase.
    idpersona = models.ForeignKey(
        'Persona', models.DO_NOTHING, db_column='idPersona')
    # Field name made lowercase.
    fechaingreso = models.DateField(db_column='fechaIngreso')
    rol = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'integrantegrupo'
        unique_together = (('idgrupoinvestigacion', 'idpersona'),)


class Integranteproyecto(models.Model):
    # Field name made lowercase. The composite primary key (idProyecto, idPersona) found, that is not supported. The first column is selected.
    idproyecto = models.OneToOneField(
        'Proyecto', models.DO_NOTHING, db_column='idProyecto', primary_key=True)
    # Field name made lowercase.
    idpersona = models.ForeignKey(
        'Persona', models.DO_NOTHING, db_column='idPersona')
    # Field name made lowercase.
    fechaingreso = models.DateField(db_column='fechaIngreso')
    rol = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'integranteproyecto'
        unique_together = (('idproyecto', 'idpersona'),)


class Integrantepublicacion(models.Model):
    # Field name made lowercase. The composite primary key (idPersona, idPublicacion) found, that is not supported. The first column is selected.
    idpersona = models.OneToOneField(
        'Persona', models.DO_NOTHING, db_column='idPersona', primary_key=True)
    # Field name made lowercase.
    idpublicacion = models.ForeignKey(
        'Publicacion', models.DO_NOTHING, db_column='idPublicacion')
    rol = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'integrantepublicacion'
        unique_together = (('idpersona', 'idpublicacion'),)


class Integrantevicerrectoria(models.Model):
    # Field name made lowercase.
    idintegrantevicerrectoria = models.AutoField(
        db_column='idIntegranteVicerrectoria', primary_key=True)
    # Field name made lowercase.
    fechadeingreso = models.CharField(
        db_column='fechaDeIngreso', max_length=45)
    rol = models.CharField(max_length=45, blank=True, null=True)
    idvicerrectoriainvestigacion = models.ForeignKey(
        'Vicerrectoriainvestigacion', models.DO_NOTHING, db_column='idVicerrectoriaInvestigacion')  # Field name made lowercase.
    # Field name made lowercase.
    idpersona = models.ForeignKey(
        'Persona', models.DO_NOTHING, db_column='idPersona')

    class Meta:
        managed = False
        db_table = 'integrantevicerrectoria'


class Persona(models.Model):
    # Field name made lowercase.
    idpersona = models.IntegerField(db_column='idPersona', primary_key=True)
    clave = models.CharField(max_length=40)
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    # Field name made lowercase.
    nivelacademico = models.CharField(
        db_column='nivelAcademico', max_length=45)
    edad = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'persona'


class Producto(models.Model):
    # Field name made lowercase.
    idproducto = models.IntegerField(db_column='idProducto', primary_key=True)
    nombre = models.CharField(max_length=45)
    categoria = models.CharField(max_length=45)
    # Field name made lowercase.
    idproyecto = models.ForeignKey(
        'Proyecto', models.DO_NOTHING, db_column='idProyecto')

    class Meta:
        managed = False
        db_table = 'producto'


class Propuesta(models.Model):
    # Field name made lowercase.
    idpropuesta = models.IntegerField(
        db_column='idPropuesta', primary_key=True)
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=60)
    descripcion = models.TextField()
    # Field name made lowercase.
    fechadecreacion = models.DateField(
        db_column='fechaDeCreacion', blank=True, null=True)
    idareagestiondeconocimiento = models.ForeignKey(
        Areagestiondeconocimiento, models.DO_NOTHING, db_column='idAreaGestionDeConocimiento')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'propuesta'


class Proyecto(models.Model):
    # Field name made lowercase.
    idproyecto = models.IntegerField(db_column='idProyecto', primary_key=True)
    nombre = models.CharField(max_length=100)
    enfasis = models.CharField(max_length=45)
    # Field name made lowercase.
    fechadecreacion = models.DateField(db_column='fechaDeCreacion')
    # Field name made lowercase.
    idgrupoinvestigacion = models.ForeignKey(
        Grupoinvestigacion, models.DO_NOTHING, db_column='idGrupoInvestigacion')
    idconvocatoria = models.ForeignKey(
        Convocatoria, models.DO_NOTHING, db_column='idconvocatoria', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'proyecto'


class Publicacion(models.Model):
    # Field name made lowercase.
    idpublicacion = models.IntegerField(
        db_column='idPublicacion', primary_key=True)
    nombre = models.CharField(max_length=150)
    tema = models.CharField(max_length=45)
    tipo = models.CharField(max_length=45)
    # Field name made lowercase.
    fechadecreacion = models.DateField(db_column='fechaDeCreacion')
    # Field name made lowercase.
    idgrupoinvestigacion = models.ForeignKey(
        Grupoinvestigacion, models.DO_NOTHING, db_column='idGrupoInvestigacion')
    # Field name made lowercase.
    idboletinsiun = models.ForeignKey(
        Boletinsiun, models.DO_NOTHING, db_column='idBoletinSIUN', blank=True, null=True)
    idvicerrectoriainvestigacion = models.ForeignKey(
        'Vicerrectoriainvestigacion', models.DO_NOTHING, db_column='idVicerrectoriaInvestigacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'publicacion'


class Sede(models.Model):
    # Field name made lowercase.
    idsede = models.AutoField(db_column='idSede', primary_key=True)
    nombre = models.CharField(max_length=60)
    capacidad = models.IntegerField()
    # Field name made lowercase.
    numerodeestudiantes = models.IntegerField(db_column='numeroDeEstudiantes')
    # Field name made lowercase.
    numerodedocentes = models.IntegerField(db_column='numeroDeDocentes')
    # Field name made lowercase.
    fechadecreacion = models.DateField(
        db_column='fechaDeCreacion', blank=True, null=True)
    idvicerrectoriainvestigacion = models.ForeignKey(
        'Vicerrectoriainvestigacion', models.DO_NOTHING, db_column='idVicerrectoriaInvestigacion')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'sede'


class Vicerrectoriainvestigacion(models.Model):
    idvicerrectoriainvestigacion = models.AutoField(
        db_column='idVicerrectoriaInvestigacion', primary_key=True)  # Field name made lowercase.
    correo = models.CharField(max_length=30)
    telefono = models.CharField(max_length=30)
    # Field name made lowercase.
    presupuestofondo = models.IntegerField(db_column='presupuestoFondo')

    class Meta:
        managed = False
        db_table = 'vicerrectoriainvestigacion'
