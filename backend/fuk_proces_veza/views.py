from django.contrib import auth
from django.utils import timezone
from fuk_proces_veza.models import FukProcesVeza
from fuk_proces.models import FukProces
from fuk_proces_veza.serializers import FukProcesVezaSerializer, FukProcesVeza_Get_Serializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# Create your views here.
class FukProcesVezaOdKaList(generics.ListCreateAPIView):
    queryset = FukProcesVeza.objects.all()
    serializer_class = FukProcesVezaSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        try:
            # 'select PRCS_ID, PRCS_Naziv from fuk_proces where OBL_ID=%s AND RCA_STS=1' [proces_id, oblast_id]
            instances_od = FukProcesVeza.objects.filter(prcs_idod=pk, rca_sts=1)
            instances_ka = FukProcesVeza.objects.filter(prcs_idka=pk, rca_sts=1)
            instances = instances_od.union(instances_ka, all=True)
            serializer = FukProcesVeza_Get_Serializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_proces_veze': serializer.data})
        except:
            return Response({'status': 'error'})

    def post(self, request, format=None):
        try:
            instances = []
            for item in request.data:
                prcs_idod = item['prcs_idod']
                prcs_od = FukProces.objects.get(prcs_id=prcs_idod)
                prcs_idka = item['prcs_idka']
                prcs_ka = FukProces.objects.get(prcs_id=prcs_idka)

                # create new
                instance = FukProcesVeza.objects.create(
                    prcs_idod = prcs_od,
                    prcs_idka = prcs_ka,
                    rca_aktivan = 1,
                    rca_aktivanod = timezone.now(),
                    rca_aktivando = None,
                    rca_brojreaktivacija = 0,
                    rca_sts = 1,
                    rca_tmstp = timezone.now()
                )
                instance.save()

                instances.append(instance)

            serializer = FukProcesVezaSerializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_proces_veza': serializer.data })
        except:
            return Response({'status': 'error'})        

    def patch(self, request, format=None):
        try:
            instances = []
            for item in request.data:
                prcs_idod = item['prcs_idod']
                prcs_od = FukProces.objects.get(prcs_id=prcs_idod)
                prcs_idka = item['prcs_idka']
                prcs_ka = FukProces.objects.get(prcs_id=prcs_idka)
                # disable old
                FukProcesVeza.objects.filter(prcs_idod=prcs_od, prcs_idka=prcs_ka, rca_sts=1).update(rca_sts=0, rca_aktivan=0, rca_aktivando=timezone.now())

                # enable new
                instance = FukProcesVeza()
                instance.prcs_idod = prcs_od
                instance.prcs_idka = prcs_ka
                instance.rca_aktivan = 1
                instance.rca_aktivanod = timezone.now()
                instance.rca_aktivando = None
                instance.rca_brojreaktivacija = 0
                instance.rca_sts = 1
                instance.rca_tmstp = timezone.now()
                instance.save()

                instances.append(instance)

            serializer = FukProcesVezaSerializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_proces_veza': serializer.data })
        except:
            return Response({'status': 'error'})

class FukProcesVezaOdList(generics.ListCreateAPIView):
    queryset = FukProcesVeza.objects.all()
    serializer_class = FukProcesVezaSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        try:
            # 'select PRCS_ID, PRCS_Naziv from fuk_proces where OBL_ID=%s AND RCA_STS=1' [proces_id, oblast_id]
            instances = FukProcesVeza.objects.filter(prcs_idod=pk, rca_sts=1)
            serializer = FukProcesVeza_Get_Serializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_proces_veze': serializer.data})
        except:
            return Response({'status': 'error'})

class FukProcesVezaKaList(generics.ListCreateAPIView):
    queryset = FukProcesVeza.objects.all()
    serializer_class = FukProcesVezaSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        try:
            # 'select PRCS_ID, PRCS_Naziv from fuk_proces where OBL_ID=%s AND RCA_STS=1' [proces_id, oblast_id]
            instances = FukProcesVeza.objects.filter(prcs_idka=pk, rca_sts=1)
            serializer = FukProcesVeza_Get_Serializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_proces_veze': serializer.data})
        except:
            return Response({'status': 'error'})

class FukProcesVezaView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukProcesVeza.objects.all()
    serializer_class = FukProcesVezaSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk, format=None):
        try:
            instance = FukProcesVeza.objects.filter(prcsv_id=pk, rca_sts=1)
            serializer = FukProcesVeza_Get_Serializer(instance, many=False)
            return Response({'status': 'ok', 'fuk_proces_veza': serializer.data})
        except:
            return Response({'status': 'error'})

    def post(self, request, pk, format=None):
        try:
            prcs_idod = request.data['prcs_idod']
            prcs_od = FukProces.objects.get(prcs_id=prcs_idod)
            prcs_idka = request.data['prcs_idka']
            prcs_ka = FukProces.objects.get(prcs_id=prcs_idka)
            aktivan = 1
            aktivan_od = timezone.now()
            aktivan_do = None
            broj_reaktivacija = 0
            rca_sts = 1
            rca_tmstp = timezone.now()

            instance = FukProcesVeza.objects.create(
                prcs_idod=prcs_od,
                prcs_idka=prcs_ka,
                rca_aktivan=aktivan,
                rca_aktivanod=aktivan_od,
                rca_aktivando=aktivan_do,
                rca_brojreaktivacija=broj_reaktivacija,
                rca_sts=rca_sts,
                rca_tmstp=rca_tmstp
            )
            instance.save()
            serializer = FukProcesVezaSerializer(instance, many=False)
            return Response({'status': 'ok', 'fuk_proces_veza': serializer.data })
        except:
            return Response({'status': 'error'})

    def delete(self, request, pk,  *args, **kwargs):
        try:
            instance = FukProcesVeza.objects.get(
                prcsv_id=pk
            ).update(
                rec_sts=0
            )
            instance.save()
            return Response({'status': 'ok'})
        except Exception as e:
            return Response({'status': 'error'})
