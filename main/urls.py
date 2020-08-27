from django.urls import path, include
from rest_framework.schemas import get_schema_view
from rest_framework import routers

from . import views
from .views import ContactHandlerView, ContactView

router = routers.DefaultRouter()
router.register('contacts', views.ContactView, basename='contacts')

urlpatterns = [
    path('', views.index, name='index'),
    path('view', ContactHandlerView.as_view()),
    path('', include(router.urls))
]
