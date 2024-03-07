from django.contrib import admin

from fuk_procedura.models import FukProcedura

# Register your models here.
@admin.register(FukProcedura)
class FukProceduraAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukProcedura._meta.get_fields()]