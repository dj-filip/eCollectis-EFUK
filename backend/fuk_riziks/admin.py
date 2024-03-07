from django.contrib import admin

from fuk_riziks.models import FukRiziks


# Register your models here.
@admin.register(FukRiziks)
class FukRiziksAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukRiziks._meta.get_fields()]
