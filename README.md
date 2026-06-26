# CISSP Study Dashboard

A small web app I vibecoded to prepare for the CISSP exam. It follows Andrei's free CISSP Full Course on YouTube (the Certified Breakfast videos), so all the credit for the actual teaching goes to him. I just took my notes and practice questions and turned them into something I could click through while revising.

## Credit

This is based entirely on Andrei's CISSP Full Course on his Certified Breakfast channel. The course is free, it is genuinely well explained, and it is the reason this project exists. If you get value out of this dashboard, please go watch his videos and support his work directly.

Start of the course: https://www.youtube.com/watch?v=gJR5OTshpOA

The study notes and quizzes in here are my own write-ups of his material, so anything that is wrong is on me, not on him.

## What it does

- 32 modules that line up with the course, one per video
- Study notes for each module, written up from the videos
- A short practice quiz per module with answers and explanations
- Progress tracking so you can see what you have finished
- Math in the notes rendered properly with KaTeX
- Works on desktop and on a phone

## Running it

These are just static files, there is no build step. You can open index.html directly in a browser, or serve the folder if you prefer clean URLs:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Rebuilding the data

The app reads everything from data.js, which is generated from the module folders. If you change any notes or quizzes, regenerate it with:

```
python3 compile_data.py
```

There is also a small helper that checks each module's notes against its transcript for coverage:

```
python3 verify_completeness.py
```

## How it is organised

Each module sits in its own numbered folder (01_Introduction, 02_Security_101, and so on). Inside each one:

- study_notes.md is the notes
- quiz.json is the practice questions the app loads
- quiz.md and quiz_answers.md are the same quiz in a readable form
- transcript.txt is the source transcript
- metadata.json holds the title and the video link

The front end is index.html, style.css and app.js. Notes are passed through DOMPurify before they are shown, and quiz text is escaped, so the rendering side stays safe.

## Disclaimer

This is a personal study project. It is not affiliated with or endorsed by ISC2, and CISSP is a registered trademark of ISC2. It is not official course material either, just my own notes built on top of Andrei's free videos.
