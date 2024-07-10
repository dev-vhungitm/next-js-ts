# QUY TẮC ĐẶT TÊN

## Tên thư mục, file

- Áp dụng Kebab Case (Viết thường, các từ nối với nhau bởi dấu gạch ngang _"-"_).
  - **Ưu điểm:** Tốt cho SEO, tên thư mục và file đồng bộ, thống nhất, dễ nhìn, dễ phân biệt, hạn chế lỗi chữ hoa và thường,...
  - **VD:**
    - **Tên thư mục:** software-testing, digital-transformation.
    - **Tên file:** software-testing.tsx, digital-transformation.tsx.

## Tên biến js

- Áp dụng Camel Case (Viết hoa chữ cái đầu tiên của mỗi từ, trừ kí tự đầu tiên của tên).
- Nếu là biến kiểu boolean thì khai báo theo dạng `is<Danh từ>`.
- **VD:** isInit, isLoading, isLoaded.

## Tên biến css, scss

- Áp dụng Kebab Case.
- **VD:** `$primary-color`, `$font-family`, `$font-weight`.

## Tên function

- Áp dụng Camel Case.
- Sử dụng động từ.
  - **VD:** handleLoading, handleUpdateAvatar
- Nếu là các function bắt sự kiện thì nên khai báo theo dạng `on<Động từ>`.
  - **VD:** onClickSave, onClickUpdateHistory.

## Tên component, interface

- Áp dụng Pascal Case (Viết hoa chữ cái đầu tiên của mỗi từ).

- **VD:** DefaultLayout, Header, Footer.

## Tên class, id trong css, scss

- Áp dụng Snake Case (Các từ được viết thường và nối với nhau bởi dấu gạch dưới _"\_"_).
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
  - **Ưu điểm:** Mang lại nhiều lợi ích quan trọng như dễ đọc, dễ bảo trì, tính tái sử dụng cao, giảm thiểu lỗi và tăng tính cấu trúc của dự án.
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

  - **Nested khi sử dụng scss:** tag, id, class style được viết theo kiểu nested tương tự như cấu trúc jsx giúp giảm thiểu sự lặp lại, dễ bảo trì và mở rộng codebase, cũng như tăng tốc độ phát triển và phong phú hóa cú pháp css.
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
  - **Tạo nhanh component:** `raf` + `Enter` (Cài extension **ES7+ React/Redux/React-Native snippets** cho **VS Code**)
  - **Ưu điểm:**
    - Code ngắn gọn, dễ nhìn.

# QUY TẮC EXPORT

## Thư mục public

- Không export file.

## Thư mục app

- Sử dụng export default.

## Các thư mục khác

- Nếu có thư mục thì thư mục đó phải có file `index.ts` và export hết tất cả các file `ts` hoặc `tsx` trong thư mục đó vào file `index.ts`.
- Không sử dụng export default.
- File `index.ts` của thư mục cấp nhỏ hơn sẽ được export vào file `index.ts` của thư mục cấp cao hơn.
- **VD:** \
   Chúng ta có cây thư mục sau:
  ```CSS
   common
   ├── buttons/
   │   ├── primary-button.tsx
   │   ├── primary-button.module.scss
   │   └── index.ts
   ├── layout/
   │   ├── default-layout.tsx
   │   ├── default-layout.module.scss
   │   ├── footer.tsx
   │   ├── footer.module.scss
   │   ├── header.tsx
   │   ├── header.module.scss
   │   └── index.ts
   ├── coming-soon.tsx
   ├── coming-soon.module.scss
   ├── logo.tsx
   ├── logo.module.scss
   ├── not-found.tsx
   ├── not-found.module.scss
   ├── redux-provider.tsx
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
    export * from './layout';
    export * from './coming-soon';
    export * from './redux-provider';
    export * from './not-found';
    export * from './logo';
  ```

# QUY TẮC COMMENT

- **Comment logic, JSX props:**
  - **Sử dụng:**
    ```JS
      //<Khoảng trống><Nội dung comment>
    ```
  - **VD:**
    ```JS
      // Fetch header menu data
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

## Cấu trúc thư mục mẫu

```CSS
/front-end
├── components/
│   ├── common
│   │   ├── buttons/
│   │   │   ├── primary-button.tsx
│   │   │   ├── primary-button.module.scss
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── default-layout.tsx
│   │   │   ├── default-layout.module.scss
│   │   │   ├── footer.tsx
│   │   │   ├── footer.module.scss
│   │   │   ├── header.tsx
│   │   │   ├── header.module.scss
│   │   │   └── index.ts
│   │   ├── coming-soon.tsx
│   │   ├── coming-soon.module.scss
│   │   ├── logo.tsx
│   │   ├── logo.module.scss
│   │   ├── not-found.tsx
│   │   ├── not-found.module.scss
│   │   ├── redux-provider.tsx
│   │   └── index.ts
│   ├── home
│   │   ├── home-banner.tsx
│   │   ├── home-banner.module.tsx
│   │   ├── home-content.tsx
│   │   ├── home-content.module.tsx
│   │   ├── home-footer.tsx
│   │   ├── home-footer.module.tsx
│   │   ├── home.tsx
│   │   ├── home.module.tsx
│   │   └── index.ts
│   ├── contact-us
│   │   ├── contact-us-banner.tsx
│   │   ├── contact-us-banner.module.tsx
│   │   ├── contact-us-content.tsx
│   │   ├── contact-us-content.module.tsx
│   │   ├── contact-us-footer.tsx
│   │   ├── contact-us-footer.module.tsx
│   │   ├── contact-us.tsx
│   │   ├── contact-us.module.tsx
│   │   └── index.ts
│   ├── services
│   │   ├── services-banner.tsx
│   │   ├── services-banner.module.tsx
│   │   ├── services-content.tsx
│   │   ├── services-content.module.tsx
│   │   ├── services-footer.tsx
│   │   ├── services-footer.module.tsx
│   │   ├── services.tsx
│   │   ├── services.module.tsx
│   │   └── index.ts
│   ├── software-testing
│   │   ├── software-testing-banner.tsx
│   │   ├── software-testing-banner.module.tsx
│   │   ├── software-testing-content.tsx
│   │   ├── software-testing-content.module.tsx
│   │   ├── software-testing-footer.tsx
│   │   ├── software-testing-footer.module.tsx
│   │   ├── software-testing.tsx
│   │   ├── software-testing.module.tsx
│   │   └── index.ts
│   ├── digital-transformation
│   │   ├── digital-transformation-banner.tsx
│   │   ├── digital-transformation-banner.module.tsx
│   │   ├── digital-transformation-content.tsx
│   │   ├── digital-transformation-content.module.tsx
│   │   ├── digital-transformation-footer.tsx
│   │   ├── digital-transformation-footer.module.tsx
│   │   ├── digital-transformation.tsx
│   │   ├── digital-transformation.module.tsx
│   │   └── index.ts
│   └── index.ts
├── app/
│   ├── contact-us/
│   │   └── page.tsx
│   ├── services/
│   │   ├── software-testing/
│   │   │   └── page.tsx
│   │   └── digital-transformation/
│   │       └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── favicon.ico
│
├── services/
│   ├── index.ts
│   ├── auth-services.ts
│   └── axios-client.ts
├── styles/
│   ├── button.scss
│   ├── container.scss
│   ├── globals.scss
│   ├── variables.scss
│   ├── variables.module.scss
│   ├── functions.scss
│   └── mixins.module.scss
├── redux/
│   ├── index.ts
│   ├── language-slice.ts
│   └── store.t
├── models/
│   ├── auth.ts
│   ├── header-menu.ts
│   ├── user.ts
│   ├── response.ts
│   └── index.ts
├── hooks/
│   ├── index.ts
│   └── use-window-dimensions.ts
├── utils/
│   ├── date-utils.ts
│   ├── string-utils.ts
│   ├── number-utils.ts
│   └── index.ts
├── constants/
│   ├── header-menu-data.ts
│   ├── path-names.ts
│   ├── strings.ts
│   ├── numbers.ts
│   └── index.ts
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

### Thư mục app

- Nơi định nghĩa các route của website.
- **Lưu ý:** Chỉ lưu trữ các route, page và một số file đặc biệt như `not-found` (page 404), `layout` (layout của route), không lưu trữ các component khác (các component khác sẽ lưu trữ trong thư mục `components` được đề cập ở phần sau).
- **VD:**
  ```CSS
  app/
  ├── contact-us/
  │   └── page.tsx
  ├── services/
  │   ├── software-testing/
  │   │   └── page.tsx
  │   └── digital-transformation/
  │       └── page.tsx
  ├── layout.tsx
  ├── page.tsx
  ├── not-found.tsx
  └── favicon.ico
  ```

### Thư mục components

- Nơi chứa toàn bộ **component** được phân theo các feature trong website.
- **VD:**

  ```CSS
  components/
  ├── common
  │   ├── buttons/
  │   │   ├── primary-button.tsx
  │   │   ├── primary-button.module.scss
  │   │   └── index.ts
  │   ├── layout/
  │   │   ├── default-layout.tsx
  │   │   ├── default-layout.module.scss
  │   │   ├── footer.tsx
  │   │   ├── footer.module.scss
  │   │   ├── header.tsx
  │   │   ├── header.module.scss
  │   │   └── index.ts
  │   ├── coming-soon.tsx
  │   ├── coming-soon.module.scss
  │   ├── logo.tsx
  │   ├── logo.module.scss
  │   ├── not-found.tsx
  │   ├── not-found.module.scss
  │   ├── redux-provider.tsx
  │   └── index.ts
  ├── home
  │   ├── home-banner.tsx
  │   ├── home-banner.module.tsx
  │   ├── home-content.tsx
  │   ├── home-content.module.tsx
  │   ├── home-footer.tsx
  │   ├── home-footer.module.tsx
  │   ├── home.tsx
  │   ├── home.module.tsx
  │   └── index.ts
  ├── contact-us
  │   ├── contact-us-banner.tsx
  │   ├── contact-us-banner.module.tsx
  │   ├── contact-us-content.tsx
  │   ├── contact-us-content.module.tsx
  │   ├── contact-us-footer.tsx
  │   ├── contact-us-footer.module.tsx
  │   ├── contact-us.tsx
  │   ├── contact-us.module.tsx
  │   └── index.ts
  ├── services
  │   ├── services-banner.tsx
  │   ├── services-banner.module.tsx
  │   ├── services-content.tsx
  │   ├── services-content.module.tsx
  │   ├── services-footer.tsx
  │   ├── services-footer.module.tsx
  │   ├── services.tsx
  │   ├── services.module.tsx
  │   └── index.ts
  ├── software-testing
  │   ├── software-testing-banner.tsx
  │   ├── software-testing-banner.module.tsx
  │   ├── software-testing-content.tsx
  │   ├── software-testing-content.module.tsx
  │   ├── software-testing-footer.tsx
  │   ├── software-testing-footer.module.tsx
  │   ├── software-testing.tsx
  │   ├── software-testing.module.tsx
  │   └── index.ts
  ├── digital-transformation
  │   ├── digital-transformation-banner.tsx
  │   ├── digital-transformation-banner.module.tsx
  │   ├── digital-transformation-content.tsx
  │   ├── digital-transformation-content.module.tsx
  │   ├── digital-transformation-footer.tsx
  │   ├── digital-transformation-footer.module.tsx
  │   ├── digital-transformation.tsx
  │   ├── digital-transformation.module.tsx
  │   └── index.ts
  └── index.ts
  ```

### Thư mục public

- Nơi lưu trữ các tài nguyên tĩnh như hình ảnh, font chữ, favicon, và các tệp tin khác.
- Các thư mục trong thư mục `public` nên được chia theo các feature để dễ dàng hệ thống và tái sử dụng.

### Thư mục styles

- Nơi chứa các file style (CSS, SCSS) dùng chung trong dự án.
- **VD:**
  ```CSS
    styles/
    ├── button.scss
    ├── container.scss
    ├── globals.scss
    ├── variables.scss
    ├── variables.module.scss
    ├── functions.scss
    └── mixins.scss
  ```
- **Một số file style cần thiết:**
  - `globals.scss`: File style áp dụng cho toàn bộ website.
  - `variables.scss`: File style lưu trữ tất cả các biến style dùng chung trong toàn bộ website.
  - `variables.module.scss`: File style module cho phép export các biến style trong `variables.scss` để có thể sử dụng trong file `ts` hay `tsx`.
  - `functions.scss`: File style lưu trữ các functions SCSS dùng chung trong toàn bộ website.
  - `mixins.scss`: File style lưu trữ các định nghĩa mixin dùng chung trong toàn bộ website.

### Thư mục services

- Nơi chứa các file services hỗ trợ việc giao tiếp với **API**.
- **VD:**
  ```CSS
  services/
   ├── index.ts
   ├── auth-services.ts
   └── axios-client.ts
  ```
- **Một số file quan trọng**:
  - `axios-client.ts`: File cấu hình chung khi sử dụng axios để gọi API.

### Thư mục redux:

- Nơi chứa các file hỗ trợ việc sử dụng **Redux** để quản lý trạng thái toàn cục của ứng dụng.
- Sử dụng **Redux Toolkit** giúp đơn giản hóa việc sử dụng **Redux**.
- **VD:**
  ```CSS
  redux/
  ├── index.ts
  ├── language-slice.ts
  ├── store.ts
  └── ...
  ```
- **Một số file quan trọng:**
  - `store.ts`: File cấu hình và tạo ra **Redux store** cho ứng dụng, nơi kết hợp các **reducers**, áp dụng **middleware** và các cấu hình khác cần thiết để quản lý trạng thái toàn cục của ứng dụng.

### Thư mục constants

- Nơi chứa các file lưu trữ các biến constants của website.
- **VD:**
  ```CSS
    constants/
    ├── header-menu-data.ts
    ├── path-names.ts
    ├── strings.ts
    ├── numbers.ts
    └── index.ts
  ```
- **Một số file thông dụng:**
  - `path-names.ts`: File lưu trữ tất cả các đường dẫn trong toàn bộ website.
  - `strings.ts`: File lưu trữ các chuỗi dùng chung trong website.
  - `numbers.ts:` File lưu trữ các số liệu dùng chung trong website.
  - `header-menu-data.ts:` File lưu trữ dữ liệu của Header Menu.
- **Lưu ý:** Các biến được khai báo trong file `.env` có thể khai báo vào đây để dễ dàng sử dụng hơn(Code có khả năng gợi ý tốt và ngắn gọn hơn).

### Thư mục utils

- Nơi lưu trữ các hàm tiện ích **(utility functions)** và các **module** tiện ích chung sử dụng trong toàn bộ ứng dụng.
  ```CSS
  utils/
  ├── date-time-utils.ts
  ├── string-utils.ts
  ├── number-utils.ts
  └── index.ts
  ```
- **Một số file thông dụng:**
  - `date-time-utils.ts`: File lưu trữ tất cả các function hỗ trợ xử lý dữ liên quan đến thời gian trong ứng dụng.
  - `strings.ts`: File lưu trữ tất cả các function hỗ trợ việc xử lý chuỗi trong website.
  - `numbers.ts:` File lưu trữ tất cả các function hỗ trợ việc xử lý số liệu dùng chung.

### Thư mục hooks

- Nơi chứa các **hook** tùy chỉnh có khả năng sử dụng trong toàn bộ ứng dụng.
- **VD:**
  ```CSS
  hooks/
  ├── index.ts
  └── use-window-dimensions.ts
  ```

### Thư mục models

- Nơi chứa các file định nghĩa các **interface** hoặc **type** mô tả cấu trúc của dữ liệu được trao đổi hoặc lưu trữ trong ứng dụng.
- **VD:**
  ```CSS
  models/
  ├── auth.ts
  ├── header-menu.ts
  ├── user.ts
  ├── response.ts
  └── index.ts
  ```
