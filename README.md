```perl
crm_project/
│
├── crm_project/                # 项目配置目录
│   ├── __init__.py
│   ├── settings.py             # 全局项目设置
│   ├── urls.py                 # 全局URL配置
│   ├── wsgi.py                 # WSGI入口
│   └── asgi.py                 # ASGI入口
│
├── accounts/                   # 用户管理应用
│   ├── __init__.py
│   ├── admin.py                # 管理后台设置
│   ├── apps.py                 # 应用配置
│   ├── models.py               # 数据库模型
│   ├── serializers.py          # 序列化器
│   ├── views.py                # 视图处理
│   ├── urls.py                 # URL路由
│   ├── permissions.py          # 权限设置
│   ├── tests.py                # 单元测试
│   └── migrations/             # 数据库迁移文件
│
├── courses/                    # 课程管理应用
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── permissions.py
│   ├── tests.py
│   └── migrations/
│
├── clients/                    # 客户管理应用
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── permissions.py
│   ├── tests.py
│   └── migrations/
│
├── students/                   # 学员管理应用
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── permissions.py
│   ├── tests.py
│   └── migrations/
│
├── system/                     # 系统管理应用
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   ├── permissions.py
│   ├── tests.py
│   └── migrations/
│
└── manage.py                   # Django管理脚本

```