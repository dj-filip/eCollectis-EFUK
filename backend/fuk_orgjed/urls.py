from django.urls import path
from fuk_orgjed.views import FukOrgjedList

urlpatterns = [
    path('organizacione-jedinice/', FukOrgjedList.as_view()),
]