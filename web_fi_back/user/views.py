from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import models
from .import forms

@api_view(['POST'])
def createUser(request):
    if request.method == 'POST':
        userForm = forms.SignForm(request.POST)
        if userForm.is_valid():
            username = userForm.cleaned_data['username']
            email = userForm.cleaned_data['email']
            password = userForm.cleaned_data['password']

            userModel = models.User(
                username=username,
                email=email,
                password=password
            )

            try:
                userModel.save()
                return Response({'res': 'user saved'})
            except Exception as e:
                print(e)
                return Response({'res': e})
        else:
            return Response({'res': 'form not valid'})
    return Response({'res': 'Something went wrong'})


@api_view(['POST'])
def getUser(request):
    if request.method == 'POST':
        userForm = forms.LoginForm(request.POST)
        if userForm.is_valid():
            email = userForm.cleaned_data['email']
            password = userForm.cleaned_data['password']
            
            userModel = models.User.objects.filter(email=email, password=password).get()
            username = userModel.username
            return Response({'res': 'user found', 'username': username})
        else:
            return Response({'res': 'form not valid'})
    else:
        return Response({'res': 'something went wrong'})