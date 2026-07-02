from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Todo
from .serializers import TodoSerializer


# Get todo data - 
@api_view(['GET'])
@permission_classes([AllowAny])
def get_todos(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Create todo data - 
@api_view(['POST'])
@permission_classes([AllowAny])
def create_todo(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete todo data - 
@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    todo.delete()
    return Response({'message': 'Task deleted successfully'}, status=status.HTTP_200_OK)

# Update todo data - 
@api_view(['PUT', 'PATCH'])
@permission_classes([AllowAny])
def update_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    if request.method == 'PUT':
        serializer = TodoSerializer(todo, data=request.data)
    else:
        serializer = TodoSerializer(todo, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# Update todo toggle data - 
@api_view(['PATCH'])
@permission_classes([AllowAny])
def toggle_todo(request, pk):
    todo = get_object_or_404(Todo, pk=pk)
    todo.completed = not todo.completed
    todo.save()
    return Response(status=status.HTTP_202_ACCEPTED)

