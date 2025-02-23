## CORS
Cors is a security feature implemented by your browser that stops you from sending requests to URLs outside the current website you're on.

It will block these requests unless the external server allows incoming requests on that URL from sites sites.

## SSR, CSR, Hydration
### CSR
In Client-Side-Rendering, the HTML and Javascript is sent to the client, which then has to create the DOM and populate it with JS.\
### SSR
In Server-Side-Rendering, the DOM is built on the server, which is then sent to the browser, which then has to populate it with JS. But much less work is required, meaning that the site will load faster/be reactive sooner.
### Hydration
The JavaScript code interacts with the DOM (Document Object Model) to populate the placeholders with dynamic data fetched from the server or other sources. This process is called hydration, as it essentially "hydrates" the static HTML with interactive elements.