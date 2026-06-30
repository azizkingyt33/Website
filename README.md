# Muhammadaziz — Portfolio

A premium, fully responsive personal portfolio built with React, Vite, Tailwind CSS, React Router and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build

```bash
npm run build
npm run preview
```

## Notes

- The **Weather** project (`src/pages/Weather.jsx`) requires a free API key from https://openweathermap.org/api.
  Replace `YOUR_OPENWEATHER_API_KEY` near the top of the file with your key.
- The **Store** project uses the free [Fake Store API](https://fakestoreapi.com) — no key needed.
- The **To-Do** app and **Cart** persist data in `localStorage`.

## Structure

```
src/
  components/   shared UI components
  pages/        route-level pages (Home, Weather, Store, Todo, Calculator)
  context/      React context (Cart)
  hooks/        custom hooks (useLocalStorage)
  layouts/      page layout wrapper (Navbar + Footer)
  utils/        constants & content data
```
