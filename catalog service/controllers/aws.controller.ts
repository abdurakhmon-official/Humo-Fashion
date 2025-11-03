import { S3Service } from "@/services/s3.service";
import { BodyParams, Get, PathParams, Post, QueryParams, Res } from "@tsed/common";
import { Controller, Inject } from "@tsed/di";
import { Response } from "express";

@Controller('/s3')
export class AwsController {
    @Inject() 
    private s3Service!: S3Service

    @Get('/file/*key')
    async sign(
        @PathParams('key') allParams: string[],
        @QueryParams('attachment') attachment: boolean,
        @QueryParams('fileName') fileName: string,
        @Res() res: Response
    ) {
        const url = await this.s3Service.sign(allParams, fileName, attachment)
        res.redirect(url)
    }

    @Get('/generate-policy')
    async generatePolicy(
        @QueryParams('folder') folder: string,
        @QueryParams('contentType') contentType: string,
        @QueryParams('filename') filename: string
    ) {
        return await this.s3Service.generatePolicy(folder, contentType, filename)
    }

    @Post('/:folder/upload')
    async upload(@PathParams('folder') folder: string, @BodyParams('UploadFiles') file: any) {
        return await this.s3Service.upload(folder, file)
    }
}