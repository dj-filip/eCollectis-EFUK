from django.db import models
from fuk_organizacija.models import FukOrganizacija

# Create your models here.
class FukGfuk(models.Model):
    gfuk_id = models.BigAutoField(db_column='GFUK_ID', primary_key=True)  # Field name made lowercase.
    org_id = models.ForeignKey(FukOrganizacija, on_delete=models.SET_NULL, db_column='ORG_ID', blank=True, null=True)  # Field name made lowercase.
    gfuk_gdina = models.IntegerField(db_column='GFUK_Gdina')  # Field name made lowercase.
    gfuk_1_1 = models.CharField(db_column='GFUK_1_1', max_length=200)  # Field name made lowercase.
    gfuk_1_2 = models.CharField(db_column='GFUK_1_2', max_length=200)  # Field name made lowercase.
    gfuk_1_3 = models.CharField(db_column='GFUK_1_3', max_length=200)  # Field name made lowercase.
    gfuk_1_4 = models.CharField(db_column='GFUK_1_4', max_length=200)  # Field name made lowercase.
    gfuk_1_5 = models.IntegerField(db_column='GFUK_1_5')  # Field name made lowercase.
    gfuk_1_6 = models.IntegerField(db_column='GFUK_1_6')  # Field name made lowercase.
    gfuk_1_7 = models.DecimalField(db_column='GFUK_1_7', max_digits=18, decimal_places=2)  # Field name made lowercase.
    gfuk_1_8a = models.CharField(db_column='GFUK_1_8a', max_length=200)  # Field name made lowercase.
    gfuk_1_8b = models.CharField(db_column='GFUK_1_8b', max_length=200)  # Field name made lowercase.
    gfuk_1_9 = models.CharField(db_column='GFUK_1_9', max_length=200)  # Field name made lowercase.
    gfuk_1_10 = models.CharField(db_column='GFUK_1_10', max_length=200)  # Field name made lowercase.
    gfuk_1_11 = models.CharField(db_column='GFUK_1_11', max_length=200)  # Field name made lowercase.
    gfuk_1_12 = models.CharField(db_column='GFUK_1_12', max_length=200)  # Field name made lowercase.
    gfuk_2_1 = models.IntegerField(db_column='GFUK_2_1', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_2a = models.DateField(db_column='GFUK_2_2a', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_2b = models.CharField(db_column='GFUK_2_2b', max_length=200)  # Field name made lowercase.
    gfuk_2_3 = models.CharField(db_column='GFUK_2_3', max_length=500)  # Field name made lowercase.
    gfuk_2_4 = models.IntegerField(db_column='GFUK_2_4', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_5a = models.DateField(db_column='GFUK_2_5a', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_5b = models.CharField(db_column='GFUK_2_5b', max_length=200)  # Field name made lowercase.
    gfuk_2_6 = models.CharField(db_column='GFUK_2_6', max_length=500)  # Field name made lowercase.
    gfuk_2_7 = models.IntegerField(db_column='GFUK_2_7', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_8a = models.DateField(db_column='GFUK_2_8a', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_8b = models.CharField(db_column='GFUK_2_8b', max_length=200)  # Field name made lowercase.
    gfuk_2_9 = models.CharField(db_column='GFUK_2_9', max_length=500)  # Field name made lowercase.
    gfuk_2_10 = models.IntegerField(db_column='GFUK_2_10', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_11 = models.CharField(db_column='GFUK_2_11', max_length=500)  # Field name made lowercase.
    gfuk_2_12 = models.IntegerField(db_column='GFUK_2_12', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_13 = models.CharField(db_column='GFUK_2_13', max_length=500)  # Field name made lowercase.
    gfuk_2_14 = models.IntegerField(db_column='GFUK_2_14', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_15a = models.DateField(db_column='GFUK_2_15a', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_15b = models.CharField(db_column='GFUK_2_15b', max_length=200)  # Field name made lowercase.
    gfuk_2_16 = models.IntegerField(db_column='GFUK_2_16', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_17 = models.CharField(db_column='GFUK_2_17', max_length=500)  # Field name made lowercase.
    gfuk_2_18 = models.CharField(db_column='GFUK_2_18', max_length=500)  # Field name made lowercase.
    gfuk_2_19 = models.IntegerField(db_column='GFUK_2_19', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_20 = models.CharField(db_column='GFUK_2_20', max_length=500)  # Field name made lowercase.
    gfuk_2_21 = models.IntegerField(db_column='GFUK_2_21', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_22 = models.CharField(db_column='GFUK_2_22', max_length=500)  # Field name made lowercase.
    gfuk_2_23 = models.IntegerField(db_column='GFUK_2_23', blank=True, null=True)  # Field name made lowercase.
    gfuk_2_24 = models.CharField(db_column='GFUK_2_24', max_length=500)  # Field name made lowercase.
    gfuk_1ko_1 = models.IntegerField(db_column='GFUK_1KO_1', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_2 = models.IntegerField(db_column='GFUK_1KO_2', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_3 = models.IntegerField(db_column='GFUK_1KO_3', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_4 = models.IntegerField(db_column='GFUK_1KO_4', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_5 = models.IntegerField(db_column='GFUK_1KO_5', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_6 = models.IntegerField(db_column='GFUK_1KO_6', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_7 = models.IntegerField(db_column='GFUK_1KO_7', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_8 = models.IntegerField(db_column='GFUK_1KO_8', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_9 = models.IntegerField(db_column='GFUK_1KO_9', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_10 = models.IntegerField(db_column='GFUK_1KO_10', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_11 = models.IntegerField(db_column='GFUK_1KO_11', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_12 = models.IntegerField(db_column='GFUK_1KO_12', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_13 = models.IntegerField(db_column='GFUK_1KO_13', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_14 = models.IntegerField(db_column='GFUK_1KO_14', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_15 = models.IntegerField(db_column='GFUK_1KO_15', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_16 = models.IntegerField(db_column='GFUK_1KO_16', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_17 = models.IntegerField(db_column='GFUK_1KO_17', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_18 = models.IntegerField(db_column='GFUK_1KO_18', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_19 = models.IntegerField(db_column='GFUK_1KO_19', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_20 = models.IntegerField(db_column='GFUK_1KO_20', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_21 = models.IntegerField(db_column='GFUK_1KO_21', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_22 = models.IntegerField(db_column='GFUK_1KO_22', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_23 = models.IntegerField(db_column='GFUK_1KO_23', blank=True, null=True)  # Field name made lowercase.
    gfuk_1ko_sum = models.IntegerField(db_column='GFUK_1KO_SUM', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_1 = models.IntegerField(db_column='GFUK_2UR_1', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_2 = models.IntegerField(db_column='GFUK_2UR_2', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_3 = models.IntegerField(db_column='GFUK_2UR_3', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_4 = models.IntegerField(db_column='GFUK_2UR_4', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_5 = models.IntegerField(db_column='GFUK_2UR_5', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_6 = models.IntegerField(db_column='GFUK_2UR_6', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_7 = models.IntegerField(db_column='GFUK_2UR_7', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_8 = models.IntegerField(db_column='GFUK_2UR_8', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_9 = models.IntegerField(db_column='GFUK_2UR_9', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_10 = models.IntegerField(db_column='GFUK_2UR_10', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_11 = models.IntegerField(db_column='GFUK_2UR_11', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_12 = models.IntegerField(db_column='GFUK_2UR_12', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_13 = models.IntegerField(db_column='GFUK_2UR_13', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_14 = models.IntegerField(db_column='GFUK_2UR_14', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_15 = models.IntegerField(db_column='GFUK_2UR_15', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_16 = models.IntegerField(db_column='GFUK_2UR_16', blank=True, null=True)  # Field name made lowercase.
    gfuk_2ur_sum = models.IntegerField(db_column='GFUK_2UR_SUM', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_1 = models.IntegerField(db_column='GFUK_3KA_1', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_2 = models.IntegerField(db_column='GFUK_3KA_2', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_3 = models.IntegerField(db_column='GFUK_3KA_3', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_4 = models.IntegerField(db_column='GFUK_3KA_4', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_5 = models.IntegerField(db_column='GFUK_3KA_5', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_6 = models.IntegerField(db_column='GFUK_3KA_6', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_7 = models.IntegerField(db_column='GFUK_3KA_7', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_8 = models.IntegerField(db_column='GFUK_3KA_8', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_9 = models.IntegerField(db_column='GFUK_3KA_9', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_10 = models.IntegerField(db_column='GFUK_3KA_10', blank=True, null=True)  # Field name made lowercase.
    gfuk_3ka_sum = models.IntegerField(db_column='GFUK_3KA_SUM', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_1 = models.IntegerField(db_column='GFUK_4IK_1', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_2 = models.IntegerField(db_column='GFUK_4IK_2', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_3 = models.IntegerField(db_column='GFUK_4IK_3', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_4 = models.IntegerField(db_column='GFUK_4IK_4', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_5 = models.IntegerField(db_column='GFUK_4IK_5', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_6 = models.IntegerField(db_column='GFUK_4IK_6', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_7 = models.IntegerField(db_column='GFUK_4IK_7', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_8 = models.IntegerField(db_column='GFUK_4IK_8', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_9 = models.IntegerField(db_column='GFUK_4IK_9', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_10 = models.IntegerField(db_column='GFUK_4IK_10', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_11 = models.IntegerField(db_column='GFUK_4IK_11', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_12 = models.IntegerField(db_column='GFUK_4IK_12', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_13 = models.IntegerField(db_column='GFUK_4IK_13', blank=True, null=True)  # Field name made lowercase.
    gfuk_4ik_sum = models.IntegerField(db_column='GFUK_4IK_SUM', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_1 = models.IntegerField(db_column='GFUK_5NP_1', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_2 = models.IntegerField(db_column='GFUK_5NP_2', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_3 = models.IntegerField(db_column='GFUK_5NP_3', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_4 = models.IntegerField(db_column='GFUK_5NP_4', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_5 = models.IntegerField(db_column='GFUK_5NP_5', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_6 = models.IntegerField(db_column='GFUK_5NP_6', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_7 = models.IntegerField(db_column='GFUK_5NP_7', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_8 = models.IntegerField(db_column='GFUK_5NP_8', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_9 = models.IntegerField(db_column='GFUK_5NP_9', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_10 = models.IntegerField(db_column='GFUK_5NP_10', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_11 = models.IntegerField(db_column='GFUK_5NP_11', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_12 = models.IntegerField(db_column='GFUK_5NP_12', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_13 = models.IntegerField(db_column='GFUK_5NP_13', blank=True, null=True)  # Field name made lowercase.
    gfuk_5np_sum = models.IntegerField(db_column='GFUK_5NP_SUM', blank=True, null=True)  # Field name made lowercase.
    gfuk_total = models.IntegerField(db_column='GFUK_TOTAL', blank=True, null=True)  # Field name made lowercase.
    gfuk_4_1 = models.CharField(db_column='GFUK_4_1', max_length=500)  # Field name made lowercase.
    gfuk_4_2 = models.CharField(db_column='GFUK_4_2', max_length=500)  # Field name made lowercase.
    gfuk_4_3 = models.CharField(db_column='GFUK_4_3', max_length=500)  # Field name made lowercase.
    gfuk_4_4 = models.CharField(db_column='GFUK_4_4', max_length=500)  # Field name made lowercase.
    gfuk_4_5 = models.CharField(db_column='GFUK_4_5', max_length=500)  # Field name made lowercase.
    gfuk_4_6 = models.CharField(db_column='GFUK_4_6', max_length=500)  # Field name made lowercase.
    rca_aktivan = models.IntegerField(db_column='RCA_Aktivan', blank=True, null=True)  # Field name made lowercase.
    rca_aktivanod = models.DateTimeField(db_column='RCA_aktivanOD', blank=True, null=True)  # Field name made lowercase.
    rca_aktivando = models.DateTimeField(db_column='RCA_aktivanDO', blank=True, null=True)  # Field name made lowercase.
    rca_brojreaktivacija = models.IntegerField(db_column='RCA_BrojReaktivacija', blank=True, null=True)  # Field name made lowercase.
    rca_sts = models.IntegerField(db_column='RCA_STS', blank=True, null=True)  # Field name made lowercase.
    rca_tmstp = models.DateTimeField(db_column='RCA_TMSTP')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'fuk_gfuk'

