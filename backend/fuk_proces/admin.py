from django.contrib import admin

from fuk_proces.models import FukProces

# Register your models here.
@admin.register(FukProces)
class FukProcesAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukProces._meta.get_fields()]
