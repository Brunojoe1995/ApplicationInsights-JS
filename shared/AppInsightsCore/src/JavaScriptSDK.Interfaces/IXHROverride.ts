import { IPromise } from "@nevware21/ts-async";

// /** IPayloadData describes interface of payload sent via POST channel */
// export interface IPayloadData {
//     urlString: string;
//     data: Uint8Array | string;
//     headers?: { [name: string]: string };
//     timeout?: number;
//     disableXhrSync?: boolean;
//     disableFetchKeepAlive?: boolean;
// }

// /**
// * SendPOSTFunction type defines how an HTTP POST request is sent to an ingestion server
// * @param payload - The payload object that should be sent, contains the url, bytes/string and headers for the request
// * @param oncomplete - The function to call once the request has completed whether a success, failure or timeout
// * @param sync - A boolean flag indicating whether the request should be sent as a synchronous request.
// */
//export type SendPOSTFunction = (payload: IPayloadData, oncomplete: (status: number, headers: { [headerName: string]: string; }, response?: string) => void, sync?: boolean) => void;



// /**
// * The IXHROverride interface overrides the way HTTP requests are sent.
// */
// export interface IXHROverride {

//    sendPOST: SenderFunction;
// }


/**
* SendPOSTFunction type defines how an HTTP POST request is sent to an ingestion server
* @param payload - The payload object that should be sent, contains the url, bytes/string and headers for the request
* @param sync - A boolean flag indicating whether the request should be sent as a synchronous request.
*/
export type SenderFunction = (payload: string[], isAsync: boolean) => void | IPromise<boolean>;

/**
* The IXHROverride interface overrides the way HTTP requests are sent.
*/
export interface ISenderOverride {

    sendPOST: SenderFunction;
 }
 

