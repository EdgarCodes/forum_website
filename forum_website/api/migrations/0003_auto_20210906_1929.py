# Generated by Django 3.2.6 on 2021-09-06 19:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210906_1928'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('1', 'male'), ('2', 'female')], default='male', max_length=7),
        ),
        migrations.AlterField(
            model_name='user',
            name='title',
            field=models.CharField(choices=[('1', 'user'), ('2', 'admin')], default='poopmin', max_length=10),
        ),
    ]
