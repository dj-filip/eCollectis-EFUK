from django.contrib import admin

from fuk_rizik.models import FukRizik


# Register your models here.
@admin.register(FukRizik)
class FukRizikAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukRizik._meta.get_fields()]
