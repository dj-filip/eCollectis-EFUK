from django.contrib import admin

from fuk_aktivnost.models import FukAktivnost


# Register your models here.
@admin.register(FukAktivnost)
class FukAktivnostAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukAktivnost._meta.get_fields()]