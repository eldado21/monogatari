# Japanese Tale Generator (Local Web App)

A local webapp that generates **Japanese tales** based on a given **topic** and a **JLPT N level**.  


## Tech Stack


**Frontend** Vanilla JS + Sass
**Backend** FastAPI (Python)
**Data persistence** SQLite
**AI Engine**  Ollama or similar
**Japanese Processing** TBD (maybe Janome, pykakasi) 


## Dependencies

**Core:**
- `fastapi`
- `uvicorn`
- `sqlite3`
- `janome`
- `pykakasi`
- `sudachipy`
- `sqlalchemy`


## Ideas
- JLPT vocab lists (CSV/JSON)
- JMdict + KANJIDIC2 (for kanji meanings/readings)
- Gamification (XP, achievements)
- User profiles
- JLPT-based reading difficulty scoring
- Export tales to text/PDF
- Interactive reading interface with furigana display