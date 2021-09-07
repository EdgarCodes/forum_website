# Generated by Django 3.2.6 on 2021-09-06 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('1', 'male'), ('2', 'female')], default='1', max_length=7),
        ),
        migrations.AddField(
            model_name='user',
            name='title',
            field=models.CharField(choices=[('1', 'user'), ('2', 'admin')], default='1', max_length=10),
        ),
    ]
