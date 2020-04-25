from rest_framework.permissions import IsAuthenticated

from .models import Category, Books, User

from .serializers import CategoriesListSerializer, BooksListSerializer, UserSerializer
from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
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


@permission_classes([IsAuthenticated])
class newBooksList(APIView):
    def get(self, request):
        books_list = Books.objects.get_new_books()
        serializer = BooksListSerializer(books_list, many=True)
        return Response(serializer.data)


class newUsers(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request):
        user_list = User.objects.all()
        serializer = UserSerializer(user_list, many=True)
        return Response(serializer.data)
