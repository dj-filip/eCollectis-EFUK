from django.db import models

# Create your models here.
class FukHelp(models.Model):
    fukh_id = models.BigAutoField(db_column='FUKH_ID', primary_key=True)  # Field name made lowercase.
    fukh_oblast = models.CharField(db_column='FUKH_OBLAST', max_length=5, blank=True, null=True)  # Field name made lowercase.
    fukh_opis = models.CharField(db_column='FUKH_OPIS', max_length=2000)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_help'
