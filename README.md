# Bug reproduction

Reproduces this issue: https://github.com/pngwn/MDsveX/issues/524

I have shell code blocks with multi-line commands. Each line should end in a \ but the backslash is removed before
rendering to HTML. Escaping by using \\ doesn't fix the issue.
