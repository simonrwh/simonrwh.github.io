# Simon's Customized Site Notes

This file documents local changes and workflows that are specific to this site, separate from the upstream al-folio README.

## Docker Basics

Run the site normally at `http://localhost:8080`:

```bash
docker compose up
```

Run the site in the background and get your terminal back:

```bash
docker compose up -d
```

Stop the background site later:

```bash
docker compose down
```

Check whether it is running, or watch logs again:

```bash
docker compose ps
docker compose logs -f
```

Press `Ctrl+C` to stop watching logs. If the site was started with `-d`, this does not stop the container.

After adding or changing gems, rebuild the Docker image once:

```bash
docker compose up --build
```

Plain `docker compose up` does not reliably rebuild the image after `Gemfile`, `Gemfile.lock`, or `Dockerfile` changes. Normal Markdown, layout, CSS, and config edits do not need a rebuild because the repo is mounted into the container.

## Previewing Drafts

Normal `docker compose up` shows published posts, but not files in `_drafts`.

Preview drafts locally:

```bash
docker compose up jekyll-drafts
```

Preview drafts in the background:

```bash
docker compose up -d jekyll-drafts
```

The `jekyll-drafts` service is optional and uses a Docker Compose `profile`, so plain `docker compose up` still starts only the normal non-draft site. When you name the service directly, Compose starts that optional service for you. Both services use port `8080`, so stop one with `docker compose down` before switching to the other.

Build the site once with drafts included:

```bash
docker compose run --rm jekyll bundle exec jekyll build --drafts
```

## Composing Content

This site includes `jekyll-compose` for creating posts, drafts, pages, and collection entries from the command line. Type these commands in your host terminal from the repository root; Docker runs the Ruby/Jekyll command inside a container, so you do not need a local Ruby setup.

Create a draft post in `_drafts`:

```bash
docker compose run --rm jekyll bundle exec jekyll draft "My Draft Title"
```

Create a dated blog post in `_posts`:

```bash
docker compose run --rm jekyll bundle exec jekyll post "My Post Title"
```

Publish a draft into `_posts`:

```bash
docker compose run --rm jekyll bundle exec jekyll publish _drafts/my-draft-title.md
```

Move a post back to `_drafts`:

```bash
docker compose run --rm jekyll bundle exec jekyll unpublish _posts/YYYY-MM-DD-my-post-title.md
```

Rename a draft or post:

```bash
docker compose run --rm jekyll bundle exec jekyll rename _drafts/my-draft-title.md "Better Title"
```

Create a music collection entry in `_music`:

```bash
docker compose run --rm jekyll bundle exec jekyll compose "Blue Train" --collection music
```

Review generated front matter before publishing. Music entries use this site's `music-review` defaults, but fields such as artist, album art, streaming URLs, and favorite tracks still need to be filled in by hand.

## Running Commands In The Existing Container

If the site is already running in the background:

```bash
docker compose up -d
```

you can run a compose command inside that existing container:

```bash
docker compose exec jekyll bundle exec jekyll draft "My Draft Title"
```

Or open a shell inside it:

```bash
docker compose exec jekyll /bin/bash
```

Then run commands inside the container:

```bash
bundle exec jekyll draft "My Draft Title"
exit
```

This is similar to SSH, but it uses Docker's `exec` command instead of a network login.

`docker compose run --rm` creates a new temporary container for one command and removes that temporary container when the command finishes. `--rm` is not required, but it keeps old stopped one-off containers from piling up.

`docker compose exec` runs a command inside an already-running container. If the site is already running, `exec` is usually the cleaner option.
