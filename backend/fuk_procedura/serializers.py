from fuk_procedura.models import FukProcedura
from rest_framework import serializers


class FukProceduraSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukProcedura
        fields = '__all__'


class FukProceduraView_Get_Serializer(serializers.ModelSerializer):
    orgj_naziv = serializers.CharField(source="orgjed_id.orgj_naziv", read_only=True)
    class Meta:
        model = FukProcedura
        fields = '__all__'
