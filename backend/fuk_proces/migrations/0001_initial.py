# Generated by Django 3.2.10 on 2022-11-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FukProces',
            fields=[
                ('prcs_id', models.BigAutoField(db_column='PRCS_ID', primary_key=True, serialize=False)),
                ('prcs_sifra', models.CharField(db_column='PRCS_Sifra', max_length=20)),
                ('prcs_naziv', models.CharField(db_column='PRCS_Naziv', max_length=200)),
                ('prcs_verzija', models.CharField(db_column='PRCS_Verzija', max_length=200)),
                ('prcs_iverzija', models.IntegerField(blank=True, db_column='PRCS_IVerzija', null=True)),
                ('prcs_rukoj', models.CharField(blank=True, db_column='PRCS_RukOJ', max_length=200, null=True)),
                ('prcs_nosilac', models.CharField(blank=True, db_column='PRCS_Nosilac', max_length=200, null=True)),
                ('prcs_cilj', models.CharField(blank=True, db_column='PRCS_Cilj', max_length=500, null=True)),
                ('prcs_kropulaz', models.CharField(blank=True, db_column='PRCS_KrOpUlaz', max_length=2048, null=True)),
                ('prcs_kropakt', models.CharField(blank=True, db_column='PRCS_KrOpAkt', max_length=4096, null=True)),
                ('prcs_kroprez', models.CharField(blank=True, db_column='PRCS_KrOpRez', max_length=2048, null=True)),
                ('prcs_resursi', models.CharField(blank=True, db_column='PRCS_Resursi', max_length=500, null=True)),
                ('rca_aktivan', models.IntegerField(blank=True, db_column='RCA_Aktivan', null=True)),
                ('rca_aktivanod', models.DateTimeField(blank=True, db_column='RCA_aktivanOD', null=True)),
                ('rca_aktivando', models.DateTimeField(blank=True, db_column='RCA_aktivanDO', null=True)),
                ('rca_brojreaktivacija', models.IntegerField(blank=True, db_column='RCA_BrojReaktivacija', null=True)),
                ('rca_sts', models.IntegerField(blank=True, db_column='RCA_STS', null=True)),
                ('rca_tmstp', models.DateTimeField(db_column='RCA_TMSTP')),
            ],
            options={
                'db_table': 'fuk_proces',
                'managed': False,
            },
        ),
    ]
