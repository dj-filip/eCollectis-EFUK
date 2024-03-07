from django.db import models
from fuk_oblast.models import FukOblast
from fuk_organizacija.models import FukOrganizacija
from fuk_orgjed.models import FukOrgjed

# Create your models here.
class FukProces(models.Model):
    prcs_id = models.BigAutoField(db_column='PRCS_ID', primary_key=True)  # Field name made lowercase.
    org_id = models.ForeignKey(FukOrganizacija, on_delete=models.SET_NULL, db_column='ORG_ID', blank=True, null=True)  # Field name made lowercase.
    oj_id = models.ForeignKey(FukOrgjed, on_delete=models.SET_NULL, db_column='OJ_ID', blank=True, null=True)  # Field name made lowercase.
    obl_id = models.ForeignKey(FukOblast, on_delete=models.SET_NULL, db_column='OBL_ID', blank=True, null=True)  # Field name made lowercase.
    prcs_sifra = models.CharField(db_column='PRCS_Sifra', max_length=20)  # Field name made lowercase.
    prcs_naziv = models.CharField(db_column='PRCS_Naziv', max_length=200)  # Field name made lowercase.
    prcs_verzija = models.CharField(db_column='PRCS_Verzija', max_length=200)  # Field name made lowercase.
    prcs_iverzija = models.IntegerField(db_column='PRCS_IVerzija', blank=True, null=True)  # Field name made lowercase.
    prcs_rukoj = models.CharField(db_column='PRCS_RukOJ', max_length=200, blank=True, null=True)  # Field name made lowercase.
    prcs_nosilac = models.CharField(db_column='PRCS_Nosilac', max_length=200, blank=True, null=True)  # Field name made lowercase.
    prcs_cilj = models.CharField(db_column='PRCS_Cilj', max_length=4096, blank=True, null=True)  # Field name made lowercase.
    prcs_kropulaz = models.CharField(db_column='PRCS_KrOpUlaz', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    prcs_kropakt = models.CharField(db_column='PRCS_KrOpAkt', max_length=4096, blank=True, null=True)  # Field name made lowercase.
    prcs_kroprez = models.CharField(db_column='PRCS_KrOpRez', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    prcs_resursi = models.CharField(db_column='PRCS_Resursi', max_length=500, blank=True, null=True)  # Field name made lowercase.
    prcs_veza = models.CharField(db_column='PRCS_Veza', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_proces'
