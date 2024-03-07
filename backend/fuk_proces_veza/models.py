from django.db import models
from fuk_proces.models import FukProces

# Create your models here.
class FukProcesVeza(models.Model):
    prcsv_id = models.BigAutoField(db_column='PRCSV_ID', primary_key=True)  # Field name made lowercase.
    prcs_idod = models.ForeignKey(FukProces, related_name='proces_od', on_delete=models.SET_NULL, db_column='PRCS_IDOD', blank=True, null=True)  # Field name made lowercase.
    prcs_idka = models.ForeignKey(FukProces, related_name='proces_ka', on_delete=models.SET_NULL, db_column='PRCS_IDKA', blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_proces_veza'
