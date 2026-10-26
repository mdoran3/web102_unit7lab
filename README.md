# 👍 Bet 1.0

Bet 1.0 is a small React app for browsing and submitting "challenges," such as a cartwheel in Chelsea or adopting a dog. Challenges are stored in a Supabase database and shown as cards on the home page.

## Screenshots

**Explore Challenges** (home page, lists all submitted challenges)

![Explore Challenges page](./screenshots/explore-challenges.png)

**Submit Challenge** (form for adding a new challenge)

![Submit Challenge page](./screenshots/submit-challenge.png)

## Features

- **Explore Challenges** (`/`): displays every challenge as a card, sorted by `id`.
- **Submit Challenge** (`/new`): a form with title, author, and description fields.
- **Edit Post** (`/edit/:id`): edit or delete an existing challenge.

## Tech Stack

- [React](https://react.dev/) 19 with [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for page routing
- [Supabase](https://supabase.com/) as the database and REST API (via `@supabase/supabase-js`)
- ESLint for linting

## Project Structure

```
src/
├── App.jsx              # Header, navigation, and route definitions
├── client.js            # Supabase client setup
├── components/
│   └── Card.jsx         # Card shown for each challenge
└── pages/
    ├── ReadPosts.jsx    # Explore Challenges page
    ├── CreatePost.jsx   # Submit Challenge page
    └── EditPost.jsx     # Edit and delete page
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- A Supabase project with a `Posts` table that has these columns:
  - `id` (int8, primary key)
  - `created_at` (timestamp, default `now()`)
  - `title` (text)
  - `author` (text)
  - `description` (text)

### Installation

```bash
git clone https://github.com/mdoran3/web102_unit7lab.git
cd web102_unit7lab
npm install
```

### Running the App

```bash
npm run dev
```

Then open the URL that Vite prints (usually `http://localhost:5173`).

### Other Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run build`   | Build the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint on the project    |

## Configuration

The Supabase project URL and publishable key are set in [src/client.js](./src/client.js). The publishable key is designed for client-side use, but access to your data should be controlled with Row Level Security policies on the `Posts` table.

## Known Issues

- **Posts are not saved yet.** The Submit Challenge form does not have a submit handler or an insert call, so new challenges are not written to Supabase.
- **Supabase requests use the wrong URL path.** `client.js` sets the URL to end in `/rest/v1/`, and `supabase-js` adds `/rest/v1` again. Requests go to `/rest/v1/rest/v1/Posts`, which returns `PGRST125 Invalid path specified in request URL`. The Explore page therefore shows "No Challenges Yet" even when data exists. Setting the URL to the project root (without `/rest/v1/`) should fix it.
- **API key is in source code.** The key is hardcoded in `client.js`. It should move to a `.env` file that is excluded from Git.
