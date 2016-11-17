(function() {
  'use strict';

  // シーンを作成
  var scene = new THREE.Scene();

  // 軸を作成
  var axis = new THREE.AxisHelper(1000);

  // カメラを作成
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.set(75, 30, 100);

  // OrbitControls制御
  var controls = new THREE.OrbitControls(camera);

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // canvasでtextureを作成
	var cvs = document.createElement('canvas');
	var ctx = cvs.getContext('2d');
  cvs.width = 32;
  cvs.height = 32;
  ctx.fillStyle = 'white';
  ctx.arc(16, 16, 16, 0, 4 * Math.PI, true);
  ctx.fill();
	var texture = new THREE.Texture(cvs);
	texture.needsUpdate = true;

  for (var i = 0; i < 2; i = (i + 1)|0) {
    for (var j = 0; j < 2; j = (j + 1)|0) {
      var pos = {
        x: 50 * i,
        y: 0,
        z: 50 * j
      };
      createParticles(texture, pos);
    }
  }

  function createParticles (texture, pos) {
    var particle;
    var pAmount = 300;
    var mat = new THREE.SpriteMaterial({
      map: texture,
      color: 0xB66FFF,
      blending: THREE.AdditiveBlending
    });
    for (var i = 0; i < pAmount; i = (i + 1)|0) {
      particle = new THREE.Sprite(mat);
      particle.position.set(pos.x, pos.y, pos.z);
      animateParticles(particle, pos, i);
      scene.add(particle);
    }
  }

  function animateParticles (p, pos, i) {
    var time = 3000;
    var d = i;
    new TWEEN.Tween(p.position)
      .delay(d * 10)
      .to({
        x: calcNormalRand() * 40 + pos.x
      }, time)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
    new TWEEN.Tween(p.position)
      .delay(d * 10)
      .to({
        y: calcSqrtRand() * 30 + pos.y
      }, time)
      .easing(TWEEN.Easing.Back.Out)
      .start();
    new TWEEN.Tween(p.position)
      .delay(d * 10)
      .to({
        z: calcNormalRand() * 40 + pos.z
      }, time)
      .easing(TWEEN.Easing.Cubic.Out)
      .start();
    new TWEEN.Tween(p.scale)
      .delay(d * 10)
      .to({
        x: 0.01,
        y: 0.01
      }, time)
      .onComplete(function () {
        p.position.set(pos.x, pos.y, pos.z);
        p.scale.x = 1;
        p.scale.y = 1;
        animateParticles(p, pos, d);
      })
      .start();
  }

  function calcNormalRand() {
    // 正規乱数
    var r1 = Math.random();
    var r2 = Math.random();
    var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
    // 値を0以上1未満になるよう正規化
    value = (value + 3) / 6;
    // 中心点を0に移動
    return value - 0.5;
  }

  function calcSqrtRand() {
    // 乱数の平方根
    return Math.sqrt(Math.random());
  }

  function init() {
    // オブジェクトを追加
    scene.add(axis);
    // レンダリング
    renderer.render(scene, camera);
    // dom要素として追加
    document.body.appendChild(renderer.domElement);
  }

  function draw() {
    requestAnimationFrame(draw);
    controls.update();
    TWEEN.update();
    renderer.render(scene, camera);
  }

  init();
  draw();

}());
