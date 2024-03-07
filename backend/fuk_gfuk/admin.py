from django.contrib import admin

from fuk_gfuk.models import FukGfuk


# Register your models here.
@admin.register(FukGfuk)
class FukGfukAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FukGfuk._meta.get_fields()]
