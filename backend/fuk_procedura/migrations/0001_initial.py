# Generated by Django 3.2.10 on 2022-11-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FukProcedura',
            fields=[
                ('proc_id', models.BigAutoField(db_column='PROC_ID', primary_key=True, serialize=False)),
                ('proc_sifra', models.CharField(blank=True, db_column='PROC_Sifra', max_length=20, null=True)),
                ('proc_naziv', models.CharField(blank=True, db_column='PROC_Naziv', max_length=200, null=True)),
                ('proc_verzija', models.CharField(blank=True, db_column='PROC_Verzija', max_length=200, null=True)),
                ('proc_iverzija', models.IntegerField(blank=True, db_column='PROC_IVerzija', null=True)),
                ('proc_rukoj', models.CharField(blank=True, db_column='PROC_RukOJ', max_length=200, null=True)),
                ('proc_nosilac', models.CharField(blank=True, db_column='PROC_Nosilac', max_length=200, null=True)),
                ('proc_nazivprcs', models.CharField(blank=True, db_column='PROC_NazivPRCS', max_length=200, null=True)),
                ('proc_cilj', models.CharField(blank=True, db_column='PROC_Cilj', max_length=500, null=True)),
                ('proc_podrucjep', models.CharField(blank=True, db_column='PROC_PodrucjeP', max_length=2048, null=True)),
                ('proc_odok', models.CharField(blank=True, db_column='PROC_ODok', max_length=2048, null=True)),
                ('proc_odgv', models.CharField(blank=True, db_column='PROC_ODGV', max_length=2048, null=True)),
                ('proc_zakon', models.CharField(blank=True, db_column='PROC_Zakon', max_length=2048, null=True)),
                ('proc_termin', models.CharField(blank=True, db_column='PROC_Termin', max_length=4096, null=True)),
                ('rca_aktivan', models.IntegerField(blank=True, db_column='RCA_Aktivan', null=True)),
                ('rca_aktivanod', models.DateTimeField(blank=True, db_column='RCA_aktivanOD', null=True)),
                ('rca_aktivando', models.DateTimeField(blank=True, db_column='RCA_aktivanDO', null=True)),
                ('rca_brojreaktivacija', models.IntegerField(blank=True, db_column='RCA_BrojReaktivacija', null=True)),
                ('rca_sts', models.IntegerField(blank=True, db_column='RCA_STS', null=True)),
                ('rca_tmstp', models.DateTimeField(db_column='RCA_TMSTP')),
            ],
            options={
                'db_table': 'fuk_procedura',
                'managed': False,
            },
        ),
    ]
