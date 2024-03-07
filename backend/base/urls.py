"""base URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


VER_MAJ = 1
VER_MIN = 0

API = f'api/v_{VER_MAJ}_{VER_MIN}'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'{API}/api-auth/', include('rest_framework.urls')),
    # path(f'{API}/fuk/', include('fuk.urls')),
    path(f'{API}/fuk-aktivnost/', include('fuk_aktivnost.urls')),
    # path(f'{API}/fuk-gfuk/', include('fuk_gfuk.urls')),
    # path(f'{API}/fuk-help/', include('fuk_help.urls')),
    path(f'{API}/fuk-oblast/', include('fuk_oblast.urls')),
    # path(f'{API}/fuk-organizacija/', include('fuk_organizacija.urls')),
    path(f'{API}/fuk-orgjed/', include('fuk_orgjed.urls')),
    path(f'{API}/fuk-potpis/', include('fuk_potpis.urls')),
    path(f'{API}/fuk-procedura/', include('fuk_procedura.urls')),
    path(f'{API}/fuk-proces/', include('fuk_proces.urls')),
    path(f'{API}/fuk-proces-veza/', include('fuk_proces_veza.urls')),
    path(f'{API}/fuk-rizik/', include('fuk_rizik.urls')),
    # path(f'{API}/fuk-riziks/', include('fuk_riziks.urls')),
    path(f'{API}/fuk-nepravilnosti/', include('fuk_nepravilnosti.urls')),
    path(f'{API}/e-print/', include('eprint.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
