(function () {
    'use strict';

    var scene, axis, camera, light, ambient, controls, renderer;

    function initScene() {
        scene = new THREE.Scene();
    }

    function initAxis() {
        axis = new THREE.AxisHelper(1000);
        axis.position.set(0, 0, 0);
        scene.add(axis);
    }

    function initCamera() {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 5000);
        camera.position.set(1500, 1000, 1300);

        controls = new THREE.OrbitControls(camera);
        controls.userZoom = true;
        controls.userZoomSpeed = 1.0;
        controls.userRotate = true;
        controls.userRotateSpeed = 1.0;
        controls.userPan = true;
        controls.userPanSpeed = 1.0;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;
        controls.minPolarAngle = 0;
        controls.maxPolarAngle = Math.PI;
        controls.minDistance = 0;
        controls.maxDistance = Infinity;
    }

    function initLight() {
        light = new THREE.DirectionalLight(0xFAFDFE, 1);
        light.position.set(0, 2500, 750);
        light.castShadow = true;
        light.shadow.camera.near = 800;
        light.shadow.camera.far = 3000;
        light.shadow.camera.top = 500;
        light.shadow.camera.bottom = -500;
        light.shadow.camera.left = 500;
        light.shadow.camera.right = -500;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;
        ambient = new THREE.AmbientLight(0xffffff, 1);
        var lighthelper = new THREE.CameraHelper(light.shadow.camera);
        scene.add(light, ambient, lighthelper);
    }

    function initRender() {
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // レンダラーの影レンダリングを有効化
        renderer.shadowMap.enabled = true;

        document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera);
    }

    function initObject() {
        var groundTexture = new THREE.ImageUtils.loadTexture('img/ground.jpg');
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(10, 8);
        var ground = new THREE.Mesh(
            new THREE.PlaneGeometry(3000, 2000),
            new THREE.MeshStandardMaterial({
                color: 0xdddddd,
                map: groundTexture,
                roughness: 1
            })
        );
        ground.position.set(0, 0, 0);
        ground.rotation.x = -90 * Math.PI / 180;
        ground.receiveShadow = true;
        scene.add(ground);

        var wallTexture = new THREE.ImageUtils.loadTexture('img/wall.jpg');
        wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(12, 4);

        var wallBack = new THREE.Mesh(
            new THREE.PlaneGeometry(3000, 1000),
            new THREE.MeshStandardMaterial({
                color: 0xdddddd,
                map: wallTexture,
                roughness: 1
            })
        );
        wallBack.position.set(0, 500, -1000);
        wallBack.receiveShadow = true;
        scene.add(wallBack);

        var wallLeft = new THREE.Mesh(
            new THREE.PlaneGeometry(2000, 1000),
            new THREE.MeshStandardMaterial({
                color: 0xdddddd,
                map: wallTexture,
                roughness: 1
            })
        );
        wallLeft.position.set(-1500, 500, 0);
        wallLeft.rotation.y = 90 * Math.PI / 180;
        wallLeft.receiveShadow = true;
        scene.add(wallLeft);

        var wallRight = wallLeft.clone();
        wallRight.position.set(1500, 500, 0);
        wallRight.rotation.y = -90 * Math.PI / 180;
        wallRight.receiveShadow = true;
        scene.add(wallRight);

        // videoエレメント作成
        var video = document.createElement('video');
        // テクスチャにする動画の指定
        video.src = 'video/test.mp4';
        // 動画をループ再生
        video.loop = true;
        video.muted = true;
        // 動画のロード＆再生
        video.load();
        video.play();

        // 動画テクスチャ作成
        var mvTexture = new THREE.VideoTexture(video);
        // 1テクセルが1ピクセルより大きな範囲をカバーするときのテクスチャサンプリング方法の指定
        mvTexture.magFilter = THREE.LinearFilter;
        // 1テクセルが1ピクセルより小さな範囲をカバーするときのテクスチャサンプリング方法の指定
        mvTexture.minFilter = THREE.LinearFilter;
        // 動画テクスチャフォーマットの指定
        mvTexture.format = THREE.RGBFormat;

        var display = new THREE.Mesh(
            new THREE.PlaneGeometry(800, 450),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                map: mvTexture
            })
        );
        display.position.set(0, 570, 21);
        display.receiveShadow = false;
        display.castShadow = false;

        var tvBody = new THREE.Mesh(
            new THREE.CubeGeometry(840, 470, 40),
            new THREE.MeshLambertMaterial({
                color: 0x111111
            })
        );
        tvBody.position.set(0, 570, 0);
        tvBody.castShadow = true;
        tvBody.receiveShadow = true;

        var tvCylinder = new THREE.Mesh(
            new THREE.CylinderGeometry(15, 15, 350, 50),
            new THREE.MeshPhongMaterial({
                color: 0x111111
            }));
        tvCylinder.position.set(0, 175, 0);
        tvCylinder.castShadow = true;
        tvCylinder.receiveShadow = true;

        var tvfoot = new THREE.Mesh(
            new THREE.CubeGeometry(840, 10, 50),
            new THREE.MeshLambertMaterial({
                color: 0x111111
            })
        );
        tvfoot.position.set(0, 10, 0);
        tvfoot.castShadow = true;
        tvfoot.receiveShadow = true;

        scene.add(tvBody, tvCylinder, tvfoot, display);

    }

    function animation() {
        requestAnimationFrame(animation);
        controls.update();
        renderer.clear();
        renderer.render(scene, camera);
    }

    function init() {
        initScene();
        initAxis();
        initCamera();
        initLight();
        initRender();
        initObject();
        animation();
    }

    window.onload = init;

}());
