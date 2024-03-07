from fuk_potpis.models import FukPotpis
from rest_framework import serializers


class FukPotpisSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukPotpis
        fields = '__all__'
