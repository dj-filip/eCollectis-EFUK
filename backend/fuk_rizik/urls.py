from django.urls import path
from fuk_rizik.views import FukRizikList, FukRizikListByProcesIdList, FukRizikView

urlpatterns = [
    path('rizici/', FukRizikList.as_view()),
    path('rizici/proces/<int:pk>/', FukRizikListByProcesIdList.as_view()),
    path('rizik/<int:pk>/', FukRizikView.as_view()),
]