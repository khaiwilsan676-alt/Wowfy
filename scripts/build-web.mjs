import { mkdir, copyFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const src = new URL('../web/', import.meta.url);
const out = new URL('../www/', import.meta.url);

async function copyDir(from, to) {
  await mkdir(to, { recursive: true });
  for (const entry of await readdir(from)) {
    const a = join(from.pathname, entry);
    const b = join(to.pathname, entry);
    const s = await stat(a);
    if (s.isDirectory()) await copyDir(new URL(a), new URL(b));
    else await copyFile(a, b);
  }
}
await copyDir(src, out);
console.log('Wowfy web assets copied to www/');
