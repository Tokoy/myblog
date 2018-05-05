from django.contrib import admin
from myblog import models
# Register your models here.

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title','name','pub_date','update_time',)

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('content','name','pub_date')
	
	
admin.site.register(models.Article)
admin.site.register(models.Comment)