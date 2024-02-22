from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

# Register your models here.

class CustomUserAdmin(UserAdmin):
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm
    model = CustomUser
    list_display = ("email", "is_admin", "is_active",)
    list_filter = ("email", "is_admin", "is_active",)
    fieldsets = (
        (None, {"fields": ("email", "date_of_birth", "password")}),
        ("Permissions", {"fields": ("is_admin", "is_active", "groups", "user_permissions")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "date_of_birth", "password1", "password2", "is_staff",
                "is_active", "groups", "user_permissions"
            )}
        ),
    )
    search_fields = ("email",)
    ordering = ("email",)
    filter_horizontal = []


admin.site.register(CustomUser, CustomUserAdmin)
