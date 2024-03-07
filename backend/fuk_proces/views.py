from django.contrib import auth
from django.utils import timezone
from base import DEFAULT_ORG_ID
from fuk_organizacija.models import FukOrganizacija
from fuk_orgjed.models import FukOrgjed
from fuk_oblast.models import FukOblast
from fuk_proces.models import FukProces
from fuk_proces.serializers import FukProcesSerializer, FukProcesView_Get_Serializer, FukProcesView_Post_Serializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# Create your views here.
class FukProcesList(generics.ListCreateAPIView):
    queryset = FukProces.objects.all()
    serializer_class = FukProcesSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        # try:
        # 'select PRCS_ID, PRCS_Naziv from fuk_proces where OBL_ID=%s AND RCA_STS=1' [proces_id, oblast_id]
        instances = FukProces.objects.only('prcs_id', 'prcs_sifra', 'prcs_naziv').filter(obl_id=pk, rca_sts=1)
        serializer = FukProcesSerializer(instances, many=True)
        return Response({'status': 'ok', 'fuk_procesi': serializer.data})
        # except:
        #     return Response({'status': 'error'})

class AllFukProcesList(generics.ListCreateAPIView):
    queryset = FukProces.objects.all()
    serializer_class = FukProcesSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        # try:
        # 'select PRCS_ID, PRCS_Naziv from fuk_proces where OBL_ID=%s AND RCA_STS=1' [proces_id, oblast_id]
        instances = FukProces.objects.filter(rca_sts=1)
        serializer = FukProcesSerializer(instances, many=True)
        return Response({'status': 'ok', 'fuk_procesi': serializer.data})
        # except:
        #     return Response({'status': 'error'})

class FukProcesView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukProces.objects.all()
    serializer_class = FukProcesSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk, format=None):
        try:
            instance = FukProces.objects.only('prcs_id', 'prcs_naziv').get(prcs_id=pk, rca_sts=1)
            serializer = FukProcesView_Get_Serializer(instance)
            return Response({'status': 'ok', 'fuk_proces': serializer.data})
        except:
            return Response({'status': 'error'})

    def post(self, request, pk, format=None):
        # try:
        org_id = DEFAULT_ORG_ID
        org = FukOrganizacija.objects.get(org_id=org_id)

        organizaciona_jedinica_id = int(request.data['oj_id'])
        org_jed = FukOrgjed.objects.get(orgj_id=organizaciona_jedinica_id)

        oblast_id = int(request.data['obl_id'])
        obl = FukOblast.objects.get(obl_id=oblast_id)

        sifra_procesa = request.data['prcs_sifra']
        naziv_procesa = request.data['prcs_naziv']
        verzija_procesa = request.data['prcs_verzija']
        rukovodilac_organizacione_jedinice = request.data['prcs_rukoj']
        nosilac_poslovnog_procesa = request.data['prcs_nosilac']
        cilj_poslovnog_procesa = request.data['prsc_cilj']
        kratak_opis_ulaza = request.data['prcs_kropulaz']
        kratak_opis_aktivnosti = request.data['prcs_kropakt']
        kratak_opis_rezultata = request.data['prcs_kroprez']
        veza_sa_drugim_procesima = request.data['prcs_veza']
        resursi_za_ostvarivanje_poslovnog_procesa = request.data['prcs_resursi']
        aktivan = 1
        aktivan_od = timezone.now()
        aktivan_do = None
        broj_reaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instance = FukProces.objects.create(
            org_id=org,
            oj_id=org_jed,
            obl_id=obl,
            prcs_sifra=sifra_procesa,
            prcs_naziv=naziv_procesa,
            prcs_verzija=verzija_procesa,
            prcs_iverzija=int(verzija_procesa),
            prcs_rukoj=rukovodilac_organizacione_jedinice,
            prcs_nosilac=nosilac_poslovnog_procesa,
            prcs_cilj=cilj_poslovnog_procesa,
            prcs_kropulaz=kratak_opis_ulaza,
            prcs_kropakt=kratak_opis_aktivnosti,
            prcs_kroprez=kratak_opis_rezultata,
            prcs_resursi=resursi_za_ostvarivanje_poslovnog_procesa,
            prcs_veza=veza_sa_drugim_procesima,
            rca_aktivan=aktivan,
            rca_aktivanod=aktivan_od,
            rca_aktivando=aktivan_do,
            rca_brojreaktivacija=broj_reaktivacija,
            rca_sts=rca_sts,
            rca_tmstp=rca_tmstp
        )
        serializer = FukProcesSerializer(instance, many=False)
        return Response({'status': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'status': 'error'})
        
    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, pk,  *args, **kwargs):
        try:
            print('pk', pk)
            instance = FukProces.objects.get(prcs_id=pk)
            instance.rca_sts=0
            instance.save()
            print('instance.sts', instance.rca_sts)
            return Response({'status': 'ok'})
        except Exception as e:
            print('Exception: ', e)
            return Response({'status': 'error'})
