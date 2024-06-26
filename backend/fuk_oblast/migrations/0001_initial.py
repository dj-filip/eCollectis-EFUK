# Generated by Django 3.2.10 on 2022-11-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FukOblast',
            fields=[
                ('obl_id', models.BigAutoField(db_column='OBL_ID', primary_key=True, serialize=False)),
                ('obl_sifra', models.CharField(db_column='OBL_Sifra', max_length=20)),
                ('obl_naziv', models.CharField(db_column='OBL_Naziv', max_length=200)),
                ('obl_nivo', models.IntegerField(blank=True, db_column='OBL_Nivo', null=True)),
                ('obl_nadredjenaid', models.BigIntegerField(blank=True, db_column='OBL_NadredjenaID', null=True)),
                ('obl_rukovodilac', models.BigIntegerField(blank=True, db_column='OBL_Rukovodilac', null=True)),
                ('rca_aktivan', models.IntegerField(blank=True, db_column='RCA_Aktivan', null=True)),
                ('rca_aktivanod', models.DateTimeField(blank=True, db_column='RCA_aktivanOD', null=True)),
                ('rca_aktivando', models.DateTimeField(blank=True, db_column='RCA_aktivanDO', null=True)),
                ('rca_brojreaktivacija', models.IntegerField(blank=True, db_column='RCA_BrojReaktivacija', null=True)),
                ('rca_sts', models.IntegerField(blank=True, db_column='RCA_STS', null=True)),
                ('rca_tmstp', models.DateTimeField(db_column='RCA_TMSTP')),
            ],
            options={
                'db_table': 'fuk_oblast',
                'managed': False,
            },
        ),
    ]
