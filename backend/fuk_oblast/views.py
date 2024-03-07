from django.contrib import auth
from django.utils import timezone
from fuk_oblast.models import FukOblast
from fuk_oblast.serializers import FukOblastSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# oblast views
class FukOblastList(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    GenericAPIView):
    queryset = FukOblast.objects.all()
    serializer_class = FukOblastSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        try:
            instances = FukOblast.objects.only('obl_id', 'obl_naziv').filter(rca_sts=1)
            serializer = FukOblastSerializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_oblasti': serializer.data})
        except:
            return Response({'status': 'error'})


class FukOblastView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukOblast.objects.all()
    serializer_class = FukOblastSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk, format=None):
        try:
            instance = FukOblast.objects.only('obl_id', 'obl_naziv').get(obl_id=pk, rca_sts=1)
            serializer = FukOblastSerializer(instance)
            return Response({'status': 'ok', 'fuk_oblast': serializer.data})
        except:
            return Response({'status': 'error'})

    def post(self, request, pk, format=None):
            try:
                ime_oblasti = request.data['imeOblasti']
                FukOblast.objects.create(
                    obl_naziv=ime_oblasti,
                    rca_sts=1
                )
                # instances = FukOblast.objects.raw("INSERT INTO FUK_OBLAST(OBL_Naziv) VALUES(%s)", [ime_oblasti])
                # print('instances =>', instances)
                # serializer = FukOblastSerializer(instances, many=True)
                return Response({'status': 'ok'})
            except:
                return Response({'status': 'error'})

    def patch(self, request, pk, format=None):
        try:
            ime_oblasti = request.data['imeOblasti']

            instance = FukOblast.objects.get(obl_id=pk)
            instance.obl_naziv=ime_oblasti
            instance.save()

            return Response({'status': 'ok'})
        except:
            return Response({'status': 'error'})

    def delete(self, request, pk, format=None):
        try:
            instance = FukOblast.objects.get(obl_id=pk)
            instance.rca_sts=0
            instance.save()

            return Response({'status': 'ok'})
        except Exception as e:
            print('Exception: ', e)
            return Response({'status': 'error'})
