## What change you want(ed) to make in your application
In this sprint I added authentication using clerk Organizations so that users who are members of the pixell river organization can access the application. This ensures that only organization members with pixell river can view and interact with the employee and organization lists controlling what data users can see within the app.

## What tool or tools you've made use of to make this change
To add the authentication i used clerks organizations to define which users can view and manage data. To do this i made an authentication function called protected that uses the useAuthentication hook to grab the info on the users organizations. To use the function i wrapped the it around the pages i wanted to protect and defined the organization aloud to view it.

## How this change affects the user experience
This affects the user experience by giving more privacy to the employees working at pixell river. By blocking access to the employee list people that aren't part of the organization cant look up all the employees working at the bank. It also prevent unauthorized users from adding and editing employees from the list.

## How this change affects your understanding, or conceptualization, of the app.
This change helped me understand how organizations can be used to control access in an app for users. It showed me how authentication can hide certain parts of the app from certain users based on their permissions. It also helped me see how the app can be structured around different user groups where access to different pages like employees or organization lists depends on what organization the user belongs to.