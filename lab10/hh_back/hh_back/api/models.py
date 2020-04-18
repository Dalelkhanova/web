from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    city = models.CharField(max_length=300)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'address': self.address,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default=' ')
    salary = models.FloatField()
    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='vacancies', null=True)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id: ': self.id,
            'name: ': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company_id
        }
