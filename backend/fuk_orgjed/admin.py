from django.contrib import admin

from fuk_orgjed.models import FukOrgjed


# Register your models here.
@admin.register(FukOrgjed)
class FukOrgjedAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukOrgjed._meta.get_fields()]