- Currently playing with the [Modular scale](/modularscale)
- Also trying to display some [Photos](/photos)
- There is a [Playground](/example)

# What to do for The System

## Today
_Done for the day._

## Done today
* [x] Bring in md content from previous project
    * [x] Copy files
    * [x] How to feed an `.md` file? (Watch [that tutorial](https://www.youtube.com/watch?v=MsSUAOkepCw&t=412s&ab_channel=ColbyFayock) again)
    * [x] install next-mdx-remote
    * [x] serve through a dynamic route (by id)

## Tomorrow
- Let's not go overboard with fancy components just yet
    - [ ] Set up a good file structure start organizing the notes to files and folders, all accessible via the system `url` (in `public/`?)
    - [ ] Somehow distinguish between `.md` and `.mdx` (if in `/public` then `.md`)
    - [ ] Provide an automatic site map for the newly created content

## This week
- [ ] Work on typography
    - [ ] What are the ideal leading values for the headings?
    - [ ] Vertical rythm

## In near future
- [ ] Indexing feature to be able to view everything that is already in the system (all `url`s)
- [ ] Layout
    - [ ] "Recto/Verso" is a presentational detail (`CSS`): the semantic parts should be a `<main>` and `<aside>`
    - [ ] Show date & time with task lists ([Here's how, I think...](https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556))
- [ ] Install Frontmatter
- [ ] Install additional `md` features
- [ ] Set up a graph database ([Neo4J](#)?)

## No due date (draft ideas)
- Surely ChatGPT can help with the natural language phrasing (and translation)

### Done recently
- [x] Styling lists...
- [x] Please, let's migrate to `.mdx` and start writing a bit.

### More

Categorize in: `must | should | may | might` do
           in the given _time horizon:_ `today | tomorrow | this week | this weekend | this month | this year | Date | unspecified:depriorized`

# The System

## Ideas

Explore the markdown sytax and come up with possibilities
Numbering: auto | off | manual | as is
auto: number each heading sequentially (according to a template)
off: ignore manually typed numbering
manual: reorder paragraphs according to manually typed numbering
as is: apply formatting but leave the numbering as is

- [ ] intuition: event1 => (happened before/after) => event2
- [ ] photo1 => (taken) => location
- [ ] learn the syntax (cipher query languqge)

## Features I'd love to see implemented

- [ ] My financial situation
- [ ] My task lists
- [ ] as .ics to use as a Google calendar?
- [ ] GTD framework - explore it more
- [ ] TPD blog
   - [ ] as a Flow (feed)
   - [ ] as the dozenal grid (book spreads)
- [ ] Markdown editor
   - [ ] Easy to edit html generator
- [ ] tokens should be draggable boxes you can move around and shuffle