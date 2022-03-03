Add the following key/value to local.settings.json:
```
"SERVICE_BUS_CONNECTION_STRING": "[connection string]",
```
You obtain the connection string from Azure Portal. Don't inclue `EntityPath=...` https://stackoverflow.com/questions/55899118/how-to-send-a-message-to-azure-service-bus-event-to-event-hub-bus-from-single