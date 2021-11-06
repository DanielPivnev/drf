from rest_framework.viewsets import ViewSet
from .models import BaseUsers
from .serializers import UserModelSerializer


class UserModelViewSet(ViewSet):
    queryset = BaseUsers.objects.all()
    serializer_class = UserModelSerializer
