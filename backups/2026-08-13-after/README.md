# ChatGPT Sites UI backup — after

Created: 2026-08-13 (Asia/Tokyo)

This branch stores the post-change source snapshots for the two ChatGPT Sites projects.

## Source snapshots

- `backups/2026-08-13-after/the-word-book-source.tar.gz`
  - Sites source commit: `704efd0fe0a9cf14155567f7fd28a00c8afe229e`
  - Sites version: 5
  - SHA-256: `f8aa22954ee9ae432c245c19cd12b9c7089cd761488d2e58bab81b56bf351a04`
- `backups/2026-08-13-after/toefl1915-source.tar.gz`
  - Sites source commit: `0ec74d11d2ea67f065fb11ea0abfa184000def10`
  - Sites version: 5
  - SHA-256: `f4474452520ccc948367fef9526059b0652d8244732e23bd6b573713319b4bb2`

## Deliberate public-backup exclusions

The large vocabulary bodies are not included in these public archives:

- The Word Book: `app/official-vocabulary.ts` — SHA-256 `4c10287599e515317c7d8877d16acee38a5221f25801719cf55ceba74c18f9e3`
- TOEFL 1915: `app/vocabulary-data.ts` — SHA-256 `c892f2faec32a22713c7242dccf6eeaa1df995d7a0c9a4cdfbdc46e81d40664f`

Restore those files from the corresponding Sites source commit or the owner's protected copy. The hashes allow integrity verification without publishing the word-list contents.

## Deployment records

- The Word Book: version 5, deployment `appgdep_6a7dd1fb2fb08191bd56d35c759b22b4`
- TOEFL 1915: version 5, deployment `appgdep_6a7dd21edeac8191841921e111ef9c0e`

The pre-change snapshot is on branch `backup/sites-ui-before-20260813`, commit `bf2bc66bb5fe95ac5f1702c80b5b66d37629480f`.
