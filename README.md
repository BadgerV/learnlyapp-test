# Teachmate Task Manager 

- Teachmate Task Manager is a utility designed to assist individuals in organizing their tasks, allowing them to create, modify, and remove tasks while assigning specific statuses to each task.
- Demo Live at : https://learnlyapp-test-segunmaru-faozan.vercel.app/


### Technologies && Tools.
- ReactJs -[web framework]
- NextJs - [ReactJs framework]
- CSS - [For styling]
- Redux toolkit - [for state management]


## functionalities.
- Creating Tasks.
- Updating tasks.
- Deleting tasks
- Assigning statuses to tasks
- persistence [when a user refresh their browser, their notes are still saved].
- Mobile responsiveness.

## Code Reviews && Style.

- All next components and functional components are written in the `.jsx` format.
- Styles are saved in styles folder with the `.module.css` format.

## Dependencies used

- Date-fns : Date-fns is a popular library for handling JavaScript dates. In this app, it is utilized for formatting dates. The library provides a comprehensive set of functions for various date-related operations.
- Redux Toolkit - Redux Toolkit is employed for efficient state management. It simplifies the process of working with Redux by providing utilities like createSlice, configureStore, and more. The app uses Redux Toolkit to manage tasks' state, ensuring a scalable and maintainable state management solution.
- React-Select : React-Select is a flexible and feature-rich dropdown component for React. It is utilized in the Task Form for creating and updating tasks, providing an enhanced user experience for selecting task statuses.

## Design choices
- BEM Convention with Underscores (_): _In adherence to the BEM (Block, Element, Modifier) convention, underscores (_) are used instead of dashes (-) for class names. This decision is made to align with the constraints of Next.js, where dashes are not supported in class names. For example, styles.date_convert_text instead of styles.date-convert-text.
- Responsive Sidebar: A responsive sidebar is incorporated into the app's design to enhance navigation on devices. This choice aims to provide a seamless and user-friendly experience, especially on smaller screens.

## Run Web App on Local Environment.

* git clone the repository.

```
  $ git clone https://github.com/BadgerV/learnlyapp-test.git
```

- open `learnlyapp-test`.

```
  $ cd learnlyapp-test
```

- install dependencies.
```
 $ npm install
```

- start web app.

```
 $ npm run dev
```
