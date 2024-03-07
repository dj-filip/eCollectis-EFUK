from django.urls import path
from fuk_nepravilnosti.views import FukNepravilnostView, FukCreateNepravilnostView, FukNepravilnostList

urlpatterns = [
    path('nepravilnost/', FukCreateNepravilnostView.as_view()),
    path('nepravilnost/<int:pk>/', FukNepravilnostView.as_view()),
    path('nepravilnosti/', FukNepravilnostList.as_view()),
]