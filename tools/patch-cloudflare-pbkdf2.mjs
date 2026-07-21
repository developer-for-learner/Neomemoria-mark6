import { readFileSync, writeFileSync } from 'node:fs'

const sourcePath = 'src/index.tsx'
const source = readFileSync(sourcePath, 'utf8')

let replacements = 0
const patched = source.replace(/\b600_?000\b/g, () => {
  replacements += 1
  return '100000'
})

if (replacements === 0) {
  throw new Error('PBKDF2 compatibility patch failed: expected 600000 iteration value was not found')
}

if (/\b600_?000\b/.test(patched)) {
  throw new Error('PBKDF2 compatibility patch failed: unsupported iteration value remains')
}

writeFileSync(sourcePath, patched)
console.log(`Patched ${replacements} PBKDF2 iteration value(s) for Cloudflare Workers compatibility`)
