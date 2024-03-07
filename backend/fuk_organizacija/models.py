from django.db import models

# Create your models here.
class FukOrganizacija(models.Model):
    org_id = models.BigAutoField(db_column='ORG_ID', primary_key=True)  # Field name made lowercase.
    org_naziv = models.CharField(db_column='ORG_Naziv', max_length=200)  # Field name made lowercase.
    org_pnaziv = models.CharField(db_column='ORG_Pnaziv', max_length=400, blank=True, null=True)  # Field name made lowercase.
    org_adresa = models.CharField(db_column='ORG_Adresa', max_length=200, blank=True, null=True)  # Field name made lowercase.
    org_mesto = models.CharField(db_column='ORG_Mesto', max_length=100, blank=True, null=True)  # Field name made lowercase.
    org_sifmesta = models.IntegerField(db_column='ORG_SifMesta', blank=True, null=True)  # Field name made lowercase.
    org_opstina = models.CharField(db_column='ORG_Opstina', max_length=100, blank=True, null=True)  # Field name made lowercase.
    org_sifopstine = models.IntegerField(db_column='ORG_SifOpstine', blank=True, null=True)  # Field name made lowercase.
    org_brtel = models.CharField(db_column='ORG_BrTel', max_length=100, blank=True, null=True)  # Field name made lowercase.
    org_email = models.CharField(db_column='ORG_Email', max_length=100, blank=True, null=True)  # Field name made lowercase.
    org_maticnibr = models.CharField(db_column='ORG_MaticniBr', max_length=10, blank=True, null=True)  # Field name made lowercase.
    org_pib = models.CharField(db_column='ORG_PIB', max_length=10, blank=True, null=True)  # Field name made lowercase.
    org_budzet = models.IntegerField(db_column='ORG_Budzet', blank=True, null=True)  # Field name made lowercase.
    org_pob = models.IntegerField(db_column='ORG_POB', blank=True, null=True)  # Field name made lowercase.
    org_pdv = models.IntegerField(db_column='ORG_PDV', blank=True, null=True)  # Field name made lowercase.
    org_ptt = models.IntegerField(db_column='ORG_PTT', blank=True, null=True)  # Field name made lowercase.
    org_pak = models.IntegerField(db_column='ORG_PAK', blank=True, null=True)  # Field name made lowercase.
    org_sifdelatnosti = models.IntegerField(db_column='ORG_SifDelatnosti', blank=True, null=True)  # Field name made lowercase.
    org_nazivdelatnosti = models.CharField(db_column='ORG_NazivDelatnosti', max_length=200, blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_organizacija'
