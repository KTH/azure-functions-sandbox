# Azure Functions Sandbox
Use this project to set up and learn how to work with Azure Functions.

## Install Azure Functions for Local Development
Install the Azure Functions Core Tools:
https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local

NOTE: Make sure you have Node >=14

## Create an Azure Function Project
**Using VS Code** (You need to install the Azure Functions extension):
https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript

To start application and allow debugging in VS Code go to debug pane and select:
- Run Script: start

NOTE: If you use `nvm` and the default Node version on your system isn't >=14 this will fail.
Make sure you select Node 14 or higher as your default before launching VS Code.

**Using CLI**:
https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-typescript

## Configuring the TestLisAdapter Function
Add the following key/value to local.settings.json:
```
"SERVICE_BUS_CONNECTION_STRING": "[connection string]",
```
You obtain the connection string from Azure Portal. Don't inclue `EntityPath=...` https://stackoverflow.com/questions/55899118/how-to-send-a-message-to-azure-service-bus-event-to-event-hub-bus-from-single