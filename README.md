## online-cake（Vue 3 + Vite）

完整代码可以参考地址：  https://github.com/Masker7/online-mall-cake
最开始没有采用github的前后端分离仓库的管理方式，带来了部分的问题。目前前台代码已经迁移到此。

## 介绍 🎧

长沙大学软件工程大三上学期JavaWeb课程设计作业

- Java Web程序设计任务教程 / 黑马程序员编著. -- 2版. -- 北京 ： 人民邮电出版社，2021.9  
- 工业和信息化精品系列教材
- ISBN 978-7-115-56685-0

与书上不同的是MySQL多建了一个ShoppingCart表，各表中的详情信息查看common模块下的com.wu.common.domain包

- github：https://github.com/1262917629/online-mall-cake/tree/master/omc-common/src/main/java/com/wu/common/domain

- gitee：https://gitee.com/GiteeOfMasker/online-mall-cake/tree/master/omc-common/src/main/java/com/wu/common/domain

## 使用技术

### 后端

- 选用语言：Java
- 应用框架：Spring Boot
- 分布式服务框架：Dubbo
- 持久层框架：Mybatis
- 注册中心：Zookeeper
- 身份权限认证：Spring Security
- 缓存：Redis
- 代理：Nginx

### 前端特点：
- jwt的无感刷新认证。
- 前后台一体化的身份校验系统。
- 基于composition API 的公共组件分页器的封装。

## 目前后台服务关闭，可以参考这部分内容
### 界面

#### 主页


![image-20220222102837934](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20220222102837934.png)

![](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20220222102527836.png)

![image-20220222102546258](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20220222102546258.png)

![image-20220222102551046](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20220222102551046.png)



![image-20220222102600354](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20220222102600354.png)

![image-20220222102604971](https://gitee.com/spencer1228/blog-img-address/raw/master/img/image-20220222102604971.png)
