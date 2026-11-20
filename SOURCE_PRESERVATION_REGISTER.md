# Source preservation register

Baseline: `main` at commit `5830fd1e5579b6ac0e91a948c7a312beb2fb3579` (20 November 2026). These are Git blob SHA-1 identifiers as returned by the GitHub tree API **before any design work**. Comparing these values with the review branch demonstrates byte-for-byte preservation of the original files. No original file is to be removed.

| Original path | Git blob SHA | Bytes |
| --- | --- | ---: |
| `Article_16_Supplementary_Statement_July_2017.pdf` | `b27e05d0ff5d28be8eff39773c52c6ef059aeffe` | 92595 |
| `CASE_FOR_DELIBERATE_MISREPRESENTATION.md` | `9b27d3d62a16d17e7798dfb5f5ac5eed2cdc12a2` | 30685 |
| `DOCUMENTARY_SOURCE_INDEX.md` | `5e55f8ff31a637b53c1b115c8afb981c331344a1` | 7878 |
| `EVIDENCE_CROSS_REFERENCE.md` | `2b97dc49cfc70c013f5faba78bfd69737d564cdc` | 10079 |
| `FIFTY_FOUNDATIONAL_STATEMENTS_OF_THE_CASE.md` | `e3db3efbfb988f50e633aaf5ce383dd31147b832` | 53103 |
| `FIFTY_SIX_MATTERS_FOR_EXAMINATION.md` | `8ed12c0bbb4f9fad3bd49847dc8a39652de694dd` | 13067 |
| `JULY_2017_CLINICAL_RECORD_SOURCE_RECONSTRUCTION.md` | `02f5a84bc387b8d33c300f48ce239f1cf3b64d46` | 15670 |
| `Margaret_Tansey.html` | `6d5a726c5663bf9f83bc1fc82c3135b27e197361` | 1133008 |
| `README.md` | `96246f32927371e37bd22ffa621f1eb25cb3dab0` | 6721 |
| `RECIPIENT_AND_KNOWLEDGE_AUDIT.md` | `fed7ac1bd2ab15f9b1b4cc450d83b21f82fa3494` | 53927 |
| `REPOSITORY_COMPLETION_PLAN.md` | `a34346888ba9be1086da57283c51cc5772916800` | 19685 |
| `SIX_DECISIVE_PROPOSITIONS_HOSPITAL_ANSWER.md` | `86c3c86416b2f3090ebc96d5da1f0dee32b62a7f` | 29373 |
| `THE_25_ESSENTIAL_UNDERSTANDINGS.md` | `47cfb0b7c6f5b7edb633c854c5df573742b9b4b4` | 56814 |
| `THE_CASE_THREE_STATEMENTS_AND_MECHANISM.md` | `aa0267ba4747c64dd90940db8a8bb0ec0e835320` | 105652 |
| `THE_POSITIVE_FINDING_AND_THE_PERIPHERAL_HYPOTHESIS.md` | `30e7422d789b4c51f9a61c62c5e8c8bd42cf5f7d` | 30958 |
| `THE_SIX_SEQUENCES_AND_FIVE_MECHANISMS.md` | `08f8905146ca046fc1833d1858922e0d09c1652e` | 31075 |
| `THE_UNANSWERED_REFERRAL.md` | `02cdd99681415f113becbbcc6d2b2f707aa4252b` | 53931 |
| `THE_UNANSWERED_REFERRAL_CANONICAL_WORKING_CASE.md` | `15d79fdc36abb62306efdfb82988076e141d41e5` | 34245 |
| `WHEN_INSTITUTIONS_BECOME_THE_AUTHORITY_ON_THEIR_OWN_ERRORS.md` | `7518fe545781fbe2fda0db7ca46084d190ad8db0` | 21946 |
| `WORKING_CASE_THEORY_AND_EVIDENCE_REGISTER.md` | `5cc8e90a42c1f74cd177b084e56778ba935c843e` | 97587 |
| `document_05_manuscript.jpg` | `fc3937a2d54f676307025faaa627d1f3baa27777` | 117590 |
| `document_06_manuscript.jpg` | `7331f9edec7f9039ac932b7aadce9add1a9dd9b8` | 163959 |
| `document_07_manuscript.jpg` | `7c8945c2e3cabe9b6ab40f75831fc2dd6aedd262` | 180246 |
| `documentary-comparison.html` | `17e30a8bcb7fbf79fd5fadbe2ab0591a3bc6de8a` | 24346 |
| `index.html` | `83f4d2462679072d7a4f37b8dbd761e5c6f4eb46` | 22923 |
| `origami.css` | `0832d1277dac4890489acc47909f6d42ad9e249d` | 12572 |
| `origami.js` | `2e806efb6b97be4563b2af6809a16bcf95e55461` | 8490 |
| `records-mobile.html` | `e7f597044d45df8394207c6cc0298999173fe17b` | 10994 |
| `supporting.html` | `fef3ca85e61d378fb966b1440a5da1897a122f85` | 11211 |

Review rule: every original Markdown, documentary HTML, PDF, and image retains the same Git blob SHA. Interface HTML/CSS/JS may change solely to add or improve presentation and navigation; check the PR diff for those changes. The repository's original prose is not edited.
