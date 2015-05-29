# SE-Closed-Questions-Notifier
Notifies you when one of your questions are closed

---
This web-app works assuming one thing: You check the web-app *regularly* (ie. once a week/month).

Every time you visit the app, it saves the current date and time (to localStorage). Next time you check, it will look at the date saved last time and check if any sites you've chosen to check have had questions closed since the last time you checked.

There are 2 sections:

- all closed questions
- questions that have closed since you last checked

![enter image description here][1]

You can choose the site you want to check via the button at the top.

  [1]: http://i.stack.imgur.com/N8GlC.png

---

Note: This **does not** save any data about the questions. All it saves is the last time you checked, so, to get the most reliable results, you need **to check the site regularly**. I *might* turn this into a userscript that automatically adds a notification if users ask for it.  
