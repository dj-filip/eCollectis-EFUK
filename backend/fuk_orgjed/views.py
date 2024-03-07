from django.contrib import auth
from django.utils import timezone
from fuk_orgjed.models import FukOrgjed
from fuk_orgjed.serializers import FukOrgjedSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# Create your views here.
class FukOrgjedList(generics.ListCreateAPIView):
    queryset = FukOrgjed.objects.all()
    serializer_class = FukOrgjedSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        print("org jed GET")
        try:
            instances = FukOrgjed.objects.raw('select * from fuk_orgjed where RCA_STS=1')
            serializer = FukOrgjedSerializer(instances, many=True)
            return Response({'success': 'ok', 'data': serializer.data })
        except:
            return Response({'success': 'error'})

