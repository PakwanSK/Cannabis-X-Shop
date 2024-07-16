from django.shortcuts import render
from .models import AB
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def SumAB(request):
    if request.query_params:
        a = request.query_params['a']
        b = request.query_params['b']
        result = int(a)+int(b)
    else:
        result = 'include a b'

    return Response({
        'a' : int(a),
        'b' : int(b),
        'result' : result})
    