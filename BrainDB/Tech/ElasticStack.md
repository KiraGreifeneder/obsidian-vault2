At the time of writing, it is planned that I will be using Elastic Stack to implement logging for one of the internal tools.

## Log Monitoring
The ELK Stack is a logging platform, featuring Elastic Agent, which is supposed to make the deployment of log monitoring easy.
It should provide and unify application and infrastructure data for context.
In essence, log files coming from your servers get structured and analyzed.

In general, log monitoring follows 3 steps:
### Ingesting
Log files are streamed form the system/server to ElasticSearch using a standalone Elastic Agent. 
The Agent and the data streams can be configured using the `elastic-agent.yml` file.

_FileBeat_ can be used to forward and centralize the logging data. 
It is installed as a service on the servers.
It will monitor the log files and locations specified, and can forward them to another platform for indexing.
### Parsing
In this step, logs are organized into meaningful fields to filter and analyze the data.
_ElasticSearch_ is for storing and searching the data.

### Filtering
Pertains to the actual filtering and finding specific information within the log data to gain insights.
_Kibana_ is used to visualize and manage data.s

