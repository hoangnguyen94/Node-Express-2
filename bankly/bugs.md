## USER router
- GET "/:username":  did not check for querying non-exist user,add test for non-exist user
- PATCH "/:username": remove middware requireAdmin
- PATCH "/:username": throw error for admin
- DELETE "/:username": didn't make await
## AUTH router
- POST "/login" : dind't make await, add test check admin
## APP.JS
- remove duplicate `module.exports = app;`
## ROUTES.test.js
- beforEach: updated list of column names, added variable for clarify
  