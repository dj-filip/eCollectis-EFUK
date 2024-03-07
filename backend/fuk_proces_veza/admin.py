from django.contrib import admin

from fuk_proces_veza.models import FukProcesVeza


# Register your models here.
@admin.register(FukProcesVeza)
class FukProcesVezaAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukProcesVeza._meta.get_fields()]