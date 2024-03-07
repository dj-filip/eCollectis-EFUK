from django.db import models

from fuk_organizacija.models import FukOrganizacija

# Create your models here.
class FukOrgjed(models.Model):
    orgj_id = models.BigAutoField(db_column='ORGJ_ID', primary_key=True)  # Field name made lowercase.
    org_id = models.ForeignKey(FukOrganizacija, on_delete=models.SET_NULL, db_column='ORG_ID', blank=True, null=True)  # Field name made lowercase.
    orgj_sifra = models.CharField(db_column='ORGJ_Sifra', max_length=20, blank=True, null=True)  # Field name made lowercase.
    orgj_naziv = models.CharField(db_column='ORGJ_Naziv', max_length=200)  # Field name made lowercase.
    orgj_nivo = models.IntegerField(db_column='ORGJ_Nivo', blank=True, null=True)  # Field name made lowercase.
    orgj_nadredjenaid = models.BigIntegerField(db_column='ORGJ_NadredjenaID', blank=True, null=True)  # Field name made lowercase.
    orgj_rukovodilac = models.BigIntegerField(db_column='ORGJ_Rukovodilac', blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_orgjed'

