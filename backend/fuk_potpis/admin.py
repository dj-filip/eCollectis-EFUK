from django.contrib import admin

from fuk_potpis.models import FukPotpis

# Register your models here.
@admin.register(FukPotpis)
class FukPotpisAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukPotpis._meta.get_fields()]