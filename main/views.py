from django.shortcuts import render, redirect
from .forms import QuestionForm


def index(request):
    return render(request, 'main/index.html')

def about(request):
    return render(request, 'main/about.html')

def ask_question(request):
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = QuestionForm()
    return render(request, 'main/contacts.html', {'form': form})

def success(request):
    return render(request, 'main/success.html')


def lessons(request):
    return render(request, 'main/lessons.html')