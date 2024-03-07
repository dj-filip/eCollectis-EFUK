from django.shortcuts import render
from fuk_nepravilnosti.models import FukNepravilnosti
from fuk_proces.models import FukProces
from fuk_oblast.models import FukOblast
from fuk_organizacija.models import FukOrganizacija
from fuk_nepravilnosti.serializers import FukNepravilnostiSerializer
from rest_framework import permissions, mixins, generics
from rest_framework.response import Response
from django.utils import timezone
from base import DEFAULT_ORG_ID

# Create your views here.
class FukNepravilnostList(generics.ListCreateAPIView):
    queryset = FukNepravilnosti.objects.all()
    serializer_class = FukNepravilnostiSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        try:
            # 'select PRCS_ID, PRCS_Naziv from fuk_proces where OBL_ID=%s AND RCA_STS=1' [proces_id, oblast_id]
            instances = FukNepravilnosti.objects.filter(rca_sts=1)
            serializer = FukNepravilnostiSerializer(instances, many=True)
            return Response({'status': 'ok', 'fuk_nepravilnosti': serializer.data})
        except:
            return Response({'status': 'error'})


class FukNepravilnostView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukNepravilnosti.objects.all()
    serializer_class = FukNepravilnostiSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, pk, format=None):
        try:
            instance = FukNepravilnosti.objects.get(nprv_id=pk, rca_sts=1)
            serializer = FukNepravilnostiSerializer(instance)
            return Response({'status': 'ok', 'fuk_nepravilnost': serializer.data})
        except:
            return Response({'status': 'error'})
    
    def patch(self, request, pk, format=None):
        try:
            instance = FukNepravilnosti.objects.get(nprv_id=pk)
            instance.prcs_sifra = request.data['prcs_sifra']
            instance.org = FukOrganizacija.objects.get(org_id=DEFAULT_ORG_ID)
            instance.oj_id = None
            prcs = FukProces.objects.get(prcs_sifra=request.data['prcs_sifra'])
            instance.obl_id = FukOblast.objects.get(obl_id=prcs.obl_id_id)
            instance.nprv_rbr = FukNepravilnosti.objects.count() + 1
            instance.prcs_naziv = prcs.prcs_naziv
            instance.nprv_nosilac = request.data['nprv_nosilac']
            instance.nprv_datum = request.data['nprv_datum']
            instance.nprv_mesto = request.data['nprv_mesto']
            instance.nprv_kropis = request.data['nprv_kropis']
            instance.nprv_dokazi = request.data['nprv_dokazi']
            instance.nprv_uocio = request.data['nprv_uocio']
            instance.nprv_odlukadoneta = request.data['nprv_odlukadoneta']
            instance.nprv_odlukadatum = request.data['nprv_odlukadatum']
            instance.nprv_obavestenjeposlato = request.data['nprv_obavestenjeposlato']
            instance.nprv_obavestenjedatum = request.data['nprv_obavestenjedatum']
            instance.nprv_obavestvnposlato = request.data['nprv_obavestvnposlato']
            instance.nprv_obavestvndatum = request.data['nprv_obavestvndatum']
            instance.nprv_utvrdjena = request.data['nprv_utvrdjena']
            instance.nprv_vrsta = request.data['nprv_vrsta']
            instance.nprv_aktivnosti = request.data['nprv_aktivnosti']
            instance.nprv_mera = request.data['nprv_mera']
            instance.nprv_rok = request.data['nprv_rok']
            instance.nprv_meradokazi = request.data['nprv_meradokazi']
            instance.nprv_obavestenjevrposlato = request.data['nprv_obavestenjevrposlato']
            instance.nprv_obavestenjevrdatum = request.data['nprv_obavestenjevrdatum']
            instance.nprv_infovnprimljen = request.data['nprv_infovnprimljen']
            instance.nprv_infovndatumprijema = request.data['nprv_infovndatumprijema']
            instance.rca_aktivan = 1
            instance.rca_aktivanod = timezone.now()
            instance.rca_aktivando = None
            instance.rca_brojreaktivacija = 0
            instance.rca_sts = 1
            instance.rca_tmstp = timezone.now()
            instance.save()

            return Response({'status': 'ok'})
        except:
            return Response({'status': 'error'})
    
    def delete(self, request, pk, format=None):
        try:
            instance = FukNepravilnosti.objects.get(nprv_id=pk)
            instance.rca_sts=0
            instance.save()

            return Response({'status': 'ok'})
        except Exception as e:
            return Response({'status': 'error'})

class FukCreateNepravilnostView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukNepravilnosti.objects.all()
    serializer_class = FukNepravilnostiSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        # try:
        prcs_sifra = request.data['prcs_sifra']
        prcs = FukProces.objects.get(prcs_sifra=prcs_sifra)
        # org_id = request.data['org_id']
        org = FukOrganizacija.objects.get(org_id=DEFAULT_ORG_ID)
        oj_id = None
        obl_id = FukOblast.objects.get(obl_id=prcs.obl_id_id)
        nprv_rbr = FukNepravilnosti.objects.count() + 1
        prcs_naziv = prcs.prcs_naziv
        nprv_nosilac = request.data['nprv_nosilac']
        nprv_datum = request.data['nprv_datum']
        nprv_mesto = request.data['nprv_mesto']
        nprv_kropis = request.data['nprv_kropis']
        nprv_dokazi = request.data['nprv_dokazi']
        nprv_uocio = request.data['nprv_uocio']
        nprv_odlukadoneta = request.data['nprv_odlukadoneta']
        nprv_odlukadatum = request.data['nprv_odlukadatum']
        nprv_obavestenjeposlato = request.data['nprv_obavestenjeposlato']
        nprv_obavestenjedatum = request.data['nprv_obavestenjedatum']
        nprv_obavestvnposlato = request.data['nprv_obavestvnposlato']
        nprv_obavestvndatum = request.data['nprv_obavestvndatum']
        nprv_utvrdjena = request.data['nprv_utvrdjena']
        nprv_vrsta = request.data['nprv_vrsta']
        nprv_aktivnosti = request.data['nprv_aktivnosti']
        nprv_mera = request.data['nprv_mera']
        nprv_rok = request.data['nprv_rok']
        nprv_meradokazi = request.data['nprv_meradokazi']
        nprv_obavestenjevrposlato = request.data['nprv_obavestenjevrposlato']
        nprv_obavestenjevrdatum = request.data['nprv_obavestenjevrdatum']
        nprv_infovnprimljen = request.data['nprv_infovnprimljen']
        nprv_infovndatumprijema = request.data['nprv_infovndatumprijema']
        rca_aktivan = 1
        rca_aktivanod = timezone.now()
        rca_aktivando = None
        rca_brojreaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        FukNepravilnosti.objects.create(
            prcs_id=prcs,
            org_id=org,
            oj_id=oj_id,
            obl_id=obl_id,
            nprv_rbr=nprv_rbr,
            prcs_sifra=prcs_sifra,
            prcs_naziv=prcs_naziv,
            nprv_nosilac=nprv_nosilac,
            nprv_datum=nprv_datum,
            nprv_mesto=nprv_mesto,
            nprv_kropis=nprv_kropis,
            nprv_dokazi=nprv_dokazi,
            nprv_uocio=nprv_uocio,
            nprv_odlukadoneta=nprv_odlukadoneta,
            nprv_odlukadatum=nprv_odlukadatum,
            nprv_obavestenjeposlato=nprv_obavestenjeposlato,
            nprv_obavestenjedatum=nprv_obavestenjedatum,
            nprv_obavestvnposlato=nprv_obavestvnposlato,
            nprv_obavestvndatum=nprv_obavestvndatum,
            nprv_utvrdjena=nprv_utvrdjena,
            nprv_vrsta=nprv_vrsta,
            nprv_aktivnosti=nprv_aktivnosti,
            nprv_mera=nprv_mera,
            nprv_rok=nprv_rok,
            nprv_meradokazi=nprv_meradokazi,
            nprv_obavestenjevrposlato=nprv_obavestenjevrposlato,
            nprv_obavestenjevrdatum=nprv_obavestenjevrdatum,
            nprv_infovnprimljen=nprv_infovnprimljen,
            nprv_infovndatumprijema=nprv_infovndatumprijema,
            rca_aktivan=rca_aktivan,
            rca_aktivanod=rca_aktivanod,
            rca_aktivando=rca_aktivando,
            rca_brojreaktivacija=rca_brojreaktivacija,
            rca_sts=rca_sts,
            rca_tmstp=rca_tmstp
        )
            # instances = FukOblast.objects.raw("INSERT INTO FUK_OBLAST(OBL_Naziv) VALUES(%s)", [ime_oblasti])
            # print('instances =>', instances)
            # serializer = FukOblastSerializer(instances, many=True)
        return Response({'status': 'ok'})
        # except:
            # return Response({'status': 'error'})
