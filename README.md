# [unfinished]track-my-team
My first original tiny project - Track My Team


## Project Background
~~or just call it user story~~

Well, as a football fan I was planning to make a really *simple* web APP to track my team's fixtures and position.

It looks like this:
![node-ver](https://user-images.githubusercontent.com/41334506/215261357-7337bd33-771b-486a-8577-e9d17351431c.png)

I use Bootstrap 5 and flex layout to create responsive interface.


## Mission Break Down
All the things need to be done seems quite simple:
1. Get the option chosen by user
2. Find the corresponding team id
3. Use team id to customize URL and call ***API-FOOTBALL***
4. Sort and store the data return by API
5. Render new event boards
6. Save user chosen options to localStorage


However I had problems transfering data.
At first, I used **raw JavaScript** and **node** to build this project but I coundn't import the data returned by API into the JS file controling step 5.

I've created a local JSON file to store data using fs but couldn't import it into the JS file.

Then I refactored it using **React** but this time I coundn't even get the option sent back from frontend, even the standing widget provided by API-FOOTBALL crashed.

I tried hooks and useEffect to connect step 1~4 but since I'm a newbie who's not familiar with React/Axios/fetch I failed again.

And I spent too much time making a cascading dropbox in React.


Anyway, I'll finish it when I level up ASAP.
