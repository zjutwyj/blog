### 无法克隆，提示SSL错误
git config --global http.sslVerify false

### 设置代理
git config --global http.proxy "127.0.0.1:8087"

### git 本地分支的新建与合并
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

### 版本号
1.0.1  第1位：大版本升级，第2位：新功能添加，第3位：BUG修复

### 查看 git global config
$ git config --list

### 图文详解如何利用Git+Github进行团队协作开发
[http://www.tuicool.com/articles/Bb2aiau](http://www.tuicool.com/articles/Bb2aiau)

### 删除运程分支
$ git push origin :oauth

### 在本地清除运程没有的分支
$ git remote prune origin

### error: pathspec 'origin/test' did not match any file(s) known to git.
解决方法：
1、执行命令git fetch取回所有分支的更新

2、执行git branch -a可以看到test分支（已经更新分支信息）

3、切换分支git checkout test


### git add忽略某些文件的方法
命令：Git update-index --assume-unchanged FILENAME       路径+文件名
若以后不想忽略该文件的修改，则输入命令：git update-index --no-assume-unchanged FILENAME
