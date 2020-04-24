from django.contrib import admin
from django.urls import path
from .views import books, books_of_category, BookDetails, category, BooksListAPIView, CategoriesListAPIView, newBooksList, newUsers
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('books', books),
    path('categories/<int:id>/books', books_of_category),
    path('books/<int:pk>', BookDetails.as_view()),
    path('categories', CategoriesListAPIView.as_view()),
    path('categories/<int:id>', category),
    path('books/new', newBooksList.as_view()),
    path('newusers/', newUsers.as_view())
]