from django.contrib import admin
from django.urls import path
from .views import books, books_of_category, BookDetails, books_of_card, BookInCard
from .views import booksByCategory, category, BooksListAPIView, CategoriesListAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('books', books),
    path('categories/<int:id>/books', books_of_category),
    path('books/<int:pk>', BookDetails.as_view()),
    path('card/books', books_of_card),
    path('card/books/<int:pk>', BookInCard.as_view()),
    path('categories', CategoriesListAPIView.as_view()),
    # path('books', ClothesListAPIView.as_view()),
    path('books/<int:id>', booksByCategory),
    path('categories/<int:id>', category),
]