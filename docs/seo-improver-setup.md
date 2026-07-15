# SEO Improver setup

BoardPrep's website is a Vite/React application. The Atom Eve SEO Improver runs as a separate Vercel project so its weekly jobs and credentials do not become part of the public frontend bundle.

## What this agent will do

- Read Google Search Console performance data for BoardPrep.
- Use DataForSEO for competitor rankings, keyword gaps, and search volume.
- Produce a weekly ranking snapshot and a short, evidence-based action report.
- Start in **report-only** mode. It will not make content changes or push commits.

## 1. Create the isolated agent project

From the BoardPrep repository root:

```bash
bash scripts/setup-seo-improver.sh
cd agents/seo-improver
npm run typecheck
npm run build
```

The bootstrap script uses a tested, pinned Eve version and Atom Eve source revision. It creates an independent Eve project, installs its dependencies, and copies the SEO Improver source into it. Do not move the generated `agent/` folder into the BoardPrep frontend root.

## 2. Configure BoardPrep

In `agents/seo-improver/agent/instructions.md`, replace the project-config block with:

```text
<!-- project-config -->
Search Console property: sc-domain:myboardprep.org
Project domain: myboardprep.org
Tracked keywords: online review center Philippines; board exam reviewer; board exam question drills; mock exam Philippines; online review for licensure exams
Blog repo and content path: not set (report-only)
<!-- /project-config -->
```

Keep the agent report-only until its first two weekly reports are reviewed. If it is later allowed to open pull requests, configure only a genuine content directory and give it a fine-grained GitHub token restricted to this repository.

## 3. Add secrets to the new Vercel project

Create and link a new Vercel project for `agents/seo-improver`. Do **not** link it to the existing BoardPrep frontend project.

Add these production environment variables in Vercel:

| Variable | Value |
| --- | --- |
| `GSC_CREDENTIALS_JSON` | One-line JSON key for a service account added as a **Restricted** user on the Search Console property |
| `DATAFORSEO_LOGIN` | DataForSEO API login |
| `DATAFORSEO_PASSWORD` | DataForSEO API password |

The service account needs no Google Cloud role. It only needs Restricted access in Google Search Console. Never commit its JSON key or any API credential.

## 4. Verify and deploy

```bash
vercel link
vercel env pull
npm run typecheck
npm run build
npx eve dev
vercel --prod
```

Use the local run to confirm that the agent can list the `sc-domain:myboardprep.org` property and read Search Console data. A weekly schedule is included by Atom Eve. Review the first report before enabling any optional GitHub pull-request workflow.

## Optional delivery

The default installation above has no Slack channel. After the report quality is established, add your preferred delivery channel, such as Slack, using the Atom Eve CLI and a dedicated notification channel.

## Security boundary

The Vite frontend never receives the Google key, DataForSEO credentials, or an optional GitHub token. They belong only to the isolated Vercel SEO agent project.
