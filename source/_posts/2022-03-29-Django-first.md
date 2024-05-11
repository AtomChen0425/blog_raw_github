---
title: Django(1)
date: 2022-03-29 17:05:39
tags: ['Python','Study','DJango','后端']
categories: ['Document']
index_img: https://www.runoob.com/wp-content/uploads/2015/01/django.jpg
cover: https://www.runoob.com/wp-content/uploads/2015/01/django.jpg
extract: Django 的一些模板标签
description: Django 的一些模板标签
---

## 过滤器

在HTML中按照如下格式写入则可实现前端对后端传来的数据进行简单处理的功能。
`{{ 变量名 | 过滤器：可选参数 }}`
+ 过滤的数据可以进行套接
  如`{{ my_list|first|upper }}`先提取第一个，然后再转为大写
### 最大化最小化
`{{ name|lower }}`或者`{{name|upper}}`
### 提取前几个词
`{{name|truncatewords:"10"}}`提取变量name的前10个词 参数要用双引号括起来
### 添加反斜杠
`{{name|addslashes}}`添加反斜杠`\`

### 如果获取的值是控制或者false则显示默认值
`{{ name|default:"这个是默认值" }}` 如果前端接收到后端的数据为 `0  0.0  False  0j  ""  []  ()  set()  {}  None`这些则显示default里面的值

### 返回数值的长度
`{{ name|length}}`

### 将数值转为容易读取的文件大小格式
`{{ num|filesizeformat}}`如1024 则显示1.0kb

### 将时间数据格式化
`{{ time|date:"Y-m-d" }}` 传到前端的时间数据将显示为年月日格式

### 将多余的字符数据用省略号代替
`{{ views_str|truncatechars:2}}`只显示views_str 中的两个字符，其余的用`...`代替

### 告诉前端穿过来的链接是安全的不用进行转义
`{{ views_str|safe }}` 例如传过来的是一个带有url的html片段，就可以直接点击

## if/else 标签，对传到前端的数据进行判断
基本格式为
```django
{% if condition %}
     ... display
{% endif %}
```
或者
```django
{% if condition1 %}
   ... display 1
{% elif condition2 %}
   ... display 2
{% else %}
   ... display 3
{% endif %}
```
如
```django
{%if num >90 and num <=100 %}
优秀
{% elif num >60 and num <=90 %}
合格
{% else %}
不及格
{% endif %}
```
这样当后端传来分数时可以自动判断显示哪一段数据

## for 标签
作用就是循环遍历，系统会渲染`{% for %}` 和 `{% endfor %}`之间的内容
例如
```django
content为range(20)
{% for i in content %}
<p>{{ i }}</p>
{% endfor %}
```
显示
![image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220329/image.5pe654t68eg0.webp)

for后面加上 reversed 则反向迭代
```django
content为range(20)
{% for i in content reversed%}
<p>{{ i }}</p>
{% endfor %}
```
### 特殊的
```django
{% for i in content %}
    {{ forloop.counter }}  #顺序获取循环序号，从 1 开始计算
    {{ forloop.counter0 }} #顺序获取循环序号，从 0 开始计算
    {{ forloop.revcounter }} #倒序获取循环序号，结尾序号为 1
    {{ forloop.revcounter0 }} #倒序获取循环序号，结尾序号为 0
    {{ forloop.first }} 第一条数据返回 True，其他数据返回 False
    {{ forloop.last }} #最后一条数据返回 True，其他数据返回 False
{% endfor %}
```
分别显示
![image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220329/image.3kvxoesnn9s0.webp)

`{% empty %}`如果循环为空则显示给标签下的内容
```django
{% for i in listvar %}
    {{ forloop.counter0 }}
{% empty %}
    空空如也～
{% endfor %}
```

## ifequal/ifnotequal 标签
**作用：**
`{% ifequal %}` 标签比较两个值，当他们相等时，显示在 `{% ifequal %}` 和` {% endifequal %}` 之中所有的值。
```django
{% ifequal section 'sitenews' %}
    <h1>Site News</h1>
{% else %}
    <h1>No News Here</h1>
{% endifequal %}
```

## csrf_token (暂时还不清楚要怎么用先记录下来)
csrf_token 用于form表单中，作用是跨站请求伪造保护。

如果不用`｛% csrf_token %｝`标签，在用 form 表单时，要再次跳转页面会报403权限错误。

用了`｛% csrf_token %｝`标签，在 form 表单提交数据时，才会成功。

## 自定义标签和过滤器
1. 在应用目录下创建 templatetags 目录(与 templates 目录同级，目录名只能是 templatetags)。

```cmd
HelloWorld/
|-- HelloWorld
|   |-- __init__.py
|   |-- __init__.pyc
|   |-- settings.py
...
|-- manage.py
`-- templatetags
`-- templates
```
2. 在 templatetags 目录下创建任意 py 文件，如：test_tags.py
3. test_tags.py 文件代码如下：
```python
from django import template
register = template.Library()   #register的名字是固定的,不可改变
```
4. 修改 settings.py 文件的 TEMPLATES 选项配置，添加 libraries 配置：
![image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220329/image.cprwwhy4qw0.webp)
5. 利用装饰器 @register.filter 在test_tags.py 文件中自定义过滤器。
```python
@register.filter
def multiply(v1, v2):
    return v1 * v2
```
6. 利用装饰器 @register.simple_tag 自定义标签。
```python
@register.simple_tag
def test_tag(v1, v2, v3):
    return v1 * v2 * v3
```
7. 在使用自定义标签和过滤器前，要在 html 文件 body 的最上方中导入该 tag 文件,名字为 `libraries`中申明的变量名，不是文件的名字。
```django
{% load my_tags %}
```
8. 然后在HTML中使用自定义的过滤器
   `{{100|multiply:3}}`则显示300
9. 在HTML中使用自定义的标签
   `{% test_tags 11 11 11 %}`则显示33
10. 语义化标签
    首先在tag的文件中导入
    `from django.utils.safestring import mark_safe`

定义标签时，用上 mark_safe 方法，令标签语义化。
```python
@register.simple_tag
def my_html(v1, v2):
    temp_html = "<input type='text' id='%s' class='%s' />" %(v1, v2)
    return mark_safe(temp_html)
```
然后在HTML中使用这个标签`{% my_html "idid" "class_class" %}`得到
![image](https://cdn.jsdelivr.net/gh/waterkingest/image_bed@master/20220329/image.u5ababmwcz4.webp)

## 配置静态文件
1. 在项目根目录下创建 statics 目录。
```cmd
    HelloWorld/
    |-- HelloWorld
    |   |-- __init__.py
    |   |-- __init__.pyc
    |   |-- settings.py
    ...
    |-- manage.py
    `-- templatetags
    `-- templates
    |-- statics
        |--js
        |--css
        |--images
        |--plugins
```
2. 在 settings 文件的最下方配置添加以下配置：
   ```
    STATIC_URL = '/static/' # 别名 
    STATICFILES_DIRS = [ 
        os.path.join(BASE_DIR, "statics"), 
    ]
    ```
3. 在 statics 目录下创建 css 目录，js 目录，images 目录，plugins 目录， 分别放 css文件，js文件，图片，插件。
4. 把 bootstrap(一个前端的模板) 框架放入插件目录 plugins。
5. 在 HTML 文件的 head 标签中引入 bootstrap。
**此时引用路径中的要用配置文件中的别名 static，而不是目录 statics。**
`<link rel="stylesheet" href="/static/plugins/bootstrap-3.3.7/dist/css/bootstrap.css">`