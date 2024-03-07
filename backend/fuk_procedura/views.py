from datetime import datetime
from django.contrib import auth
from django.utils import timezone
from base import DEFAULT_ORG_ID
from fuk_organizacija.models import FukOrganizacija
from fuk_oblast.models import FukOblast
from fuk_orgjed.models import FukOrgjed
from fuk_procedura.models import FukProcedura
from fuk_proces.models import FukProces
from fuk_procedura.serializers import FukProceduraSerializer, FukProceduraView_Get_Serializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# Create your views here.
class FukProceduraList(generics.ListCreateAPIView):
    queryset = FukProcedura.objects.all()
    serializer_class = FukProceduraSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        try:
            # 'select PROC_ID, PROC_Naziv from fuk_procedura where PRCS_ID=%s AND RCA_STS=1' [pk]
            instances = FukProcedura.objects.only('proc_id', 'proc_naziv').filter(prcs_id=pk, rca_sts=1)
            print('instances: ', instances)
            serializer = FukProceduraSerializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_procedure': serializer.data})
        except:
            return Response({'status': 'error'})

class FukProceduraView(mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin,
                        generics.GenericAPIView):
    queryset = FukProcedura.objects.all()
    serializer_class = FukProceduraSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk, format=None):
        try:
            instance = FukProcedura.objects.only('proc_id', 'proc_naziv').get(proc_id=pk, rca_sts=1)
            serializer = FukProceduraView_Get_Serializer(instance)
            return Response({'status': 'ok', 'fuk_procedura': serializer.data})
        except:
            return Response({'status': 'error'})

    
    def post(self, request, pk, format=None):
        try:
            print(request.data)
            org_id = DEFAULT_ORG_ID
            org = FukOrganizacija.objects.get(org_id=org_id)

            obl_id= request.data['obl_id']
            obl = FukOblast.objects.get(obl_id=obl_id)

            oj_id = request.data['oj_id']
            oj = FukOrgjed.objects.get(orgj_id=oj_id)

            prcs_id= request.data['prcs_id']
            prcs = FukProces.objects.get(prcs_id=prcs_id)

            proc_sifra = request.data['proc_sifra']
            proc_naziv = request.data['proc_naziv']
            proc_verzija = request.data['proc_verzija']
            proc_rukoj = request.data['proc_rukoj']
            proc_nosilac = request.data['proc_nosilac']
            proc_cilj = request.data['proc_cilj']
            proc_podrucjep = request.data['proc_podrucjep']
            proc_odok = request.data['proc_odok']
            proc_odgv = request.data['proc_odgv']
            proc_zakon = request.data['proc_zakon']
            proc_termin = request.data['proc_termin']
            rca_aktivanod = timezone.now()
            rca_aktivando = None
            rca_brojreaktivacija = 0
            rca_sts = 1
            rca_tmstp = timezone.now()

            instance = FukProcedura.objects.create(
                org_id=org,
                obl_id=obl,
                orgjed_id=oj,
                prcs_id=prcs,
                proc_sifra=proc_sifra,
                proc_naziv=proc_naziv,
                proc_verzija=proc_verzija,
                proc_rukoj=proc_rukoj,
                proc_nosilac=proc_nosilac,
                proc_cilj=proc_cilj,
                proc_podrucjep=proc_podrucjep,
                proc_odok=proc_odok,
                proc_odgv=proc_odgv,
                proc_zakon=proc_zakon,
                proc_termin=proc_termin,
                rca_aktivanod=rca_aktivanod,
                rca_aktivando=rca_aktivando,
                rca_brojreaktivacija=rca_brojreaktivacija,
                rca_sts=rca_sts,
                rca_tmstp=rca_tmstp
            )
            serializer = FukProceduraSerializer(instance, many=False)
            return Response({'status': 'ok', 'data': serializer.data })
        except:
            return Response({'status': 'error'})

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, pk, *args, **kwargs):
        try:
            instance = FukProcedura.objects.get(proc_id=pk)
            instance.rca_sts=0
            instance.save()
            print('instance.rca_sts', instance.rca_sts)
            return Response({'status': 'ok'})
        except Exception as e:
            print('Exception: ', e)
            return Response({'status': 'error'})
