# 作用域是什么？

- react mvvm setState state 状态机制
  变量  程序的变量 储存值 声明空间（闭包，作用域，变量查找，变量提升，） 
  值修改 

- 赋值过程
    var a = 2; 它是怎么运行的?
    var 关键字 a  identifier 标识符 = 运算符 2 value literal
    1. 高级语言
        无法理解，及无法执行
    2. 

## 编译原理
    语言执行的底层
    操作系统 -> 编译原理
    引擎v8 编译器 解译器
    1. 分词/词法分析阶段
        [var, a, = , 2]
        token 语法错误
        最后成为二进制文件
    2. 语法分析阶段
        语法树
        编译器也是一段代码 运行
        HTML <div></div> DOM树
        AST Abstract Syntax Tree
    3. 代码生成
        JS 运行时编译
        Java C++ 预编译
        编译器(Compiler)
        解释器(Interpretter)(逐行解释)
        编译阶段带来了闭包的可能性
    JIT

## 作用域链
    执行上下文
    函数是一等对象
    每个函数执行时，会先在自己创建的AO对象上找对应的属性值。
    AO函数的管理
    若找不到则在父函数AO上找
    再找不到， 再上一层的AO 直到window
    AO链 就是JavaScript中的作用域链

    编译阶段  AO生成
    类比于prototype 原型链
    AO上如果有与函数同名的属性，则会被此函数覆盖

## LHS && RHS (Left/Right Hand Search)
    - LHS和RHS 都是出现在引擎对变量进行查询的时候
    - LHS 变量赋值或写入内存(将文本文件保存到硬盘中)
    - RHS 变量查找或从内容中读取 想象为从硬盘打开文本文件

   特性：都会在所有作用域中查询
         严格模式下，找不到所需的变量，引擎会ReferenceError异常
         非严格模式下，LHS会自动创建一个全局变量
         查询成功后，如果对变量的进行不合理的操作 TypeError

## 预编译
1. 变量未经声明直接赋值，变量属于全局. a = 1 ---> window.a = 1
2. 变量声明在赋值也归全局所有。 var a = 1 ----> window.a = 1

## 预编译四步曲
1. 创建AO对象 Activation Object
2. 找形参和变量声明，将变量和形参名作为AO属性名，值为undefined
3. 将实参值和形参统一
4. 在函数体里面找函数声明，值赋予函数体