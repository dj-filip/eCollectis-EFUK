from django.urls import path
from fuk_oblast.views import FukOblastList, FukOblastView

urlpatterns = [
    path('oblasti/', FukOblastList.as_view()),
    path('oblast/<int:pk>/', FukOblastView.as_view()),
]