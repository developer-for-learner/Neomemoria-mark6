# ChatGPT Sites UI backup — round 2 after

Created: 2026-08-14 (Asia/Tokyo)

This is an incremental post-change backup for The Word Book and TOEFL 1915. It builds on the version 5 source archives already stored on branch `backup/sites-ui-after-20260813`.

## Incremental source snapshots

- `backups/2026-08-14-after/the-word-book-v5-to-v6.patch.gz`
  - Base Sites source commit: `704efd0fe0a9cf14155567f7fd28a00c8afe229e`
  - Result Sites source commit: `70f4dcae8f93947908cd409ae3a1f85da33ba374`
  - SHA-256: `e1ba1b40b45a5ee4d68ac6f69d7f5a3a850804efd6c802ef598bb64f0cbe4584`
- `backups/2026-08-14-after/toefl1915-v5-to-v6.patch.gz`
  - Base Sites source commit: `0ec74d11d2ea67f065fb11ea0abfa184000def10`
  - Result Sites source commit: `f9d124c8bfa73fbf1ecd7d51afc358d7093faea2`
  - SHA-256: `f0702d23ab4b6ae281583cc32c28a3bae64b8689289bcae4bacb9b4b5f92e5d9`

To restore, extract the matching version 5 archive from `backups/2026-08-13-after/`, decompress the matching patch, then run `git apply` from the extracted project root.

## Deliberate public-backup exclusions

The large vocabulary bodies remain excluded from the public archives and patches:

- The Word Book: `app/official-vocabulary.ts` — SHA-256 `4c10287599e515317c7d8877d16acee38a5221f25801719cf55ceba74c18f9e3`
- TOEFL 1915: `app/vocabulary-data.ts` — SHA-256 `c892f2faec32a22713c7242dccf6eeaa1df995d7a0c9a4cdfbdc46e81d40664f`

Restore those files from the corresponding Sites source commit or the owner's protected copy. The hashes allow integrity verification without publishing the word-list contents.

## Deployment records

- The Word Book
  - URL: `https://neomemoria-lab.b26m2020k.chatgpt.site`
  - Sites version: 6
  - Version ID: `appgprj_6a78284cf43481919ba7340f267bc1d0~appgver_05b5f59955008191b06e7b21c5d34930`
  - Deployment: `appgdep_6a7ddbb76d908191a61a7745b41e3a13`
- TOEFL 1915
  - URL: `https://toefl-learning.b26m2020k.chatgpt.site`
  - Sites version: 6
  - Version ID: `appgprj_6a7827e499ac8191b7998a20d0738b8d~appgver_de4458cf179481919e65b1baceae9257`
  - Deployment: `appgdep_6a7ddbb5ab2c819189ae0e7a1f2af782`

The round-2 pre-change checkpoint is on branch `backup/sites-ui-round2-before-20260813`, at commit `ce43ed38e62f95cb5efcbc18579cf63dadf044cd`.
