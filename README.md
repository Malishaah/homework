# 📸 React Image Gallery with Pexels API

A modern and responsive **image gallery** built with **React, TypeScript, and Styled Components**.  
Users can **search for images**, **save favorites**, and **open images in a modal**.  
Images are fetched via **Pexels API**.

---

## 🌟 Features

✅ **Search Functionality** – Users can search for images using the Pexels API  
✅ **Favorites System** – Save and remove images from a favorites list (`localStorage` support)  
✅ **Modal Image Viewer** – Click an image to open it in a large view modal  
✅ **Pagination** – Navigate through multiple pages of images  
✅ **Dark/Light Mode** – Switch between dark and light themes  
✅ **Responsive Design** – Fully optimized for mobile, tablet, and desktop  
✅ **Loading Spinner** – Displays a spinner while fetching images  

---

## 📦 **Technologies Used**

- **React 18 + TypeScript** – Modern frontend development
- **Styled Components** – CSS-in-JS for dynamic styling
- **React Query (`@tanstack/react-query`)** – Efficient API request management
- **React Router** – Navigation between pages
- **Pexels API** – Fetches images based on user search

---

## 🛠️ **Installation and Running the Project**

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/malishaah/homework.git
cd homework
```

### 🔹 2. Install Dependencies
```sh
npm install
# or
yarn install
```

### 🔹 3. Start the Development Server
```sh
npm start
# or
yarn start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 **Project Structure**
```
📂 react-pexels-gallery
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Navbar.tsx
 ┃ ┃ ┣ 📜 SearchBar.tsx
 ┃ ┃ ┣ 📜 ImageGallery.tsx
 ┃ ┃ ┣ 📜 ImageCard.tsx
 ┃ ┃ ┣ 📜 Favorites.tsx
 ┃ ┃ ┣ 📜 Modal.tsx
 ┃ ┃ ┣ 📜 ThemeSwitcher.tsx
 ┃ ┃ ┣ 📜 Pagination.tsx
 ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┗ 📜 NotFound.tsx
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 index.tsx
 ┃ ┣ 📜 api.ts
 ┃ ┣ 📜 types.ts
 ┃ ┗ 📜 styles.ts (global styling)
 ┣ 📜 package.json
 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

---


## 📜 **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 **Contributing**
Contributions are welcome! Feel free to open an issue or submit a pull request.

---
