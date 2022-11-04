# Scene에 붙는 메서드
## Three.js에서 Scene에 사용할 수 있는 메서드가 있다.

| 메서드 | 설명 |
|:--:|:--:|
| add(object) | 장면에 객체를 추가할 때 사용한다, 객체의 그룹을 만들 때도 사용한다 |
| children | 카메라, 조명 등 객체에 추가된 모든 객체의 목록을 반환한다 |
| getObjectByName(name, recursive) | 객체를 만들 때 객체를 구분해주는 name을 부여할 수 있는데<br>이때 이 메서드는 특정 이름을 가진 객체를 반환해준다.<br>recursive가 true라면 Three.js는 특정 이름의 객체를 찾기 위해 모든 객체의 트리를 탐색한다. |
| remove(object) | 이 함수로 장면에서 특정 객체를 삭제한다. |
| traverse(function) | 자식 객체에 하나씩 접근한다. 함수 내 인자에 자식 객체가 하나씩 전달된다. |
| fog (THREE.Fog() or THREE.FogExp2()) | THREE.FogExp2()는 안개가 거리에 따라 기하급수적으로 밀도가 증가한다. |
| overrideMaterial (THREE.MeshBasicMaterial(), THREE.MeshStandardMaterial(), ...) | 씬 내 모든 객체에 동일한 물질을 적용시킬 수 있다. |