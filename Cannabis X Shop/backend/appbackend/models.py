from django.db import models

# Create your models here.
class AB(models.Model):
    a = models.IntegerField()
    b = models.IntegerField()
    def result(self):
        return self.a + self.b

    def __str__(self) :
        return 'AB'