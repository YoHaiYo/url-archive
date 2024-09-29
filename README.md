### env 설정

route directory에 .env.local 파일만들고 다음과 같이 지정

```
VITE_SUPABASE_URL = ~
VITE_SUPABASE_ANON_KEY = ~
```

### 참고 링크

- supabase filter 구문 : https://supabase.com/docs/reference/javascript/using-filters

### vue에서 폰트어썸사용

https://fontawesome.com/search?o=r&m=free

```
  <font-awesome-icon icon="fa-user" />
  <font-awesome-icon icon="fa-solid fa-user" />
  <font-awesome-icon
    icon="fa-star"
    class="text-gray-400"
    style="font-size: 16"
  />
```

### 파비콘가져오기

`To get the favicon for a domain, use`
https://s2.googleusercontent.com/s2/favicons?domain=www.stackoverflow.com

`To get the favicon for an URL, use`
https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.stackoverflow.com

### 해결한 이슈

- saveAllNotes for of 문으로 저장하니 성능 이슈발생
  -> upsert로 해결
  upsert는 삽입하려는 레코드가 데이터베이스에 존재하지 않으면 새로 삽입하고, 이미 존재하면 기존 레코드를 업데이트합니다. 이 방법은 데이터베이스에 대한 단일 요청으로 여러 레코드를 처리할 수 있어, 요청 횟수를 줄여 성능을 크게 향상시킬 수 있습니다.
  onConflict 옵션
  onConflict 옵션은 upsert 메서드를 사용할 때, 어떤 필드들이 충돌 기준이 될지를 지정합니다. 예를 들어, 레코드의 기본 키(primary key)나 고유 키(unique key) 필드를 지정할 수 있습니다.

충돌 발생 시 업데이트: onConflict 옵션을 설정하면, 삽입하려는 데이터와 충돌하는 데이터가 이미 존재할 경우, 충돌하는 필드에 대해 레코드를 업데이트합니다.

- 백그라운드이미지 경로 이슈
  -> vue에선 public 경로가 이미지 루트경로라 바로 /이미지.svg 경로로 씀

## 해결해야할 이슈

## 다음 작업

- 로그인 시 아예 /notes페이지만 사용하게 하기. (figma, notion 참고) (V)
- 카테고리, 클릭수 등으로 필터 (V)
- 드래그앤드롭으로 위치 수정
- 외부로 공유
- 구글, 깃허브 로그인
- 카테고리별 분류를 폴더처럼 접기기능 처리?
- url 한번에 입력 (즐찾파일, 엑셀 등)?

### 사이트명 후보군

- URL Achive, URL Port
