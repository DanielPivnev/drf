from rest_framework.viewsets import ViewSet
from .models import Users
from .serializers import UserModelSerializer


class UserModelViewSet(ViewSet):
    queryset = Users.objects.all()
    serializer_class = UserModelSerializer
