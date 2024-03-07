from datetime import datetime
from django.contrib import auth
from django.utils import timezone
from fuk_proces.models import FukProces
from fuk_procedura.models import FukProcedura
from fuk_aktivnost.models import FukAktivnost
from fuk_aktivnost.serializers import FukAktivnostSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.generics import GenericAPIView


# Create your views here.
class FukAktivnostList(generics.ListCreateAPIView):
    queryset = FukAktivnost.objects.all()
    serializer_class = FukAktivnostSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, proces, procedura, format=None):
        # try:
        instances = FukAktivnost.objects.filter(prcs_id=proces, proc_id=procedura, rca_sts=1).order_by('akt_redosled').distinct()
        serializer = FukAktivnostSerializer(instances, many=True)
        return Response({'success': 'ok', 'fuk_aktivnosti': serializer.data })
        # except:
            # return Response({'success': 'error'})
    
    def post(self, request, proces, procedura, format=None):
        # try:
        aktivnosti = request.data
        print ("POST: ", aktivnosti)
        instances = []
        for aktivnost in aktivnosti:
            prcs = FukProces.objects.get(prcs_id = proces)
            proc = FukProcedura.objects.get(proc_id = procedura)
            instance = FukAktivnost.objects.create(
                prcs_id = prcs,
                proc_id = proc,
                akt_redosled = aktivnost['akt_redosled'],
                akt_naziv = aktivnost['akt_naziv'],
                akt_opis = aktivnost['akt_opis'],
                akt_pratecidok = aktivnost['akt_pratecidok'],
                akt_odglice = aktivnost['akt_odglice'],
                akt_slika = int(aktivnost['akt_slika']),
                akt_dijagid = int(aktivnost['akt_dijagid']),
                akt_rokdat = aktivnost['akt_rokdat'],
                rca_aktivan = 1,
                rca_aktivanod = timezone.now(),
                rca_sts = 1,
                rca_tmstp = timezone.now()
            )
            instances.append(instance)
        serializer = FukAktivnostSerializer(instances, many=True)
        return Response({'success': 'ok', 'fuk_aktivnosti': serializer.data })
        # except:
        #     return Response({'success': 'error'})
    
    def delete(self, request, proces, procedura, format=None):
        try:
            instances = FukAktivnost.objects.filter(prcs_id=proces, proc_id=procedura, rca_sts=1)
            for instance in instances:
                instance.rca_sts = 0
                instance.rca_aktivando = timezone.now()
                instance.rca_aktivan = 0
                instance.save()
            return Response({'success': 'ok'})
        except:
            return Response({'success': 'error'})