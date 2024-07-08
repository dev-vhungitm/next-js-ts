# QUY TẮC ĐẶT TÊN

## Tên thư mục, file

- Chỉ sử dụng chữ thường, các từ nối với nhau bằng dấu gạch nối _"-"_.
  - **Ưu điểm:** Tốt cho SEO, tên thư mục và file đồng bộ, thống nhất, dễ nhìn, dễ phân biệt, hạn chế lỗi chữ hoa và thường,...
  - **VD:**
    - **Tên thư mục:** software-testing, digital-transformation.
    - **Tên file:** software-testing.tsx, digital-transformation.tsx.

## Tên biến

- Áp dụng quy tắc lạc đà (Camel Case).
- Sử dụng danh từ.
- Nếu là biến kiểu boolean thì khai báo theo dạng `is<Danh từ>`.

- **VD:** isInit, isLoading, isLoaded.

## Tên function

- Áp dụng quy tắc lạc đà _(Camel Case)_.
- Sử dụng động từ.
  - **VD:** handleLoading, handleUpdateAvatar
- Nếu là các function bắt sự kiện thì nên khai báo theo dạng `on<Động từ>`.
  - **VD:** onClickSave, onClickUpdateHistory.

## Tên component, interface

Sử dụng danh từ và áp dụng quy tắc Pascal.

- **VD:** DefaultLayout, Header, Footer.

## Tên class, id trong css, scss

- Sử dụng danh từ chữ thường, các từ nối với nhau bằng dấu gạch dưới _"\_"_.
- **VD:** content_left
- **Ưu điểm:** Class sau khi build ra html sẽ trông chuyên nghiệp, đẹp mắt và đồng bộ hơn.
  - **VD:** class tên `content_left` nằm trong file `header.module.scss` sau khi được build ra sẽ có dạng `header_content_left_abX4`.

# QUY TẮC FORMAT CODE

- Sử dụng **Prettier** kết hợp với **ESLint** để format code.

  - **Prettier:**

    - **Sử dụng:**

      ```JS
        {
          "arrowParens": "avoid",
          "bracketSameLine": false,
          "bracketSpacing": true,
          "embeddedLanguageFormatting": "auto",
          "htmlWhitespaceSensitivity": "css",
          "insertPragma": false,
          "jsxSingleQuote": false,
          "printWidth": 120,
          "proseWrap": "never",
          "quoteProps": "as-needed",
          "requirePragma": false,
          "semi": true,
          "singleQuote": true,
          "trailingComma": "none",
          "useTabs": false,
          "vueIndentScriptAndStyle": false,
          "tabWidth": 2
        }
      ```

    - **Ưu điểm:**
      - Đồng nhất mã nguồn.
      - Tiết kiệm thời gian.
      - Tránh các cuộc tranh luận về phong cách mã.
      - Tích hợp tốt với các công cụ và trình chỉnh sửa mã.

  - **ESLint:**

    - **Sử dụng:**

      ```JS
        {
          "extends": ["next/core-web-vitals", "prettier"]
        }
      ```

    - **Ưu điểm:**
      - Phát hiện lỗi sớm.
      - Cải thiện chất lượng mã nguồn.
      - Tuân thủ quy ước mã hóa.
      - Tích hợp với Prettier.
      - Hỗ trợ TypeScript.

- **Logic:**

  - Tách biệt phần khai báo với các đoạn logic và các đoạn logic với mục đích khác nhau thành các khối code riêng biệt.

  - **Ưu điểm:**

    Mang lại nhiều lợi ích quan trọng như dễ đọc, dễ bảo trì, tính tái sử dụng cao, giảm thiểu lỗi và tăng tính cấu trúc của dự án.

  - **VD:**

    ```JS
      // BLOCK 1: Get form values
      const { username, password, isRemember } = formValues;

      // BLOCK 2: Create params object for login and call login service
      const params: Login = { username, password, isRemember };
      const response = await authServices.login(params);
      const { succeeded = false, user = null } = response;

      // BLOCK 3: Handle successfully and failed
      // Successfully logged in => Dispatch current user and navigate to home page
      if (succeeded && user) {
        dispatch(authActions.setUser(user));
        navigate('/');
      } else {
        // Login failed => Show error message
        setLoginErrorMessage(response.message ?? defaultErrorMessage);
      }
    ```

- **Style:**

  - **Nested khi sử dụng scss:** tag, id, class style được viết theo kiểu nested tương tự như cấu trúc jsx giúp giảm sự lặp lại, dễ bảo trì và mở rộng codebase, cũng như tăng tốc độ phát triển và phong phú hóa cú pháp CSS.

  - **Sắp xếp các thuộc tính theo các nhóm chức năng:** Giúp cải thiện khả năng bảo trì và mở rộng mã nguồn, tăng tính hiệu quả và giảm thiểu lỗi trong quá trình phát triển dự án.

    - **Các nhóm chức năng chính:**

      - Postioning.
      - Flexbox.
      - Dimensions and spacing.
      - Background and content.
      - Typography.
      - Effects, interaction and others.

    - **VD:** Ta có class **menu_item** có các thuộc tính được sắp xếp theo nhóm chức năng như sau:

    ```CSS
      .menu_item {
        /* Positioning */
        position: relative;
        left: 0;
        top: 0;
        z-index: 1;

        /* Flexbox */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 8px;

        /* Dimensions and spacing */
        width: 100px;
        height: 40px;
        margin: 4px;
        padding: 8px 16px;
        border: 1px solid #efefef;
        border-radius: 4px;

        /* Background and content */
        background: white;
        content: '';

        /* Typography */
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;
        line-height: 120%;
        color: black;

        /* Effects, interaction and others */
        transform: translateX(0);
        transition: all 0.2s ease;
        cursor: pointer;
      }

    ```

# QUY TẮC KHAI BÁO

- Sử dụng `const` khi giá trị của biến không thay đổi.
- Sử dụng `let` khi giá trị của biến có thay đổi.
- Hạn chế sử dụng `var` do tính linh hoạt của nó không được tốt và có thể gây ra những lỗi khó xử lý trong quản lý phạm vi biến.

- Sử dụng arrow function khi khai báo function, component.

  - **VD:**

    - **Khai báo function:**

      ```JS
        const fetchData = () => {
          // TODO
        }
      ```

    - **Khai báo component:**

      ```JS
        export const Header = () => {
          return <div>Header</div>
        }
      ```

  - **Tạo nhanh component:** `raf` + `Enter`
  - **Ưu điểm:**
    - Code ngắn gọn, dễ nhìn.

# QUY TẮC EXPORT

- Không sử dụng export default (ngoại từ các file `page.tsx` ở thư mục `app`).
- Các file ts, tsx trong 1 thư mục sẽ được export vào file `index.ts` của thư mục đó.
- File `index.ts` của thư mục cấp nhỏ hơn sẽ được export vào file `index.ts` của thư mục cấp cao hơn.
- **VD:** \
   Chúng ta có cây thư mục sau:

  ```CSS
  components/
  ├── coming-soon.tsx
  ├── coming-soon.module.scss
  ├── logo.tsx
  ├── logo.module.scss
  ├── redux-provider.tsx
  ├── layout/
  │   ├── default-layout.tsx
  │   ├── default-layout.module.scss
  │   ├── footer.tsx
  │   ├── footer.module.scss
  │   ├── header.tsx
  │   ├── header.module.scss
  │   └── index.ts
  └── index.ts
  ```

  Nội dung file `index.ts` trong thư mục `layout` sẽ là:

  ```JS
    export * from './default-layout';
    export * from './header';
    export * from './footer';
  ```

  Và nội dung file `index.ts` trong thư mục `components` sẽ là:

  ```JS
    export * from './buttons';
    export * from './coming-soon';
    export * from './layout';
    export * from './logo';
    export * from './redux-provider';
  ```

# QUY TẮC COMMENT

- **Comment logic, JSX props:**
  - **Sử dụng:**
    ```JS
      //<Khoảng trống><Nội dung comment>
    ```
  - **VD:**
    ```JS
      // Fetch data
    ```
- **Comment JSX block:**
  - **Sử dụng:**
    ```JS
      {/*<Khoảng trống><Nội dung comment><Khoảng trống>*/}
    ```
  - **VD:**
    ```JS
      {/* Header Banner Content */}
    ```
- **Comment CSS, SCSS:**
  - **Sử dụng:**
    ```CSS
      /*<Khoảng trống><Nội dung comment><Khoảng trống>*/
    ```
  - **VD:**
    ```JS
      /* Header Banner */
    ```

# CẤU TRÚC THƯ MỤC VÀ FILES

- Sử dụng **nested folders** vì nó có nhều ưu điểm:

  - **Tổ chức rõ ràng:** Giúp tổ chức các thành phần của dự án một cách có hệ thống và dễ quản lý.
  - **Dễ mở rộng và bảo trì:** Cho phép dễ dàng thêm mới và chỉnh sửa các thành phần mà không gây rối loạn.
  - **Tránh xung đột tên file:** Phòng tránh xung đột tên file khi có nhiều file cùng tên trong dự án.
  - **Phân tách các chức năng:** Tách biệt các chức năng và module để phát triển một cách dễ dàng hơn.
  - **Quản lý dự án hiệu quả:** Giúp quản lý dự án hiệu quả hơn, đặc biệt khi có nhiều thành viên làm việc cùng một dự án.
  - **Đảm bảo tính cấu trúc hợp lý:** Bảo đảm tính cấu trúc logic và dễ hiểu của dự án, đặc biệt với dự án có quy mô lớn và phức tạp.

- Không dùng file `index` để viết component hoặc logic. Thay vào đó, chỉ sử dụng `index.ts` để export các file khác trong thư mục.

  - **Ưu điểm:** Giữ cho mã nguồn dự án có tổ chức, dễ quản lý và mở rộng. Nó cũng làm tăng tính tái sử dụng và hỗ trợ tính module hóa trong phát triển phần mềm.

- Các file css và scss được sử dụng bởi component nào thì sẽ được đặt cùng tên và nằm cùng thư mục với component đó:
  - **Ưu điểm:** Dễ dàng, nhanh chóng kiểm tra, bảo trì, sửa lỗi, cập nhật và di dời.
  - **VD:** File component `header.tsx`, sử dụng các style từ file `header.module.scss`:
    ```CSS
    ├── header.tsx
    ├── header.module.scss
    ```
- Trong thư mục `app`, những component được dùng bởi page nào thì sẽ được đặt trong thư mục `components` ngang hàng với file `page.tsx` của page đó
  - **VD:**

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
|   |   ├── header.module.scss
│   │   └── index.ts
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

```CSS
components/
├── coming-soon.tsx
├── coming-soon.module.scss
├── logo.tsx
├── logo.module.scss
├── redux-provider.tsx
├── layout/
│   ├── default-layout.tsx
│   ├── default-layout.module.scss
│   ├── footer.tsx
│   ├── footer.module.scss
│   ├── header.tsx
|   ├── header.module.scss
│   └── index.ts
├── index.ts
└── ...
```

Nơi chứa các component dùng chung trong dự án. Tất cả các component sẽ được export vào `index.ts`

### Thư mục styles

```JS
styles/
├── button.scss
├── container.scss
├── globals.scss
├── variables.scss
├── variables.module.scss
└── ...
```

Nơi chứa các file css, scss dùng chung trong dự án

- **Một số file style cần thiết:**
  - `globals.scss`: File style áp dụng cho toàn bộ website.
  - `variables.scss`: File style chứa tất cả các biến style dùng chung trong toàn bộ website.
  - `variables.module.scss`: File style module cho phép export các variable trong `variables.scss` có thể sử dụng trong file ts hay tsx.

### Thư mục services

```JS
services/
├── index.ts
├── auth.ts
├── axios-client.ts
└── ...
```

- Nơi chứa các file services hỗ trợ việc tương tác với API.
- **Một số file cần thiết**:
  - `axios-client.ts`: File cấu hình chung khi sử dụng axios để gọi API.

### Thư mục redux:

```JS
 redux/
 ├── index.ts
 ├── language-slice.ts
 ├── store.ts
 └── ...
```

- Nơi chứa các file hỗ trợ để quản lý trạng thái toàn cục của ứng dụng.
- Sử dụng **Redux Toolkit** giúp đơn giản hóa việc sử dụng redux.
- **Một số file cần thiết:**
  - `store.ts`: File cấu hình và tạo ra Redux store cho ứng dụng, nơi kết hợp các reducers, áp dụng middleware và các cấu hình khác cần thiết để quản lý trạng thái toàn cục của ứng dụng.

### Thư mục constants

```JS
constants/
├── header-menu-data.ts
├── index.ts
├── path-names.ts
├── strings.ts
└── ...
```

- Nơi chứa các file hỗ trợ các biến constants của website.
- **Một số file cần thiết:**
  - `strings.ts`: File chứa các chuỗi dùng chung trong website.
  - `number.ts:` File chứa các số liệu dùng chung trong website.
  - `path-names.ts`: File chứa tất cả các đường dẫn trong toàn bộ website, giúp tránh sai sót và dễ dàng, nhanh chóng thay đổi mỗi khi cần.
- Các biến được khai báo trong file `.env` nên được khai báo vào đây để dễ dàng sử dụng hơn.

### Thư mục app

Nơi định nghĩa các route, page, component và css, scss tương ứng với từng route.

**Mỗi route sẽ có:**

- Một file `page.tsx` để đại diện cho trang chính của route.
- Một thư mục `components` để chứa tất cả component được dùng trong page

```JS
/app
│
├── layout.tsx             // Component layout chung
├── favicon.ico            // Biểu tượng trang web
├── page.tsx               // Trang chủ
├── not-found.tsx          // Trang 404
├── not-found.module.scss  // CSS module cho trang 404
├── contact-us/
│   ├── components         // Các component trong trang contact-us
│   |   ├── contact-us-header.tsx
│   │   ├── contact-us-content.tsx
│   |   ├── contact-us-footer.tsx
│   │   └── index.ts
│   └── page.tsx           // Trang contact-us
│
└── services/
    ├── software-testing/
    │   └── page.tsx       // Trang software-testing mềm
    └── digital-transformation/
        └── page.tsx       // Trang digital-transformation
```
