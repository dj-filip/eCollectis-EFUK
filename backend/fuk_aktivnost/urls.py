from django.urls import path
from fuk_aktivnost.views import FukAktivnostList

urlpatterns = [
    path('aktivnosti/<int:proces>/<int:procedura>/', FukAktivnostList.as_view()),
]