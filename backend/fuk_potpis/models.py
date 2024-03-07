from django.db import models

# Create your models here.
class FukPotpis(models.Model):
    ptps_id = models.BigAutoField(db_column='PTPS_ID', primary_key=True)  # Field name made lowercase.
    dok_id = models.BigIntegerField(db_column='DOK_ID', blank=True, null=True)  # Field name made lowercase.
    dok_tip = models.IntegerField(db_column='DOK_Tip', blank=True, null=True)  # Field name made lowercase.
    ptps_vrsta = models.IntegerField(db_column='PTPS_Vrsta', blank=True, null=True)  # Field name made lowercase.
    ptps_ime = models.CharField(db_column='PTPS_Ime', max_length=200, blank=True, null=True)  # Field name made lowercase.
    ptps_prezime = models.CharField(db_column='PTPS_Prezime', max_length=200, blank=True, null=True)  # Field name made lowercase.
    ptps_datum = models.DateField(db_column='PTPS_Datum', blank=True, null=True)  # Field name made lowercase.
    ptps_potpis = models.CharField(db_column='PTPS_Potpis', max_length=200, blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_potpis'
