/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/job-openings/route";
exports.ids = ["app/api/job-openings/route"];
exports.modules = {

/***/ "(rsc)/./app/api/job-openings/route.ts":
/*!***************************************!*\
  !*** ./app/api/job-openings/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/db */ \"(rsc)/./app/lib/db.ts\");\n\n\nasync function GET() {\n    try {\n        const jobs = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(`\n      SELECT \n        id, \n        job_title AS \"jobTitle\", \n        company_name AS \"companyName\",\n        job_type AS \"jobType\",\n        status, \n        location, \n        salary_min AS \"salaryMin\", \n        salary_max AS \"salaryMax\",\n        description \n      FROM job_openings\n    `);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(jobs.rows, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching jobs:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch jobs\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const data = await req.json();\n        const job = await _app_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(`INSERT INTO job_openings (company_name, job_title, job_type, department, location, salary_min, salary_max, experience, application_deadline, description, status) \n       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`, [\n            data.companyName,\n            data.jobTitle,\n            data.jobType,\n            data.department,\n            data.location,\n            data.salaryMin,\n            data.salaryMax,\n            data.experience,\n            data.applicationDeadline,\n            data.description,\n            data.status\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            job: job.rows[0]\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error creating job opening:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal Server Error\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2pvYi1vcGVuaW5ncy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ2I7QUFHdkIsZUFBZUU7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUYsbURBQUVBLENBQUNHLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7SUFZN0IsQ0FBQztRQUVELE9BQU9KLHFEQUFZQSxDQUFDSyxJQUFJLENBQUNGLEtBQUtHLElBQUksRUFBRTtZQUFFQyxRQUFRO1FBQUk7SUFDcEQsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU9SLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUF1QixHQUFHO1lBQUVELFFBQVE7UUFBSTtJQUM1RTtBQUNGO0FBR08sZUFBZUcsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJTixJQUFJO1FBRTNCLE1BQU1RLE1BQU0sTUFBTVosbURBQUVBLENBQUNHLEtBQUssQ0FDeEIsQ0FBQzt3RUFDaUUsQ0FBQyxFQUNuRTtZQUNFUSxLQUFLRSxXQUFXO1lBQ2hCRixLQUFLRyxRQUFRO1lBQ2JILEtBQUtJLE9BQU87WUFDWkosS0FBS0ssVUFBVTtZQUNmTCxLQUFLTSxRQUFRO1lBQ2JOLEtBQUtPLFNBQVM7WUFDZFAsS0FBS1EsU0FBUztZQUNkUixLQUFLUyxVQUFVO1lBQ2ZULEtBQUtVLG1CQUFtQjtZQUN4QlYsS0FBS1csV0FBVztZQUNoQlgsS0FBS0wsTUFBTTtTQUNaO1FBR0gsT0FBT1AscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFUSxLQUFLQSxJQUFJUCxJQUFJLENBQUMsRUFBRTtRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQy9ELEVBQUUsT0FBT0MsT0FBWTtRQUNuQkMsUUFBUUQsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBT1IscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFRyxPQUFPO1lBQXlCZ0IsU0FBU2hCLE1BQU1pQixPQUFPO1FBQUMsR0FBRztZQUFFbEIsUUFBUTtRQUFJO0lBQ3JHO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZGFyc2hcXE9uZURyaXZlXFxEZXNrdG9wXFxBc3NpZ25tZW50XFxKb2IgTWFuYWdlciBBZG1pbiBQYW5lbFxcam9iLW1hbmFnZW1lbnQtYWRtaW5cXGFwcFxcYXBpXFxqb2Itb3BlbmluZ3NcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGRiIGZyb20gJ0AvYXBwL2xpYi9kYic7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgam9icyA9IGF3YWl0IGRiLnF1ZXJ5KGBcclxuICAgICAgU0VMRUNUIFxyXG4gICAgICAgIGlkLCBcclxuICAgICAgICBqb2JfdGl0bGUgQVMgXCJqb2JUaXRsZVwiLCBcclxuICAgICAgICBjb21wYW55X25hbWUgQVMgXCJjb21wYW55TmFtZVwiLFxyXG4gICAgICAgIGpvYl90eXBlIEFTIFwiam9iVHlwZVwiLFxyXG4gICAgICAgIHN0YXR1cywgXHJcbiAgICAgICAgbG9jYXRpb24sIFxyXG4gICAgICAgIHNhbGFyeV9taW4gQVMgXCJzYWxhcnlNaW5cIiwgXHJcbiAgICAgICAgc2FsYXJ5X21heCBBUyBcInNhbGFyeU1heFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIFxyXG4gICAgICBGUk9NIGpvYl9vcGVuaW5nc1xyXG4gICAgYCk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGpvYnMucm93cywgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGpvYnM6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBqb2JzXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7IFxyXG5cclxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IGRiLnF1ZXJ5KFxyXG4gICAgICBgSU5TRVJUIElOVE8gam9iX29wZW5pbmdzIChjb21wYW55X25hbWUsIGpvYl90aXRsZSwgam9iX3R5cGUsIGRlcGFydG1lbnQsIGxvY2F0aW9uLCBzYWxhcnlfbWluLCBzYWxhcnlfbWF4LCBleHBlcmllbmNlLCBhcHBsaWNhdGlvbl9kZWFkbGluZSwgZGVzY3JpcHRpb24sIHN0YXR1cykgXHJcbiAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDksICQxMCwgJDExKSBSRVRVUk5JTkcgKmAsXHJcbiAgICAgIFtcclxuICAgICAgICBkYXRhLmNvbXBhbnlOYW1lLCBcclxuICAgICAgICBkYXRhLmpvYlRpdGxlLCBcclxuICAgICAgICBkYXRhLmpvYlR5cGUsIFxyXG4gICAgICAgIGRhdGEuZGVwYXJ0bWVudCwgXHJcbiAgICAgICAgZGF0YS5sb2NhdGlvbiwgXHJcbiAgICAgICAgZGF0YS5zYWxhcnlNaW4sIFxyXG4gICAgICAgIGRhdGEuc2FsYXJ5TWF4LCBcclxuICAgICAgICBkYXRhLmV4cGVyaWVuY2UsIFxyXG4gICAgICAgIGRhdGEuYXBwbGljYXRpb25EZWFkbGluZSwgXHJcbiAgICAgICAgZGF0YS5kZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgZGF0YS5zdGF0dXNcclxuICAgICAgXVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBqb2I6IGpvYi5yb3dzWzBdIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGpvYiBvcGVuaW5nOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJHRVQiLCJqb2JzIiwicXVlcnkiLCJqc29uIiwicm93cyIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSIsIlBPU1QiLCJyZXEiLCJkYXRhIiwiam9iIiwiY29tcGFueU5hbWUiLCJqb2JUaXRsZSIsImpvYlR5cGUiLCJkZXBhcnRtZW50IiwibG9jYXRpb24iLCJzYWxhcnlNaW4iLCJzYWxhcnlNYXgiLCJleHBlcmllbmNlIiwiYXBwbGljYXRpb25EZWFkbGluZSIsImRlc2NyaXB0aW9uIiwiZGV0YWlscyIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/job-openings/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/db.ts":
/*!***********************!*\
  !*** ./app/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    user: process.env.DB_USER || 'postgres',\n    host: process.env.DB_HOST || 'switchyard.proxy.rlwy.net',\n    database: process.env.DB_NAME || 'railway',\n    password: process.env.DB_PASSWORD || 'VAnPsPFxBBqKWxBFtkZLTTvLiPdtjqQz',\n    port: Number(process.env.DB_PORT) || 42012\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUcxQixNQUFNQyxPQUFPLElBQUlELG9DQUFJQSxDQUFDO0lBQ3BCRSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU8sSUFBSTtJQUM3QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPLElBQUk7SUFDN0JDLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssT0FBTyxJQUFJO0lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLFdBQVcsSUFBSTtJQUNyQ0MsTUFBTUMsT0FBT1YsUUFBUUMsR0FBRyxDQUFDVSxPQUFPLEtBQUs7QUFDdkM7QUFFQSxpRUFBZWIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxkYXJzaFxcT25lRHJpdmVcXERlc2t0b3BcXEFzc2lnbm1lbnRcXEpvYiBNYW5hZ2VyIEFkbWluIFBhbmVsXFxqb2ItbWFuYWdlbWVudC1hZG1pblxcYXBwXFxsaWJcXGRiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvb2wgfSBmcm9tICdwZyc7XHJcblxyXG5cclxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcclxuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSIHx8ICdwb3N0Z3JlcycsXHJcbiAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCAnc3dpdGNoeWFyZC5wcm94eS5ybHd5Lm5ldCcsXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUgfHwgJ3JhaWx3YXknLFxyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCAnVkFuUHNQRnhCQnFLV3hCRnRrWkxUVHZMaVBkdGpxUXonLFxyXG4gIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5EQl9QT1JUKSB8fCA0MjAxMixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb29sO1xyXG4iXSwibmFtZXMiOlsiUG9vbCIsInBvb2wiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJob3N0IiwiREJfSE9TVCIsImRhdGFiYXNlIiwiREJfTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJwb3J0IiwiTnVtYmVyIiwiREJfUE9SVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-openings%2Froute&page=%2Fapi%2Fjob-openings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-openings%2Froute.ts&appDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-openings%2Froute&page=%2Fapi%2Fjob-openings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-openings%2Froute.ts&appDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_darsh_OneDrive_Desktop_Assignment_Job_Manager_Admin_Panel_job_management_admin_app_api_job_openings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/job-openings/route.ts */ \"(rsc)/./app/api/job-openings/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/job-openings/route\",\n        pathname: \"/api/job-openings\",\n        filename: \"route\",\n        bundlePath: \"app/api/job-openings/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\darsh\\\\OneDrive\\\\Desktop\\\\Assignment\\\\Job Manager Admin Panel\\\\job-management-admin\\\\app\\\\api\\\\job-openings\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_darsh_OneDrive_Desktop_Assignment_Job_Manager_Admin_Panel_job_management_admin_app_api_job_openings_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZqb2Itb3BlbmluZ3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmpvYi1vcGVuaW5ncyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmpvYi1vcGVuaW5ncyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkYXJzaCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0Fzc2lnbm1lbnQlNUNKb2IlMjBNYW5hZ2VyJTIwQWRtaW4lMjBQYW5lbCU1Q2pvYi1tYW5hZ2VtZW50LWFkbWluJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNkYXJzaCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0Fzc2lnbm1lbnQlNUNKb2IlMjBNYW5hZ2VyJTIwQWRtaW4lMjBQYW5lbCU1Q2pvYi1tYW5hZ2VtZW50LWFkbWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNnRjtBQUM3SjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZGFyc2hcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxBc3NpZ25tZW50XFxcXEpvYiBNYW5hZ2VyIEFkbWluIFBhbmVsXFxcXGpvYi1tYW5hZ2VtZW50LWFkbWluXFxcXGFwcFxcXFxhcGlcXFxcam9iLW9wZW5pbmdzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9qb2Itb3BlbmluZ3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9qb2Itb3BlbmluZ3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2pvYi1vcGVuaW5ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGRhcnNoXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcQXNzaWdubWVudFxcXFxKb2IgTWFuYWdlciBBZG1pbiBQYW5lbFxcXFxqb2ItbWFuYWdlbWVudC1hZG1pblxcXFxhcHBcXFxcYXBpXFxcXGpvYi1vcGVuaW5nc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-openings%2Froute&page=%2Fapi%2Fjob-openings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-openings%2Froute.ts&appDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("pg");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fjob-openings%2Froute&page=%2Fapi%2Fjob-openings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjob-openings%2Froute.ts&appDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdarsh%5COneDrive%5CDesktop%5CAssignment%5CJob%20Manager%20Admin%20Panel%5Cjob-management-admin&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();