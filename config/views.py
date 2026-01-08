from django.shortcuts import render
from content.models import Info, Turismo

def index(request):
    info = Info.objects.first()
    lugar = Turismo.objects.all()
    return render(request, 'index.html', {"info": info, "lugares": lugar})