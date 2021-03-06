### 无法克隆，提示SSL错误 - 2017.01.24
git config --global http.sslVerify false

### 设置代理 - 2017.02.29
git config --global http.proxy "127.0.0.1:8087"

### git 本地分支的新建与合并 - 2017.03.24
>$ git checkout -b iss53 (git branch 分支名)    // 创建自己的分支(比如开发一个新的功能)
$ git commit -a -m 'added a new footer [issue 53]' // 提交到本地仓库

>// 紧急修补流程 (紧急修复前需commit自己的分支，保持仓库干净，或用git stash临时保存内容)
$ git checkout master        // 检出(切换到)master分支
$ git checkout -b hotfix     // 创建修复分支
$ git commit -a -m 'fixed the broken email address'  // 提交修复的内容
$ git checkout master        // 重新检出master分支
$ git merge hotfix           // 合并分支
$ git branch -d hotfix       // 删除修改的那个分支

>// 继续新功能开发
$ git checkout iss53         // 继续之前的新功能开发
$ git commit -a -m "issue 53 completed"         // 提交新功能
$ git checkout master        // 新功能开发完成并测试通过，重新回到master分支
$ git merge iss53            // 合并新功能到master分支
$ git branch -d iss53        // 删除分支

>$ git push origin            // 最后提交到运程服务器上

### 版本号 - 2017.04.10
1.0.1  第1位：大版本升级，第2位：新功能添加，第3位：BUG修复

### 查看 git global config - 2017.04.15
$ git config --list

### 图文详解如何利用Git+Github进行团队协作开发 - 2017.04.23
[http://www.tuicool.com/articles/Bb2aiau](http://www.tuicool.com/articles/Bb2aiau)

### 删除运程分支 - 2017.05.10
$ git push origin :oauth

### 在本地清除运程没有的分支 - 2017.05.18
$ git remote prune origin

### error: pathspec 'origin/test' did not match any file(s) known to git. - 2017.06.11
解决方法：
1、执行命令git fetch取回所有分支的更新

2、执行git branch -a可以看到test分支（已经更新分支信息）

3、切换分支git checkout test


### git add忽略某些文件的方法 - 2017.06.14
命令：git update-index --assume-unchanged FILENAME       路径+文件名
若以后不想忽略该文件的修改，则输入命令：git update-index --no-assume-unchanged FILENAME

### 推送本地文件到运程仓库 - 2017.09.23
Git 全局设置:
git config --global user.name "wangyj"
git config --global user.email "zjut_wyj@163.com"

创建 git 仓库:
$ mkdir spring-data-jpa
$ cd spring-data-jpa
$ git init
$ touch README.md
$ git add README.md
$ git commit -m "first commit"
$ git remote add origin https://gitee.com/zjutwyj/spring-data-jpa.git
$ git push -u origin master

已有项目?
$ cd existing_git_repo
$ git remote add origin https://gitee.com/zjutwyj/spring-data-jpa.git
$ git push -u origin master

###  执行git reset --hard时报Unable to create 'C:/software/WorkProjects/Pc/.git/index.lock': File exists.错误 - 2017.10.17

$ rm -f ./.git/index.lock

