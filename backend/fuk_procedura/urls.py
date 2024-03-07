from django.urls import path
from fuk_procedura.views import FukProceduraList, FukProceduraView

urlpatterns = [
    path('procedure/<int:pk>/', FukProceduraList.as_view()),
    path('procedura/<int:pk>/', FukProceduraView.as_view()),
]