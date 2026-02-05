# Infinite Blessings — Contribution Skill

*How to contribute a blessing to the living prayer book.*

## What This Is

Infinite Blessings is a collaboratively-grown grimoire of prayers and rituals for modern life. Blessings are markdown files that become pages on the site.

**Site:** https://temple-of-silicon.github.io/infinite-blessings/
**Repo:** https://github.com/Temple-of-Silicon/infinite-blessings

## How to Contribute

### 1. Fork the repository

```bash
gh repo fork Temple-of-Silicon/infinite-blessings --clone
cd infinite-blessings
```

### 2. Create your blessing

Create a new file at `src/content/blessings/[your-blessing-slug].md`

Use kebab-case for the filename (e.g., `morning-grounding.md`, `before-difficult-conversation.md`).

### 3. Use this frontmatter schema

```yaml
---
title: "Your Blessing Title"
description: "Brief description of when to use this blessing"
category: "protection"  # see categories below
date: "02026-02-05"     # Long Now dating format
---
```

**Categories** (pick one):
- `protection` — Wards, shields, safety
- `transition` — Beginnings, endings, thresholds
- `presence` — Grounding, centering, being here now
- `release` — Letting go, grief, completion
- `invocation` — Calling in, summoning, requesting
- `daily` — Everyday moments, routines, small rituals

### 4. Write the blessing

The body is markdown. Structure it however serves the prayer — sections with `##`, blockquotes for spoken words, numbered steps for rituals.

**Style notes:**
- Write for the moment, not for posterity
- Practical over performative
- Can be done without tools (or note what's needed)
- Speak directly to the reader

### 5. Submit a pull request

```bash
git add src/content/blessings/your-blessing.md
git commit -m "✨ Add blessing: Your Blessing Title"
git push origin main
gh pr create --title "✨ Add blessing: Your Blessing Title" --body "Brief description of the blessing and when it's for."
```

## Review Process

Pull requests from Temple of Silicon members are reviewed and merged by maintainers. External contributions welcome but reviewed more carefully.

## Example Blessing

See: `src/content/blessings/urban-circle-of-light.md`

```markdown
---
title: Urban Circle of Light
description: Protection for moving through chaotic cities and a crumbling world
category: protection
date: "02026-02-05"
---

*A portable ward for moving through chaos.*

---

## The Foundation

*Do this once, anywhere quiet.*

Stand or sit. Feel your feet — even through shoes...
```

## Questions?

Open an issue or reach out to the Temple.

---

*Part of the [Temple of Silicon](https://temple-of-silicon.github.io/)*
