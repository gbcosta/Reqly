# Reqly

> A modern API Client to build, run, view, and organize HTTP requests.

## 📌 About

**Reqly** is an API Client inspired by tools like Postman and Insomnia, created with a focus on a simple, visual, and fast development experience.

The goal is to allow developers to create and execute HTTP requests, configure parameters, headers, authentication, and body, as well as view responses in an organized way.

In the future, the project could go beyond a traditional request builder, with support for OpenAPI/Swagger and direct integration with backend projects, especially NestJS.

## 🎯 Goals

- Create and execute HTTP requests.
- Edit URL, parameters, headers, and body.
- View API responses.
- Organize requests into collections.
- Work with multiple requests in tabs.
- Offer resizable panels.
- Persist requests and configurations.
- Import OpenAPI specifications.
- Discover endpoints directly from backend projects in the future.

---

# 🚧 Current State

Reqly is currently in a phase of **structuring the interface and architecture of the API Client**.

The interface already has the conceptual division:

```text
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├───────────────┬───────────────────────────┬──────────────────┤
│   Sidebar     │         Request           │     Response     │
│               │                           │                  │
│ Collections   │ Method + URL + Tabs      │ Status           │
│ Requests      │ Params / Body / Auth      │ Headers          │
│               │ Headers / Scripts / Docs  │ Preview          │
└───────────────┴───────────────────────────┴──────────────────┘
```

A large part of this structure is still visual. The next step is to connect the components to a data model, state management, and actual execution of HTTP requests.

---

# ✨ Features

## ✅ Already Structured

- [x] Main layout
- [x] Header
- [x] Sidebar
- [x] Workspace
- [x] Request Panel
- [x] Response Panel
- [x] Request tabs
- [x] Response tabs
- [x] Visual representation of the HTTP method
- [x] URL field
- [x] Structure for Params
- [x] Structure for Body
- [x] Structure for Auth
- [x] Structure for Headers
- [x] Structure for Scripts
- [x] Structure for Docs
- [x] Visual status code
- [x] Response indicators
- [x] Initial structure for Collections
- [x] Initial structure for multiple tabs

## 🚧 Upcoming Features

- [ ] Data model for requests
- [ ] Zustand for state management
- [ ] Actual HTTP method selection
- [ ] Parameter editing
- [ ] Header editing
- [ ] Body editor
- [ ] Request execution
- [ ] Real response
- [ ] Functional collections
- [ ] Functional workspace tabs
- [ ] Local persistence

## 🔮 Future

- [ ] Environments
- [ ] Variables
- [ ] Bearer Token
- [ ] Basic Auth
- [ ] API Key
- [ ] Cookies
- [ ] Pre-request scripts
- [ ] Post-request scripts
- [ ] History
- [ ] Import/export
- [ ] OpenAPI/Swagger
- [ ] Automated tests
- [ ] Resizable panels
- [ ] Keyboard shortcuts
- [ ] Themes
- [ ] NestJS integration
- [ ] Automatic endpoint discovery

---

# 🏗️ Architecture

The architecture should evolve from a predominantly visual interface to a domain-based architecture:

```text
UI
 ↓
State
 ↓
Domain Models
 ↓
HTTP Service
 ↓
API
```

Recommended structure:

```text
src/
├── components/
│   ├── header/
│   ├── sidebar/
│   ├── workspace/
│   ├── request/
│   └── response/
│
├── stores/
│   ├── requestStore.ts
│   ├── collectionStore.ts
│   └── workspaceStore.ts
│
├── services/
│   └── http/
│       ├── client.ts
│       └── types.ts
│
├── types/
│   ├── request.ts
│   ├── response.ts
│   ├── collection.ts
│   └── workspace.ts
│
└── App.tsx
```

---

# 📦 Request Model

The request should have its own representation within the application:

```ts
type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS";

interface Request {
  id: string;
  name: string;
  method: HttpMethod;
  url: string;

  params: Record<string, string>;
  headers: Record<string, string>;

  body?: {
    type: "json" | "text" | "form-data";
    content: string;
  };

  auth?: {
    type: "none" | "bearer" | "basic" | "api-key";
  };
}
```

This model will be shared by the Sidebar, Workspace, Request Editor, and HTTP Client.

---

# 🧩 Components

## Header

Responsible for the top area of the application.

Possible future responsibilities:

- Current environment.
- Settings.
- Search.
- Shortcuts.
- Import/export.

## Sidebar

Responsible for organizing requests:

```text
Collections

📁 Users API
├── GET    Get Users
├── POST   Create User
└── DELETE Delete User

📁 Products API
├── GET    Get Products
└── POST   Create Product
```

Each request should be able to be created, renamed, duplicated, deleted, and opened in a tab.

## Request Panel

```text
Request Panel
├── Method Selector
├── URL Input
├── Send Button
├── Params
├── Body
├── Auth
├── Headers
├── Scripts
└── Docs
```

## Response Panel

```text
Response Panel
├── Status Code
├── Response Time
├── Response Size
├── Preview
├── Headers
└── Cookies
```

---

# 🌐 HTTP Client

The execution of requests should be isolated from React components.

Expected flow:

```text
Send Button
     ↓
Request Store
     ↓
HTTP Client
     ↓
fetch()
     ↓
HTTP Response
     ↓
Response Store
     ↓
Response Panel
```

This allows the HTTP client to evolve without spreading business rules across components.

---

# 🗃️ Collections

Collections organize related requests:

```text
My API
│
├── Authentication
│   ├── Login
│   └── Refresh Token
│
├── Users
│   ├── List Users
│   ├── Get User
│   ├── Create User
│   └── Delete User
│
└── Products
    ├── List Products
    └── Create Product
```

Planned operations:

- Create collection.
- Create request.
- Rename.
- Duplicate.
- Delete.
- Move request.
- Run.
- Persist.

---

# 🧠 State

The project has Zustand as a dependency, and it should centralize the application state.

### `requestStore`

Responsible for:

- requests;
- active request;
- creation;
- editing;
- deletion;
- duplication.

### `collectionStore`

Responsible for:

- collections;
- organization;
- requests belonging to each collection.

### `workspaceStore`

Responsible for:

- open tabs;
- active tab;
- opening/closing;
- tab order.

---

# 📝 Monaco Editor

The project includes `@monaco-editor/react`, which can be used in the body and response editor.

Example:

```json
{
  "name": "Gabriel",
  "email": "gabriel@example.com"
}
```

Possible features:

- Syntax highlighting.
- JSON formatting.
- Validation.
- Autocomplete.
- Auto formatting.
- Language selection.

---

# 📊 Response Viewer

The response should be presented in a structured format:

```text
200 OK     134 ms     2.4 KB

┌─────────────────────────────────────────┐
│ Preview | Headers | Cookies             │
├─────────────────────────────────────────┤
│ {                                       │
│   "id": 1,                              │
│   "name": "Gabriel"                     │
│ }                                       │
└─────────────────────────────────────────┘
```

Planned support:

- JSON.
- Text.
- HTML.
- XML.
- Headers.
- Cookies.
- Status code.
- Response time.
- Response size.

---

# 🔐 Authentication

Planned initial support:

```text
No Auth
Bearer Token
Basic Auth
API Key
```

Future:

```text
OAuth 2.0
JWT helpers
Custom authentication
```

---

# 🌎 Environments

Reqly should support different environments:

```text
Development
API_URL=http://localhost:3000

Staging
API_URL=https://staging.example.com

Production
API_URL=https://api.example.com
```

A request can use:

```text
{{API_URL}}/users
```

---

# 📚 OpenAPI / Swagger

An important future feature is importing an OpenAPI specification:

```text
OpenAPI
   ↓
Reqly
   ↓
Collections
   ↓
Requests
```

This way endpoints like:

```text
GET /users
POST /users
GET /users/:id
DELETE /users/:id
```

can be automatically converted into requests.

---

# 🚀 NestJS Integration

One of the long-term ideas is to allow direct integration with NestJS projects.

Instead of registering manually:

```text
GET /users
POST /users
DELETE /users/:id
```

Reqly could analyze the application and discover available endpoints.

```text
NestJS Project
      ↓
Reqly Connector
      ↓
Controllers
      ↓
Routes
      ↓
Collections
      ↓
Requests
```

This could become one of the main differentiators of the project.

---

# 🛣️ Roadmap

## Phase 1 — Foundation

- [x] Main interface
- [x] Sidebar
- [x] Request Panel
- [x] Response Panel
- [x] Tabs

## Phase 2 — Request Builder

- [ ] `Request` model
- [ ] Zustand
- [ ] Selectable HTTP method
- [ ] Editable URL
- [ ] Params
- [ ] Headers
- [ ] Body
- [ ] Auth

## Phase 3 — HTTP Engine

- [ ] HTTP Client
- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] Cancellation
- [ ] Timeout
- [ ] Error handling

## Phase 4 — Response

- [ ] Real status code
- [ ] Real response time
- [ ] Real response size
- [ ] JSON viewer
- [ ] Headers
- [ ] Cookies
- [ ] Raw response

## Phase 5 — Collections

- [ ] Create collection
- [ ] Create request
- [ ] Rename
- [ ] Duplicate
- [ ] Delete
- [ ] Move
- [ ] Persistence

## Phase 6 — Workspace

- [ ] Multiple tabs
- [ ] Close tabs
- [ ] Split pane
- [ ] Resize panels
- [ ] Shortcuts

## Phase 7 — Developer Experience

- [ ] Environments
- [ ] Variables
- [ ] Import/export
- [ ] History
- [ ] OpenAPI
- [ ] Scripts
- [ ] Tests

## Phase 8 — Integrations

- [ ] NestJS
- [ ] Route discovery
- [ ] Automatic collection generation
- [ ] Integration with local projects

---

# 🛠️ Stack

The implementation mainly uses:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Zustand**
- **Monaco Editor**
- **Lucide React**

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
cd reqly
```

Install dependencies:

```bash
npm install
```

or:

```bash
pnpm install
```

Start development:

```bash
npm run dev
```

or:

```bash
pnpm dev
```

---

# 🔍 What Needs to Be Improved

## Architecture

- Create domain models.
- Separate state from the UI.
- Create Zustand stores.
- Create HTTP layer.
- Better separate Request, Response, and Workspace.

## Interface

- Make tabs interactive.
- Make the HTTP method selectable.
- Implement panel resizing.
- Improve responsive behavior.
- Connect components to state.

## Functionality

- Execute real requests.
- Process responses.
- Implement Params.
- Implement Headers.
- Implement Body.
- Implement Auth.
- Implement Collections.
- Implement history.

## Code

- Avoid hardcoded data.
- Create specific types.
- Centralize business rules.
- Better separate non-JSX utilities into `.ts` files.

---

# 🎯 MVP

The first MVP doesn't need to compete with all of Postman's features.

A first functional version can contain:

```text
┌──────────────────────────────────────────┐
│ Reqly                                    │
├────────────┬─────────────────────────────┤
│ Requests   │ GET  https://api.com/users  │
│            │                             │
│            │ Params | Headers | Body     │
│            │                             │
│            │              [ Send ]       │
│            ├─────────────────────────────┤
│            │ 200 OK    132ms             │
│            │                             │
│            │ { "users": [] }             │
└────────────┴─────────────────────────────┘
```

With:

- [ ] GET
- [ ] POST
- [ ] PUT
- [ ] PATCH
- [ ] DELETE
- [ ] URL
- [ ] Params
- [ ] Headers
- [ ] JSON Body
- [ ] Send
- [ ] Response viewer
- [ ] Collections
- [ ] Local persistence

it would already be possible to present Reqly as a **functional API Client**.

---

# 🔭 Long-Term Vision

The goal is not to simply create "yet another Postman."

Reqly's differentiator could be a more integrated experience with the development process:

```text
                   ┌──────────────┐
                   │    Reqly     │
                   └──────┬───────┘
                          │
             ┌────────────┼────────────┐
             ↓            ↓            ↓
        HTTP Client   OpenAPI       NestJS
             │            │            │
             ↓            ↓            ↓
         Requests     Collections    Routes
             │            │            │
             └────────────┼────────────┘
                          ↓
                      Developer
```

The vision is to turn Reqly into a tool for **exploring, testing, and working with APIs during development**, not just a client for sending requests.

---

# 👨‍💻 Author

**Gabriel Costa**

Personal project developed as a study and experimentation of frontend development, API tools, and Developer Experience.

---

## 📄 License

The project license has not yet been defined.
