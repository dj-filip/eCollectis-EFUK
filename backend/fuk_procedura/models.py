from django.db import models
from fuk_oblast.models import FukOblast
from fuk_organizacija.models import FukOrganizacija
from fuk_orgjed.models import FukOrgjed
from fuk_proces.models import FukProces

# Create your models here.
class FukProcedura(models.Model):
    proc_id = models.BigAutoField(db_column='PROC_ID', primary_key=True)  # Field name made lowercase.
    org_id = models.ForeignKey(FukOrganizacija, on_delete=models.SET_NULL, db_column='ORG_ID', blank=True, null=True)  # Field name made lowercase.
    orgjed_id = models.ForeignKey(FukOrgjed, on_delete=models.SET_NULL, db_column='ORGJED_ID', blank=True, null=True)  # Field name made lowercase.
    obl_id = models.ForeignKey(FukOblast, on_delete=models.SET_NULL, db_column='OBL_ID', blank=True, null=True)  # Field name made lowercase.
    prcs_id = models.ForeignKey(FukProces, on_delete=models.SET_NULL, db_column='PRCS_ID', blank=True, null=True)  # Field name made lowercase.
    proc_sifra = models.CharField(db_column='PROC_Sifra', max_length=20, blank=True, null=True)  # Field name made lowercase.
    proc_naziv = models.CharField(db_column='PROC_Naziv', max_length=200, blank=True, null=True)  # Field name made lowercase.
    proc_verzija = models.CharField(db_column='PROC_Verzija', max_length=200, blank=True, null=True)  # Field name made lowercase.
    proc_iverzija = models.IntegerField(db_column='PROC_IVerzija', blank=True, null=True)  # Field name made lowercase.
    proc_rukoj = models.CharField(db_column='PROC_RukOJ', max_length=200, blank=True, null=True)  # Field name made lowercase.
    proc_nosilac = models.CharField(db_column='PROC_Nosilac', max_length=200, blank=True, null=True)  # Field name made lowercase.
    proc_nazivprcs = models.CharField(db_column='PROC_NazivPRCS', max_length=200, blank=True, null=True)  # Field name made lowercase.
    proc_cilj = models.CharField(db_column='PROC_Cilj', max_length=500, blank=True, null=True)  # Field name made lowercase.
    proc_podrucjep = models.CharField(db_column='PROC_PodrucjeP', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    proc_odok = models.CharField(db_column='PROC_ODok', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    proc_odgv = models.CharField(db_column='PROC_ODGV', max_length=4096, blank=True, null=True)  # Field name made lowercase.
    proc_zakon = models.TextField(db_column='PROC_Zakon', blank=True, null=True)  # Field name made lowercase.
    proc_termin = models.CharField(db_column='PROC_Termin', max_length=4096, blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_procedura'
