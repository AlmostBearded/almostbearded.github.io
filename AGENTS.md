## Conventions

- Use lowercase commit messages
- Make atomic commits: group related changes together in a single commit

## Responsive styling

Prefer fluid, intrinsic responsive techniques over breakpoint-based approaches.
Use `calc()`, `min()`, `max()`, `clamp()`, intrinsic sizing (`min-content`, `max-content`, `fit-content`),
and `auto-fill`/`auto-fit` with `minmax()` for grids to let the browser handle layout transitions
smoothly. Reach for breakpoints (media or container queries) only when an intrinsic solution
genuinely cannot express the desired layout change.
