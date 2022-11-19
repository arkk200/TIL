# WireFrame 추가하기
### new THREE.WireframeHelper를 사용하면 추가할 수 있다.
아래와 같이 쓰면 된다.
```js
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
);

const framedMesh = new THREE.WireframeHelper(mesh, 0x000000);
```
`new THREE.WireframeHelper` 에 첫번째 인자는 Wireframe을 적용할 mesh가 들어가고<br>
두번째로는 Wireframe의 색상이 들어간다.
굵기를 늘리려면 `helper.material.linewidth` 의 값을 바꾸면 된다.
```js
framedMesh.material.linewidth = 2;

scene.add(framedMesh);
```
위 코드와 같이 WireframeHelper의 객체를 씬에 추가해주면 된다.