from django.shortcuts import render


def base(request):
    return render(request, 'base.html')


def base_ext(request):
    return render(request, 'base_ext.html')
