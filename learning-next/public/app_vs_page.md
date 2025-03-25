# ✅ Differences Between Next.js 15 (App Router) and Next.js 12 (Pages Router)

---

## 🚀 1. Routing Mechanism

| Feature                 | **Next.js 15 (App Router)**            | **Next.js 12 (Pages Router)**                 |
| ----------------------- | -------------------------------------- | --------------------------------------------- |
| **File Location**       | Uses `app/` directory for route files. | Uses `pages/` directory for route files.      |
| **Routing Syntax**      | Follows nested folder-based routing.   | Uses file-based routing.                      |
| **Default Rendering**   | Server Components by default.          | Client Components by default.                 |
| **Middleware Location** | Uses `middleware.ts` globally.         | Uses `middleware.js/ts` but only in `pages/`. |

---

## ⚙️ 2. Rendering Model

| Feature                                   | **Next.js 15 (App Router)**                        | **Next.js 12 (Pages Router)**                           |
| ----------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| **Default Rendering Mode**                | Server Components by default.                      | Client Components by default.                           |
| **Server-Side Rendering**                 | Built-in with React Server Components (RSC).       | Uses `getServerSideProps()` for SSR.                    |
| **Static Rendering**                      | Automatic with React's Suspense and Streaming.     | Uses `getStaticProps()` and `getStaticPaths()` for SSG. |
| **Streaming**                             | Supports React's Server Components with streaming. | No built-in streaming support.                          |
| **Incremental Static Regeneration (ISR)** | Supported with streaming.                          | Supported using `revalidate` in `getStaticProps()`.     |

---

## 🛠️ 3. Data Fetching

| Feature                    | **Next.js 15 (App Router)**                           | **Next.js 12 (Pages Router)**                                        |
| -------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| **Server-Side Fetching**   | Fetching happens **inside Server Components**.        | Requires `getServerSideProps()` for SSR.                             |
| **Client-Side Fetching**   | Uses `useEffect()` or `useSWR()` for client fetching. | Same with `useEffect()` or `useSWR()`.                               |
| **Data Caching**           | Automatic caching for Server Components.              | No built-in caching, requires SWR or React Query.                    |
| **Parallel Data Fetching** | Built-in support with async/await and `Suspense`.     | Requires manual handling with `Promise.all()`.                       |
| **API Requests**           | Can call APIs directly inside Server Components.      | Requires `getServerSideProps()` or `getStaticProps()` for API calls. |

---

## 🔥 4. Server and Client Components

| Feature               | **Next.js 15 (App Router)**           | **Next.js 12 (Pages Router)**                  |
| --------------------- | ------------------------------------- | ---------------------------------------------- |
| **Server Components** | Supported by default.                 | Not supported.                                 |
| **Client Components** | Use `use client` directive.           | All components are client by default.          |
| **Mixing Components** | Can mix Server and Client Components. | Cannot mix server and client in the same file. |

---

## 🔑 5. Layouts and Nested Routing

| Feature            | **Next.js 15 (App Router)**                             | **Next.js 12 (Pages Router)**                 |
| ------------------ | ------------------------------------------------------- | --------------------------------------------- |
| **Shared Layouts** | Supported using `layout.tsx`.                           | No built-in support for shared layouts.       |
| **Nested Routing** | Built-in nested routing using folders.                  | Requires manual nesting of layout components. |
| **Route Groups**   | Uses `(folder)` for grouping without affecting the URL. | No route grouping feature.                    |

---

## 🌐 6. API Routes

| Feature             | **Next.js 15 (App Router)**                         | **Next.js 12 (Pages Router)**                 |
| ------------------- | --------------------------------------------------- | --------------------------------------------- |
| **API Handling**    | Uses `app/api` with Route Handlers (`GET`, `POST`). | Uses `pages/api` with custom handlers.        |
| **Middleware**      | Uses `middleware.ts` globally.                      | Uses `middleware.js/ts` but only in `pages/`. |
| **Request Context** | Uses `Request` and `Response` objects.              | Uses `req` and `res` objects.                 |

---

## 🛡️ 7. Middleware and Rewrites

| Feature                | **Next.js 15 (App Router)**                   | **Next.js 12 (Pages Router)**                    |
| ---------------------- | --------------------------------------------- | ------------------------------------------------ |
| **Middleware**         | Uses `middleware.ts` globally.                | Middleware in `pages/` folder only.              |
| **Rewrites/Redirects** | Uses `next.config.js` for rewrites/redirects. | Same mechanism in `next.config.js`.              |
| **Authentication**     | Can use middleware for auth at the edge.      | Requires custom server logic for authentication. |

---

## ⚡ 8. Performance and Caching

| Feature                                   | **Next.js 15 (App Router)**                           | **Next.js 12 (Pages Router)**                      |
| ----------------------------------------- | ----------------------------------------------------- | -------------------------------------------------- |
| **Optimized for Streaming**               | Built-in support for streaming and partial rendering. | No streaming support.                              |
| **Automatic Caching**                     | Automatically caches server-rendered content.         | No automatic caching.                              |
| **Incremental Static Regeneration (ISR)** | Supported with streaming.                             | Supported with `revalidate` in `getStaticProps()`. |

---

## 🌟 9. Component Lifecycle and Hooks

| Feature                 | **Next.js 15 (App Router)**                  | **Next.js 12 (Pages Router)**          |
| ----------------------- | -------------------------------------------- | -------------------------------------- |
| **useEffect Execution** | Runs only on the client.                     | Runs on the client by default.         |
| **Lifecycle Hooks**     | Server Components have no lifecycle methods. | All components have lifecycle methods. |

---

## 🔥 10. Compatibility and Legacy

| Feature           | **Next.js 15 (App Router)**   | **Next.js 12 (Pages Router)**          |
| ----------------- | ----------------------------- | -------------------------------------- |
| **Compatibility** | New, not backward compatible. | Backward compatible.                   |
| **Recommended**   | Preferred for new projects.   | Used for legacy and existing projects. |

---

## ✅ Key Takeaways

- **Next.js 15 (App Router)** introduces **React Server Components** by default, making it more efficient and modern. It supports **streaming, automatic caching**, and parallel data fetching.
- **Next.js 12 (Pages Router)** is fully client-based by default, making it less efficient for large-scale apps. It uses `getServerSideProps()` and `getStaticProps()` for data fetching.
- **App Router** provides better performance, automatic caching, and built-in support for nested layouts and route grouping.
- **Pages Router** is more familiar and backward-compatible, making it suitable for **legacy projects**.
