from fuk_oblast.models import FukOblast
from rest_framework import serializers


class FukOblastSerializer(serializers.ModelSerializer):
    class Meta:
        model = FukOblast
        fields = ['obl_id', 'obl_naziv']