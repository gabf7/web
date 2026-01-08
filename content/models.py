from django.db import models

class Info(models.Model):
    icono = models.ImageField(upload_to="img/icono/")
    nombre_negocio = models.CharField(max_length=50)
    slogan_1 = models.CharField(max_length=100)
    slogan_2 = models.CharField(max_length=100, blank=True)
    whatsapp = models.CharField(max_length=20)

class Turismo(models.Model):
    nombre = models.CharField(max_length=50, blank=True)
    imagen = models.ImageField(upload_to="img/lugares/")
    descripcion = models.CharField(max_length=100)