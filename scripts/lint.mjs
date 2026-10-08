import { spawnSync } from 'node:child_process'

const result = spawnSync(
  process.execPath,
  ['node_modules/eslint/bin/eslint.js', 'src'],
  {
    stdio: 'inherit',
    env: { ...process.env, ESLINT_USE_FLAT_CONFIG: 'true' },
  }
)

process.exit(result.status ?? 1)
