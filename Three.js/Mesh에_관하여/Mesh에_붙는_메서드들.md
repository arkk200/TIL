# Mesh에 붙는 메서드들
## Three.js에서 Mesh의 위치, 나타나는 모습에 대해 사용할 수 있는 메서드들이 있다.

| 메서드 | 설명 |
|:--:|:--:|
| position | 객체의 위치를 부모의 상대적인 위치로 결정한다.<br> THREE.Scene 객체의 위치는 0, 0, 0이다. |
| rotation | 이 속성으로 객체를 회전시킬 수 있다.<br> rotationX(), rotationY(), rotationZ()롤 각각 회전시킬 수도 있다. |
| scale | x, y, z축으로 객체의 크기를 조절할 수 있다. |
| translateX()<br>translateY()<br>translateZ() | 이 속성은 x, y, z축으로 값만큼 이동한다. |
| translateOnAxis(방향, 거리) | 지정된 방향으로 거리만큼 이동한다. |
| visible | 이 속성이 false이면 Three.js에 의해 렌더링되지 않는다. |