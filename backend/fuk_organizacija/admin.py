from django.contrib import admin

from fuk_organizacija.models import FukOrganizacija

# Register your models here.
@admin.register(FukOrganizacija)
class FukOrganizacijaAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukOrganizacija._meta.get_fields()]
