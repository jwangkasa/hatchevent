from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.ContactListCreateView.as_view(), name='contact-list-create'),
    path('contacts/<int:pk>/', views.ContactDetailView.as_view(), name='contact-detail'),
    path('current-user/', views.current_user, name='current-user'),
]