from django.db import models
from fuk_proces.models import FukProces
from fuk_procedura.models import FukProcedura
from fuk_organizacija.models import FukOrganizacija

class FukRizik(models.Model):
    rsk_id = models.BigAutoField(db_column='RSK_ID', primary_key=True)  # Field name made lowercase.
    prcs_id = models.ForeignKey(FukProces, on_delete=models.SET_NULL, db_column='PRCS_ID', blank=True, null=True)  # Field name made lowercase.
    proc_id = models.ForeignKey(FukProcedura, on_delete=models.SET_NULL, db_column='PROC_ID', blank=True, null=True)  # Field name made lowercase.
    org_id = models.ForeignKey(FukOrganizacija, on_delete=models.SET_NULL, db_column='ORG_ID', blank=True, null=True)  # Field name made lowercase.
    rsk_ciljpp = models.CharField(db_column='RSK_CiljPP', max_length=500, blank=True, null=True)  # Field name made lowercase.
    rsk_sifra = models.CharField(db_column='RSK_Sifra', max_length=100, blank=True, null=True)  # Field name made lowercase.
    rsk_naziv = models.CharField(db_column='RSK_Naziv', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    rsk_verzija = models.CharField(db_column='RSK_Verzija', max_length=200, blank=True, null=True)  # Field name made lowercase.
    rsk_iverzija = models.IntegerField(db_column='RSK_IVerzija', blank=True, null=True)  # Field name made lowercase.
    rsk_zadlice = models.CharField(db_column='RSK_ZadLice', max_length=500, blank=True, null=True)  # Field name made lowercase.
    rsk_uticaj = models.IntegerField(db_column='RSK_Uticaj', blank=True, null=True)  # Field name made lowercase.
    rsk_verovatnoca = models.IntegerField(db_column='RSK_Verovatnoca', blank=True, null=True)  # Field name made lowercase.
    rsk_efekat = models.IntegerField(db_column='RSK_Efekat', blank=True, null=True)  # Field name made lowercase.
    rsk_odglice = models.CharField(db_column='RSK_OdgLice', max_length=200, blank=True, null=True)  # Field name made lowercase.
    rsk_mere = models.CharField(db_column='RSK_Mere', max_length=500, blank=True, null=True)  # Field name made lowercase.
    rsk_odgliceprac = models.CharField(db_column='RSK_OdgLicePrac', max_length=200, blank=True, null=True)  # Field name made lowercase.
    rsk_datum = models.DateField(db_column='RSK_Datum', blank=True, null=True)  # Field name made lowercase.
    rsk_datumpracenja = models.DateField(db_column='RSK_DatumPracenja', blank=True, null=True)  # Field name made lowercase.
    rsk_datumpracenja2 = models.DateField(db_column='RSK_DatumPracenja2', blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_rizik'