from django.shortcuts import render

from .forms import LeaveForm


def base(request):
    return render(request, 'base.html')


def base_ext(request):
    return render(request, 'base_ext.html')


def form(request):
    ctx = {
        'form': LeaveForm()
    }
    return render(request, 'form.html', ctx)
