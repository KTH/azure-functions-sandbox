# Azure Functions Sandbox
Use this project to set up and learn how to work with Azure Functions.

## Install Azure Functions for Local Development
Install the Azure Functions Core Tools:
https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local

## Create an Azure Function Project
Using VS Code (You need to install the Azure Functions extension):
https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript

Using commandline:
https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript

## Configuring the TestLisAdapter Function
Add the following key/value to local.settings.json:
```
"SERVICE_BUS_CONNECTION_STRING": "[connection string]",
```
You obtain the connection string from Azure Portal. Don't inclue `EntityPath=...` https://stackoverflow.com/questions/55899118/how-to-send-a-message-to-azure-service-bus-event-to-event-hub-bus-from-single