from django.urls import path
from eprint.views import ProcesPrintView

urlpatterns = [
    path('process/<int:pk>/', ProcesPrintView.as_view()),
]