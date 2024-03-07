from django.contrib import admin

from fuk_help.models import FukHelp

# Register your models here.
@admin.register(FukHelp)
class FukHelpAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukHelp._meta.get_fields()]
