from fuk_proces_veza.models import FukProcesVeza
from rest_framework import serializers


class FukProcesVezaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukProcesVeza
        fields = '__all__'

class FukProcesVeza_Get_Serializer(serializers.ModelSerializer):
    # oj_id = FukOrgjedSerializer()
    od_naziv = serializers.CharField(source="prcs_idod.prcs_naziv", read_only=True)
    ka_naziv = serializers.CharField(source="prcs_idka.prcs_naziv", read_only=True)
    class Meta:
        model = FukProcesVeza
        fields = '__all__'