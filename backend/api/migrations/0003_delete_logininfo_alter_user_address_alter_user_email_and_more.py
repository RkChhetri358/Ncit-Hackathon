# Generated by Django 5.2 on 2025-05-27 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_logininfo"),
    ]

    operations = [
        migrations.DeleteModel(
            name="LoginInfo",
        ),
        migrations.AlterField(
            model_name="user",
            name="address",
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(max_length=254, unique=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="phone_number",
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
