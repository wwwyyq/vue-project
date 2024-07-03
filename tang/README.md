# tang

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

```
tang
├─ .gitignore
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ images
│  │  │  ├─ 111.jpg
│  │  │  ├─ bg-yunc5.webp
│  │  │  ├─ bg-yunc6.webp
│  │  │  ├─ bg-yunc8.webp
│  │  │  ├─ bg.jpeg
│  │  │  ├─ box.png
│  │  │  ├─ cyan.png
│  │  │  ├─ divide.jpg
│  │  │  ├─ homepre.png
│  │  │  ├─ hua.png
│  │  │  ├─ img1.jpg
│  │  │  ├─ img11.jpg
│  │  │  ├─ img2.jpg
│  │  │  ├─ img22.jpg
│  │  │  ├─ img4 - 副本.jpg
│  │  │  ├─ img4.jpg
│  │  │  ├─ liqingzhao4.png
│  │  │  ├─ map.png
│  │  │  ├─ nav.jpg
│  │  │  ├─ navfinal.jpg
│  │  │  ├─ poet1.webp
│  │  │  ├─ poet2.webp
│  │  │  ├─ poet3.webp
│  │  │  ├─ poet4.webp
│  │  │  ├─ poet5.webp
│  │  │  ├─ poetbg5.jpg
│  │  │  ├─ poetbg7.png
│  │  │  ├─ pre.png
│  │  │  ├─ totalmap.jpg
│  │  │  ├─ 一寸金.jpg
│  │  │  ├─ 一日看尽长安花.jpg
│  │  │  ├─ 一日看尽长安花2.jpg
│  │  │  ├─ 一日看尽长安花4.jpg
│  │  │  ├─ 上三峡.png
│  │  │  ├─ 丑奴儿.png
│  │  │  ├─ 东京梦华录.jpg
│  │  │  ├─ 东京梦华录2.jpg
│  │  │  ├─ 临安春雨初霁.jpg
│  │  │  ├─ 九月九日忆山东兄弟.jpg
│  │  │  ├─ 九月九日忆山东兄弟.png
│  │  │  ├─ 云朵按钮.jpg
│  │  │  ├─ 云朵按钮4.png
│  │  │  ├─ 亭台.webp
│  │  │  ├─ 亭台楼阁1.png
│  │  │  ├─ 人人尽说江南好.jpg
│  │  │  ├─ 他乡七夕.png
│  │  │  ├─ 他乡七夕2.png
│  │  │  ├─ 他乡七夕3.png
│  │  │  ├─ 使至塞上.jpg
│  │  │  ├─ 初来长安街.jpg
│  │  │  ├─ 初来长安街王维.png
│  │  │  ├─ 劳劳亭.png
│  │  │  ├─ 千年久漂泊.png
│  │  │  ├─ 华灯.webp
│  │  │  ├─ 印章按钮.png
│  │  │  ├─ 双桥落彩虹.png
│  │  │  ├─ 唐朝1.jpg
│  │  │  ├─ 唐朝10.jpg
│  │  │  ├─ 唐朝11.jpg
│  │  │  ├─ 唐朝12.jpg
│  │  │  ├─ 唐朝2.jpg
│  │  │  ├─ 唐朝3.jpg
│  │  │  ├─ 唐朝4.jpg
│  │  │  ├─ 唐朝5.jpg
│  │  │  ├─ 唐朝6.jpg
│  │  │  ├─ 唐朝7.png
│  │  │  ├─ 唐朝8.jpg
│  │  │  ├─ 唐朝9.jpg
│  │  │  ├─ 声声慢.png
│  │  │  ├─ 夏日绝句.png
│  │  │  ├─ 夜泊牛口.png
│  │  │  ├─ 夜渡海.png
│  │  │  ├─ 天涯芳草无归路.png
│  │  │  ├─ 天街小雨润如酥.jpg
│  │  │  ├─ 太阳.png
│  │  │  ├─ 头图片1.jpg
│  │  │  ├─ 头图片2.jpg
│  │  │  ├─ 头背景.jpg
│  │  │  ├─ 头背景2.jpg
│  │  │  ├─ 如梦令.png
│  │  │  ├─ 孟浩然1.png
│  │  │  ├─ 孟浩然印章.png
│  │  │  ├─ 孤客自悲凉.jpg
│  │  │  ├─ 孤烟直.webp
│  │  │  ├─ 宋代图片.jpg
│  │  │  ├─ 宋代地图.png
│  │  │  ├─ 宋代背景.jpg
│  │  │  ├─ 宋代背景2.jpg
│  │  │  ├─ 宋代背景3.jpg
│  │  │  ├─ 宿建德江.png
│  │  │  ├─ 导航按钮图.jpg
│  │  │  ├─ 导航条.jpg
│  │  │  ├─ 导航条2.jpg
│  │  │  ├─ 导航条3.jpg
│  │  │  ├─ 导航条4.jpg
│  │  │  ├─ 小桥.webp
│  │  │  ├─ 少年报国志.png
│  │  │  ├─ 少年行.jpg
│  │  │  ├─ 少年行.png
│  │  │  ├─ 少年隐鹿门孟浩然.png
│  │  │  ├─ 山与亭.webp
│  │  │  ├─ 山川1.jpg
│  │  │  ├─ 山月1.jpg
│  │  │  ├─ 山月2.jpg
│  │  │  ├─ 山月3.jpg
│  │  │  ├─ 山月4.png
│  │  │  ├─ 山月5.png
│  │  │  ├─ 山水.png
│  │  │  ├─ 山水.webp
│  │  │  ├─ 山水2.png
│  │  │  ├─ 岁暮归南山.png
│  │  │  ├─ 峨眉山月歌.png
│  │  │  ├─ 嵩山.png
│  │  │  ├─ 庐山遥寄.png
│  │  │  ├─ 底图.png
│  │  │  ├─ 归隐嵩山.png
│  │  │  ├─ 归雁洛阳边.jpg
│  │  │  ├─ 思念.png
│  │  │  ├─ 成都海棠.jpg
│  │  │  ├─ 扬子津望京口.png
│  │  │  ├─ 指南针.png
│  │  │  ├─ 按钮1.jpg
│  │  │  ├─ 按钮1.png
│  │  │  ├─ 按钮11.png
│  │  │  ├─ 按钮44.png
│  │  │  ├─ 无人知是荔枝来.jpg
│  │  │  ├─ 无人知是荔枝来2.jpg
│  │  │  ├─ 日出江花红胜火.jpg
│  │  │  ├─ 早发白帝城.png
│  │  │  ├─ 春夜洛城闻笛.jpg
│  │  │  ├─ 春晓.png
│  │  │  ├─ 春江晚景.png
│  │  │  ├─ 晚年山中客.png
│  │  │  ├─ 望庐山瀑布.png
│  │  │  ├─ 望洞庭湖赠张丞相.png
│  │  │  ├─ 李清照.png
│  │  │  ├─ 李清照2.png
│  │  │  ├─ 李清照3.png
│  │  │  ├─ 李清照印章.png
│  │  │  ├─ 李白.png
│  │  │  ├─ 李白2.png
│  │  │  ├─ 李白中年失意.png
│  │  │  ├─ 李白介绍图.png
│  │  │  ├─ 李白介绍图2.png
│  │  │  ├─ 李白印章.png
│  │  │  ├─ 李白建模.png
│  │  │  ├─ 李白晚年避乱.png
│  │  │  ├─ 村中.jpg
│  │  │  ├─ 楼.png
│  │  │  ├─ 楼.webp
│  │  │  ├─ 楼2.webp
│  │  │  ├─ 武陵春.png
│  │  │  ├─ 水龙吟.png
│  │  │  ├─ 汉宫春.png
│  │  │  ├─ 江南春.jpg
│  │  │  ├─ 江城子.png
│  │  │  ├─ 洛阳城里春光好.jpg
│  │  │  ├─ 洛阳牡丹图.jpg
│  │  │  ├─ 渔家傲.png
│  │  │  ├─ 游金山寺.png
│  │  │  ├─ 烽火.png
│  │  │  ├─ 烽火.webp
│  │  │  ├─ 烽火2.png
│  │  │  ├─ 牡丹.webp
│  │  │  ├─ 独坐.png
│  │  │  ├─ 独坐.webp
│  │  │  ├─ 王维.png
│  │  │  ├─ 王维2.jpg
│  │  │  ├─ 王维3.jpg
│  │  │  ├─ 王维印章.png
│  │  │  ├─ 王维遭遇贬谪.png
│  │  │  ├─ 王维重回长安.png
│  │  │  ├─ 盛唐.png
│  │  │  ├─ 盛唐3.jpg
│  │  │  ├─ 盛唐4.jpg
│  │  │  ├─ 盛唐5.jpg
│  │  │  ├─ 盛唐6.jpg
│  │  │  ├─ 盛唐7.jpg
│  │  │  ├─ 盛唐8.jpg
│  │  │  ├─ 秋千.png
│  │  │  ├─ 笔-4.webp
│  │  │  ├─ 笔-圈.png
│  │  │  ├─ 笔-圈b.png
│  │  │  ├─ 腊日游孤山.png
│  │  │  ├─ 芳华.png
│  │  │  ├─ 苏轼.png
│  │  │  ├─ 苏轼1.png
│  │  │  ├─ 苏轼印章.png
│  │  │  ├─ 苏轼晚年洒脱.png
│  │  │  ├─ 菩萨蛮.png
│  │  │  ├─ 落叶满长安.jpg
│  │  │  ├─ 落日圆.webp
│  │  │  ├─ 落花时节又逢君.jpg
│  │  │  ├─ 蝴蝶.png
│  │  │  ├─ 西湖歌舞几时休.jpg
│  │  │  ├─ 诗佛王维.jpg
│  │  │  ├─ 辛弃疾.png
│  │  │  ├─ 辛弃疾印章.png
│  │  │  ├─ 辛弃疾晚年.png
│  │  │  ├─ 过故人庄.png
│  │  │  ├─ 运城印.png
│  │  │  ├─ 运城插画1.png
│  │  │  ├─ 运城插画2.png
│  │  │  ├─ 运城插画3.png
│  │  │  ├─ 运城插画4.png
│  │  │  ├─ 醉花阴.png
│  │  │  ├─ 醉落魄.png
│  │  │  ├─ 重回长安城.jpg
│  │  │  ├─ 锦缠道.jpg
│  │  │  ├─ 长安1.jpg
│  │  │  ├─ 长安2.jpg
│  │  │  ├─ 长安3.jpg
│  │  │  ├─ 长安4.jpg
│  │  │  ├─ 长安印.png
│  │  │  ├─ 长安插画1.jpg
│  │  │  ├─ 长安插画2.jpg
│  │  │  ├─ 长安插画3.jpg
│  │  │  ├─ 长安插画4.jpg
│  │  │  ├─ 陇头吟.png
│  │  │  ├─ 露花倒影.jpg
│  │  │  ├─ 青亭.png
│  │  │  ├─ 青年却闲居.jpg
│  │  │  ├─ 青年却闲居.png
│  │  │  ├─ 青年求仕.png
│  │  │  ├─ 青年赴国难.png
│  │  │  ├─ 青年赴国难2.jpg
│  │  │  ├─ 飞鹤.png
│  │  │  ├─ 饮湖上初晴后雨.jpg
│  │  │  ├─ 饮湖上初晴后雨2.jpg
│  │  │  ├─ 首页.png
│  │  │  ├─ 鹅黄小碟.jpg
│  │  │  ├─ 黄鹤楼送孟浩然之广陵.png
│  │  │  └─ 黑鸟.webp
│  │  ├─ logo.svg
│  │  ├─ main.css
│  │  ├─ writing
│  │  │  ├─ YeZiGongChangJingHongXingKai-2.ttf
│  │  │  └─ YeZiGongChangZuiHanJiangXingCao-2.ttf
│  │  ├─ 变奏的梦想 - 江上清风游.mp3
│  │  └─ 盛唐.mp4
│  ├─ components
│  │  └─ icons
│  ├─ js
│  │  ├─ esm.js
│  │  └─ SplitText3.min.js
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ views
│     ├─ changan.vue
│     ├─ chengdu.vue
│     ├─ gucheng.vue
│     ├─ home-pre.vue
│     ├─ home.vue
│     ├─ jiangnan.vue
│     ├─ kaifeng.vue
│     ├─ libai1.vue
│     ├─ libai2.vue
│     ├─ linan.vue
│     ├─ liqingzhao1.vue
│     ├─ liqingzhao2.vue
│     ├─ luoyang.vue
│     ├─ menghaoran1.vue
│     ├─ menghaoran2.vue
│     ├─ roll.vue
│     ├─ skystar.js
│     ├─ skystar.vue
│     ├─ sushi1.vue
│     ├─ sushi2.vue
│     ├─ wangwei1.vue
│     ├─ wangwei2.vue
│     ├─ xinqiji1.vue
│     └─ xinqiji2.vue
└─ vite.config.js

```
```
tang
├─ .gitignore
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ images
│  │  │  ├─ 111.jpg
│  │  │  ├─ bg-yunc5.webp
│  │  │  ├─ bg-yunc6.webp
│  │  │  ├─ bg-yunc8.webp
│  │  │  ├─ bg.jpeg
│  │  │  ├─ box.png
│  │  │  ├─ cyan.png
│  │  │  ├─ divide.jpg
│  │  │  ├─ homepre.png
│  │  │  ├─ hua.png
│  │  │  ├─ img1.jpg
│  │  │  ├─ img11.jpg
│  │  │  ├─ img2.jpg
│  │  │  ├─ img22.jpg
│  │  │  ├─ img4 - 副本.jpg
│  │  │  ├─ img4.jpg
│  │  │  ├─ liqingzhao4.png
│  │  │  ├─ map.png
│  │  │  ├─ nav.jpg
│  │  │  ├─ navfinal.jpg
│  │  │  ├─ poet1.webp
│  │  │  ├─ poet2.webp
│  │  │  ├─ poet3.webp
│  │  │  ├─ poet4.webp
│  │  │  ├─ poet5.webp
│  │  │  ├─ poetbg5.jpg
│  │  │  ├─ poetbg7.png
│  │  │  ├─ pre.png
│  │  │  ├─ totalmap.jpg
│  │  │  ├─ 一寸金.jpg
│  │  │  ├─ 一日看尽长安花.jpg
│  │  │  ├─ 一日看尽长安花2.jpg
│  │  │  ├─ 一日看尽长安花4.jpg
│  │  │  ├─ 上三峡.png
│  │  │  ├─ 丑奴儿.png
│  │  │  ├─ 东京梦华录.jpg
│  │  │  ├─ 东京梦华录2.jpg
│  │  │  ├─ 临安春雨初霁.jpg
│  │  │  ├─ 九月九日忆山东兄弟.jpg
│  │  │  ├─ 九月九日忆山东兄弟.png
│  │  │  ├─ 云朵按钮.jpg
│  │  │  ├─ 云朵按钮4.png
│  │  │  ├─ 亭台.webp
│  │  │  ├─ 亭台楼阁1.png
│  │  │  ├─ 人人尽说江南好.jpg
│  │  │  ├─ 他乡七夕.png
│  │  │  ├─ 他乡七夕2.png
│  │  │  ├─ 他乡七夕3.png
│  │  │  ├─ 使至塞上.jpg
│  │  │  ├─ 初来长安街.jpg
│  │  │  ├─ 初来长安街王维.png
│  │  │  ├─ 劳劳亭.png
│  │  │  ├─ 千年久漂泊.png
│  │  │  ├─ 华灯.webp
│  │  │  ├─ 印章按钮.png
│  │  │  ├─ 双桥落彩虹.png
│  │  │  ├─ 唐朝1.jpg
│  │  │  ├─ 唐朝10.jpg
│  │  │  ├─ 唐朝11.jpg
│  │  │  ├─ 唐朝12.jpg
│  │  │  ├─ 唐朝2.jpg
│  │  │  ├─ 唐朝3.jpg
│  │  │  ├─ 唐朝4.jpg
│  │  │  ├─ 唐朝5.jpg
│  │  │  ├─ 唐朝6.jpg
│  │  │  ├─ 唐朝7.png
│  │  │  ├─ 唐朝8.jpg
│  │  │  ├─ 唐朝9.jpg
│  │  │  ├─ 声声慢.png
│  │  │  ├─ 夏日绝句.png
│  │  │  ├─ 夜泊牛口.png
│  │  │  ├─ 夜渡海.png
│  │  │  ├─ 天涯芳草无归路.png
│  │  │  ├─ 天街小雨润如酥.jpg
│  │  │  ├─ 太阳.png
│  │  │  ├─ 头图片1.jpg
│  │  │  ├─ 头图片2.jpg
│  │  │  ├─ 头背景.jpg
│  │  │  ├─ 头背景2.jpg
│  │  │  ├─ 如梦令.png
│  │  │  ├─ 孟浩然1.png
│  │  │  ├─ 孟浩然印章.png
│  │  │  ├─ 孤客自悲凉.jpg
│  │  │  ├─ 孤烟直.webp
│  │  │  ├─ 宋代图片.jpg
│  │  │  ├─ 宋代地图.png
│  │  │  ├─ 宋代背景.jpg
│  │  │  ├─ 宋代背景2.jpg
│  │  │  ├─ 宋代背景3.jpg
│  │  │  ├─ 宿建德江.png
│  │  │  ├─ 导航按钮图.jpg
│  │  │  ├─ 导航条.jpg
│  │  │  ├─ 导航条2.jpg
│  │  │  ├─ 导航条3.jpg
│  │  │  ├─ 导航条4.jpg
│  │  │  ├─ 小桥.webp
│  │  │  ├─ 少年报国志.png
│  │  │  ├─ 少年行.jpg
│  │  │  ├─ 少年行.png
│  │  │  ├─ 少年隐鹿门孟浩然.png
│  │  │  ├─ 山与亭.webp
│  │  │  ├─ 山川1.jpg
│  │  │  ├─ 山月1.jpg
│  │  │  ├─ 山月2.jpg
│  │  │  ├─ 山月3.jpg
│  │  │  ├─ 山月4.png
│  │  │  ├─ 山月5.png
│  │  │  ├─ 山水.png
│  │  │  ├─ 山水.webp
│  │  │  ├─ 山水2.png
│  │  │  ├─ 岁暮归南山.png
│  │  │  ├─ 峨眉山月歌.png
│  │  │  ├─ 嵩山.png
│  │  │  ├─ 庐山遥寄.png
│  │  │  ├─ 底图.png
│  │  │  ├─ 归隐嵩山.png
│  │  │  ├─ 归雁洛阳边.jpg
│  │  │  ├─ 思念.png
│  │  │  ├─ 成都海棠.jpg
│  │  │  ├─ 扬子津望京口.png
│  │  │  ├─ 指南针.png
│  │  │  ├─ 按钮1.jpg
│  │  │  ├─ 按钮1.png
│  │  │  ├─ 按钮11.png
│  │  │  ├─ 按钮44.png
│  │  │  ├─ 无人知是荔枝来.jpg
│  │  │  ├─ 无人知是荔枝来2.jpg
│  │  │  ├─ 日出江花红胜火.jpg
│  │  │  ├─ 早发白帝城.png
│  │  │  ├─ 春夜洛城闻笛.jpg
│  │  │  ├─ 春晓.png
│  │  │  ├─ 春江晚景.png
│  │  │  ├─ 晚年山中客.png
│  │  │  ├─ 望庐山瀑布.png
│  │  │  ├─ 望洞庭湖赠张丞相.png
│  │  │  ├─ 李清照.png
│  │  │  ├─ 李清照2.png
│  │  │  ├─ 李清照3.png
│  │  │  ├─ 李清照印章.png
│  │  │  ├─ 李白.png
│  │  │  ├─ 李白2.png
│  │  │  ├─ 李白中年失意.png
│  │  │  ├─ 李白介绍图.png
│  │  │  ├─ 李白介绍图2.png
│  │  │  ├─ 李白印章.png
│  │  │  ├─ 李白建模.png
│  │  │  ├─ 李白晚年避乱.png
│  │  │  ├─ 村中.jpg
│  │  │  ├─ 楼.png
│  │  │  ├─ 楼.webp
│  │  │  ├─ 楼2.webp
│  │  │  ├─ 武陵春.png
│  │  │  ├─ 水龙吟.png
│  │  │  ├─ 汉宫春.png
│  │  │  ├─ 江南春.jpg
│  │  │  ├─ 江城子.png
│  │  │  ├─ 洛阳城里春光好.jpg
│  │  │  ├─ 洛阳牡丹图.jpg
│  │  │  ├─ 渔家傲.png
│  │  │  ├─ 游金山寺.png
│  │  │  ├─ 烽火.png
│  │  │  ├─ 烽火.webp
│  │  │  ├─ 烽火2.png
│  │  │  ├─ 牡丹.webp
│  │  │  ├─ 独坐.png
│  │  │  ├─ 独坐.webp
│  │  │  ├─ 王维.png
│  │  │  ├─ 王维2.jpg
│  │  │  ├─ 王维3.jpg
│  │  │  ├─ 王维印章.png
│  │  │  ├─ 王维遭遇贬谪.png
│  │  │  ├─ 王维重回长安.png
│  │  │  ├─ 盛唐.png
│  │  │  ├─ 盛唐3.jpg
│  │  │  ├─ 盛唐4.jpg
│  │  │  ├─ 盛唐5.jpg
│  │  │  ├─ 盛唐6.jpg
│  │  │  ├─ 盛唐7.jpg
│  │  │  ├─ 盛唐8.jpg
│  │  │  ├─ 秋千.png
│  │  │  ├─ 笔-4.webp
│  │  │  ├─ 笔-圈.png
│  │  │  ├─ 笔-圈b.png
│  │  │  ├─ 腊日游孤山.png
│  │  │  ├─ 芳华.png
│  │  │  ├─ 苏轼.png
│  │  │  ├─ 苏轼1.png
│  │  │  ├─ 苏轼印章.png
│  │  │  ├─ 苏轼晚年洒脱.png
│  │  │  ├─ 菩萨蛮.png
│  │  │  ├─ 落叶满长安.jpg
│  │  │  ├─ 落日圆.webp
│  │  │  ├─ 落花时节又逢君.jpg
│  │  │  ├─ 蝴蝶.png
│  │  │  ├─ 西湖歌舞几时休.jpg
│  │  │  ├─ 诗佛王维.jpg
│  │  │  ├─ 辛弃疾.png
│  │  │  ├─ 辛弃疾印章.png
│  │  │  ├─ 辛弃疾晚年.png
│  │  │  ├─ 过故人庄.png
│  │  │  ├─ 运城印.png
│  │  │  ├─ 运城插画1.png
│  │  │  ├─ 运城插画2.png
│  │  │  ├─ 运城插画3.png
│  │  │  ├─ 运城插画4.png
│  │  │  ├─ 醉花阴.png
│  │  │  ├─ 醉落魄.png
│  │  │  ├─ 重回长安城.jpg
│  │  │  ├─ 锦缠道.jpg
│  │  │  ├─ 长安1.jpg
│  │  │  ├─ 长安2.jpg
│  │  │  ├─ 长安3.jpg
│  │  │  ├─ 长安4.jpg
│  │  │  ├─ 长安印.png
│  │  │  ├─ 长安插画1.jpg
│  │  │  ├─ 长安插画2.jpg
│  │  │  ├─ 长安插画3.jpg
│  │  │  ├─ 长安插画4.jpg
│  │  │  ├─ 陇头吟.png
│  │  │  ├─ 露花倒影.jpg
│  │  │  ├─ 青亭.png
│  │  │  ├─ 青年却闲居.jpg
│  │  │  ├─ 青年却闲居.png
│  │  │  ├─ 青年求仕.png
│  │  │  ├─ 青年赴国难.png
│  │  │  ├─ 青年赴国难2.jpg
│  │  │  ├─ 飞鹤.png
│  │  │  ├─ 饮湖上初晴后雨.jpg
│  │  │  ├─ 饮湖上初晴后雨2.jpg
│  │  │  ├─ 首页.png
│  │  │  ├─ 鹅黄小碟.jpg
│  │  │  ├─ 黄鹤楼送孟浩然之广陵.png
│  │  │  └─ 黑鸟.webp
│  │  ├─ logo.svg
│  │  ├─ main.css
│  │  ├─ writing
│  │  │  ├─ YeZiGongChangJingHongXingKai-2.ttf
│  │  │  └─ YeZiGongChangZuiHanJiangXingCao-2.ttf
│  │  ├─ 变奏的梦想 - 江上清风游.mp3
│  │  └─ 盛唐.mp4
│  ├─ components
│  │  └─ icons
│  ├─ js
│  │  ├─ esm.js
│  │  └─ SplitText3.min.js
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ views
│     ├─ changan.vue
│     ├─ chengdu.vue
│     ├─ gucheng.vue
│     ├─ home-pre.vue
│     ├─ home.vue
│     ├─ jiangnan.vue
│     ├─ kaifeng.vue
│     ├─ libai1.vue
│     ├─ libai2.vue
│     ├─ linan.vue
│     ├─ liqingzhao1.vue
│     ├─ liqingzhao2.vue
│     ├─ luoyang.vue
│     ├─ menghaoran1.vue
│     ├─ menghaoran2.vue
│     ├─ roll.vue
│     ├─ skystar.js
│     ├─ skystar.vue
│     ├─ sushi1.vue
│     ├─ sushi2.vue
│     ├─ wangwei1.vue
│     ├─ wangwei2.vue
│     ├─ xinqiji1.vue
│     └─ xinqiji2.vue
└─ vite.config.js

```
```
tang
├─ .gitignore
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ base.css
│  │  ├─ images
│  │  │  ├─ hua.png
│  │  │  ├─ 云朵按钮4.png
│  │  │  ├─ 太阳.png
│  │  │  └─ 首页.png
│  │  ├─ logo.svg
│  │  ├─ main.css
│  │  ├─ writing
│  │  │  ├─ YeZiGongChangJingHongXingKai-2.ttf
│  │  │  └─ YeZiGongChangZuiHanJiangXingCao-2.ttf
│  │  └─ 变奏的梦想 - 江上清风游.mp3
│  ├─ components
│  │  └─ icons
│  ├─ js
│  │  ├─ esm.js
│  │  └─ SplitText3.min.js
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  └─ views
│     ├─ 唐-孟浩然
│     │  ├─ images
│     │  │  ├─ 他乡七夕3.png
│     │  │  ├─ 孟浩然1.png
│     │  │  ├─ 宿建德江.png
│     │  │  ├─ 少年隐鹿门孟浩然.png
│     │  │  ├─ 岁暮归南山.png
│     │  │  ├─ 扬子津望京口.png
│     │  │  ├─ 春晓.png
│     │  │  ├─ 晚年山中客.png
│     │  │  ├─ 望洞庭湖赠张丞相.png
│     │  │  └─ 过故人庄.png
│     │  ├─ menghaoran1.vue
│     │  └─ menghaoran2.vue
│     ├─ 唐-李白
│     │  ├─ images
│     │  │  ├─ 上三峡.png
│     │  │  ├─ 劳劳亭.png
│     │  │  ├─ 双桥落彩虹.png
│     │  │  ├─ 峨眉山月歌.png
│     │  │  ├─ 庐山遥寄.png
│     │  │  ├─ 早发白帝城.png
│     │  │  ├─ 望庐山瀑布.png
│     │  │  ├─ 李白2.png
│     │  │  ├─ 李白中年失意.png
│     │  │  ├─ 李白晚年避乱.png
│     │  │  ├─ 青年求仕.png
│     │  │  └─ 黄鹤楼送孟浩然之广陵.png
│     │  ├─ libai1.vue
│     │  └─ libai2.vue
│     ├─ 唐-王维
│     │  ├─ images
│     │  │  ├─ 九月九日忆山东兄弟.png
│     │  │  ├─ 使至塞上.jpg
│     │  │  ├─ 初来长安街王维.png
│     │  │  ├─ 少年行.png
│     │  │  ├─ 嵩山.png
│     │  │  ├─ 归隐嵩山.png
│     │  │  ├─ 思念.png
│     │  │  ├─ 王维重回长安.png
│     │  │  ├─ 陇头吟.png
│     │  │  ├─ 青亭.png
│     │  │  └─ 青年却闲居.png
│     │  ├─ wangwei1.vue
│     │  └─ wangwei2.vue
│     ├─ 唐朝都会
│     │  ├─ changan.vue
│     │  ├─ images
│     │  │  ├─ 一日看尽长安花4.jpg
│     │  │  ├─ 人人尽说江南好.jpg
│     │  │  ├─ 天街小雨润如酥.jpg
│     │  │  ├─ 归雁洛阳边.jpg
│     │  │  ├─ 无人知是荔枝来.jpg
│     │  │  ├─ 日出江花红胜火.jpg
│     │  │  ├─ 春夜洛城闻笛.jpg
│     │  │  ├─ 江南春.jpg
│     │  │  ├─ 洛阳城里春光好.jpg
│     │  │  ├─ 洛阳牡丹图.jpg
│     │  │  ├─ 落叶满长安.jpg
│     │  │  └─ 落花时节又逢君.jpg
│     │  ├─ jiangnan.vue
│     │  └─ luoyang.vue
│     ├─ 宋-李清照
│     │  ├─ images
│     │  │  ├─ 声声慢.png
│     │  │  ├─ 夏日绝句.png
│     │  │  ├─ 如梦令.png
│     │  │  ├─ 李清照2.png
│     │  │  ├─ 李清照3.png
│     │  │  ├─ 武陵春.png
│     │  │  ├─ 渔家傲.png
│     │  │  ├─ 秋千.png
│     │  │  ├─ 芳华.png
│     │  │  └─ 醉花阴.png
│     │  ├─ liqingzhao1.vue
│     │  └─ liqingzhao2.vue
│     ├─ 宋-苏轼
│     │  ├─ images
│     │  │  ├─ 夜泊牛口.png
│     │  │  ├─ 夜渡海.png
│     │  │  ├─ 春江晚景.png
│     │  │  ├─ 江城子.png
│     │  │  ├─ 游金山寺.png
│     │  │  ├─ 腊日游孤山.png
│     │  │  ├─ 苏轼1.png
│     │  │  ├─ 苏轼晚年洒脱.png
│     │  │  ├─ 苏轼遭遇贬谪.png
│     │  │  └─ 醉落魄.png
│     │  ├─ sushi1.vue
│     │  └─ sushi2.vue
│     ├─ 宋-辛弃疾
│     │  ├─ images
│     │  │  ├─ 丑奴儿.png
│     │  │  ├─ 天涯芳草无归路.png
│     │  │  ├─ 少年报国志.png
│     │  │  ├─ 水龙吟.png
│     │  │  ├─ 汉宫春.png
│     │  │  ├─ 菩萨蛮.png
│     │  │  ├─ 辛弃疾晚年.png
│     │  │  └─ 青年赴国难2.jpg
│     │  ├─ xinqiji1.vue
│     │  └─ xinqiji2.vue
│     ├─ 宋代都会
│     │  ├─ chengdu.vue
│     │  ├─ images
│     │  │  ├─ 一寸金.jpg
│     │  │  ├─ 东京梦华录2.jpg
│     │  │  ├─ 临安春雨初霁.jpg
│     │  │  ├─ 孤客自悲凉.jpg
│     │  │  ├─ 成都海棠.jpg
│     │  │  ├─ 西湖歌舞几时休.jpg
│     │  │  ├─ 锦缠道.jpg
│     │  │  ├─ 露花倒影.jpg
│     │  │  ├─ 饮湖上初晴后雨.jpg
│     │  │  ├─ 饮湖上初晴后雨2.jpg
│     │  │  └─ 鹅黄小碟.jpg
│     │  ├─ kaifeng.vue
│     │  └─ linan.vue
│     ├─ 导入页
│     │  ├─ audio
│     │  │  └─ 盛唐.mp4
│     │  ├─ home-pre.vue
│     │  └─ images
│     │     └─ pre.png
│     └─ 首页
│        ├─ gucheng.vue
│        └─ images
│           ├─ liqingzhao4.png
│           ├─ map.png
│           ├─ poet1.webp
│           ├─ poet2.webp
│           ├─ poet3.webp
│           ├─ poet4.webp
│           ├─ poet5.webp
│           ├─ 千年久漂泊.png
│           ├─ 头背景.jpg
│           ├─ 孟浩然印章.png
│           ├─ 宋代地图.png
│           ├─ 导航按钮图.jpg
│           ├─ 李清照.png
│           ├─ 李清照印章.png
│           ├─ 李白.png
│           ├─ 李白印章.png
│           ├─ 王维.png
│           ├─ 王维印章.png
│           ├─ 苏轼.png
│           ├─ 苏轼印章.png
│           ├─ 辛弃疾.png
│           └─ 辛弃疾印章.png
└─ vite.config.js

```