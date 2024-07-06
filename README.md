# QUY TẮC ĐẶT TÊN

## Tên thư mục, file

- Chỉ sử dụng chữ thường, các từ nối với nhau bằng dấu gạch nối "**-**".
  - **Lợi ích:** Tốt cho SEO, tên thư mục và file đồng bộ, thống nhất, dễ nhìn, dễ phân biệt, hạn chế lỗi chữ hoa và thường,...
  - **VD:**
    - Tên thư mục: software-testing, digital-transformation.
    - Tên file: software-testing.tsx, digital-transformation.tsx.
- Không sử dụng `index.tsx` để đặt tên cho file component và `index.ts` để đặt tên cho file logic, nếu có thư mục thì phải có file `index.ts` và export hết tất cả component, hoặc các file logic khác của thư mục đó vào file `index.ts`.
  - **Lợi ích:**
    - **Tổ chức dễ dàng hơn:** Tổ chức và quản lý các import/export một cách dễ dàng và có hệ thống hơn, giảm thiểu sự lặp lại và làm cho mã nguồn trở nên sáng sủa hơn.
    - **Giảm bớt sự phụ thuộc:** Bằng cách sử dụng `index.ts`, các module khác có thể chỉ cần import từ `index.ts` mà không cần biết chi tiết về cấu trúc thư mục bên trong.
    - **Tối ưu hóa và hiệu quả hơn trong quản lý dự án lớn:** Đối với các dự án lớn hoặc có nhiều thành viên tham gia, việc sử dụng index.ts để tổ chức export có thể giúp cho việc quản lý mã nguồn trở nên hiệu quả hơn, đặc biệt là khi cần phải thay đổi và bảo trì nhiều thành phần.

## Tên biến

- Áp dụng quy tắc lạc đà (Camel Case)
- Sử dụng danh từ
- Nếu là biến kiểu boolean thì khai báo theo dạng `is<Danh từ>`.

- **VD:** isInit, isLoading, isLoaded.

## Tên function

- Áp dụng quy tắc lạc đà (Camel Case)
- Sử dụng động từ
  - **VD:** handleLoading, handleUpdateAvatar
- Nếu là các function bắt sự kiện thì nên khai báo theo dạng `on<Động từ>`
  - **VD:** onClickSave, onClickUpdateHistory

## Tên component, interface:

Sử dụng danh từ và áp dụng quy tắc Pascal.

- **VD:** DefaultLayout, Header, Footer

# QUY TẮC KHAI BÁO

- Sử dụng `const` khi giá trị của biến không thay đổi.
- Sử dụng `let` khi giá trị của biến có thay đổi.
- Hạn chế sử dụng `var` do tính linh hoạt của nó không được tốt và có thể gây ra những lỗi khó xử lý trong quản lý phạm vi biến.

- Sử dụng arrow function khi khai báo function, component.
- **VD:**

  - **Khai báo function:**

    ```
      const fetchData = () => {
        // TODO
      }
    ```

  - **Khai báo component:**
    ```
      export const Header = () => {
        return <div>Header</div>
      }
    ```

# QUY TẮC EXPORT

- Không sử dụng export default ngoại từ file `page.tsx` ở thư mục `app`.
- Các file ts, tsx trong 1 thư mục sẽ được export vào file `index.ts` của thư mục đó.
- File `index.ts` của thư mục cấp nhỏ hơn sẽ được export vào file `index.ts` của thư mục cấp cao hơn.
- **VD:** \
   Chúng ta có cây thư mục sau:

  ```
  ...
  ├── components/
  │   ├── coming-soon.tsx
  │   ├── coming-soon.module.scss
  │   ├── logo.tsx
  │   ├── logo.module.scss
  │   ├── redux-provider.tsx
  │   ├── layout/
  │   │   ├── default-layout.tsx
  │   │   ├── default-layout.module.scss
  │   │   ├── footer.tsx
  │   │   ├── footer.module.scss
  │   │   ├── header.tsx
  │   │   ├── header.module.scss
  │   │   └── index.ts
  │   └── index.ts
  ...
  ```

  Nội dung file `index.ts` trong thư mục `layout` sẽ là:

  ```
    export * from './default-layout';
    export * from './header';
    export * from './footer';
  ```

  Và nội dung file `index.ts` trong thư mục `components` sẽ là:

  ```
    export * from './buttons';
    export * from './coming-soon';
    export * from './layout';
    export * from './logo';
    export * from './redux-provider';
  ```

# QUY TẮC COMMENT

- **Comment logic, JSX props:**
  - **Sử dụng:** `<Khoảng trống><Nội dung comment>`
  - **VD:** `// Fetch data`
- **Comment JSX block:**
  - Sử dụng `{/*<Khoảng trống><Nội dung comment><Khoảng trống>*/}`
    - **VD:** `{/* Header Banner Content */}`
- **Comment CSS, SCSS:**
  - Sử dụng `/*<Khoảng trống><Nội dung comment><Khoảng trống>*/`
    - **VD:** `/* Header Banner */`

# CẤU TRÚC THƯ MỤC VÀ FILES

- Sử dụng nested folders vì nó mang lại nhiều lợi ích:

  - **Tổ chức rõ ràng:** Giúp tổ chức các thành phần của dự án một cách có hệ thống và dễ quản lý.
  - **Dễ mở rộng và bảo trì:** Cho phép dễ dàng thêm mới và chỉnh sửa các thành phần mà không gây rối loạn.
  - **Tránh xung đột tên file:** Phòng tránh xung đột tên file khi có nhiều file cùng tên trong dự án.
  - **Phân tách các chức năng:** Tách biệt các chức năng và module để phát triển một cách dễ dàng hơn.
  - **Quản lý dự án hiệu quả:** Giúp quản lý dự án hiệu quả hơn, đặc biệt khi có nhiều thành viên làm việc cùng một dự án.
  - **Đảm bảo tính cấu trúc hợp lý:** Bảo đảm tính cấu trúc logic và dễ hiểu của dự án, đặc biệt với dự án có quy mô lớn và phức tạp.

- Các file css và scss được sử dụng bởi component nào thì sẽ được đặt cùng tên và nằm cùng thư mục với component đó:
  - **Lợi ích:** Dễ dàng, nhanh chóng kiểm tra, bảo trì, sửa lỗi, cập nhật và di dời.
  - **VD:** File component header.tsx, sử dụng sử dụng scss từ file `header.module.scss`.

## Cấu trúc thư mục mẫu

```
/front-end
├── components/
│   ├── coming-soon.tsx
│   ├── coming-soon.module.scss
│   ├── logo.tsx
│   ├── logo.module.scss
│   ├── redux-provider.tsx
│   ├── layout/
│   │   ├── default-layout.tsx
│   │   ├── default-layout.module.scss
│   │   ├── footer.tsx
│   │   ├── footer.module.scss
│   │   ├── header.tsx
│   │   └── header.module.scss
│   └── index.ts
├── app/
│   ├── layout.tsx
│   ├── favicon.ico
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── not-found.module.scss
│   ├── contact-us/
│   |   └── page.tsx
│   └── services/
│       ├── software-testing/
│       │   └── page.tsx
│       └── digital-transformation/
│           └── page.tsx
├── services/
│   ├── index.ts
│   ├── auth.ts
│   └── axios-client.ts
├── styles/
│   ├── button.scss
│   ├── container.scss
│   ├── globals.scss
│   ├── variables.scss
│   └── variables.module.scss
├── redux/
│   ├── index.ts
│   ├── language-slice.ts
│   └── store.ts
├── utils/
│   ├── index.ts
│   └── use-window-dimensions.ts
├── models/
│   ├── auth.ts
│   ├── header-menu.ts
│   ├── index.ts
│   └── user.ts
├── constants/
│   ├── header-menu-data.ts
│   ├── index.ts
│   ├── path-names.ts
│   └── strings.ts
├── public/
│   └── media/
│       └── 404.webp
├── .env.production
├── .env.development
├── next-env.d.ts
├── next.config.mjs
├── tsconfig.json
├── package.json
├── yarn.lock
├── package-lock.json
├── .eslintrc.json
├── .gitignore
└── README.md
```

### Thư mục font-end

Thư mục gốc của dự án, nơi chứa toàn bộ mã nguồn

### Thư mục components

Nơi chứa các components dùng chung trong dự án

### Thư mục styles

Nơi chứa các file css, scss dùng chung trong dự án

### Thư mục app

Nơi định nghĩa các route, page, component và css, scss tương ứng với từng route.

**Mỗi route sẽ có:**

- Một file `page.tsx` để đại diện cho trang chính của route.
- Một thư mục `components` để chứa tất cả component được dùng trong page

```
/app
│
├── layout.tsx             -> Component layout chung
├── favicon.ico            -> Biểu tượng trang web
├── page.tsx               -> Trang mặc định
├── not-found.tsx          -> Trang không tìm thấy
├── not-found.module.scss  -> CSS module cho trang không tìm thấy
├── contact-us/
│   └── page.tsx           -> Trang liên hệ
│
└── services/
    ├── software-testing/
    │   └── page.tsx       -> Trang kiểm thử phần mềm
    └── digital-transformation/
        └── page.tsx       -> Trang biến đổi số
```
