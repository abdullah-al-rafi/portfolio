from django.contrib import admin
from .models import Contact

# Register your models here.


class ContactAdmin(admin.ModelAdmin):
    list_display = ('email', 'body', 'time_now',)
    list_filter = ('time_now',)
    search_fields = ['email']


admin.site.register(Contact, ContactAdmin)
