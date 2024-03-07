from django.db import models

from fuk_proces.models import FukProces
from fuk_organizacija.models import FukOrganizacija
from fuk_orgjed.models import FukOrgjed
from fuk_oblast.models import FukOblast

# Create your models here.
class FukNepravilnosti(models.Model):
    nprv_id = models.BigAutoField(db_column='NPRV_ID', primary_key=True)  # Field name made lowercase.
    prcs_id = models.ForeignKey(FukProces, on_delete=models.SET_NULL, db_column='PRCS_ID', blank=True, null=True)  # Field name made lowercase.
    org_id = models.ForeignKey(FukOrganizacija, on_delete=models.SET_NULL, db_column='ORG_ID', blank=True, null=True)  # Field name made lowercase.
    oj_id = models.ForeignKey(FukOrgjed, on_delete=models.SET_NULL, db_column='OJ_ID', blank=True, null=True)  # Field name made lowercase.
    obl_id = models.ForeignKey(FukOblast, on_delete=models.SET_NULL, db_column='OBL_ID', blank=True, null=True)  # Field name made lowercase.
    nprv_rbr = models.IntegerField(db_column='NPRV_RBR', blank=True, null=True)  # Field name made lowercase.
    prcs_sifra = models.CharField(db_column='PRCS_Sifra', max_length=20)  # Field name made lowercase.
    prcs_naziv = models.CharField(db_column='PRCS_Naziv', max_length=200)  # Field name made lowercase.
    nprv_nosilac = models.CharField(db_column='NPRV_Nosilac', max_length=200, blank=True, null=True)  # Field name made lowercase.
    nprv_datum = models.DateTimeField(db_column='NPRV_Datum', blank=True, null=True)  # Field name made lowercase.
    nprv_mesto = models.CharField(db_column='NPRV_Mesto', max_length=200, blank=True, null=True)  # Field name made lowercase.
    nprv_kropis = models.CharField(db_column='NPRV_KrOpis', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    nprv_dokazi = models.CharField(db_column='NPRV_Dokazi', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    nprv_uocio = models.CharField(db_column='NPRV_Uocio', max_length=200, blank=True, null=True)  # Field name made lowercase.
    nprv_odlukadoneta = models.IntegerField(db_column='NPRV_OdlukaDoneta', blank=True, null=True)  # Field name made lowercase.
    nprv_odlukadatum = models.DateTimeField(db_column='NPRV_OdlukaDatum', blank=True, null=True)  # Field name made lowercase.
    nprv_obavestenjeposlato = models.IntegerField(db_column='NPRV_ObavestenjePoslato', blank=True, null=True)  # Field name made lowercase.
    nprv_obavestenjedatum = models.DateTimeField(db_column='NPRV_ObavestenjeDatum', blank=True, null=True)  # Field name made lowercase.
    nprv_obavestvnposlato = models.IntegerField(db_column='NPRV_ObavestVNPoslato', blank=True, null=True)  # Field name made lowercase.
    nprv_obavestvndatum = models.DateTimeField(db_column='NPRV_ObavestVNDatum', blank=True, null=True)  # Field name made lowercase.
    nprv_utvrdjena = models.IntegerField(db_column='NPRV_Utvrdjena', blank=True, null=True)  # Field name made lowercase.
    nprv_vrsta = models.CharField(db_column='NPRV_Vrsta', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    nprv_aktivnosti = models.CharField(db_column='NPRV_Aktivnosti', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    nprv_mera = models.CharField(db_column='NPRV_Mera', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    nprv_rok = models.DateTimeField(db_column='NPRV_Rok', blank=True, null=True)  # Field name made lowercase.
    nprv_meradokazi = models.CharField(db_column='NPRV_MeraDokazi', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    nprv_obavestenjevrposlato = models.IntegerField(db_column='NPRV_ObavestenjeVRPoslato', blank=True, null=True)  # Field name made lowercase.
    nprv_obavestenjevrdatum = models.DateTimeField(db_column='NPRV_ObavestenjeVRDatum', blank=True, null=True)  # Field name made lowercase.
    nprv_infovnprimljen = models.IntegerField(db_column='NPRV_InfoVNPrimljen', blank=True, null=True)  # Field name made lowercase.
    nprv_infovndatumprijema = models.DateTimeField(db_column='NPRV_InfoVNDatumPrijema', blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_nepravilnosti'