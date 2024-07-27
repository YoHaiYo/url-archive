### env 설정

route directory에 .env.local 파일만들고 다음과 같이 지정

```
VITE_SUPABASE_URL = ~
VITE_SUPABASE_ANON_KEY = ~
```

### 참고 링크

- 배포 : https://linkport-vue-try.vercel.app/
- 깃허브 : https://github.com/YoHaiYo/linkport_vue_try
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

## 해결해야할 사항

- 백그라운드이미지 경로 이슈
