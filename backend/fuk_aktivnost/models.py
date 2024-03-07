from django.db import models

from fuk_procedura.models import FukProcedura
from fuk_proces.models import FukProces

# Create your models here
class FukAktivnost(models.Model):
    akt_id = models.BigAutoField(db_column='AKT_ID', primary_key=True)  # Field name made lowercase.
    prcs_id = models.ForeignKey(FukProces, on_delete=models.SET_NULL, db_column='PRCS_ID', blank=True, null=True)  # Field name made lowercase.
    proc_id = models.ForeignKey(FukProcedura, on_delete=models.SET_NULL, db_column='PROC_ID', blank=True, null=True)  # Field name made lowercase.
    akt_naziv = models.CharField(db_column='AKT_Naziv', max_length=200, blank=True, null=True)  # Field name made lowercase.
    akt_verzija = models.CharField(db_column='AKT_Verzija', max_length=200, blank=True, null=True)  # Field name made lowercase.
    akt_redosled = models.IntegerField(db_column='AKT_Redosled', blank=True, null=True)  # Field name made lowercase.
    akt_pratecidok = models.CharField(db_column='AKT_PrateciDOK', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    akt_opis = models.CharField(db_column='AKT_Opis', max_length=5000, blank=True, null=True)  # Field name made lowercase.
    akt_odglice = models.CharField(db_column='AKT_OdgLice', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    akt_rok = models.CharField(db_column='AKT_ROK', max_length=2048, blank=True, null=True)  # Field name made lowercase.
    akt_rokdat = models.DateField(db_column='AKT_ROKDat', blank=True, null=True)  # Field name made lowercase.
    akt_dijagid = models.IntegerField(db_column='AKT_DijagId', blank=True, null=True)  # Field name made lowercase.
    akt_slika = models.IntegerField(db_column='AKT_Slika', blank=True, null=True)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_aktivnost'