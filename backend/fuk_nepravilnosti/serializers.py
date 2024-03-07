from fuk_nepravilnosti.models import FukNepravilnosti
from rest_framework import serializers


class FukNepravilnostiSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukNepravilnosti
        fields = '__all__'