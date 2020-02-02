clean architecture divides an application into separate concerns.

each concern has the following:
* persistence layer
* logic layer
* internal/private api
* one or more public apis and associated UX layers

eg concerns in an ordering system:
* catalog of items, pricing data, stock on hand
* order creation
* order fulfillment
* order delivery

Catalog of items, pricing data, stock on hand:
* all data is persisted in a db
* logic for CRUD, adjust pricing, pricing history, stock level changes
* internal api provides low level functionality to perform every required task and access and transform all internal data
* public api only leaks information and functionality relevent to the outside world
* there will be a UI for priveledged users

Order creation
* all data is persisted in a db
* logic for CRUD, adding items based on stock levels, submitting orders
* internal api provides low level functionality to perform every required task and access and transform all internal data
* public api only leaks information and functionality relevent to the outside world
* UI for users that can submit orders

Order fulfillment
* all data is persisted in a db
* logic for CRUD
