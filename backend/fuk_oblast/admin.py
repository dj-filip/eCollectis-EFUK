from django.contrib import admin

from fuk_oblast.models import FukOblast

# Register your models here.
@admin.register(FukOblast)
class FukOblastAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukOblast._meta.get_fields()]