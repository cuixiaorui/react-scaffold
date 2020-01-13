# react-scaffold 
前端 react 脚手架

## 安装
```
yarn install 
// or
npm i
```

## 使用
### 本地开发
```
yarn start
```

### 构建
```
yarn build
```

### 测试

```
// 运行所有测试
yarn test

// 运行单元测试
yarn test:unit

// 运行 e2e 测试(命令行)
yarn test:e2e
// 运行 e2e 测试(GUI)
yarn cy:open 

```

## 技术栈

### 框架
1. React ( hooks )
2. [UmiJS](https://umijs.org/zh/)
3. [DvaJS](https://dvajs.com/)
4. [styled-components](https://www.styled-components.com/)


### 测试

#### e2e:
1. [cypress](https://www.cypress.io/)

#### unit test:
1. [jest](https://jestjs.io/) 
2. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

#### styles:
1. [storybook](https://storybook.js.org/)



## 开发规范


### 代码风格
使用 [eslint](https://eslint.org/) + [prettier](https://prettier.io/) 

> commit 时自动运行


### commit 

commit提交脚本

```
yarn ci
```

#### git提交信息规范

使用 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.fpepsvr2gqby)
