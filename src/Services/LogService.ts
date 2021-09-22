// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
// import { createBrowserHistory } from "history";
// import { toast } from "react-toastify";
// import { messageDialogError } from "lib/utilityMessageDialogFunctions";
// const history = createBrowserHistory();
// const { NODE_ENV: entorno } = process.env;

// const SentryService = ({ dns, normalizeDepth }) => {
//   try {
//     Sentry.init({
//       dsn: dns,
//       integrations: [
//         new Integrations.BrowserTracing({
//           routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
//         }),
//       ],
//       environment: entorno,

//       // Set tracesSampleRate to 1.0 to capture 100%
//       // of transactions for performance monitoring.
//       // We recommend adjusting this value in production
//       tracesSampleRate: 1.0,
//       normalizeDepth: normalizeDepth,
//     });

//     const CaptureSentryExceptionError = (e, level) => {
//       // messageDialogError({ text: "Error" + e?.response?.data || e.message });
//       Sentry.captureException(e, level);
//     };

//     const CaptureSentryMessageError = (e, level) => {
//       // messageDialogError({ text: "Error" + e?.response?.data || e.message });
//       Sentry.captureMessage(e, level);
//     };

//     return {
//       Sentry,
//       CaptureSentryExceptionError,
//       CaptureSentryMessageError,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default SentryService;


export default {};