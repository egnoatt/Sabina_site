"""Discover local public pages and articles so new routes inherit browser coverage."""
from pathlib import Path


def public_routes():
    routes = {
        '/' + str(page.parent.relative_to('src/app')).replace('.', '').strip('/')
        for page in Path('src/app').rglob('page.tsx')
        if '[' not in str(page) and '(' not in str(page)
    }
    routes.update('/blog/' + post.stem for post in Path('src/content/blog').glob('*.md'))
    return sorted(routes)


def local_requests_only(context):
    """Prevent local QA from fetching third-party embeds or production resources."""
    from urllib.parse import urlparse
    context.route('**/*', lambda route: route.continue_()
                  if urlparse(route.request.url).hostname in ('127.0.0.1', 'localhost')
                  else route.abort())
