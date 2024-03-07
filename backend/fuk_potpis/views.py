from django.contrib import auth
from django.utils import timezone
from fuk_potpis.models import FukPotpis
from fuk_potpis.serializers import FukPotpisSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView



# Create your views here.

class FukPotpisList(generics.ListCreateAPIView):
    queryset = FukPotpis.objects.all()
    serializer_class = FukPotpisSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        print("GET FukPotpisList")
        try:
            instances = FukPotpis.objects.raw('select * from fuk_potpis where RCA_STS=1')
            serializer = FukPotpisSerializer(instances, many=True)
            return Response({'success': 'ok', 'data': serializer.data })
        except:
            return Response({'success': 'error'})

    def post(self, request, format=None):
        # try:
        dok_id = request.data['dok_id']
        dok_tip = request.data['dok_tip']
        ptps_vrsta = request.data['ptps_vrsta']
        # there can be more than 1, comma separated, names and surnames
        ime_i_prezime_list = request.data['ime_i_prezime']
        
        date = request.data['ptps_datum'].split('T')[0]
        ptps_datum = date

        ptps_potpis = None
        rca_aktivan = 1
        rca_aktivanod = None
        rca_aktivando = None
        rca_brojreaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instances = []

        for ime_i_prezime in ime_i_prezime_list:
            ptps_ime = ime_i_prezime.split()[0]
            ptps_prezime = " ".join(ime_i_prezime.split()[1:])
            instance = FukPotpis.objects.create(
                dok_id=dok_id,
                dok_tip=dok_tip,
                ptps_vrsta=ptps_vrsta,
                ptps_ime=ptps_ime,
                ptps_prezime=ptps_prezime,
                ptps_datum=ptps_datum,
                ptps_potpis=ptps_potpis,
                rca_aktivan=rca_aktivan,
                rca_aktivanod=rca_aktivanod,
                rca_aktivando=rca_aktivando,
                rca_brojreaktivacija=rca_brojreaktivacija,
                rca_sts=rca_sts,
                rca_tmstp=rca_tmstp
            )
            instances.append(instance)

        serializer = FukPotpisSerializer(instances, many=True)
        return Response({'success': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'success': 'error'})
    
    def patch(self, request, format=None):
        # try:
        print(request.data)
        dok_id = request.data['dok_id']
        dok_tip = request.data['dok_tip']
        ptps_vrsta = request.data['ptps_vrsta']

        # set status to false to previous records
        FukPotpis.objects.filter(dok_id=dok_id, dok_tip=dok_tip, ptps_vrsta=ptps_vrsta).update(rca_aktivando=timezone.now(), rca_sts=0)           

        # there can be more than 1, comma separated, names and surnames
        ime_i_prezime_list = request.data['ime_i_prezime'].split(',')

        date = request.data['ptps_datum'].split('T')[0]
        ptps_datum = date

        ptps_potpis = None
        rca_aktivan = 1
        rca_aktivanod = None
        rca_aktivando = None
        rca_brojreaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instances = []

        for ime_i_prezime in ime_i_prezime_list:
            ptps_ime = ime_i_prezime.split()[0]
            ptps_prezime = " ".join(ime_i_prezime.split()[1:])
            instance = FukPotpis.objects.create(
                dok_id=dok_id,
                dok_tip=dok_tip,
                ptps_vrsta=ptps_vrsta,
                ptps_ime=ptps_ime,
                ptps_prezime=ptps_prezime,
                ptps_datum=ptps_datum,
                ptps_potpis=ptps_potpis,
                rca_aktivan=rca_aktivan,
                rca_aktivanod=rca_aktivanod,
                rca_aktivando=rca_aktivando,
                rca_brojreaktivacija=rca_brojreaktivacija,
                rca_sts=rca_sts,
                rca_tmstp=rca_tmstp
            )
            instances.append(instance)

        serializer = FukPotpisSerializer(instances, many=True)
        return Response({'success': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'success': 'error'})

        
class FukPotpisView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FukPotpis.objects.all()
    serializer_class = FukPotpisSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        print("GET FukPotpisList")
        try:
            instances = FukPotpis.objects.filter(rca_sts=1)
            serializer = FukPotpisSerializer(instances, many=True)
            return Response({'success': 'ok', 'data': serializer.data })
        except:
            return Response({'success': 'error'})

    def post(self, request, pk, format=None):
        # try:
        dok_id = request.data['dok_id']
        dok_tip = request.data['dok_tip']
        ptps_vrsta = request.data['ptps_vrsta']
        ptps_ime = request.data['ptps_ime']
        ptps_prezime = request.data['ptps_prezime']
        ptps_datum = request.data['ptps_datum']
        ptps_potpis = None
        rca_aktivan = 1
        rca_aktivanod = None
        rca_aktivando = None
        rca_brojreaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instance = FukPotpis.objects.create(
            dok_id=dok_id,
            dok_tip=dok_tip,
            ptps_vrsta=ptps_vrsta,
            ptps_ime=ptps_ime,
            ptps_prezime=ptps_prezime,
            ptps_datum=ptps_datum,
            ptps_potpis=ptps_potpis,
            rca_aktivan=rca_aktivan,
            rca_aktivanod=rca_aktivanod,
            rca_aktivando=rca_aktivando,
            rca_brojreaktivacija=rca_brojreaktivacija,
            rca_sts=rca_sts,
            rca_tmstp=rca_tmstp
        )
        serializer = FukPotpisSerializer(instance, many=False)
        return Response({'success': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'success': 'error'})
        
    def patch(self, request, pk, format=None):
        # try:
        print(request.data)
        dok_id = request.data['dok_id']
        dok_tip = request.data['dok_tip']
        ptps_vrsta = request.data['ptps_vrsta']
        ptps_ime = request.data['ptps_ime']
        ptps_prezime = request.data['ptps_prezime']
        ptps_datum = request.data['ptps_datum']
        ptps_potpis = None
        rca_aktivan = 1
        rca_aktivanod = None
        rca_aktivando = None
        rca_brojreaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instance = FukPotpis.objects.get(ptps_id=pk)
        instance.dok_id=dok_id
        instance.dok_tip=dok_tip
        instance.ptps_vrsta=ptps_vrsta
        instance.ptps_ime=ptps_ime
        instance.ptps_prezime=ptps_prezime
        instance.ptps_datum=ptps_datum
        instance.ptps_potpis=ptps_potpis
        instance.rca_aktivan=rca_aktivan
        instance.rca_aktivanod=rca_aktivanod
        instance.rca_aktivando=rca_aktivando
        instance.rca_brojreaktivacija=rca_brojreaktivacija
        instance.rca_sts=rca_sts
        instance.rca_tmstp=rca_tmstp
        instance.save()

        serializer = FukPotpisSerializer(instance, many=False)
        return Response({'success': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'success': 'error'})


class FukPotpisiByDocumentIdAndTypeView(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = FukPotpis.objects.all()
    serializer_class = FukPotpisSerializer
    permission_classes = [permissions.AllowAny]
    
    def get(self, request, id, type, format=None):
        # try:
        instance = FukPotpis.objects.filter(dok_id=id, dok_tip=type, rca_sts=1)
        print(instance)
        serializer = FukPotpisSerializer(instance, many=True)
        return Response({'status': 'ok', 'fuk_potpisi': serializer.data})
        # except:
            # return Response({'status': 'error'})

    def patch(self, request, id, type, format=None):
        # try:
        print(id, type)
        print(request.data)
        dok_id = request.data['dok_id']
        dok_tip = request.data['dok_tip']
        ptps_vrsta = request.data['ptps_vrsta']
        ptps_ime = request.data['ptps_ime']
        ptps_prezime = request.data['ptps_prezime']
        ptps_datum = request.data['ptps_datum']
        ptps_potpis = None
        rca_aktivan = 1
        rca_aktivanod = None
        rca_aktivando = None
        rca_brojreaktivacija = 0
        rca_sts = 1
        rca_tmstp = timezone.now()

        instance = FukPotpis.objects.get(dok_id=id, dok_tip=type)      
        instance.dok_id=dok_id
        instance.dok_tip=dok_tip
        instance.ptps_vrsta=ptps_vrsta
        instance.ptps_ime=ptps_ime
        instance.ptps_prezime=ptps_prezime
        instance.ptps_datum=ptps_datum
        instance.ptps_potpis=ptps_potpis
        instance.rca_aktivan=rca_aktivan
        instance.rca_aktivanod=rca_aktivanod
        instance.rca_aktivando=rca_aktivando
        instance.rca_brojreaktivacija=rca_brojreaktivacija
        instance.rca_sts=rca_sts
        instance.rca_tmstp=rca_tmstp
        instance.save()

        serializer = FukPotpisSerializer(instance, many=False)
        # print('IS FUCKING VALID', serializer.is_valid(data=instance))
        return Response({'success': 'ok', 'data': serializer.data })
        # except:
        #     return Response({'success': 'error'})
    

