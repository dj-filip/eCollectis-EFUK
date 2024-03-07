from fuk_orgjed.models import FukOrgjed
from rest_framework import serializers


class FukOrgjedSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukOrgjed
        fields = '__all__'