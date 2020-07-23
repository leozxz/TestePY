from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def html(request):
    return render(request, 'index.html')
def edit(request):
    return render(request, 'templates/edit.html')
def cad(request):
    return render(request, 'templates/cad.html')