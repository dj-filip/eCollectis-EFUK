from django.db import models
from fuk_procedura.models import FukProcedura
from fuk_proces.models import FukProces

# Create your models here.
class FukRiziks(models.Model):
    rsks_id = models.BigAutoField(db_column='RSKS_ID', primary_key=True)  # Field name made lowercase.
    prcs_id = models.ForeignKey(FukProces, on_delete=models.SET_NULL, db_column='PRCS_ID', blank=True, null=True)  # Field name made lowercase.
    proc_id = models.ForeignKey(FukProcedura, on_delete=models.SET_NULL, db_column='PROC_ID', blank=True, null=True)  # Field name made lowercase.
    rsks_naziv = models.CharField(db_column='RSKS_Naziv', max_length=200)  # Field name made lowercase.
    rsks_verzija = models.CharField(db_column='RSKS_Verzija', max_length=200)  # Field name made lowercase.
    rsks_iverzija = models.IntegerField(db_column='RSKS_IVerzija')  # Field name made lowercase.
    rsks_zadlice = models.CharField(db_column='RSKS_ZadLice', max_length=500)  # Field name made lowercase.
    rsks_uticaj = models.CharField(db_column='RSKS_Uticaj', max_length=500)  # Field name made lowercase.
    rsks_verovatnoca = models.CharField(db_column='RSKS_Verovatnoca', max_length=5000)  # Field name made lowercase.
    rsks_odglice = models.CharField(db_column='RSKS_OdgLice', max_length=200)  # Field name made lowercase.
    rsks_mere = models.CharField(db_column='RSKS_Mere', max_length=500)  # Field name made lowercase.
    rsks_mehanizamt = models.CharField(db_column='RSKS_Mehanizamt', max_length=500)  # Field name made lowercase.
    rsks_korradnje = models.CharField(db_column='RSKS_KorRadnje', max_length=500)  # Field name made lowercase.
    rsks_odgliceprac = models.CharField(db_column='RSKS_OdgLicePrac', max_length=200)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_riziks'
