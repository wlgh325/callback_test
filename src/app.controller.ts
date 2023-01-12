import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";

@Controller("callback")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postCallbackTest(@Body() body, @Req() req: Request) {
    return { msgId: "aaa-bbbb-ccc-eee-ddd", data: body };
  }
}
