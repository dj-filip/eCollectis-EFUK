from django.urls import path
from fuk_potpis.views import FukPotpisView, FukPotpisList, FukPotpisiByDocumentIdAndTypeView

urlpatterns = [
    path('potpis/<int:pk>/', FukPotpisView.as_view()),
    path('potpisi/', FukPotpisList.as_view()),
    path('potpisi/id/<int:id>/type/<int:type>/', FukPotpisiByDocumentIdAndTypeView.as_view()),
]