# Generated by Django 3.2.10 on 2022-11-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FukAktivnost',
            fields=[
                ('akt_id', models.BigAutoField(db_column='AKT_ID', primary_key=True, serialize=False)),
                ('prcs_id', models.BigIntegerField(blank=True, db_column='PRCS_ID', null=True)),
                ('proc_id', models.BigIntegerField(blank=True, db_column='PROC_ID', null=True)),
                ('akt_naziv', models.CharField(blank=True, db_column='AKT_Naziv', max_length=200, null=True)),
                ('akt_verzija', models.CharField(blank=True, db_column='AKT_Verzija', max_length=200, null=True)),
                ('akt_redosled', models.IntegerField(blank=True, db_column='AKT_Redosled', null=True)),
                ('akt_pratecidok', models.CharField(blank=True, db_column='akt_pratecidok', max_length=2048, null=True)),
                ('akt_izldok', models.CharField(blank=True, db_column='AKT_IzlDOK', max_length=500, null=True)),
                ('akt_opis', models.CharField(blank=True, db_column='AKT_Opis', max_length=5000, null=True)),
                ('akt_odglice', models.CharField(blank=True, db_column='AKT_OdgLice', max_length=2048, null=True)),
                ('akt_rok', models.CharField(blank=True, db_column='AKT_ROK', max_length=2048, null=True)),
                ('akt_rokdat', models.DateField(blank=True, db_column='AKT_ROKDat', null=True)),
                ('akt_dijagid', models.IntegerField(blank=True, db_column='AKT_DijagId', null=True)),
                ('akt_slika', models.IntegerField(blank=True, db_column='AKT_Slika', null=True)),
                ('rca_aktivan', models.IntegerField(blank=True, db_column='RCA_Aktivan', null=True)),
                ('rca_aktivanod', models.DateTimeField(blank=True, db_column='RCA_aktivanOD', null=True)),
                ('rca_aktivando', models.DateTimeField(blank=True, db_column='RCA_aktivanDO', null=True)),
                ('rca_brojreaktivacija', models.IntegerField(blank=True, db_column='RCA_BrojReaktivacija', null=True)),
                ('rca_sts', models.IntegerField(blank=True, db_column='RCA_STS', null=True)),
                ('rca_tmstp', models.DateTimeField(db_column='RCA_TMSTP')),
            ],
        ),
    ]
