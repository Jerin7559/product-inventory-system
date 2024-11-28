from django.contrib import admin
from .models import Product, Variant, SubVariant

admin.site.register(Product)
admin.site.register(Variant)
admin.site.register(SubVariant)


# Register your models here.
