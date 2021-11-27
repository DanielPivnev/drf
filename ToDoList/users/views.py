from rest_framework.viewsets import ViewSet
from .models import User
from .serializers import UserModelSerializer


class UserModelViewSet(ViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
