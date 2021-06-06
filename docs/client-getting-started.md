## Client 
### Create a new page
To create a new page, you can start by creating a new component under `/client/src/pages` folder. Either a folder or a file. Preferred to a folder.
Then you can add a new route under the `client/src/routes/index.js` file with the appropriate location

### Adding a layout
You can either place that under any of the existing layout or create a new layout component and place that in here. Whenever creating a layout, you should always use `outlet` to let react know where to push a child component

### Creating seperate components
A page can have multiple components under it, in that case you can place your component under `client/src/components/[Page-Name]/[Component-Name].jsx`
There can be multiple components for the same page

### Using the theme
Always use a theme to give colors and bordered to your components
To customize the theme you can edit/add more variables in file `client/src/theme/theme.js`. 

To change in the provided setting for multi theme project, you can customized `client/src/theme/index.js`

To change in typography you can edit in `client/src/theme/typography.js`

To change in shadow you can edit in `client/src/theme/shadows.js`

### Connecting to store
To connect your page to store you need to create two more files i.e
`client/src/pages/reducer.js`
`client/src/pages/saga.js`
Take a reference from other reducers and saga
and then you need to add that in your 
`client/src/redux/saga/index.js`
`client/src/redux/reducer/index.js`

