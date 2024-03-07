from django.urls import path
from fuk_proces.views import FukProcesList, FukProcesView, AllFukProcesList

urlpatterns = [
    path('procesi/<int:pk>/', FukProcesList.as_view()),
    path('procesi/', AllFukProcesList.as_view()),
    path('proces/<int:pk>/', FukProcesView.as_view())
]