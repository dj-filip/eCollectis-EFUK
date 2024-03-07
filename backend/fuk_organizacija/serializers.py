from fuk_organizacija.models import FukOrganizacija
from rest_framework import serializers


class FukOrganizacijaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukOrganizacija
        fields = '__all__'
