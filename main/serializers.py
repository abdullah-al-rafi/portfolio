from rest_framework import serializers

from .models import Contact


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact

        fields = ('id', 'name', 'email', 'body', 'time_now')

        read_only_fields = ('time_now', 'id',)
