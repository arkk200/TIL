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