
#!/usr/bin/env bash
set -e

# Node
if [ -f frontend/package.json ]; then
  cd frontend
  npm i
  cd -
fi

# Python
if [ -f backend/requirements.txt ]; then
  cd backend
  python -m venv .venv
  source .venv/bin/activate
  pip install -U pip
  pip install -r requirements.txt
  pip install black ruff uvicorn fastapi
  deactivate
  cd -
fi
