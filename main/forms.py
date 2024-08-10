from django import forms
from django.forms import widgets
from .models import Question

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['name', 'email', 'question']
        
        widgets = {
            'name':forms.TextInput(attrs={
                'class':'bottom__inputs',
                'placeholder':'Name',
                'li':None,
                'label':'',
                'background-color':'white',
            }),
            'email':forms.TextInput(attrs={
                'class':'bottom__inputs',
                'placeholder':'Email',
                'li':None,
                'label':'',
                'background-color':'white',
            }),
            'question':forms.Textarea(attrs={
                'class':'bottom__input',
                'placeholder':'Message',
                'li':None,
                'label':'',
                'background-color':'white',
            })
        }