Summary
=======


The `120__MarketPrice__Subscription__Lambda__FieldPrimitive` is an example of an OMM Consumer
application written to the EOA Domain Layer library. It demonstrates the basic usage
of the EOA Doamin Layer library in accessing and parsing of OMM MarketPrice data
received either from Reuters Data Feed Direct (RDF-D), directly from an OMM Provider
application, or from a Thomson Reuters Advanced Distribution Server.

The `120__MarketPrice__Subscription__Lambda__FieldPrimitive` illustrates how to open a single
streaming MarketPrice item. Application passes a lambda expression used to process data of the item.

Detailed Description
====================

The `120__MarketPrice__Subscription__Lambda__FieldPrimitive` implements the following high-level
steps:

+ opens up a MarketPrice DIRECT_FEED service
+ connects to a server at localhost:14002 (by default)
+ requests a MarketPrice streaming item from the service and passes a lambda expression
+ when a network event occurs, EOA calls the lambda expression to process the received information
+ lambda expressions are executed on the API thread of control
+ Exits after 60 seconds

**Note**: If needed, these and other details may be modified to fit your local environment. For details on standard configuration, refer to the EMA library ReadMe.txt file and the EMA Configuration Guide.