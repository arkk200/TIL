# Material 여러개 적용하기
### **THREE.SceneUtils.createMultiMaterailObject() 을 이용해서 적용할 수 있다.**
먼저 적용할 Material을 배열로 저장해준다.
```js
materials = [
    new THREE.MeshStandardMaterial({ opacity: 0.5, color: 0xff0044}),
    new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true })
];
```
THREE.SceneUtils.createMultiMaterailObject() 을 이용해서 메쉬를 만들어준다.
```js
const mesh = new THREE.SceneUtils.createMultiMaterailObject(
    new THREE.BoxGeometry(1, 1, 1),
    materials
);
```
이때 mesh는 children으로 여러개의 mesh를 가진다.<br>
따라서 만약 mesh에 그림자를 낼 수 있게 해야할 땐,<br>
각각의 mesh에 castShadow를 설정 해줘야한다.<br>
아래 코드로 castShadow를 설정 해줄 수 있다.
```js
mesh.children.forEach(m => {m.castShadow = true});
```
씬에 추가하는 건 똑같이
```js
scene.add(mesh);
```
를 해주면 된다.