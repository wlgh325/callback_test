import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("callback")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postCallbackTest(@Body() body) {
    return { msgId: "aaa-bbbb-ccc-eee-ddd", data: body };
  }

  @Post("400")
  async postCallback400() {
    throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
  }

  @Post("401")
  async postCallback401() {
    throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
  }

  @Post("500")
  async postCallback500() {
    throw new HttpException(
      "Internal Server Error",
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
