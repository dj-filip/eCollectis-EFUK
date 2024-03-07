from fuk_aktivnost.models import FukAktivnost
from rest_framework import serializers


class FukAktivnostSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukAktivnost
        fields = '__all__'
