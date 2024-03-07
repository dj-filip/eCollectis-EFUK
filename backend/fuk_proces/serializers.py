from fuk_orgjed.models import FukOrgjed
from fuk_proces.models import FukProces
from fuk_orgjed.serializers import FukOrgjedSerializer
from fuk_organizacija.serializers import FukOrganizacijaSerializer
from rest_framework import serializers


class FukProcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukProces
        fields = '__all__'

class FukProcesView_Get_Serializer(serializers.ModelSerializer):
    # oj_id = FukOrgjedSerializer()
    orgj_naziv = serializers.CharField(source="oj_id.orgj_naziv", read_only=True)
    class Meta:
        model = FukProces
        fields = '__all__'

class FukProcesView_Post_Serializer(serializers.ModelSerializer):
    # oj_id = FukOrgjedSerializer()
    org_id = FukOrganizacijaSerializer()
    class Meta:
        model = FukProces
        fields = '__all__'