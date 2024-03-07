from fuk_rizik.models import FukRizik
# from fuk_proces.serializers import FukProcesSerializer
from rest_framework import serializers


class FukRizikSerializer(serializers.ModelSerializer):
    nosilac_rizika_prcs = serializers.CharField(source="prcs_id.prcs_nosilac", read_only=True)
    nosilac_rizika_proc = serializers.CharField(source="proc_id.proc_nosilac", read_only=True)
    class Meta:
        model = FukRizik
        fields = '__all__'

class FukRizikListByProcesIdList_Get_Serializer(serializers.ModelSerializer):
    # oj_id = FukOrgjedSerializer()
    prcs_naziv = serializers.CharField(source="prcs_id.prcs_naziv", read_only=True)
    prcs_sifra = serializers.CharField(source="prcs_id.prcs_sifra", read_only=True)
    prcs_rukoj = serializers.CharField(source="prcs_id.prcs_rukoj", read_only=True)
    prcs_nosilac = serializers.CharField(source="prcs_id.prcs_nosilac", read_only=True)
    class Meta:
        model = FukRizik
        fields = ['rsk_id', 'rsk_naziv', 'prcs_naziv', 'prcs_sifra', 'prcs_rukoj', 'prcs_nosilac']

class FukRizikView_Get_Serializer(serializers.ModelSerializer):
    # oj_id = FukOrgjedSerializer()
    # orgj_naziv = serializers.CharField(source="oj_id.orgj_naziv", read_only=True)
    prcs_naziv = serializers.CharField(source="prcs_id.prcs_naziv", read_only=True)
    prcs_sifra = serializers.CharField(source="prcs_id.prcs_sifra", read_only=True)
    prcs_rukoj = serializers.CharField(source="prcs_id.prcs_rukoj", read_only=True)
    prcs_nosilac = serializers.CharField(source="prcs_id.prcs_nosilac", read_only=True)
    class Meta:
        model = FukRizik
        fields = '__all__'