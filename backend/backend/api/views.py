from .models import Category, Books, Card
from .serializers import CategoriesListSerializer, BooksListSerializer, CardSerializer
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response


@api_view(['GET', 'PUT', 'DELETE'])
def category(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        serializer = CategoriesListSerializer(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategoriesListSerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})
    if request.method == 'DELETE':
        category.delete()
        return Response({'deleted': True})


class BooksListAPIView(APIView):
    def get(self, request):
        books_list = Books.objects.all()
        serializer = BooksListSerializer(books_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BooksListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'POST'])
def books(request):
    if request.method == 'GET':
        books_list = Books.objects.all()
        serializer = BooksListSerializer(books_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BooksListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def books_of_category(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        books = category.books_set.all()
        serializer = BooksListSerializer(books, many=True)
        return Response(serializer.data)


class BookDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Books.objects.all()
    serializer_class = BooksListSerializer


@api_view(['GET'])
def books_of_card(request):
    try:
        card = Card.objects.get(id=2)
    except Card.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        books = card.books.all()
        serializer = BooksListSerializer(books, many=True)
        return Response(serializer.data)



class CategoriesListAPIView(APIView):
    def get(self, request):
        categories_list = Category.objects.all()
        serializer = CategoriesListSerializer(categories_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategoriesListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class BookInCard(APIView):
    def get_object(self, id):
        try:
            return Books.objects.get(id=id)
        except Books.DoesNotExist as e:
            return Response({'error': str(e)})

    def delete(self, request, pk):
        book = self.get_object(pk)
        card = Card.objects.get(id=2)
        card.books.remove(book)
        return Response({'DELETED': True})

    def post(self, request, pk):
        cloth = self.get_object(pk)
        card = Card.objects.get(id=2)
        card.clothes.add(cloth)
        return Response({'ADDED': True})


@api_view(['GET'])
def booksByCategory(request, id):
    if request.method == 'GET':
        books_list = Books.objects.all()
        booksByCategory = []
        for books in books_list:
            if books.category.id == id:
                serializer = BooksListSerializer(books)
                booksByCategory.append(serializer.data)
        return Response(booksByCategory)



