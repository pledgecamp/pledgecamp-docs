# The Oracle

The Oracle is a service that sits behind the main Pledgecamp API and is responsible for the live tracking of projects and their progress on the blockchain in a neutral manner. Main features of the Oracle include:

* Launching projects and handling ongoing work with the blockchain
* Providing an API to fetch up to date state information on a given project
* Providing an extra layer to both sanitize and audit contract operations

The Oracle is built around the following libraries:

* [Gin Gonic](https://gin-gonic.com/) - A fast, lightweight web framework for writing the APIs communicating with the nodeserver and backend
* [imroc](https://github.com/imroc/req) - Golang http request library used to communicate with the nodeserver and backend
* [upper.io](https://upper.io/db.v3/) - Data access layer for Go to create and manipulate data in the database
* [AfterFunc](https://golang.org/pkg/time/#AfterFunc) - Used for running operations on the contracts as milestone moments
* [PostgreSQL](https://www.postgresql.org/) - Data persistence layer
