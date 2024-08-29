from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    role = models.CharField(max_length=50, blank=True, null=True)  # 用户角色字段
    is_super_admin = models.BooleanField(default=False)  # 是否是超级管理员
    is_student = models.BooleanField(default=True)  # 是否是学生
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # 电话号码字段

    def __str__(self):
        return self.username
