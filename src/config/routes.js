import auth from '../utils/auth.js'
import Login from '../components/Login'

function redirectToLogin(nextState, replaceState) {
  if (!auth.loggedIn()) {
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
  }
}

function redirectToDashboard(nextState, replaceState) {
  console.log(nextState)
  if (auth.loggedIn()) {
    replaceState(null, '/')
  }
}

export default {
  component: require('../components/App/index'),
  childRoutes: [
    { path: '/logout',
      getComponent: (location, cb) => {
        //require.ensure([], (require) => {
          return cb(null, require('../components/Logout'))
        //})
      }
    },
    { path: '/about',
      getComponent: (location, cb) => {
        //require.ensure([], (require) => {
          return cb(null, require('../components/About'))
        //})
      }
    },

    { onEnter: redirectToDashboard,
      childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        { path: '/login',component:Login
          //getComponent: (location, cb) => {
            //require.ensure([], (require) => {
              //cb(null, require('../components/Login'))
            //})
				//require([], (require) => {
              //return cb(null, require('../components/Login'))
            //})
          //}
        }
        // ...
      ]
    },

    { onEnter: redirectToLogin,
      childRoutes: [
        // Protected routes that don't share the dashboard UI
        { path: '/user/:id',
          getComponent: (location, cb) => {
           // require.ensure([], (require) => {
              return cb(null, require('../components/User'))
            //})
          }
        }
        // ...
      ]
    },

    { 
    	path: '/',
      getComponent: (location, cb) => {
        // Share the path
        // Dynamically load the correct component
        if (auth.loggedIn()) {
        	 return cb(null, require('../components/Dashboard'))
          // return require.resolve([], (require) => {
          //   cb(null, require('../components/Dashboard'))
          // })
        }
        //return require.ensure([], (require) => {
          return cb(null, require('../components/Landing'))
        //})
      },
      indexRoute: {
        getComponent: (location, cb) => {
          // Only load if we're logged in
          if (auth.loggedIn()) {
            //return require.ensure([], (require) => {
              return cb(null, require('../components/PageOne'))
            //})
          }
          return cb()
        }
      },
      childRoutes: [
        { onEnter: redirectToLogin,
          childRoutes: [
            // Protected nested routes for the dashboard
            { path: '/page2',
              getComponent: (location, cb) => {
                //require.ensure([], (require) => {
                  return cb(null, require('../components/PageTwo'))
                //})
              }
            }
            // ...
          ]
        }
      ]
    }

  ]
}
