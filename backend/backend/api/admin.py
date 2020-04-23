from django.contrib import admin

from .models import User, Manager, Books, Card

admin.site.register(User)
admin.site.register(Manager)
admin.site.register(Books)
admin.site.register(Card)
