# Generated by Django 3.2.10 on 2022-11-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FukRiziks',
            fields=[
                ('rsks_id', models.BigAutoField(db_column='RSKS_ID', primary_key=True, serialize=False)),
                ('rsks_naziv', models.CharField(db_column='RSKS_Naziv', max_length=200)),
                ('rsks_verzija', models.CharField(db_column='RSKS_Verzija', max_length=200)),
                ('rsks_iverzija', models.IntegerField(db_column='RSKS_IVerzija')),
                ('rsks_zadlice', models.CharField(db_column='RSKS_ZadLice', max_length=500)),
                ('rsks_uticaj', models.CharField(db_column='RSKS_Uticaj', max_length=500)),
                ('rsks_verovatnoca', models.CharField(db_column='RSKS_Verovatnoca', max_length=5000)),
                ('rsks_odglice', models.CharField(db_column='RSKS_OdgLice', max_length=200)),
                ('rsks_mere', models.CharField(db_column='RSKS_Mere', max_length=500)),
                ('rsks_mehanizamt', models.CharField(db_column='RSKS_Mehanizamt', max_length=500)),
                ('rsks_korradnje', models.CharField(db_column='RSKS_KorRadnje', max_length=500)),
                ('rsks_odgliceprac', models.CharField(db_column='RSKS_OdgLicePrac', max_length=200)),
                ('rca_aktivan', models.IntegerField(blank=True, db_column='RCA_Aktivan', null=True)),
                ('rca_aktivanod', models.DateTimeField(blank=True, db_column='RCA_aktivanOD', null=True)),
                ('rca_aktivando', models.DateTimeField(blank=True, db_column='RCA_aktivanDO', null=True)),
                ('rca_brojreaktivacija', models.IntegerField(blank=True, db_column='RCA_BrojReaktivacija', null=True)),
                ('rca_sts', models.IntegerField(blank=True, db_column='RCA_STS', null=True)),
                ('rca_tmstp', models.DateTimeField(db_column='RCA_TMSTP')),
            ],
            options={
                'db_table': 'fuk_riziks',
                'managed': False,
            },
        ),
    ]
