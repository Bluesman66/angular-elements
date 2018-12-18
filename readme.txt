1. сделать продакшн сборку
ng build --prod
2. собрать все в один файл
cat {runtime.ec2944dd8b20ec099bf3,polyfills.fec146f4472ee5fb9cac,scripts.e84e36a0841a046b4d25,main.a9533f76dca4ba496125}.js| gzip > hello.js.gz
3. изменить index.html
<script type="gzip" src="hello.js.gz"></script>

