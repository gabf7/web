from django.db import models

class conductor(models.Model):
    nombre = models.CharField(max_length=100)
    creado = models.DateTimeField(auto_now_add=True)
