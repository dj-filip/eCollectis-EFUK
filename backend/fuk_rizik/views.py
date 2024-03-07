from unittest.mock import patch
from django.contrib import auth
from django.utils import timezone
from base import DEFAULT_ORG_ID
from fuk_rizik.models import FukRizik
from fuk_rizik.serializers import FukRizikSerializer, FukRizikListByProcesIdList_Get_Serializer, FukRizikView_Get_Serializer
from fuk_proces.models import FukProces
from fuk_organizacija.models import FukOrganizacija
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# Create your views here.
class FukRizikList(generics.ListCreateAPIView):
    queryset = FukRizik.objects.all()
    serializer_class = FukRizikSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        try:
            # 'select * from fuk_rizik where RCA_STS=1' [oblast_id]
            instances = FukRizik.objects.filter(rca_sts=1)
            serializer = FukRizikSerializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_rizici': serializer.data})
        except:
            return Response({'status': 'error'})

class FukRizikListByProcesIdList(generics.ListCreateAPIView):
    queryset = FukRizik.objects.all()
    serializer_class = FukRizikSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        try:
            # 'select * from fuk_rizik where PRCS_ID=%s AND RCA_STS=1' [prcs_id, oblast_id]
            instances = FukRizik.objects.filter(prcs_id=int(pk), rca_sts=1)
            print("proces id, instances:", pk, instances)
            serializer = FukRizikListByProcesIdList_Get_Serializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_rizici': serializer.data})
        except:
            return Response({'status': 'error'})

class FukRizikView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukRizik.objects.all()
    serializer_class = FukRizikSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk, format=None):
        try:
            instance = FukRizik.objects.all().get(rsk_id=pk, rca_sts=1)
            serializer = FukRizikView_Get_Serializer(instance)
            return Response({'status': 'ok', 'fuk_rizik': serializer.data})
        except:
            return Response({'status': 'error'})

    def post(self, request, pk, format=None):
        # try:
        print(request.data)
        prcs_id = request.data['prcs_id']
        prcs = FukProces.objects.get(prcs_id=prcs_id)

        org_id = DEFAULT_ORG_ID
        org = FukOrganizacija.objects.get(org_id=org_id)

        rsk_naziv = request.data['rsk_naziv']
        rsk_sifra = request.data['rsk_sifra']
        
        aktivan = 1
        aktivan_od = timezone.now()
        aktivan_do = None
        broj_reaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instance = FukRizik.objects.create(
            prcs_id=prcs,
            org_id=org,
            rsk_naziv=rsk_naziv,
            rsk_sifra=rsk_sifra,
            rca_aktivan=aktivan,
            rca_aktivanod=aktivan_od,
            rca_aktivando=aktivan_do,
            rca_brojreaktivacija=broj_reaktivacija,
            rca_sts=rca_sts,
            rca_tmstp=rca_tmstp
        )
        serializer = FukRizikSerializer(instance, many=False)
        return Response({'status': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'status': 'error'})

    def patch(self, request, pk, format=None):
        # try:
        if 'minimal' in request.data and request.data['minimal']:
            instance= FukRizik.objects.get(rsk_id=pk)
            
            rsk_naziv=request.data['rsk_naziv']
            prcs_id=request.data['prcs_id']
            rsk_sifra=request.data['rsk_sifra']
            prcs=FukProces.objects.get(prcs_id=prcs_id)

            instance.rsk_naziv=rsk_naziv
            instance.prcs_id=prcs
            instance.rsk_sifra=rsk_sifra

            instance.save()
            
            serializer = FukRizikSerializer(instance, many=False)
            return Response({'success': 'ok', 'data': serializer.data })
        else:
            rsk_sifra = request.data['sifra']
            rsk_naziv = request.data['naziv']
            rsk_uticaj = request.data['ut']
            rsk_verovatnoca = request.data['st']
            rsk_efekat = request.data['In']
            rsk_mere = request.data['mereOtklanjanja']
            rsk_odglice = request.data['zaduzenaOsoba']
            rsk_datum = request.data['datum1Merenja']
            rsk_datumpracenja = request.data['datum2Merenja']
            rsk_datumpracenja2 = request.data['datum3Merenja']
            rca_sts = 1
            rca_tmstp = timezone.now()

            patched_data = {
                "rsk_sifra": rsk_sifra,
                "rsk_naziv": rsk_naziv,
                "rsk_uticaj": int(rsk_uticaj),
                "rsk_verovatnoca": int(rsk_verovatnoca),
                "rsk_efekat": int(rsk_efekat),
                "rsk_mere": rsk_mere,
                "rsk_odglice": rsk_odglice,
                "rsk_datum": rsk_datum,
                "rsk_datumpracenja": rsk_datumpracenja,
                "rsk_datumpracenja2": rsk_datumpracenja2,
                "rca_sts": rca_sts,
                "rca_tmstp": rca_tmstp
            }

            instance = self.get_object()
            serializer = self.get_serializer(instance, data=patched_data, partial=True)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)

            if getattr(instance, '_prefetched_objects_cache', None):
                # If 'prefetch_related' has been applied to a queryset, we need to
                # forcibly invalidate the prefetch cache on the instance.
                instance._prefetched_objects_cache = {}

        return Response({'status': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'status': 'error'})

    def delete(self, request, pk,  *args, **kwargs):
        try:
            instance = FukRizik.objects.get(
                rsk_id=pk
            ).update(
                rec_sts=0
            )
            instance.save()
            return Response({'status': 'ok'})
        except Exception as e:
            print('Exception: ', e)
            return Response({'status': 'error'})
