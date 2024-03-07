from django.urls import path
from fuk_proces_veza.views import FukProcesVezaView, FukProcesVezaOdList, FukProcesVezaKaList, FukProcesVezaOdKaList

urlpatterns = [
    path('proces-veze/', FukProcesVezaOdKaList.as_view()),
    path('proces-veze-od/<int:pk>/', FukProcesVezaOdList.as_view()),
    path('proces-veze-ka/<int:pk>/', FukProcesVezaKaList.as_view()),
    path('proces-veza/<int:pk>/', FukProcesVezaView.as_view()),
    path('proces-veze/process-id/<int:pk>/', FukProcesVezaOdList.as_view()),
]