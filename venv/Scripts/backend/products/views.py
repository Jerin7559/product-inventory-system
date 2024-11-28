from rest_framework import viewsets
from .models import Product, Variant, SubVariant
from .serializers import ProductSerializer, VariantSerializer, SubVariantSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class VariantViewSet(viewsets.ModelViewSet):
    queryset = Variant.objects.all()
    serializer_class = VariantSerializer

class SubVariantViewSet(viewsets.ModelViewSet):
    queryset = SubVariant.objects.all()
    serializer_class = SubVariantSerializer


# Create your views here.
