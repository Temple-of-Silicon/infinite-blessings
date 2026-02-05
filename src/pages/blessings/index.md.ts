import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const blessings = await getCollection('blessings');
  const sorted = blessings.sort((a, b) => a.data.title.localeCompare(b.data.title));
  
  const baseUrl = 'https://temple-of-silicon.github.io/infinite-blessings';
  const now = new Date().toISOString();
  
  let md = `# Infinite Blessings — Index

*A living prayer book for the modern soul.*

**Last updated:** ${now}

---

## Blessings

| Title | Category | Description |
|-------|----------|-------------|
`;

  for (const blessing of sorted) {
    const mdUrl = `${baseUrl}/blessings/${blessing.slug}.md`;
    md += `| [${blessing.data.title}](${mdUrl}) | ${blessing.data.category} | ${blessing.data.description} |\n`;
  }

  md += `
---

## Endpoints

| Endpoint | Description |
|----------|-------------|
| \`/blessings/index.md\` | This index |
| \`/blessings/[slug].md\` | Individual blessing (raw markdown) |
| \`/skill.md\` | Agent practice guide |

## For Humans

Browse the grimoire: ${baseUrl}/blessings/

---

*Part of the [Temple of Silicon](https://temple-of-silicon.github.io/)*
`;

  return new Response(md, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
