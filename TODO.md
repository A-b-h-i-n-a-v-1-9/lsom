# TODO: Multi-LSoM Support

## Goal

Extend the website from **one LSoM event** to **multiple LSoMs**. Each LSoM is organized by a different running group and may have different formats, timings, dates, and venues. Flow: **list LSoMs** → user **chooses one** → **details + register link**.

---

## 1. Current State Summary

### 1.1 Single-event, env-driven design

- **All event data** comes from `.env` (Vite `import.meta.env.VITE_*`).
- One register link, one location (e.g. Pashan), one event date, one host group, one set of race start times.
- No central list of events; the site effectively assumes “the next run” is the only run.

### 1.2 Components that are event-specific (tied to single event)

| Component           | What it reads from env | Purpose |
|--------------------|------------------------|---------|
| **HeroSection**    | `VITE_REGISTER_LINK`, `VITE_REGISTER_TEXT`, `VITE_PUBLIC_BACKGROUND_IMAGE`, `VITE_LOCATION_NAME`, `VITE_PLACE_NAME`, `VITE_LOCATION_LINK`, `VITE_EVENT_DATE`, `VITE_FLAG_OFF_TIME` | Hero for “the” LSoM + CTA + date/venue |
| **RaceSchedule**   | `VITE_REGISTER_LINK`, `VITE_REGISTER_TEXT`, `VITE_EVENT_DATE`, `VITE_RACE_DIRECTOR_*`, `VITE_START_TIME_3K/5K/10K/15K` | Countdown + race times + register |
| **HostGroupSection** | `VITE_HOST_GROUP_TITLE`, `VITE_HOST_GROUP_IMAGE`, `VITE_HOST_GROUP_DESC1/2`, `VITE_HOST_GROUP_QUOTE` | Host running group for “the” event |
| **Navbar**         | `VITE_REGISTER_LINK`, `VITE_REGISTER_TEXT` | Global “Register” CTA (points to single event) |
| **Footer**         | `VITE_REGISTER_LINK` (Registration link) | Quick link to register |

### 1.3 Components that are generic (no change for multi-event)

- **InfoSection** – “What is LSoM?”, “What to Expect”, “What You Should Know” (same for all LSoMs).
- **Gallery** – currently one hardcoded album; can later become per-event or stay global.
- **ReusableBottle**, **Preloader**, **NotificationBanner** – no event data.

### 1.4 Routing

- `HashRouter`: `/*` → Home (single long page with sections), `/RoutesPage` → RoutesPage.
- No event-specific routes (e.g. no `/event/:id` or `/#/event/pashan-march-2026`).

---

## 2. Data Model for Multiple LSoMs

Each LSoM event should be described by a **single object** that can drive Hero, Race schedule, and Host section. Suggested shape:

```js
{
  id: "pashan-2026-03",           // unique slug for routing
  locationName: "Pashan LSOM",
  placeName: "NCL Cricket Ground",
  locationLink: "https://maps.app.goo.gl/...",
  eventDate: "2026-03-01T06:00:00",
  flagOffTime: "6:00 A.M.",
  registerLink: "https://konfhub.com/pashanlsom2026",
  registerText: "Register Now",
  backgroundImage: "assets/Balewadi.jpg",
  // Race format (can differ per event)
  startTimes: {
    "15 Km": "6:00",
    "10 Km": "6:15",
    "5 Km Fun Run": "6:30",
    "3 Km Walk": "6:45"
  },
  routeMapLink: "https://maps.app.goo.gl/...",  // optional, some events may not have
  raceDirectorName: "Bhupendra Bahadur Singh",
  raceDirectorPhone: "+919236165030",
  // Host group (different per event)
  hostGroup: {
    title: "Host - Pashan Running Group",
    image: "assets/Pashan_LSoM_Image_2026_2.jpeg",
    desc1: "...",
    desc2: "...",
    quote: "..."
  }
}
```

- **Listing** needs at least: `id`, `locationName`, `eventDate`, `placeName`, `registerLink`, optional `backgroundImage` or thumb for cards.
- **Detail view** uses the full object for Hero, RaceSchedule, and HostGroupSection.

---

## 3. Where Should Event Data Live?

- **Option A – JSON in repo (e.g. `public/events.json` or `src/data/events.js`)**  
  - Good for static site (current deploy is GitHub Pages).  
  - Add/edit events by updating the file and redeploying.  
  - No build-time env limits; easy to have many events and different fields per event.

- **Option B – Keep using .env**  
  - Only one “current” event is practical; adding “next’s next” would mean duplicated env vars (e.g. `VITE_EVENT_2_*`) and messy component logic.  
  - Not recommended for multiple LSoMs.

- **Recommendation:** Use a **single source of truth** (e.g. `src/data/lsomEvents.js` or `public/events.json`) for the list of events. Optionally keep `.env` only for site-wide defaults (e.g. default register text) if desired.

---

## 4. UX and Structure

### 4.1 Listing (Home or dedicated “Events” section)

- **Show upcoming LSoMs** (e.g. “Next” and “Next’s next” – at least 2).
- Each item: location name, date, venue (place name), host group name, “View details” and/or “Register”.
- Design: cards or list; mobile-friendly.

### 4.2 Detail view (per LSoM)

- User clicks “View details” (or “Register” and we still show details first) for one LSoM.
- **Options:**
  - **A)** New route: e.g. `/#/event/:id` (new page that renders Hero + Race + Host + Register for that event).
  - **B)** Same page, expandable / modal: list on top; when user selects one, show Hero + Race + Host below (or in a modal) with that event’s data.
- Recommendation: **Route-based detail** (`/event/:id`) for shareable URLs and clear “back to list” behavior.

### 4.3 Register

- Each event has its own `registerLink`.
- In **listing**: each card can have “Register” linking to that event’s link.
- In **detail**: prominent “Register” button using that event’s link (same as current Hero + RaceSchedule CTA).
- **Navbar**: either “Events” (go to list) or “Register” pointing to the **next** event’s register link (next = soonest by date). Footer “Registration” can go to list or next event.

---

## 5. What Needs to Be Done (Checklist)

### 5.1 Data and config

- [ ] **Add events data source**  
  - Create `src/data/lsomEvents.js` (or `public/events.json`) with array of events.  
  - Migrate current `.env` event into first event object so existing behavior can be preserved.

- [ ] **Define event schema**  
  - Document required vs optional fields (id, locationName, eventDate, registerLink, hostGroup, startTimes, etc.).  
  - Allow some events to have different race formats (e.g. only 5K/10K) or no route map.

- [ ] **Sorting / “next” and “next’s next”**  
  - Sort events by `eventDate`; show only upcoming (or upcoming + past for “past events” section later).  
  - Use first two for “Next” and “Next’s next” in listing if desired.

### 5.2 Routing and pages

- [ ] **Add route for event detail**  
  - e.g. `Route path="/event/:id" element={<EventDetailPage />}`.  
  - `EventDetailPage` loads event by `id` (from `lsomEvents`); if not found, redirect to home or show 404.

- [ ] **Adjust Home page**  
  - **Option A:** Home = listing only (list of LSoM cards; “View details” → `/event/:id`).  
  - **Option B:** Home = listing + keep a “featured” hero for the next event (single hero for next, then list of “More upcoming” below).  
  - Ensure “Next” and “Next’s next” are clearly visible (e.g. first two cards).

### 5.3 New components

- [ ] **LSoM list / event cards**  
  - Component that takes `events` (array) and renders cards (or list) with: location, date, venue, host name, “View details” (link to `/event/:id`), “Register” (external link).

- [ ] **Event detail page**  
  - Composes: Hero (for this event), Host section (for this event), Race schedule (for this event), Register CTA.  
  - Reuse existing HeroSection, HostGroupSection, RaceSchedule by passing **event object** as props instead of reading from env.

### 5.4 Refactor existing components to accept “event” prop

- [ ] **HeroSection**  
  - Change from `import.meta.env.*` to `props.event` (object with `locationName`, `placeName`, `eventDate`, `registerLink`, etc.).  
  - Use same layout and styling; only data source changes.

- [ ] **RaceSchedule**  
  - Accept `event` prop (with `eventDate`, `startTimes`, `registerLink`, `raceDirectorName`, etc.).  
  - Optional: support different race formats (e.g. only 3K/5K/10K) when `startTimes` or a `format` field differs.

- [ ] **HostGroupSection**  
  - Accept `event` (or `event.hostGroup`).  
  - If no host group, render nothing (as currently when env is empty).

- [ ] **Navbar**  
  - Either: link “Register” to next event’s register link (compute next from events data).  
  - Or: replace with “Events” that goes to `/#/` (listing).  
  - Ensure mobile menu matches.

- [ ] **Footer**  
  - “Registration” link: to listing page or to next event’s register URL; avoid single env register link when multiple events exist.

### 5.5 Backward compatibility and env

- [ ] **Fallback when no events data**  
  - If building with no events file or empty list, consider falling back to env-driven single event so current deploy doesn’t break.  
  - Optional: build script that generates `events.js` from `.env` for a single-event mode.

- [ ] **Document env vs events**  
  - In README or CONTRIBUTING: “Adding a new LSoM = add entry to `src/data/lsomEvents.js` (or events.json); no need to change .env for event-specific fields.”

### 5.6 Optional enhancements (later)

- [ ] **Past events**  
  - Show past LSoMs in a separate section or page (e.g. “Past runs”) with link to gallery/results if available.

- [ ] **Gallery per event**  
  - Gallery component could filter by `eventId` or show a dropdown to pick event (if gallery data is per-event).

- [ ] **SEO / meta**  
  - For `/event/:id`, set title/description from event data (e.g. “LSoM Pashan – March 2026”).

---

## 6. Suggested Implementation Order

1. **Data:** Add `src/data/lsomEvents.js` (or JSON) with current Pashan event; document schema.
2. **Refactor:** Make HeroSection, RaceSchedule, HostGroupSection accept an `event` prop; keep reading from env when `event` is missing (fallback).
3. **Listing:** Add LSoM list component and show “Next” and “Next’s next” on Home (or new “Events” section at top of Home).
4. **Routing:** Add `/event/:id` and EventDetailPage that loads event by id and renders Hero + Host + RaceSchedule with that event.
5. **Navbar & Footer:** Point Register/Registration to next event or to events list.
6. **Cleanup:** Remove or reduce event-specific env vars once all events come from data; document the new flow in README.

---

## 7. File-level Summary

| File | Action |
|------|--------|
| `src/data/lsomEvents.js` (new) | Define array of LSoM events (migrate from .env). |
| `src/App.jsx` | Add route ` /event/:id` → EventDetailPage. |
| `src/pages/Home.jsx` | Add LSoM listing (cards); optionally keep one “featured” hero for next event. |
| `src/pages/EventDetailPage.jsx` (new) | Load event by id; render HeroSection, HostGroupSection, RaceSchedule with `event` prop. |
| `src/components/HeroSection.jsx` | Refactor to use `event` prop when provided; fallback to env. |
| `src/components/RaceSchedule.jsx` | Refactor to use `event` prop; support variable race formats. |
| `src/components/HostGroupSection.jsx` | Refactor to use `event.hostGroup` (or event) prop. |
| `src/components/LSoMList.jsx` or `EventCards.jsx` (new) | List/cards of events with “View details” and “Register”. |
| `src/components/Navbar.jsx` | Register link → next event or “Events”. |
| `src/components/Footer.jsx` | Registration link → list or next event. |
| `.env` | Eventually only site-wide defaults (optional); event-specific vars superseded by events data. |
| `README.md` | Document multi-event setup and how to add a new LSoM. |

---

This covers the analysis and a concrete plan to go from one LSoM to multiple, with listing → choose LSoM → details and register, and leaves room for different formats/timings/dates/venues per event.
