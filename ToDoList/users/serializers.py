from rest_framework.serializers import ModelSerializer
from .models import BaseUsers


class UserModelSerializer(ModelSerializer):

    class Meta:
        model = BaseUsers
        fields = '__all__'
