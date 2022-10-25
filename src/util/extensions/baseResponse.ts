import { Response } from "express";
import { PaginateResult } from "mongoose";
import HttpError from "../errors/httpError";

type TResponseData = {
  requestID: string;
  message: string;
  statusCode: number;
  error?: HttpError;
  errorDetails?: string;
};

class BaseResponseBase {
  public requestID: string = "";
  public message: string = "";
  public statusCode: number = 0;
  public error?: HttpError;
  public errorDetails?: string;
}

export class BaseResponse<TData> extends BaseResponseBase {
  private isSet: boolean = false;

  public data?: TData;

  public setResponse(responseData: TResponseData, body?: TData) {
    this.requestID = responseData.requestID;
    this.message = responseData.message;
    this.statusCode = responseData.statusCode;
    this.error = responseData.error;
    this.errorDetails = responseData.errorDetails;
    this.data = body;

    this.isSet = true;
  }

  public sendResponse(response: Response) {
    if (!this.isSet) {
      throw new Error("Attempting to send a blank response");
    }

    response
      .status(this.statusCode)
      .json({
        requestID: this.requestID,
        statusCode: this.statusCode,
        message: this.message,
        error: this.error,
        data: this.data,
        errorDetails: this.errorDetails,
      })
      .send()
      .end();

    return response;
  }
}

export class BaseResponsePaged<TData> extends BaseResponseBase {
  private isSet: boolean = false;

  public pageIndex: number = 0;
  public pageSize: number = 0;
  public totalPages: number = 0;
  public totalItems: number = 0;
  public data: TData[] = [] as TData[];

  public setResponse(
    responseData: TResponseData,
    paginatedResult: PaginateResult<TData>
  ) {
    this.requestID = responseData.requestID;
    this.message = responseData.message;
    this.statusCode = responseData.statusCode;
    this.error = responseData.error;
    this.errorDetails = responseData.errorDetails;

    this.pageIndex = paginatedResult.page || 0;
    this.pageSize = paginatedResult.limit;
    this.totalPages = paginatedResult.totalPages;
    this.totalItems = paginatedResult.totalDocs;
    this.data = paginatedResult.docs;

    this.isSet = true;
  }

  public sendResponse(response: Response) {
    if (!this.isSet) {
      throw new Error("Attempting to send a blank response");
    }

    response
      .status(this.statusCode)
      .json({
        requestID: this.requestID,
        statusCode: this.statusCode,
        message: this.message,
        error: this.error,
        data: this.data,
        errorDetails: this.errorDetails,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        totalPages: this.totalPages,
        totalItems: this.totalItems,
      })
      .send()
      .end();

    return response;
  }
}
