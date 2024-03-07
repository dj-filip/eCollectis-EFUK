# Generated by Django 3.2.10 on 2022-11-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FukNepravilnosti',
            fields=[
                ('nprv_id', models.BigAutoField(db_column='NPRV_ID', primary_key=True, serialize=False)),
                ('nprv_rbr', models.IntegerField(blank=True, db_column='NPRV_RBR', null=True)),
                ('prcs_sifra', models.CharField(db_column='PRCS_Sifra', max_length=20)),
                ('prcs_naziv', models.CharField(db_column='PRCS_Naziv', max_length=200)),
                ('nprv_nosilac', models.CharField(blank=True, db_column='NPRV_Nosilac', max_length=200, null=True)),
                ('nprv_datum', models.DateTimeField(blank=True, db_column='NPRV_Datum', null=True)),
                ('nprv_mesto', models.CharField(blank=True, db_column='NPRV_Mesto', max_length=200, null=True)),
                ('nprv_kropis', models.CharField(blank=True, db_column='NPRV_KrOpis', max_length=2048, null=True)),
                ('nprv_dokazi', models.CharField(blank=True, db_column='NPRV_Dokazi', max_length=2048, null=True)),
                ('nprv_uocio', models.CharField(blank=True, db_column='NPRV_Uocio', max_length=200, null=True)),
                ('nprv_odlukadoneta', models.IntegerField(blank=True, db_column='NPRV_OdlukaDoneta', null=True)),
                ('nprv_odlukadatum', models.DateTimeField(blank=True, db_column='NPRV_OdlukaDatum', null=True)),
                ('nprv_obavestenjeposlato', models.IntegerField(blank=True, db_column='NPRV_ObavestenjePoslato', null=True)),
                ('nprv_obavestenjedatum', models.DateTimeField(blank=True, db_column='NPRV_ObavestenjeDatum', null=True)),
                ('nprv_obavestvnposlato', models.IntegerField(blank=True, db_column='NPRV_ObavestVNPoslato', null=True)),
                ('nprv_obavestvndatum', models.DateTimeField(blank=True, db_column='NPRV_ObavestVNDatum', null=True)),
                ('nprv_utvrdjena', models.IntegerField(blank=True, db_column='NPRV_Utvrdjena', null=True)),
                ('nprv_vrsta', models.CharField(blank=True, db_column='NPRV_Vrsta', max_length=2048, null=True)),
                ('nprv_aktivnosti', models.CharField(blank=True, db_column='NPRV_Aktivnosti', max_length=2048, null=True)),
                ('nprv_mera', models.CharField(blank=True, db_column='NPRV_Mera', max_length=2048, null=True)),
                ('nprv_rok', models.DateTimeField(blank=True, db_column='NPRV_Rok', null=True)),
                ('nprv_meradokazi', models.CharField(blank=True, db_column='NPRV_MeraDokazi', max_length=2048, null=True)),
                ('nprv_obavestenjevrposlato', models.IntegerField(blank=True, db_column='NPRV_ObavestenjeVRPoslato', null=True)),
                ('nprv_obavestenjevrdatum', models.DateTimeField(blank=True, db_column='NPRV_ObavestenjeVRDatum', null=True)),
                ('nprv_infovnprimljen', models.IntegerField(blank=True, db_column='NPRV_InfoVNPrimljen', null=True)),
                ('nprv_infovndatumprijema', models.DateTimeField(blank=True, db_column='NPRV_InfoVNDatumPrijema', null=True)),
                ('rca_aktivan', models.IntegerField(blank=True, db_column='RCA_Aktivan', null=True)),
                ('rca_aktivanod', models.DateTimeField(blank=True, db_column='RCA_aktivanOD', null=True)),
                ('rca_aktivando', models.DateTimeField(blank=True, db_column='RCA_aktivanDO', null=True)),
                ('rca_brojreaktivacija', models.IntegerField(blank=True, db_column='RCA_BrojReaktivacija', null=True)),
                ('rca_sts', models.IntegerField(blank=True, db_column='RCA_STS', null=True)),
                ('rca_tmstp', models.DateTimeField(db_column='RCA_TMSTP')),
            ],
            options={
                'db_table': 'fuk_nepravilnosti',
                'managed': False,
            },
        ),
    ]
